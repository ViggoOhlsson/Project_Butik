describe("The Home Page", () => {
  it("It loads", () => {
    cy.visit("/html/details.html");

    cy.get("#buybutton").click();

    cy.get("#shopping-cart").should("contain.value", "1");
  });
});
