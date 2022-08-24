import React from "react"
import "./Cart.css"
import {useNavigate} from 'react-router-dom'

const Cart = (props) => {
    const cartItems = props.cartItems
    console.log(cartItems)
    const navigate = useNavigate();
    return (
      <div className="cart-items">
        
        {cartItems.length === 0 && (
            <div className="cart-items-empty"> No items added</div>
        )}

        {cartItems.map((cartItem) => (
                <div className="card">
                    <div>{cartItem.product.name}</div>
                    <button className="cart-add-button" onClick={() => props.handleAddProduct(cartItem.product)}>+</button>
                    <button className="cart-remove-button" onClick={() => props.handleRemoveProduct(cartItem.product)}>-</button>
                    <div>Quantity: {cartItem.quantity}</div>
                </div>
            ))}

        {cartItems.length >= 1 && (<div>
            <button className="clear-cart-button" onClick={() => props.handleCartClearance()}>Clear cart</button>
            <br></br>
            <button className="save-payments-button" onClick={() =>{props.submitCart(); navigate("/payments")}}>Save and go to payments</button>
            </div>
        )}
      </div>
      
    )
}

export default Cart;
  