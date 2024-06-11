import LoginElements from './login.elements.js';

export class LoginPage {
    static insertUsername(username) {
        LoginElements.textboxes.username().type(username);
    }

    static insertPassword(password) {
        LoginElements.textboxes.password().type(password);
    }

    static clickOnLoginButton() {
        LoginElements.buttons.login().click();
    }

    static login(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnLoginButton();
    }
}

export default LoginPage;

