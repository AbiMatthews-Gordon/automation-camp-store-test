import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
import {searchData} from '../data/search.data.json';
import {productsList} from '../data/search.data.json';

describe('Sort', () => {

    beforeEach(() => {

        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

    // afterEach(() => {
    //     Login.signout();
    // });

    it('should sort product list from low to high', () => {

        Products.selectSort(searchData.sort['Low to High']);

        // Sort data list based on price, from low to high
        productsList.sort((a, b) => a.price - b.price);

        cy.get(Products.qualityFittedHatPrice).each(($elem, index) => {

            expect($elem.text()).equal(`${productsList[index].price}`);
        });
    });

    it('should sort product list from high to low', () => {

        Products.selectSort(searchData.sort['High to Low']);

        // Sort data list based on price, from high to low
        productsList.sort((a, b) => b.price - a.price);

        cy.get(Products.qualityFittedHatPrice).each(($elem, index) => {

            expect($elem.text()).equal(`${productsList[index].price}`);
        });
    });

    it('should sort product list from A-Z', () => {

        Products.selectSort(searchData.sort['A to Z']);

        // Sort data list based on name, from A to Z
        productsList.sort();

        cy.get(Products.qualityFittedHat).each(($elem, index) => {

            expect($elem.text()).equal(productsList[index].name);
        });
    });

    // it.only('should sort product list from Z-A', () => {

    //     Products.selectSort(searchData.sort['Z to A']);

    //     // Sort data list based on name, from Z to A
    //     productsList.sort().reverse();

    //     cy.get(Products.qualityFittedHat).each(($elem, index) => {

    //         expect($elem.text()).equal(productsList[index].name);
    //     })
    // })

});