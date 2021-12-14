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

  it("tests the click on album under the Christmas tab", () => {
    cy.visit("/");

    // Finds the first Christmas album and clicks it.
    cy.get(
      "#catChristmas > :nth-child(1) > .cell-cover > .img-shadow-box"
    ).click({ force: true });
  });

  it("tests the click on album under the Rock tab", () => {
    cy.visit("/");
    cy.get("#catRock > :nth-child(1) > .cell-cover > .img-shadow-box").click({
      force: true,
    });
  });
  it("tests the nav bar at the top", () => {
    cy.visit("/");
    cy.get("#hamburgerButton > .fa").click();
  });
});
