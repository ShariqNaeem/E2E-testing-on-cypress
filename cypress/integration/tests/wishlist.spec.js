/// <reference types="cypress" />
import { PDetailP } from "../../page-objects/detail-page";
import { HomePage } from "../../page-objects/home-page";
import { LoginPage } from "../../page-objects/login-page";

describe('Add to Wishlist Functionality',() =>{

    const homepage = new HomePage();
    const pdp = new PDetailP();
    const loginPage = new LoginPage();

    beforeEach(()=>{
        cy.intercept('http://opencart.abstracta.us/index.php?route=product/product&product_id=40').as('loadPDPfromHome');
        cy.navigateToHomePage();
    })
  
    it('Validate PDP product details in Cart page',() => {
        cy.navigateToLoginPage();
        loginPage.loginByUsingCookies();
        cy.navigateToAccountPage();
        loginPage.assertLoginSuccessful();
        cy.navigateToHomePage();

        homepage.navigateToPDPFromHomepage();
        cy.wait('@loadPDPfromHome');
        pdp.saveProductDataFromPDP();
        pdp.clickOnAddToWishlistBtn();
        pdp.assertSuccessMsgOnAddToWishlist();
        cy.navigateToWishlistPage();
        pdp.assertProductDataOnWishlist();
    })

})