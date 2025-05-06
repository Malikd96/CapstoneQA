describe('User Login - Existing Account', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();

    // Fill in existing credentials
    cy.get('input[data-qa="login-email"]').type('96malikdavis@gmail.com');
    cy.get('input[data-qa="login-password"]').type('malikdavisqa');

    // Submit the form
    cy.get('button[data-qa="login-button"]').click();

    // Verify successful login
    cy.get('a').contains('Logged in as Malik Davis').should('be.visible');

  });
});
