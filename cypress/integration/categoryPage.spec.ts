describe("The Category Page", () => {
  it("should click on the first album in the Christmas category site.", () => {
    cy.visit("/html/category.html?c=christmas");

    cy.get(":nth-child(1) > .cell-cover > .img-shadow-box").click();
  });

  it("should click on the first album in the Rock category site", () => {
    cy.visit("/html/category.html?c=rock");

    cy.get(":nth-child(1) > .cell-cover > .img-shadow-box").click();
  });

  it("should click on Rock to move to the rock category.", () => {
    cy.visit("/html/category.html?c=christmas");

    cy.get("#nav > a").eq(1).click();
  });

  it("should click on Christmas to move to the christmas category", () => {
    cy.visit("/html/category.html?c=christmas");

    cy.get("#nav > a").eq(0).click();
  });
});
