// Under construction
describe("The Details page", () => {
  it("clicks the buy button, opens the shopping cart and goes to the checkout.", () => {
    cy.visit("/");

    cy.get(
      "#catChristmas > :nth-child(1) > .cell-cover > .img-shadow-box"
    ).click({ force: true });

    cy.get("#buyButton").click();

    cy.get("#shopping-cart").click({ force: true });

    cy.get("#cartModal").should("be.visible");

    cy.get("#toCheckout").click({ force: true });
  });
  it("should change the quantity of the albums", () => {
    cy.visit("/");

    cy.get(
      "#catChristmas > :nth-child(1) > .cell-cover > .img-shadow-box"
    ).click({ force: true });

    cy.get("#buyButton").click();

    cy.get("#shopping-cart").click({ force: true });

    cy.get("#cartModal").should("be.visible");

    cy.get(".item-amount > .fa-plus").click({ force: true });

    cy.get(".fa-minus").click({ force: true });

    cy.get(".fa-trash").click({ force: true });

    cy.get("#shopping-cart").click({ force: true });

    cy.get("#buyButton").click();

    cy.get("#shopping-cart").click({ force: true });

    cy.get("#cartModal").should("be.visible");

    cy.get("#toCheckout").click({ force: true });
  });
  // it("should click the cart icon to add to cart and then add another item.", () => {
  //   cy.visit("/");

  //   cy.get("#catChristmas > :nth-child(1) > .cell-cover > .fa")
  //     .trigger("mouseover", { force: true })
  //     .click({ force: true });

  //   cy.visit("/");

  //   cy.get("#catChristmas > :nth-child(2) > .cell-cover > .fa")
  //     .trigger("mouseover", { force: true })
  //     .click({ force: true });
  // });
});
