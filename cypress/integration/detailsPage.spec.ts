// Under construction
describe("The Home Page", () => {
  it("clicks the buy button, opens the shopping cart and goes to the checkout.", () => {
    cy.visit("/html/details.html");

    cy.get("#buybutton").click();

    cy.get("#shopping-cart").click();

    cy.get(".details").should("have.class", "modal-open");

    cy.get(".btn").click();
  });
});
