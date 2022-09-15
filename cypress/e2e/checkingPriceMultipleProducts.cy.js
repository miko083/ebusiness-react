describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.product-add-button').first().click()
      cy.get('.product-add-button').eq(1).click()
      cy.url().should('include', '/')
      
      cy.visit('http://localhost:3000/cart')
      cy.url().should('include', '/cart')

      cy.get('.cart-add-button').first().click()

      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 2"
      )

      cy.get('.cart-add-button').first().click()
      
      cy.get('.save-payments-button').first().click()
      cy.url().should('include', '/payments')

      cy.get('.price').first().should(
        "have.text",
        " Total price: 10096 zl"
      // cy.get('.quantity').first().contains('Quantity: 1')
      )
    })
  })