describe('API Test – Verify Login', () => {
    it('should verify login using valid credentials', () => {
      cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/verifyLogin',
        form: true,
        body: {
          email: '96malikdavis@gmail.com',
          password: 'malikdavisqa'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include('User exists!');
      });
    });
  });
  