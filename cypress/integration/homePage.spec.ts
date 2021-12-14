describe("The Home Page", () => {
  it("tests the Christmas category", () => {
    cy.visit("/");

    // Finds the first <a> in the <nav id=nav>.
    // {force: true} forces cypress to open the link.
    cy.get("#nav > a:first").click({ force: true });
  });

  it("tests the Christmas Rock", () => {
    cy.visit("/");

    // eq(1) is the second element, eq(0) is the first.
    cy.get("#nav > a").eq(1).click({ force: true });
  });

  it("tests the 'See more' button under Christmas", () => {
    cy.visit("/");

    // Finds the moreChristmas id and clicks it.
    cy.get("#moreChristmas").click({ force: true });
  });

  it("tests the 'See more' button under Rock.", () => {
    cy.visit("/");

    // Finds the moreRock id and clicks it.
    cy.get("#moreRock").click({ force: true });
  });

  it("test the cart icon ", () => {
    cy.visit("/");

    cy.get(".fa fa-cart-plus").click;
  });
});
