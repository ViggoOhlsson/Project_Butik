describe("The Home Page", () => {
  it("should open the top navigation bar and click on all the links ", () => {
    cy.visit("/");
    // Finds the top nav-bar and clicks it.
    cy.get("#hamburgerButton > .fa").click({ force: true });
    cy.get("#dropDown > :nth-child(1)").click({ force: true });
    cy.get("#dropDown > :nth-child(2)").click({ force: true });
    // cy.get("#dropDown > :nth-child(3)").click({ force: true });
    // cy.get("#dropDown > :nth-child(4)").click({ force: true });
  });

  it("should click on every category", () => {
    // Finds the first category.
    cy.visit("/");
    cy.get("#nav > a ").eq(0).click({ force: true });

    cy.visit("/");
    // Finds the second category.
    cy.get("#nav > a").eq(1).click({ force: true });

    // cy.visit("/");
    // // Finds the third category.
    // cy.get("#nav > a").eq(2).click({ force: true });

    // cy.visit("/");
    // // Finds the fourth category.
    // cy.get("#nav > a").eq(3).click({ force: true });
  });

  it("should open the detail site for evey category", () => {
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

    // // Pop category
    // cy.visit("/");
    // cy.get("#catPop > :nth-child(1) > .cell-cover > .img-shadow-box").click({
    //   force: true,
    // });

    // // Jazz category
    // cy.visit("/");
    // cy.get("#catJazz > :nth-child(1) > .cell-cover > .img-shadow-box").click({
    //   force: true,
    // });
  });

  it("should open every category's 'See more' button", () => {
    // More christmas
    cy.visit("/");
    cy.get("#moreChristmas").click({ force: true });

    // More rock
    cy.visit("/");
    cy.get("#moreRock").click({ force: true });

    // // More pop
    // cy.visit("/");
    // cy.get("#morePop").click({ force: true });

    // // More jazz
    // cy.visit("/");
    // cy.get("#moreJazz").click({ force: true });
  });
});
