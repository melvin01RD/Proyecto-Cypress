import SignupElements from "./signup.elements.js";

export class SignupMethods {
    static InsertUsername(username) {
        SignupElements.textboxes.username().type(username);
    }

    static InsertPassword(password) {
        SignupElements.textboxes.password().type(password);
    }

    static clickOnSignupButton() {
        SignupElements.buttons.signup().click();
    }

    static Signup(username, password) {
        this.InsertUsername(username);
        this.InsertPassword(password);
        this.clickOnSignupButton();
    }

}

export default SignupMethods;
