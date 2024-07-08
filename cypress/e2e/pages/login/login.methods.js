import { logger } from '../../utils/logger';
import LoginElements from './login.elements';

export class LoginMethods {
    static insertUsername(username) {
        LoginElements.textboxes.username().invoke('val',username);
    }

    static insertPassword(password) {
        LoginElements.textboxes.password().invoke('val',password);
    }

    static clickOnLoginButton() {
        LoginElements.buttons.login().click();
    }

    static login(username, password) {
        logger.SubStep('insert username')
        this.insertUsername(username);
        logger.SubStep('insert password')
        this.insertPassword(password);
        logger.SubStep('Click on login button')
        this.clickOnLoginButton();
    }
}

export default LoginMethods;
