describe('Install Modal', () => {
  context('user should be able to', () => {

    before(() => {
      cy.viewport('macbook-15');
    });

    beforeEach(() => {
      cy.visitPage('/');
    });

    it('click on Install and then on npm install cypress', () => {
      cy.get('[data-cy="header-install"]').should('be.visible').click();
      cy.get('[data-cy="modal-install-copy"]').click();

      // Works well with Electron
      // cy.window().its('navigator.clipboard').invoke('readText').should('equal', 'npm install cypress --save-dev');

      cy.window().then((appWin) => {
        appWin.navigator.clipboard.readText().then((copiedText) => {
          expect(copiedText).to.eq('npm install cypress --save-dev');
        });
      });
    });
  });
});
