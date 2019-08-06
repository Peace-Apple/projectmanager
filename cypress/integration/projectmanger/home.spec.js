describe('Home', () => {
  before(() => {
    cy.visit('http://localhost:3001/');
  });
  it('should visit the home page', () => {
    cy.visit('http://localhost:3001/');
    cy.get(':nth-child(1) > a').contains('Home');
    cy.get(':nth-child(2) > a').contains('User');
    cy.get('h3').contains('Welcome to Project Manager');
  });
});
