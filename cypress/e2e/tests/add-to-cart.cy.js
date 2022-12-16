import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
import addToCartPage from '../pageObjects/add-to-cart.page';
import { login } from '../data/authentication.data';
import routesData from '../data/routes.data';
import productsData from '../data/products.data.json';

describe('The User', () => {

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

    //adding a single item to cart
    it('should be able to add a single item to cart', () => {

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
    });

    it('should be able to add multiple items to cart', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);

        //array to hold product number
        let productsNumbers = [];

        let cartTotal = 0;

        //looping through the products list
        //and adding them to cart
        //and checking if that the item is added to cart
        for(let i = 0; i < 5; i++){
            let randomNumber = Math.round(Math.random()*22);
            while(true){
                if(!productsNumbers.includes(randomNumber)){
                    productsNumbers.push(randomNumber);
                    break;
                }
            }
            addToCartPage.addToCart(randomNumber);
            cy.get(addToCartPage.getCartSummaryItemName(1)).should('contain', productsData.productsList[randomNumber].name);
            cartTotal += Number(productsData.productsList[randomNumber].price.replace("$", ""));
            if(i<4){
                cy.get(addToCartPage.continueShopping).click();
            }
        }
        // check quantity
        cy.get(addToCartPage.cartTotalQuantity).should('have.text', ` 5 `);
        //check price
        cy.get(addToCartPage.cartSummaryPriceTotal).should('contain', `$${cartTotal}`);
    });

    it('should be able to remove an item from cart', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //add item to cart button
        addToCartPage.addToCart(1);
        //check page header
        cy.get(addToCartPage.cartSummaryHeader).should('be.visible');
        //check cart summary
        cy.get(addToCartPage.cartSummaryItemName).should('contain', productsData.productsList[1].name);
        //check quantity
        cy.get(addToCartPage.cartSummaryQuantity).should('have.text', 1);
        //check price
        cy.get(addToCartPage.cartSummaryPrice).should('contain', productsData.productsList[1].price);

        //method to remove item from cart
        addToCartPage.removeFromCart(1);

        // Assert that the item was removed and the cart is empty
        cy.get(addToCartPage.cartSummaryItemName).should('not.exist');
        cy.get(addToCartPage.btnBackToStore).should('exist');
    });

});