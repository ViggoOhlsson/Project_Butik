// Under construction
describe("The Home Page", () => {
  it("should send the user to the first form and then back", () => {
    cy.visit("/html/checkout.html");

    cy.get("#firstNext").click();

    cy.get("#firstPrev").click();
  });
  it("should send the users to the last form and then back", () => {
    cy.visit("/html/checkout.html");

    cy.get("#firstNext").click();
    cy.get("#secondNext").click();
    cy.get("#lastPrev").click();
  });
  it("should press on the submit button and go to thankyou.html", () => {
    cy.visit("/html/checkout.html");
    cy.get("#firstNext").click();
    cy.get("#secondNext").click();
    cy.get("#submit").click();
  });
});
