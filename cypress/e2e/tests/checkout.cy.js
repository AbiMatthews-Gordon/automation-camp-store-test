import CheckoutPage from '../pageObjects/checkout.page.js'
import {billingAddress, invalidCreditCard, creditCard} from '../data/checkout.data.json'
import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
import addToCartPage from '../pageObjects/add-to-cart.page';
import routesData from '../data/routes.data';
import productsData from '../data/products.data.json';


describe("Verify that the user ", ()=>{

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

	it("is not able to checkout with invalid information", ()=>{

		const productNumber = Math.round(Math.random()*22)
		addToCartPage.addToCart(productNumber);

		cy.get(addToCartPage.cartSummaryQuantity).should('have.text', 1);
		cy.get(addToCartPage.getCartSummaryItemName(1)).should('contain', productsData.productsList[productNumber].name);

		cy.get(CheckoutPage.btnCheckout).click();

		cy.get(CheckoutPage.btnContinuePayment).click();

		cy.get(CheckoutPage.emailError).should('be.visible');
		cy.get(CheckoutPage.emailError).should('contain', billingAddress.error.email);

		cy.get(CheckoutPage.cityError).should('be.visible');
		cy.get(CheckoutPage.cityError).should('contain', billingAddress.error.city);

		cy.get(CheckoutPage.countryError).should('be.visible');
		cy.get(CheckoutPage.countryError).should('contain', billingAddress.error.country);

		cy.get(CheckoutPage.zipCodeError).should('be.visible');
		cy.get(CheckoutPage.zipCodeError).should('contain', billingAddress.error.postalcode);
	});

	it("is able to checkout with valid information", () => {

		cy.viewport(1920, 1080);
		addToCartPage.addToCart(2);

		cy.get(addToCartPage.getCartSummaryItemName(1)).should('contain', productsData.productsList[2].name);

		cy.get(CheckoutPage.btnCheckout).click();

		CheckoutPage.fillShippingForm(billingAddress.name, 
			billingAddress.email, 
			billingAddress.street, 
			billingAddress.apt, 
			billingAddress.city, 
			billingAddress.country, 
			billingAddress.province, 
			billingAddress.postalcode
		);

		cy.get(CheckoutPage.btnContinuePayment).scrollIntoView();
		cy.get(CheckoutPage.btnContinuePayment).click();

		cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').should('be.visible')
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type(creditCard.number)
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type(creditCard.expiry)
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type(creditCard.cvc)
		
		// check total
		cy.get(CheckoutPage.checkoutTotal).should('contain', `${productsData.productsList[2].price}`)
		
		cy.get(CheckoutPage.btnContinuePayment).click();
		cy.wait(4000);
		
		// check invoice number
		cy.get(CheckoutPage.invoiceNumber).should('be.visible');

		// check address
		cy.get(CheckoutPage.invoiceAddress).should('be.visible');
		cy.get(CheckoutPage.invoiceAddress).should('contain', `${billingAddress.apt}, ${billingAddress.city}, ${billingAddress.province}, JM, ${billingAddress.postalcode}`);

		// check cardinfo
		cy.get(CheckoutPage.invoiceCreditCard).should('be.visible');
		cy.get(CheckoutPage.invoiceCreditCard).should('contain', creditCard.number.substring(creditCard.number.length-4, creditCard.number.length));
	});
});