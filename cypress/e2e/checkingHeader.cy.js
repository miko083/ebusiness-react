describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.cart-link').click()
  
      cy.url().should('include', '/cart')
      cy.get('.logo').click()

      cy.url().should('include', '/')
    })
  })