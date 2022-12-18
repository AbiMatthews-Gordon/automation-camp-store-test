import productGalleryPage from '../pageObjects/product-gallery-home.page';
import loginData from '../data/authentication.data';
import routesData from '../data/routes.data';
import Authentication from '../pageObjects/authentication.page';

describe('Verify that the user', () => {

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

    it('is able to visit the contact page from products page', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //click the contact button
        cy.get(productGalleryPage.btnContact).click();
        //verify the url is contact url
        cy.url().should('include', routesData.routes.contacts);

    });

    it('is able to visit the about page from products page', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //click the about button
        cy.get(productGalleryPage.btnAbout).click();
    });

    it('is able to signout from products page', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //sign out after successful login
        Authentication.signout();
    });

});
