
import { CommonPageData } from "../pages/commonPage/common-page.data";
import { CommonPageMethods } from "../pages/commonPage/common-page.methods";
import SignupMethods from "../pages/signup/signup.methods";
import { logger } from "../utils/logger";

describe(CommonPageData.testSuites.registroYautenticacion, () => {
    it('registro de usuario valido', () => {
        logger.StepNumber(1);
        logger.Step('navegar a la pagina de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        logger.StepNumber(2);
        logger.Step('hacer click en "sign up" en la barra de navegacion');
        CommonPageMethods.ClickOnSignUpOption();

        logger.StepNumber(3);
        logger.Step('completar todos los campos obligatorios con informacion valida');
        SignupMethods.InsertUsername('esmirna');
        SignupMethods.InsertPassword('calcano'); 

        logger.StepNumber(4);
        logger.Step('hacer click en sign up para registrar el usuario');
        SignupMethods.clickOnSignupButton()
        logger.verification('verificar que se redirige al usuario a la pagina de inicio de sesion')

        logger.StepNumber(5);
        logger.SubStep('verificar que se muestre  mensaje "sign up succesful"');
        CommonPageMethods.verifyAlert("sign up successful")
    });
});


