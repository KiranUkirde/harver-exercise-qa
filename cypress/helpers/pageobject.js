/// <reference types="cypress" />
const header = '.heading';
const abtest = 'a[href*="/abtest"]';
const testcontrol = '.example';
const addremove = 'a[href*="/add_remove_elements/"]';
const addbutton = 'Add Element';
const checkboxes = 'a[href*="/checkboxes"]';
const dropdown = 'a[href*="/dropdown"]';
const dropdownoption = '#dropdown'; 
const forgotpassword = 'a[href*="/forgot_password"]'
const emailfield = '#email';
const retrivepasswordbutton = '#form_submit'

class pageobject {

    click_on_abtesting()
    {
        cy.get(header).should('be.visible');
        cy.get(abtest).click();
        cy.get(testcontrol).should('be.visible');
    } 
    
    click_on_addremove()
    {
        cy.get(header).should('be.visible');
        cy.get(addremove).click();
        cy.get(testcontrol).contains(addbutton).click();
    }

    click_on_checkbox()
    {
        cy.get(header).should('be.visible');
        cy.get(checkboxes).click();
        cy.get('[type="checkbox"]').eq(0).check();
        cy.get('[type="checkbox"]').eq(1).uncheck();
    }

    click_on_dropdown()
    {
        cy.get(header).should('be.visible');
        cy.get(dropdown).click();
        cy.get(dropdownoption).select('1').should('have.value','1')
    }

    click_on_forgot_password(email)
    {
        cy.get(header).should('be.visible');
        cy.get(forgotpassword).click();
        cy.get(emailfield).type(email).get(retrivepasswordbutton).click();
        cy.get('h1').contains('Internal Server Error');
    }
}

export default pageobject;