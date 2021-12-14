describe("The Home Page", () => {
  it("It loads", () => {
    cy.visit("/html/checkout.html");

    // cy.get('[type="submit"]').click();
    // cy.get("input:invalid").should("have.length", 1);
    // cy.get("#name").then(($input) => {
    //   expect($input[0].validationMessage).to.eq("Please fill out this field.");
    // });
  });
});
