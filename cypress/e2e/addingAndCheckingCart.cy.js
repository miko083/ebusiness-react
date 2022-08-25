describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.home-link').click()

    cy.url().should('include', '/')
  })
})