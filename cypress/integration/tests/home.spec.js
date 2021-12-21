/// <reference types="cypress" />

import { HomePage } from "../../page-objects/home-page";

describe('Home Page Test Cases',()=>{
    const homepage = new HomePage();

    beforeEach(()=>{
        cy.navigateToHomePage();
    })

    it('Validate the NavBar on Home page',()=>{
        homepage.assertNavBarComponents();
        homepage.assertNavBarDropDown();
        homepage.assertNavBarDropdownsComponents();
    }),

    it('Validate the Top link bar on Home page',()=>{
        homepage.assertToplinkBar();
        homepage.assertTopBarDropDown();
    }),

    it('Banner Slide Carousel appears on the homepage',()=>{
        homepage.assertBannerCarousel();
    }),

    it('Brand Carousel appears on the homepage',()=>{
        homepage.assertBrandCarousel();
    }),

    it('Footer appears on the homepage',()=>{
        homepage.assertFooter();
    }),

    it('Products layout images appears on the homepage',()=>{
        homepage.assertProductLayout();
    })

})