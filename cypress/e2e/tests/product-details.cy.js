import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
import routesData from '../data/routes.data';
import productsData from '../data/products.data.json';
import productDetailsPage from '../pageObjects/product-details.page';

describe('The User', () => {

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

    it('should be able to open product detail page', () => {

        //click on product
        cy.get(productDetailsPage.productQualityHatImageHomePage).click();
        //assert url is product details url
        cy.url().should('include', routesData.routes.productDetail);
        //assert product name
        cy.get(productDetailsPage.productTitle).should('contain', productsData.productsList[0].name)
    });

    it('should be able to view product images', () => {

        //click on product
        cy.get(productDetailsPage.productQualityHatImageHomePage).click();
        //assert url is product details url
        cy.url().should('include', routesData.routes.productDetail);
        //click on first image
        cy.get(productDetailsPage.productDetailImageOne).click();
        //click on second image
        cy.get(productDetailsPage.productDetailImageTwo).click();
    });

    // it.only('should be able to open related item', () => {

    //     //click on product
    //     cy.get(productDetailsPage.productQualityHatImageHomePage).click();
    //     //assert url is product details url
    //     cy.url().should('include', routesData.routes.productDetail);
    //     //click on related image
    //     cy.get(productDetailsPage.productRelatedImage).click();

    //     //verify redirected url
    // });

    it('should be able to go back to products', () => {

        //click on product
        cy.get(productDetailsPage.productQualityHatImageHomePage).click();
        //assert url is product details url
        cy.url().should('include', routesData.routes.productDetail);
        //click back to products button
        cy.get(productDetailsPage.backToProducts).click();
        //assert url is products url
        cy.url().should('include', routesData.routes.products);
    });

});