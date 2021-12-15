describe("The Home Page", () => {
  it("should load and send user back to home page.", () => {
    cy.visit("/html/thankyou.html");
  });
});
