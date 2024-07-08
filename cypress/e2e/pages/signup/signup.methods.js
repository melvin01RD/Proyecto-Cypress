import { CommonPageMethods } from "../commonPage/common-page.methods.js";
import SignupElements from "./signup.elements.js";

export class SignupMethods {
  static InsertUsername(username) {
    cy.get(SignupElements.textboxes.username).type(username);
  }

  static InsertPassword(password) {
    cy.get(SignupElements.textboxes.password).type(password);
  }

  static clickOnSignupButton() {
    cy.get(SignupElements.buttons.signup).click();
  }

  static Signup(username, password) {
    this.InsertUsername(username);
    this.InsertPassword(password);
    this.clickOnSignupButton();
  }

  static verifySignUpSuccessful() {
    CommonPageMethods.verifyAlert('Sign up successful');
  }

  static verifyThatUserAlreadyExists() {
    CommonPageMethods.verifyAlert('This user already exists');
  }
}



