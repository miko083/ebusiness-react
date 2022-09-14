describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.product-add-button').first().click()
      cy.url().should('include', '/')
      
      cy.visit('http://localhost:3000/cart')
      cy.url().should('include', '/cart')

      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 1"
      )
      
      cy.get('.save-payments-button').first().click()
      cy.url().should('include', '/payments')

      cy.get('.price').first().should(
        "have.text",
        " Total price: 2499 zl"
      // cy.get('.quantity').first().contains('Quantity: 1')
      )
    })
  })