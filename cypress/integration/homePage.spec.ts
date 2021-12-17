describe("The Home Page", () => {
  it("should test the top navigation bar and click on the links ", () => {
    cy.visit("/");
    // Finds the top nav-bar and clicks it.
    cy.get("#hamburgerButton > .fa").click({ force: true });
    cy.get("#dropDown > :nth-child(1)").click({ force: true });
    //cy.get("#dropDown > :nth-child(2)").click({ force: true });
  });

  it("should test the categories", () => {
    // Finds the first category.
    cy.visit("/");
    cy.get("#nav > a ").eq(0).click({ force: true });

    cy.visit("/");
    // Finds the second category.
    cy.get("#nav > a").eq(1).click({ force: true });
  });

  it("should test the detail site for the categories", () => {
    // Christmas category
    cy.visit("/");
    cy.get(
      "#catChristmas > :nth-child(1) > .cell-cover > .img-shadow-box"
    ).click({ force: true });

    // Rock category
    cy.visit("/");
    cy.get("#catRock > :nth-child(1) > .cell-cover > .img-shadow-box").click({
      force: true,
    });
  });

  it("should test the categories for the 'See more' button", () => {
    // More christmas
    cy.visit("/");
    cy.get("#moreChristmas").click({ force: true });

    // More rock
    cy.visit("/");
    cy.get("#moreRock").click({ force: true });
  });
});
