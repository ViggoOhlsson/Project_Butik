// Under construction
describe("The Home Page", () => {
  it("It loads", () => {
    cy.visit("/html/details.html");

    cy.get("#buybutton").click();

    cy.get("#shopping-cart").should("contain.value", "1");
  });
  it("clicks the buy button and adds item to cart", () => {
    cy.visit("/html/details.html");
    cy.get("#buybutton").click();
  });
});
