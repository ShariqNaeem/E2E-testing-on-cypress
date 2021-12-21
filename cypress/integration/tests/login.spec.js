/// <reference types="cypress" />
import { HomePage } from "../../page-objects/home-page";
import { LoginPage } from "../../page-objects/login-page";

describe('Login to the store',() =>{

    const homepage = new HomePage();
    const loginPage = new LoginPage();

    beforeEach(()=>{
        homepage.navigateToStore();
    })
  
    it('User should login to the app',() => {
        homepage.navigateToLoginPageFromTopLink();
        loginPage.assertLoginPage();
        loginPage.filledLoginFieldsAndSubmit();
        loginPage.assertLoginSuccessful();
    });

    it('User should login to the app by setting up the cookies',() => {
        homepage.navigateToLoginPageFromTopLink();
        loginPage.loginByUsingCookies();
        cy.reload();
        loginPage.assertLoginSuccessful();
    });

    

    it('My Account dropdown after the login',() => {
        const accountDropdown = ['My Account','Order History','Transactions','Downloads','Logout'];
        homepage.navigateToLoginPageFromTopLink();
        loginPage.assertLoginPage();
        loginPage.filledLoginFieldsAndSubmit();
        loginPage.assertLoginSuccessful();
        loginPage.gotoMyAccountFromTopLink();
        loginPage.assertAccountDropDownAfterLogin(accountDropdown);
    });

    it('User Login through API',()=>{
        const formData = new FormData();
    
        formData.set('email', 'testinguser@yopmail.com');
        formData.set('password', 'test123');

        cy.request({
            method: 'POST',
            url: '/index.php?route=account/login',
            body: formData,
            headers:{
                'content-type': 'multipart/form-data',
            }
        }).then((response)=>{
            console.log(response);
            expect(response.status).equal(200);
        });

        homepage.navigateToLoginPageFromTopLink();
        loginPage.assertLoginSuccessful();
        
    })
})