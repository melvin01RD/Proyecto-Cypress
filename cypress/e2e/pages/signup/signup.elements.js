 export class SignupElements {
    static get textboxes() {
        return {
            get username() {
                return cy.get('input#loginusername');
            },
            get password() {
                return cy.get('input#loginpassword');
            }
        };
    }

    static get buttons() {
        return {
            get close() {
                return cy.contains("button", "close").eq(1);
            },
            get signup() {
                return cy.contains("button", "signup");
            }
        };
    }
} 



