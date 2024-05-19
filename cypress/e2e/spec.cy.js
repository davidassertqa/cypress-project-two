import '../../cypress-shared/sharedCustomCommand'
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.printCommandVersion()
  })
})