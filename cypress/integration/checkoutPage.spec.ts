// Under construction
describe("The Home Page", () => {
  it("should send the user to the first form and then back", () => {
    cy.visit("/html/checkout.html");

    cy.get("#firstNext").click();

    cy.get("#firstPrev").click();
  });

  it("should fill every input except one in the first, and last form", () => {
    cy.visit("/html/checkout.html");

    cy.get("#firstNext").click();

    cy.get("#fnamn").click({ force: true }).type("John");
    cy.get("#enamn").click({ force: true }).type("Doe");
    // It will not fill the address input
    //cy.get("#adress").click({ force: true }).type("example 12");
    cy.get("#postnr").click({ force: true }).type("12354");
    cy.get("#stad").click({ force: true }).type("exStad");
    cy.get("#epost").click({ force: true }).type("john@doe.com");
    cy.get("#mobil").click({ force: true }).type("0701700272");
    cy.get("#secondNext").click();
  });

  it("should fill every input except one in the last form", () => {
    cy.visit("/html/checkout.html");

    // Click button to go to form.
    cy.get("#firstNext").click();
    cy.get("#fnamn").click({ force: true }).type("John");
    cy.get("#enamn").click({ force: true }).type("Doe");
    cy.get("#adress").click({ force: true }).type("example 12");
    cy.get("#postnr").click({ force: true }).type("12354");
    cy.get("#stad").click({ force: true }).type("exStad");
    cy.get("#epost").click({ force: true }).type("john@doe.com");
    cy.get("#mobil").click({ force: true }).type("0701700272");

    cy.get("#secondNext").click();

    cy.get("#kortnamn").click({ force: true }).type("John");
    // It will not fill the card number input.
    //cy.get("#kortnummer").click({ force: true }).type("1234567812345678");
    cy.get("#utgångsdatum").click({ force: true }).type("01/01");
    cy.get("#cvc").click({ force: true }).type("123");

    cy.get("#submit").click();
  });

  it("should fill out the forms and press submit.", () => {
    cy.visit("/html/checkout.html");

    // Click button to go to form.
    cy.get("#firstNext").click();
    cy.get("#fnamn").click({ force: true }).type("John");
    cy.get("#enamn").click({ force: true }).type("Doe");
    cy.get("#adress").click({ force: true }).type("example 12");
    cy.get("#postnr").click({ force: true }).type("12354");
    cy.get("#stad").click({ force: true }).type("exStad");
    cy.get("#epost").click({ force: true }).type("john@doe.com");
    cy.get("#mobil").click({ force: true }).type("0701700272");

    cy.get("#secondNext").click();

    cy.get("#kortnamn").click({ force: true }).type("John");
    cy.get("#kortnummer").click({ force: true }).type("1234567812345678");
    cy.get("#utgångsdatum").click({ force: true }).type("01/01");
    cy.get("#cvc").click({ force: true }).type("123");

    cy.get("#submit").click();
  });
});
