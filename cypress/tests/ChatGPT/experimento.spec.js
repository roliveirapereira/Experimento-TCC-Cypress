describe("Experimento voluntario", () => {
  describe("Caso teste 1", () => {
    it("Dynamic Loading", () => {
      cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");
      cy.get("#start button").click();
      cy.wait(5000)
      cy.get("#finish h4").should("be.visible");
      cy.get("#finish h4").should("have.text", "Hello World!");
    });
  });
  
  describe("Caso teste 2", () => {
    it("Form Authentication", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get("button[type='submit']").click();
      cy.get("#flash.success").should("be.visible");
      cy.contains("You logged into a secure area!").should("be.visible");
    });
  });
  
  context("Caso teste 3", () => {
    it.only("Download File", () => {
      cy.visit("https://the-internet.herokuapp.com/download");
      cy.window()
        .document()
        .then(function (doc) {
          doc.addEventListener("click", () => {
            setTimeout(function () {
              doc.location.reload();
            }, 300);
          });
          cy.get('.example [href]').first().invoke("text").then((text) => {
            cy.get('.example [href]').first().click();
            cy.readFile(`cypress/downloads/${text}`);
          })
        });
    });
  });

  context("Caso teste 4", () => {
    it("JavaScript Alerts", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains("JavaScript Alerts").click();
        cy.contains("Click for JS Confirm").click();
        cy.on("window:confirm", (str) => true);
        cy.get("#result").should("contain", "You clicked: Ok");
    });
  });
});
