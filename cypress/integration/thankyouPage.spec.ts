describe("The Thank you page", () => {
  it("should load and send user back to home page.", () => {
    cy.visit("/html/thankyou.html");
  });
});
