describe('Add Product to Cart', () => {
    it('should add a product to the cart successfully', () => {
      cy.visit('https://automationexercise.com');
      cy.contains('Signup / Login').click();
  
      // Login with existing user
      cy.get('input[data-qa="login-email"]').type('96malikdavis@gmail.com');
      cy.get('input[data-qa="login-password"]').type('malikdavisqa');
      cy.get('button[data-qa="login-button"]').click();
  
      // Go to Products page
      cy.contains('Products').click();
  
      // Wait for products to load
      cy.wait(2000); // slight wait to ensure elements appear
  
      // Hover over and add first product to cart
      cy.get('.product-overlay').first().invoke('show');
      cy.contains('Add to cart').first().click();
  
      // Click View Cart
      cy.contains('View Cart').click();
  
      // Validate product is in cart
      cy.get('.cart_description').should('be.visible');
    });
  });
  