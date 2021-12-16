// Under construction
describe("The Details page", () => {
  it("clicks the buy button, opens the shopping cart and goes to the checkout.", () => {
    cy.visit("/html/details.html");

    cy.get("#buybutton").click();

    cy.get("#shopping-cart").click();

    cy.get(".details").should("have.class", "modal-open");

    cy.get(".btn").click();
  });
  it("should the quantity of the albums", () => {
    cy.visit("/html/details.html");
    cy.get("#shopping-cart").click();

    cy.get(".details").should("have.class", "modal-open");
  });
});
