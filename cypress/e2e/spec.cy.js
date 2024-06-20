import { LoginPage } from "./pages/login/login.methods";
import { logger } from "./utils/logger";


describe('navegar hasta la pagina demoblaze', () => {
  it('passes', () => {
    const username = 'esmirna';
    const password = 'calcano'

    logger.StepNumber(1)
    logger.Step('navigate to DemoBlaze page')
    cy.visit('https://www.demoblaze.com/');

    
    logger.StepNumber(2)
    logger.Step('Click On "login"  link')
    cy.get('a[data-target="#logInModal"]').click()

    
    logger.StepNumber(3)
    logger.Step(`Login with this credentials: " ${username}/${password}"`)
    LoginPage.login(username, password)
    logger.verification(`home page should show "welcome ${username}"text`)
    cy.get('a#nameofuser').should('contain.text',username)
    cy.wait(3000)

  })
})
