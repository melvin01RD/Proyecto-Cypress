import commonPageData from "../pages/commonPage/common-page.data";
import { CommonPageMethods } from "../pages/commonPage/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { logger } from "../utils/logger";

describe( commonPageData.testsuites.autenticacion , ()=>{

it('inicio de sesion valido' , () =>{
      logger.StepNumber(1)
      logger.Step('navegar hasta la pagina de inicio')
      CommonPageMethods.navigateToDemoBlaze()

      logger.StepNumber(2)
      logger.Step('navegar hasta la pagina de inicio')
      CommonPageMethods.ClickOnLoginOption()

      logger.StepNumber(3)
      logger.Step('ingresar  un nombre de usuario y password  validos')
      LoginMethods.insertUsername(LoginData.validCredentials.username)
      LoginMethods.insertPassword(LoginData.validCredentials.password)

      logger.StepNumber(4)
      logger.Step('hacer clic en login para iniciar sesion')
      LoginMethods.clickOnLoginButton()
      logger.verification(`home page debe mostrar  "welcome ${username}"text`)
      cy.get('a#nameofuser').should('contain.text',username)
      
     
  }) 

})