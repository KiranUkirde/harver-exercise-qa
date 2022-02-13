/* 
    This file simplifies test execution by providing commonly used functions
*/

/// <reference types="cypress" />

class helper{
    
    visit_homepage() {
        cy.visit(Cypress.env("HarverTest"))
    }
}

export default helper;