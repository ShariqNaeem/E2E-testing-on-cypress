/// <reference types="cypress" />
import { HomePage } from "../../page-objects/home-page";
import { RegisterPage } from "../../page-objects/register-page";

describe('Singup to the store',() =>{

    const homepage = new HomePage();
    const registerpage = new RegisterPage();

    beforeEach(()=>{
        cy.navigateToHomePage();
    })
  
    it('Random user register to the app',() => {
        homepage.navigateToRegisterPageFromTopLink();
        registerpage.assertRegisterPage();
        const userForLogin = registerpage.filledRandomRequiredFieldsForSignUp();
        registerpage.assertRegisterSuccessful();
    })

})