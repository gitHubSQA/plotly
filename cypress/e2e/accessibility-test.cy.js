describe('Accessibility Testing', () => {
  context('Homepage', () => {

    beforeEach(() => {
      cy.visitPage('/');
      cy.injectAxe()
    });

    it('Has no detectable a11y violations on load (filtering to only include critical impact violations', () => {
      cy.checkA11y(null, {
        includedImpacts: ['critical']
      })
    });
  });

  context('About Us', () => {
    
    beforeEach(() => {
      cy.visitPage('/about-us');
      cy.injectAxe()
    });

    it('Has no detectable a11y violations on load (with custom parameters)', () => {
      cy.checkA11y('#dropdownProduct', {
        runOnly: {
          type: 'tag',
          values: ['wcag2a']
        }
      })
    });
  });
});