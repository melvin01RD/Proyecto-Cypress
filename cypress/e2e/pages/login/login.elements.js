class LoginElements {
    static textboxes = {
        username: () => cy.get('#loginusername'),  // Selector para el campo de nombre de usuario
        password: () => cy.get('#loginpassword')   // Selector para el campo de contraseña
    };

    static buttons = {
        login: () => cy.get('button[onclick="logIn()"]')  // Selector para el botón de inicio de sesión
    };
}

export default LoginElements;

