import SignupElements from "./signup.elements.js";

export class SignupMethods {
    static InsertUsername(username) {
        SignupElements.textboxes.username().invoke('val', username);
    }

    static InsertPassword(password) {
        SignupElements.textboxes.password().invoke('val', password);
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
