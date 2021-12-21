/// <reference types="cypress" />

export class HomePage{
    navigateToStore(){
        cy.visit('https://opencart.abstracta.us');
    }

    navigateToRegisterPageFromTopLink(){
        cy
        .get('#top-links .dropdown .dropdown-toggle')
        .should('be.visible')
        .click();

        cy.get('#top-links .dropdown-menu li:nth-child(1)')
        .should('be.visible')
        .click();
    }

    navigateToLoginPageFromTopLink(){
        cy
        .get('#top-links .dropdown .dropdown-toggle')
        .should('be.visible')
        .click();

        cy.get('#top-links .dropdown-menu li:nth-child(2)')
        .should('be.visible')
        .click();
    }

    assertLoginPage(){

        cy.url()
        .should('include', '/index.php?route=account/login')

        cy.get('account-login')
        .should('be.visible');
    }

    searchProduct(){
        cy
        .get('#search input')
        .should('be.visible');

        cy.get('#search input').type('macbook{enter}');
    }

    assertSearchPage(){

        cy.url()
        .should('include', 'product/search&search=macbook')

        cy.get('#content>h1')
        .should('be.visible');
    }

    assertProductsTitle(){
        cy.get('.caption>h4>a').each(($element, index, $list) =>{
            cy.get('.caption>h4>a').eq(index).should('contain.text',$element.text());
        })
    }

    navigateToPLPFromNav(){
        cy.get('#menu .navbar-nav .dropdown:nth-of-type(2)')
        .click();

        cy.get('.open > .dropdown-menu > .see-all')
        .click();
    }

    assertProductListingPage(){

        cy.url()
        .should('include', 'product/category')

        cy.get('#product-category .breadcrumb li:nth-child(2)')
        .should('contain.text','Laptops & Notebooks');
    }

    navigateToPDPFromHomepage(){
        
        cy.get('#content .row')
        .should('be.visible');

        cy.get('#content .row :nth-child(2) > .product-thumb>.image')
        .click();
    }

    navigateToShoppingCartFromTopLink(){
        cy.get('#top-links .list-inline li:nth-child(4)')
        .should('be.visible')
        .click();
    }


    assertCartPage(){

        cy.url()
        .should('include', 'checkout/cart')

        cy.get('#checkout-cart .breadcrumb li:nth-child(2)')
        .should('contain.text','Shopping Cart');
    }

    navigateToHomepageFromLogo(){
        cy.get('#logo a')
        .should('be.visible')
        .click();
    }

    assertNavBarComponents(){
        cy.get('.navbar-nav>li')
        .should('have.length',8)
    }

    assertNavBarDropDown(){
        cy.get('.navbar-nav>.dropdown')
        .should('have.length',4)
    }

    assertNavBarDropdownsComponents(){

        const NavDropdownArray=[
            ['PC (0)','Mac (1)'],
            ['Macs (0)','Windows (0)'],
            ['Mice and Trackballs (0)','Monitors (2)','Printers (0)','Scanners (0)','Web Cameras (0)'],
            ['test 11 (0)','test 12 (0)','test 15 (0)','test 16 (0)','test 17 (0)',
            'test 18 (0)','test 19 (0)','test 20 (0)','test 21 (0)','test 22 (0)',
            'test 23 (0)','test 24 (0)','test 4 (0)','test 5 (0)','test 6 (0)','test 7 (0)','test 8 (0)','test 9 (0)']
        ];

        cy.get('.navbar-nav>.dropdown').each(($element,index,$list)=>{
            cy
            .get('.navbar-nav>.dropdown')
            .eq(index)
            .click();

            cy
            .get('.navbar-nav>li.dropdown.open>div.dropdown-menu')
            .should('be.visible');

            cy.get('li[class="dropdown open"] div.dropdown-menu div.dropdown-inner ul.list-unstyled li').each(($element, iterate, $list) =>{
                // console.log($element.text())
                expect(NavDropdownArray[index][iterate]).equal($element.text());  
                
            })
        })
    }

    assertToplinkBar(){
        cy.get('#top #top-links ul.list-inline>li')
        .should('have.length',5);
    }

    assertTopBarDropDown(){
        cy.get('#top-links ul.list-inline .dropdown li')
        .should('have.length',2)
    }

    assertBrandCarousel(){
        cy.get('#carousel0')
        .should('be.visible');
    }

    assertBannerCarousel(){
        cy.get('#slideshow0')
        .should('be.visible');
    }

    assertFooter(){
        cy.get('footer .container')
        .should('be.visible');
    }

    assertProductLayout(){
        cy.get('#content .row .image')
        .each(($element,index,$list) => {
            cy.get('#content .row .image img')
            .eq(index)
            .should('be.visible');
        })
    }

}