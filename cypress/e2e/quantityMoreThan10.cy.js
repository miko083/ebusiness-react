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

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 2"
      )

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 3"
      )

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 4"
      )

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 5"
      )

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 6"
      )

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 7"
      )

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 8"
      )

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 9"
      )

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 10"
      )

      cy.get('.cart-add-button').first().click()
      cy.get('.quantity').first().should(
        "have.text",
        "Quantity: 11"
      )
      // cy.get('.quantity').first().contains('Quantity: 1')

    })
  })