import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
import addToCartPage from '../pageObjects/add-to-cart.page';
import routesData from '../data/routes.data';
import productsData from '../data/products.data.json';

describe('The User', () => {

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

    it('should be able to increase item quantity from cart summary', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //add item to cart button
        addToCartPage.addToCart(1);
        //check page header
        cy.get(addToCartPage.cartSummaryHeader).should('be.visible');
        // //check cart summary
        cy.get(addToCartPage.cartSummaryItemName).should('contain', productsData.productsList[1].name);
        //check quantity
        cy.get(addToCartPage.cartSummaryQuantity).should('have.text', 1);
        //check price
        cy.get(addToCartPage.cartSummaryPrice).should('contain', productsData.productsList[1].price);

        //increase cart quantity
        cy.get(addToCartPage.increaseCartBtn).click();
        //verify price
        cy.get(addToCartPage.cartSummaryPrice).should('contain', Number(productsData.productsList[1].price.replace("$", ""))*2);
    });

    it('should be able to decrease item quantity from cart summary', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //add item to cart button
        addToCartPage.addToCart(1);
        //check page header
        cy.get(addToCartPage.cartSummaryHeader).should('be.visible');
        // //check cart summary
        cy.get(addToCartPage.cartSummaryItemName).should('contain', productsData.productsList[1].name);
        //check quantity
        cy.get(addToCartPage.cartSummaryQuantity).should('have.text', 1);
        //check price
        cy.get(addToCartPage.cartSummaryPrice).should('contain', productsData.productsList[1].price);

        //increase cart quantity
        cy.get(addToCartPage.increaseCartBtn).click();
        cy.get(addToCartPage.cartSummaryPrice).should('contain', Number(productsData.productsList[1].price.replace("$", ""))*2);

        //decrease cart quantity
        cy.get(addToCartPage.decreaseCartBtn).click();
        //verify price
        cy.get(addToCartPage.cartSummaryPrice).should( 'contain', Number(productsData.productsList[1].price.replace("$", "")) );
    });

    it('should be able to go back to products', () => {

        //check url is products url
        cy.url().should('include', routesData.routes.products);
        //add item to cart button
        addToCartPage.addToCart(1);

        //assert that url is cart summary url
        cy.url().should('include', routesData.routes.cartSummary);
        //assert page header
        cy.get(addToCartPage.cartSummaryHeader).should('be.visible');
        //assert cart summary
        cy.get(addToCartPage.cartSummaryItemName).should('contain', productsData.productsList[1].name);
        //assert quantity
        cy.get(addToCartPage.cartSummaryQuantity).should('have.text', 1);
        //assert price
        cy.get(addToCartPage.cartSummaryPrice).should('contain', productsData.productsList[1].price);

        //press continue shopping button
        cy.get(addToCartPage.continueShopping).click();
        //assert products url
        cy.url().should('include', routesData.routes.products);
    });

});