import { loginElements } from './login.elements.js';

export class LoginPage {

    static insertUsername(username) {
        loginElements.textboxes.username().type(username); // Usar el parámetro pasado a la función
    }

    static insertPassword(password) {
        loginElements.textboxes.password().type(password); // Usar el parámetro pasado a la función
    }

    static clickOnLoginButton() {
        loginElements.buttons.login().click();
    }

    static login(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnLoginButton();
    }
}


