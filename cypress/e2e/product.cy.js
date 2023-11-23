describe('Product', () => {
  context('user should be able to', () => {

    beforeEach(() => {
      cy.visitPage('/');
    });

    it('select Smart Orchestration from Product Menu then select Visual Review', () => {
      cy.get('[data-cy="dropdown-product"]').should("be.visible").trigger('mouseover');
      cy.get('a[href="/cloud#visual_reviews"]').first().click();
      cy.url().should("contain", "visual_reviews");
    })

    it('select Smart Orchestration from Product Menu then scroll down to Test Analytics and validate green circle is around Test Analytics', () => {
      cy.get('[data-cy="dropdown-product"]').should("be.visible").trigger('mouseover');
      cy.get('a[href="/cloud#smart_orchestration"]').first().click();
      cy.url({timeout:30000}).should("contain", "smart_orchestration");

      cy.get('[id="test_analytics"]').scrollIntoView().contains('Test Suite Analytics').scrollIntoView();
      cy.url({timeout:30000}).should("contain", "test_analytics");
      
      //Validation: green circle is around Test Analytics
      cy.get('.hidden > .border-jade-200').should('be.visible');
    });
  });
});