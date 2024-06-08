/*import { loginMethods } from './pages/login/login.methods';*/

describe('navegar hasta la pagina demoblaze', () => {
  it('passes', () => {

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('a[data-target="#logInModal"]').click()
     loginMethods.login('esmirna','calcano')

  })

})