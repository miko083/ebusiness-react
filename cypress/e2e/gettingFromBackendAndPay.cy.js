describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.product-add-button').first().click()
      cy.url().should('include', '/')
      
      cy.visit('http://localhost:3000/cart')
      cy.url().should('include', '/cart')

      cy.get('.cart-add-button').first().click()

      cy.get('.clear-cart-button').first().click()
      cy.get('.get-saved-button').first().click()

      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 1"
      )
      
      cy.get('.save-payments-button').first().click()
      cy.url().should('include', '/payments')

      cy.get('.save-payments-button').first().click()
      cy.get('.cart-items-empty').should(
        "have.text",
        " No items added"
      )
    })
  })