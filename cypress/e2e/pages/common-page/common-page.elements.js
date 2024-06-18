export class CommonPageElements {
    static get topMenu() {
        return {
            get home() {
                return cy.get('li.active a');
            }
        };
    }

    static get contact() {
        return cy.get('a[data-target="#exampleModal"]');
    }

    static get aboutUs() {
        return cy.get('a[data-target="#videoModal"]');
    }

    static get cart() {
        return cy.contains('a', 'Cart');
    }

    static get logIn() { 
        return cy.get('a[data-target="#logInModal"]');
    }

    static get signUp() {
        return cy.get('a[data-target="#signInModal"]');
    }
}
