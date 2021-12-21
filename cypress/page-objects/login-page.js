/// <reference types="cypress" />

export class LoginPage{
    assertLoginPage(){

        cy.url()
        .should('include', '/index.php?route=account/login')

        cy.get('#account-login')
        .should('be.visible');
    }

    filledLoginFieldsAndSubmit(){
        cy.get('#input-email')
        .type('testinguser@yopmail.com');

        cy.get('#input-password')
        .type('test123');

        cy.get('[type="submit"]')
        .click();
    }

    filledLoginFieldsAndSubmitAfterRegistration(email,password){
        cy.get('#input-email')
        .type(email);

        cy.get('#input-password')
        .type(password);

        cy.get('[type="submit"]')
        .click();
    }

    assertLoginSuccessful(){

        cy.url()
        .should('include', 'account/account');

        cy.get('#content > :nth-child(1)')
        .should('contain.text','My Account');

        cy.get('#content > :nth-child(3)')
        .should('contain.text','My Orders');

    }

    loginByUsingCookies(){
        cy.clearCookies()
        //cy.setCookie('_zk_sc_tc1_http','1')
        cy.setCookie('OCSESSID','22a5d4abdba5292cc9b4f3e309')
    }

    gotoMyAccountFromTopLink(){
        cy.get('#top-links .dropdown-menu li:nth-child(1),#top-links>ul.list-inline>li.dropdown>a')
        .should('contain.text','My Account')
        .click({ multiple: true });
    }

    assertAccountDropDownAfterLogin(myAccountArray){
        cy.get('#top-links >ul.list-inline>li.dropdown>.dropdown-menu-right>li').each(($element, index, $list) =>{
            cy.get('#top-links >ul.list-inline>li.dropdown>.dropdown-menu-right>li>a').eq(index).should('contain.text',myAccountArray[index]);
        })
    }

}