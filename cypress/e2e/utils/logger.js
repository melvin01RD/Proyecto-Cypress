export class logger {
    static  StepNumber(number){
        const text= `step # ${number}`
        cy.log(text)
        cy.allure().step(text)
    }
    static  Step(description){
        const text= `step -${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    static  verification (description){
        const text= `verification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static  SubStep(description){
        const text= `SubStep -${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static  SubVerification(description){
        const text= `SubStep -${description}`
        cy.log(text)
        cy.allure().step(text)
    }

}