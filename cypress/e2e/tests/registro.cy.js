import { CommonPageData } from "../pages/commonPage/common-page.data";
import { CommonPageMethods } from "../pages/commonPage/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import LoginMethods from "../pages/login/login.methods";
import SignupMethods from "../pages/signup/signup.methods";
import { logger } from "../utils/logger";

const user = CommonPageMethods.GenerateRandomString();
const password = CommonPageMethods.GenerateRandomString(8);
const existingUser = LoginData.validCredentials.username

describe(CommonPageData.testSuites.registro, () => {
    it('registro de usuario valido', () => {
        logger.StepNumber(1);
        logger.Step('navegar a la pagina de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        logger.StepNumber(2);
        logger.Step('hacer click en "sign up" en la barra de navegacion');
        CommonPageMethods.ClickOnSignUpOption();

        logger.StepNumber(3);
        logger.Step('completar todos los campos obligatorios con informacion valida');
        SignupMethods.Signup.InsertUsername()
        SignupMethods.Signup.password()

        logger.StepNumber(4);
        logger.Step('hacer click en sign up para registrar el usuario');
        SignupMethods.clickOnSignupButton();

        logger.verification('verificar que se redirige al usuario a la pagina de inicio de sesion');
        SignupMethods.verifySignUpSuccessful();

        logger.SubStep('verificar que se muestre el mensaje "sign up successful"');
        CommonPageMethods.verifyAlert("Sign up successful");
    });

    it('Registro de usuario inválido', () => {
        logger.StepNumber(1);
        logger.Step('navegar a la pagina de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        logger.StepNumber(2);
        logger.Step('hacer click en "sign up" en la barra de navegacion');
        CommonPageMethods.ClickOnSignUpOption();

        logger.StepNumber(3);
        logger.Step('Completar algunos campos con información inválida');
        LoginMethods.login(LoginData.validCredentials.username)

        logger.StepNumber(4);
        logger.Step('hacer click en "signUp" para registrar el usuario');
        SignupMethods.clickOnSignupButton();

        logger.verification('verificar que se redirige al usuario a la pagina de inicio de sesion');
        SignupMethods.verifyThatUserAlreadyExists();

        logger.verification('Verificar que se muestra un mensaje de error indicando los campos inválidos.');
        CommonPageMethods.verifyAlert("This user already exists.");
    });
});


