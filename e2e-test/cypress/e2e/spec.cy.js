describe('empty spec', () => {
  it('passes', () => {
    cy.visit('./homepage.html')

    cy.contains('Bulbasaur')
  })
})