/// <reference types="cypress" />
import { PDetailP } from "../../page-objects/detail-page";
import { HomePage } from "../../page-objects/home-page";
import { PListingP } from "../../page-objects/listing-page";
import { LoginPage } from "../../page-objects/login-page";
import { RegisterPage } from "../../page-objects/register-page";

describe('Product Detailed Page',()=>{

    const homepage = new HomePage();
    const plp = new PListingP();
    const pdp = new PDetailP();
    const registerpage = new RegisterPage();
    const loginPage = new LoginPage();

    beforeEach(()=>{
        cy.intercept('http://opencart.abstracta.us/index.php?route=product/product&product_id=40').as('loadPDPfromHome');
        cy.navigateToHomePage();
        // cy.fixture('example.json').then((userFixture) => {
        //     cy.visit(userFixture.baseURL);
        // })
    })

    it('Navigate to the PDP from homepage',()=>{

        homepage.navigateToPDPFromHomepage();
        cy.wait('@loadPDPfromHome');
        plp.assertProductDetailedPage();

    });

    it('Product add to cart from PDP and navigate to cart page',()=>{
        
        const quantity = '2';
        homepage.navigateToPDPFromHomepage();
        cy.wait('@loadPDPfromHome');
        pdp.setProductQuantity(quantity);
        pdp.clickOnAddToCartBtn();
        pdp.assertSuccessMsgOnAddToCart();
        homepage.navigateToShoppingCartFromTopLink();
        homepage.assertCartPage();

    });

    it('Product add to cart on PDP and validate the quantity in mini cart',()=>{

        cy.intercept({
            method: "GET",
            url: 'http://opencart.abstracta.us/index.php?route=common/cart/info'
        }).as('LoadProductIntoCart');

        const quantity ='2';

        homepage.navigateToPDPFromHomepage();
        cy.wait('@loadPDPfromHome');
        pdp.setProductQuantity(quantity);
        pdp.clickOnAddToCartBtn();
        pdp.assertSuccessMsgOnAddToCart();
        cy.wait('@LoadProductIntoCart');
        pdp.clickOnMiniCartBtn();
        pdp.assertQuantityInMiniCart(quantity);

    });

    it('Product add to wishlist from PDP and navigate to Wishlist page',()=>{
        cy.visit('/index.php?route=account/login')
        loginPage.loginByUsingCookies();
        cy.navigateToAccountPage()
        loginPage.assertLoginSuccessful();
        cy.visit('/')
        homepage.navigateToPDPFromHomepage();
        cy.wait('@loadPDPfromHome');
        pdp.clickOnAddToWishlistBtn();
        pdp.assertSuccessMsgOnAddToWishlist();

    });
})