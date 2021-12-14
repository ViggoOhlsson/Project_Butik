describe("The Home Page", () => {
  it("tests the Christmas category", () => {
    cy.visit("/");

    cy.get("#nav > a:first").click({ force: true });
  });

  it("tests the Christmas Rock", () => {
    cy.visit("/");

    cy.get("#nav > a").eq(1).click({ force: true });
  });
});
