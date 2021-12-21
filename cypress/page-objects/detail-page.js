/// <reference types="cypress" />

export class PDetailP{
    
    setProductQuantity(quantity){
        cy.get('#input-quantity')
        .should('be.visible')
        .clear();

        cy.get('#input-quantity')
        .type(quantity);
    }

    clickOnAddToCartBtn(){
        cy.get('#button-cart')
        .should('be.visible')
        .click();
    }

    clickOnAddToWishlistBtn(){
        cy.get("[data-original-title='Add to Wish List']:nth-child(1)")
        .should('be.visible')
        .click();
    }

    assertSuccessMsgOnAddToCart(){

    cy.get('#product-product .alert-success')
    .should('contain.text','Success: You have added iPhone to your shopping cart!');

    }

    assertSuccessMsgOnAddToWishlist(){

        cy.get('#product-product .alert-success')
        .should('contain.text','Success: You have added iPhone to your wish list!');
    
    }

    clickOnMiniCartBtn(){
        cy.get('span[id="cart-total"]>i')
        .click();
    }

    assertQuantityInMiniCart(expectedQuantity){
        cy
        .get('#cart .dropdown-menu')
        .should('be.visible');

        cy
        .get('#cart .dropdown-menu li:nth-child(1) tr td:nth-child(3)')
        .should('contain.text',expectedQuantity);
    }

    productArrayPDP= [];
    saveProductDataFromPDP(quantity){

        cy
        .get('#content div.row h1').then(result =>{
            this.productArrayPDP.push(result.text())
        })

        cy
        .get("#content div.row ul[class='list-unstyled']:nth-child(3) li:nth-child(2)").then(result =>{
            this.productArrayPDP.push(result.text())
        })

        cy
        .get("#content div.row ul[class='list-unstyled']:nth-child(3) li:nth-child(3)").then(result =>{
            this.productArrayPDP.push(result.text())
        })

        cy
        .get("#content div.row ul[class='list-unstyled']:nth-child(4) li:nth-child(1)").then(result =>{
            this.productArrayPDP.push(result.text());
            this.productArrayPDP.push(quantity);
        })

            
    }


    assertProductDataOnWishlist(){

        cy
        .get('#content table.table-bordered tbody tr td:nth-child(2)').then(result =>{
            expect(this.productArrayPDP[0]).equal(result.text())
        })

        cy
        .get("#content table.table-bordered tbody tr td:nth-child(3)").then(result =>{
            expect(this.productArrayPDP[1]).to.have.string(result.text())
        })

        cy
        .get("#content table.table-bordered tbody tr td:nth-child(4)").then(result =>{
            expect(this.productArrayPDP[2]).to.have.string(result.text())
        })

        cy
        .get("#content table.table-bordered tbody tr td:nth-child(5)").then(result =>{
            expect(this.productArrayPDP[3].replace(/\s/g, '')).equal(result.text().replace(/\s/g, ''))
        })

        this.productArrayPDP=[];
    }

    assertProductDataOnCartPage(){

        cy
        .get('#content table.table-bordered tbody tr td:nth-child(2) a').then(result =>{
            expect(this.productArrayPDP[0]).equal(result.text())
        })

        cy
        .get("#content table.table-bordered tbody tr td:nth-child(3)").then(result =>{
            expect(this.productArrayPDP[1]).to.have.string(result.text())
        })

        cy
        .get("#content div.btn-block input").should(($input) => {
            const val = $input.val();
            console.log(val);
            expect(this.productArrayPDP[4]).equal(val);


        });

        cy
        .get("#content table.table-bordered tbody tr td:nth-child(5)").then(result =>{
            expect(this.productArrayPDP[3].replace(/\s/g, '')).equal(result.text().replace(/\s/g, ''))
        })

        this.productArrayPDP=[];
    }
}