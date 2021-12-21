// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('LoadURL', (endpoint) => {
    cy.intercept(`https://opencart.abstracta.us/index.php?route=account/${endpoint}`);
})

Cypress.Commands.add('navigateToHomePage',()=>{
    cy.visit('/');
})

Cypress.Commands.add('navigateToLoginPage',()=>{
    cy.visit('/index.php?route=account/login');
})

Cypress.Commands.add('navigateToCartPage',()=>{
    cy.visit('/index.php?route=checkout/cart');
})

Cypress.Commands.add('navigateToRegisterPage',()=>{
    cy.visit('/index.php?route=account/register');
})

Cypress.Commands.add('navigateToWishlistPage',()=>{
    cy.visit('/index.php?route=account/wishlist');
})

Cypress.Commands.add('navigateToAccountPage',()=>{
    cy.visit('/index.php?route=account/account');
})
