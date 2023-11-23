/*
  BONUS TEST: SETTING THE VIEWPORT TO MOBILE
*/


describe('Homepage', () => {
  context('user should be able to', () => {

    before(() => {
      cy.viewport('iphone-6');
    });

    beforeEach(() => {
      cy.visitPage('/');
    });

    it('navigate to homepage and scroll down to Loved by OSS AND assert the weekly downloads number is visible', () => {
      cy.contains('Loved by OSS').scrollIntoView();
      cy.contains('Weekly downloads').should('be.visible');
      cy.contains('5M+').should('be.visible');
    });
  });
});