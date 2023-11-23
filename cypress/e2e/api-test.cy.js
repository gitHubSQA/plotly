describe('API TESTS', () => {
  context("Cypress ENDPOINTS", () => {
    it("GET: asssert status code of Homepage", () => {
      cy.request("GET", "/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it("GET: assert status code of About-Us", () => {
      cy.request("GET", "/about-us").then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it("GET: assert status code of Pricing", () => {
      cy.request("GET", "/pricing").then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it("POST: assert status code after Sign Up ", () => {
      var _ = require('lodash');
      const EMAIL = _.random(1,100000);

      cy.request('POST', 'https://authenticate.cypress.io/login/local-register?source=dashboard', { email: `testemail${EMAIL}@email.com`, password: "te$t123$" })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});