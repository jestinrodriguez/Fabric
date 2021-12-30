/// <reference types="cypress" />

describe("home dashboard", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // should only contain default text (Please load some data....)
  it("should contain no loaded data", () => {
    cy.contains("Please load some data....");
  });

  // clicking the button should show data from the APIs
  it("should get data from api and display it", () => {
    cy.get("[data-cy=btn-1]").click();
  });

  // it("should get data from api2 and display it", () => {
  //   cy.get("[data-cy=btn-2]").click();
  // });

  // it("should get data from api3 and display it", () => {
  //   cy.get("[data-cy=btn-3]").click();
  // });

  // modal pop-up api1
  it("should display modal when current thumbnail is clicked", () => {
    cy.get("[data-cy='btn-1']").click();
    cy.get("[data-cy='The Matrix Reloaded']").click();
    cy.contains("Matrix").should("be.visible");
  });

  //testing close button of modal
  it("should close modal when close button is clicked", () => {
    cy.get("[data-cy='btn-1']").click();
    cy.get("[data-cy='The Matrix Reloaded']").click();
    cy.get("[data-cy='modal-close']").click();
  });

  // //testing closing when clicked outside of modal
  // it("should close modal when outside of modal is clicked", () => {
  //   cy.get("[data-cy='btn-1']").click();
  //   cy.get("[data-cy='The Matrix Reloaded']").click();
  //   cy.get("[data-cy='modal-background']").click();
  // });
});
