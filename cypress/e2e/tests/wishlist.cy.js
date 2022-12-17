import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
// import addToCartPage from '../pageObjects/add-to-cart.page';
import routesData from '../data/routes.data';
import productsData from '../data/products.data.json';
import wishlistPage from '../pageObjects/wishlist.page';
import { wishlist } from '../data/wishlist.data';

describe('The User', () => {

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

    //adding a single favourite item
    it('should be able to add a single favourite item', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //add wishlist 
        cy.get(wishlistPage.getAddToFavouritesSelector(1)).click();
        //check that item has been added to cart
        cy.get(wishlistPage.successfulAddedMessage).should('be.visible');
        //assert correct item was added to favourite
        //check message text
        cy.get(wishlistPage.successfulAddedMessage).should('contain', wishlist.addMessage);
        //click favourite icon
        cy.get(wishlistPage.favouritesIcon).click();
        //assert redirected url
        cy.url().should('include', routesData.routes.favourites);
        //assert item name
        cy.get(wishlistPage.favouritesItemName).should('be.visible');
    });

    //adding multiple favourite item
    it('should be able to add multiple favourite item', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //add wishlist 
        for (let i = 0; i < 4; i++) {

            cy.get(wishlistPage.getAddToFavouritesSelector(i)).click();
            //check that item has been added to cart
            cy.get(wishlistPage.successfulAddedMessage).should('be.visible');
            //check message text
            cy.get(wishlistPage.successfulAddedMessage).should('contain', productsData.productsList[i].name+" added to favorites");
        
        }
        //click favourite icon
        cy.get(wishlistPage.favouritesIcon).click();
        //assert redirected url
        cy.url().should('include', routesData.routes.favourites);
    });

    //remove a single favourite item
    it('should be able to remove a single favourite item', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //add wishlist 
        cy.get(wishlistPage.getAddToFavouritesSelector(1)).click();
        //check that item has been added to cart
        cy.get(wishlistPage.successfulAddedMessage).should('be.visible');
        //click favourite icon
        cy.get(wishlistPage.favouritesIcon).click();
        //assert redirected url
        cy.url().should('include', routesData.routes.favourites);
        //click remove button
        cy.get(wishlistPage.btnRemove).click();
        //assert favourite was removed
        cy.get(wishlistPage.removeFavouritePageMsg).should('be.visible');
    });

    //remove multiple favourite item
    it('should be able to remove multiple favourite item', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);
        //add wishlist 
        for (let i = 0; i < 4; i++) {

            cy.get(wishlistPage.getAddToFavouritesSelector(i)).click();
            //check that item has been added to cart
            cy.get(wishlistPage.successfulAddedMessage).should('be.visible');
        }
        //click favourite icon
        cy.get(wishlistPage.favouritesIcon).click();
        //assert redirected url
        cy.url().should('include', routesData.routes.favourites);

        for (let i = 0; i < 4; i++) {
            //click remove button
            cy.get(wishlistPage.btnRemove).click();
        }
        //assert favourite was removed
        cy.get(wishlistPage.removeFavouritePageMsg).should('be.visible');
    });

     //remove multiple favourite item from product page
    it('should be able to remove multiple favourite item from product page', () => {

        //check if url is products url
        cy.url().should('include', routesData.routes.products);

        for (let i = 0; i < 4; i++) {

            //add wishlist 
            cy.get(wishlistPage.getAddToFavouritesSelector(i)).click();
            //check that item has been added to cart
            cy.get(wishlistPage.successfulAddedMessage).should('be.visible');
        }
        
        for (let i = 0; i < 4; i++) {
            //remove wishlist 
            cy.get(wishlistPage.getAddToFavouritesSelector(i)).click();
            cy.get(wishlistPage.successfulAddedMessage).should('be.visible');
        }
        // //assert favourite was removed
        cy.get(wishlistPage.favouritesIcon).should('contain', '[0]');
    });
});