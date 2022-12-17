import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
import { productsList } from '../data/products.data.json';
import addToCartPage from '../pageObjects/add-to-cart.page';
import routesData from '../data/routes.data';

describe('Sort', () => {

    beforeEach(() => {

        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

    it('should be able to search by name', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //click in the search field
        cy.get(addToCartPage.searchTextField).click();
        //enter a product name
        cy.get(addToCartPage.searchTextField).type(productsList[1].name);
        //verify that the product appeared
        cy.get(addToCartPage.productName).should('have.text', productsList[1].name);

    });

    it('should be able to search by category', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //click in the search field
        cy.get(addToCartPage.searchTextField).click();
        //enter a product cat
        cy.get(addToCartPage.searchTextField).type(productsList[1].category);

        //verify that the product appeared
        cy.get(addToCartPage.qualityFittedHat).should('have.text', productsList[0].name);
        cy.get(addToCartPage.qualityTruckerHat).should('have.text', productsList[1].name);
    });

    it('should not be able to search by price', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //click in the search field
        cy.get(addToCartPage.searchTextField).click();
        //enter a product cat
        cy.get(addToCartPage.searchTextField).type(productsList[1].price);
        //verify that the products did not appeared
        cy.get(addToCartPage.qualityTruckerHat).should('not.exist');
        
    });

});