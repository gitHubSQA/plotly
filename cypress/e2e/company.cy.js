/*
  Page objects are intended to make end-to-end tests readable and easy to maintain. 
  Here's a small sample ofa  test using page objects
*/

import companyPage from "../pages/companyPage";

describe('Company Page', () => {
  context('user should be able to', () => {

    beforeEach(() => {
      cy.visitPage('/');
    });

    it('click on Company and select About Cypress', () => {
      companyPage.hoverHeaderCompany();
      companyPage.clickAboutUs();
      cy.url().should("contain", "about-us");
    });
  });
});