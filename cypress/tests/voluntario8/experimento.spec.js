describe("Experimento voluntario", () => {
  context("Caso teste 1", () => {
    it("Dynamic Loading", () => {
      cy.visit("https://the-internet.herokuapp.com/");
    });
  });
  context("Caso teste 2", () => {
    it("Form Authentication", () => {
      cy.visit("https://the-internet.herokuapp.com/");
    });
  });
  context("Caso teste 3", () => {
    it("Redirect Link", () => {
      cy.visit("https://the-internet.herokuapp.com/");
    });
  });
  context("Caso teste 4", () => {
    it("JavaScript Alerts", () => {
      cy.visit("https://the-internet.herokuapp.com/");
    });
  });
});
