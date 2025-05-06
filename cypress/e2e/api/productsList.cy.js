describe('API Test – Product List', () => {
    it('should return a list of products', () => {
      cy.request('GET', 'https://automationexercise.com/api/productsList')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.include('products'); // simple string check
        });
    });
  });
  