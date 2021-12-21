/// <reference types="cypress" />

export class RegisterPage{
    assertRegisterPage(){
        cy.url()
        .should('include', '/index.php?route=account/register')

        cy.get('#content > h1')
        .should('contain.text','Account');
    }

    filledRandomRequiredFieldsForSignUp(){
        
        const randomId = Math.floor(Math.random() * 1000000);
        const name = 'test';

        cy.get('#input-firstname')
        .type(`${name}_${randomId}`);

        cy.get('#input-lastname')
        .type('user');

        cy.get('#input-email')
        .type(`${name}_${randomId}@yopmail.com`);

        cy.get('#input-telephone')
        .type('123456789');

        cy.get('#input-password')
        .type('testuser$1');

        cy.get('#input-confirm')
        .type('testuser$1');

        cy.get('input[type="checkbox"]')
        .click();

        cy.get('[type="submit"]')
        .click();

        const randomObj = {
            'username': `${name}_${randomId}@yopmail.com`,
            'password': 'testuser$1'
        };

        return randomObj;
    }

    assertRegisterSuccessful(){

        cy.url()
        .should('include', 'account/success')

        cy.get('#content > p:nth-child(2)')
        .should('contain.text','Thank you for registering with Your Store!');
    }

    clickOnLoginFromAccountPage(){
        cy.get('.list-group > [href="https://opencart.abstracta.us:443/index.php?route=account/login"]')
    }
}