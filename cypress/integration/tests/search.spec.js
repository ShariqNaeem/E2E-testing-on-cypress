/// <reference types="cypress" />
import { HomePage } from "../../page-objects/home-page";
import { SearchPage } from "../../page-objects/search-page";

describe('Searching from homepage',()=>{

    const homepage = new HomePage();
    const searchpage = new SearchPage();

    beforeEach(()=>{
        cy.navigateToHomePage();
    })

    it('Search product',()=>{
        
        homepage.searchProduct();
        homepage.assertSearchPage();
        searchpage.assertProductsTitle();

    });


//     it.skip('loads the same object', () => {
//     cy.fixture('example.json').then((userFixture) => {
//         console.log(userFixture.baseURL);
//     })
// })
})