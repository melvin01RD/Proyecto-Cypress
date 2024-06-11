/*import { loginMethods } from './pages/login/login.methods';*/

import { HomeMethods } from "./pages/login/home/home.methods"


describe('navegar hasta la pagina demoblaze', () => {
  it('passes', () => {
    const usuario ='esmirna'
    const password= 'calcano'
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginPage.login(usuario,password)

    HomeMethods.clickOnlaptopsOption('Samsung galaxy s7')
    
  })

})