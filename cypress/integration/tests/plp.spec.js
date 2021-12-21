/// <reference types="cypress" />
import { HomePage } from "../../page-objects/home-page";
import { PListingP } from "../../page-objects/listing-page";

describe('Product Listing Page',()=>{

    const homepage = new HomePage();
    const plp = new PListingP();

    beforeEach(()=>{
        cy.navigateToHomePage();
    })

    it('Navigate to the PLP from nav link',()=>{
        
        homepage.navigateToPLPFromNav();
        homepage.assertProductListingPage();

    });

    it('Validate Products should be present in PLP',()=>{
        
        homepage.navigateToPLPFromNav();
        homepage.assertProductListingPage();
        plp.assertProducts();

    });

    it('Validate sort filter options on PLP',()=>{
        
        homepage.navigateToPLPFromNav();
        homepage.assertProductListingPage();
        plp.assertSortFilterOptions();

    });


    it('Navigate to the PDP from PLP',()=>{

        cy.intercept('http://opencart.abstracta.us/index.php?route=product/product&path=18&product_id=47').as('loadPDP');
        
        homepage.navigateToPLPFromNav();
        homepage.assertProductListingPage();
        plp.assertProducts();
        plp.navigateToPDPFromPLP();
        cy.wait('@loadPDP');
        plp.assertProductDetailedPage();
    })
})