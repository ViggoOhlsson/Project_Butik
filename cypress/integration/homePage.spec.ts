describe("The Home Page", () => {
  it("should open the top navigation bar.", () => {
    cy.visit("/");
    // Finds the top nav-bar and clicks it.
    cy.get("#hamburgerButton > .fa").click({ force: true });
  });

  it("should open the Christmas category", () => {
    cy.visit("/");
    // Finds the first <a> in the <nav id=nav>.
    // {force: true} forces cypress to open the link.
    cy.get("#nav > a:first").click({ force: true });
  });

  it("should open the Rock category", () => {
    cy.visit("/");
    // eq(1) is the second element, eq(0) is the first.
    cy.get("#nav > a").eq(1).click({ force: true });
  });

  it("should open the details site for the first Christmas item.", () => {
    cy.visit("/");
    // Finds the first Christmas album and clicks it.
    cy.get(
      "#catChristmas > :nth-child(1) > .cell-cover > .img-shadow-box"
    ).click({ force: true });
  });

  it("should open the Christmas category using the 'See more' button", () => {
    cy.visit("/");
    // Finds the moreChristmas id and clicks it.
    cy.get("#moreChristmas").click({ force: true });
  });

  it("should open the details site for the first Rock item.", () => {
    cy.visit("/");
    // Finds the first rock item and clicks it.
    cy.get("#catRock > :nth-child(1) > .cell-cover > .img-shadow-box").click({
      force: true,
    });
  });

  it("should open the Rock category using the 'See more' button.", () => {
    cy.visit("/");
    // Finds the moreRock id and clicks it.
    cy.get("#moreRock").click({ force: true });
  });
});
