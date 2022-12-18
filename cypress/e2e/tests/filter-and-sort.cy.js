import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
import { sort } from '../data/search.data.json';
import { productsList } from '../data/products.data.json';
import productPage from '../pageObjects/add-to-cart.page'
import addToCartPage from '../pageObjects/add-to-cart.page';

describe('Verify that the user ', () => {

    beforeEach(() => {

        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

    it('is able to sort product list from low to high', () => {

        //changing drop down value
        productPage.selectSort(sort['Low to High']);

        //custom sorting function in ascending order
        productsList.sort((a, b) => {
            return Number(a.price.replace("$", "")) - Number(b.price.replace("$", ""))
        });

        cy.wait(1500);
        //cycling through the elements
        //checking if they are in the same order
        cy.get(addToCartPage.allProductPrice).each(($elem, index) => {

            expect($elem.text()).equal(`${productsList[index].price}`);
        });
    });

    it('is able to sort product list from high to low', () => {
        
        //changing drop down value
        productPage.selectSort(sort['High to Low']);

        //custom sorting function in descending order
        productsList.sort((a, b) => {
            return Number(b.price.replace("$", "")) - Number(a.price.replace("$", ""))
        });

        cy.wait(1500);
        //cycling through the elements
        //checking if they are in the same order
        cy.get(addToCartPage.allProductPrice).each(($elem, index) => {

            expect($elem.text()).equal(`${productsList[index].price}`);
        });
    });

    it('is able to sort product list from A-Z', () => {

        //changing drop down value
        productPage.selectSort(sort['A to Z']);

        //custom sorting function in alphabetic order
        productsList.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        cy.wait(1500);
        //cycling through the elements
        //checking if they are in the same order
        cy.get(addToCartPage.allProductName).each(($elem, index) => {

            expect($elem.text()).equal(productsList[index].name);
        });
    });

    it('is able to sort product list from Z-A', () => {

         //changing drop down value
        productPage.selectSort(sort['Z to A']);

        //custom sorting function in reverse alphabetic order
        productsList.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }

            return 0;
        });
        cy.wait(1500);
        //cycling through the elements
        //checking if they are in the same order
        cy.get(addToCartPage.allProductName).each(($elem, index) => {

            expect($elem.text()).equal(productsList[index].name);
        })
    });

    it('is able to reset the products on the page', () => {

        //changing drop down value
        productPage.selectSort(sort['Low to High']);
        //clicking the reset button
        cy.get("#reset").click();

        cy.wait(1500);
        //cycling through the elements
        //checking if they are in the same order
        cy.get(addToCartPage.allProductPrice).each(($elem, index) => {

            expect($elem.text()).equal(productsList[index].price);
        });
    });

});