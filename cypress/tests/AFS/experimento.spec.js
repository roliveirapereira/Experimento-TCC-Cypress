describe('Experimento voluntario', () => {
  context('Caso teste 1', () => {
    it('Dynamic Loading', () => {
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get('li > a').contains('Dynamic Loading').click();
      cy.get('.example > a')
        .contains('Example 1: Element on page that is hidden')
        .click();
      cy.get('#start > button').click();
      cy.get('#finish')
        .wait(6000)
        .should('be.visible')
        .should('include.text', 'Hello World!');
    });
  });

  context('Caso teste 2', () => {
    it('Form Authentication', () => {
      cy.visit('https://the-internet.herokuapp.com/');
    });
  });

  context('Caso teste 3', () => {
    it('Redirect Link', () => {
      cy.visit('https://the-internet.herokuapp.com/');
    });
  });

  context('Caso teste 4', () => {
    it('JavaScript Alerts', () => {
      cy.visit('https://the-internet.herokuapp.com/');
    });
  });
});
