/// <reference types="cypress" />

export class SearchPage{

    assertProductsTitle(){
        cy.get('.caption>h4>a').each(($element, index, $list) =>{
            cy.get('.caption>h4>a').eq(index).should('contain.text',$element.text());
        })
    }
}