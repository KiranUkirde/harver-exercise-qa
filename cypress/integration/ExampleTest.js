import helper from '../helpers/helper.js';
import pageobject from '../helpers/pageobject.js';

const objhelper = new helper();
const objhomepage = new pageobject();

describe("Harver Frontend Test", function () {

    beforeEach(function () {
        //This load testdata.json fixture
        cy.fixture("testdata.json").then(function(data) {
            this.data = data;
        });

        objhelper.visit_homepage();
        }
    )

    it("Test1-AB testing", function() {
        objhomepage.click_on_abtesting(); 
        }
    )
    
    it("Test2-addremove testing", function() {
        objhomepage.click_on_addremove(); 
        }
    )

    it("Test3-checkboxes testing", function() {
        objhomepage.click_on_checkbox(); 
        }
    )

    it("Test4-dropdown testing", function() {
        objhomepage.click_on_dropdown();
        }
    )

    it("Test5-forgotpassword testing", function() {
        objhomepage.click_on_forgot_password(this.data.email);
        }
    )
});