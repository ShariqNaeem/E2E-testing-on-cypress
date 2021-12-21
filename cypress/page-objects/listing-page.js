/// <reference types="cypress" />

export class PListingP{

    sortOptionsArray =['Default','Name (A - Z)','Name (Z - A)','Price (Low > High)','Price (High > Low)','Rating (Highest)','Rating (Lowest)','Model (A - Z)','Model (Z - A)'];

    assertProducts(){
        cy.get('.product-thumb').each(($element, index, $list) =>{
            cy.get('.caption>h4>a').eq(index).should('be.visible');
        })
    }

    navigateToPDPFromPLP(){
        //cy.get(':nth-child(1) > .product-thumb')
        cy.get('.caption>h4>a')
        .eq(0)
        .click();
    }

    assertProductDetailedPage(){

        cy.url()
        .should('include', 'product/product')

        cy.get('#product-product')
        .should('be.visible');
    }

    assertSortFilterOptions(){
        cy.get('#input-sort')
        .should('be.visible');

        cy.get('#input-sort option').each(($element, index, $list) =>{
            cy.get('#input-sort option').eq(index).should('contain.text',this.sortOptionsArray[index]);
        })
    }
}