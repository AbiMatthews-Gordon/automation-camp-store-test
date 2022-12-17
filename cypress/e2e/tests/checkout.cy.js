import CheckoutPage from '../pageObjects/checkout.page.js'
import checkoutInfo from '../data/checkout.data.json'
import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
import addToCartPage from '../pageObjects/add-to-cart.page';
import routesData from '../data/routes.data';
import productsData from '../data/products.data.json';


describe("The user", ()=>{

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

	it.only("should not allow checkout with invalid information", ()=>{

		const product_id = Math.round(Math.random()*22)
		addToCartPage.addToCart(product_id);
		cy.get(addToCartPage.cartCount).should('contain', 1);
		cy.get(addToCartPage.getCartSummaryItemName(1)).should('contain', productsData.productsList[product_id].name);

		cy.get(CheckoutPage.checkoutBtn).click();

		cy.get(CheckoutPage.continuePaymentBtn).click();

		cy.get(CheckoutPage.shippingEmailError).should('be.visible');
		cy.get(CheckoutPage.shippingEmailError).should('contain', checkoutInfo.error.email);

		cy.get(CheckoutPage.shippingCityError).should('be.visible');
		cy.get(CheckoutPage.shippingCityError).should('contain', checkoutInfo.error.city);

		cy.get(CheckoutPage.shippingCountryError).should('be.visible');
		cy.get(CheckoutPage.shippingCountryError).should('contain', checkoutInfo.error.country);

		cy.get(CheckoutPage.shippingPostalCodeError).should('be.visible');
		cy.get(CheckoutPage.shippingPostalCodeError).should('contain', checkoutInfo.error.postalcode);
	});

	it("should not allow checkout with invalid payment information", ()=>{
        //set view port to avoid overlapping elements
		cy.viewport(1920, 1080);
		//get random product number
        const product_id = Math.round(Math.random()*22)
		addToCartPage.addToCart(product_id);

		cy.get(addToCartPage.getCartSummaryItemName(1)).should('contain', productsData.productsList[product_id].name);

		cy.get(CheckoutPage.checkoutBtn).click();

		CheckoutPage.fillShippingForm(checkoutInfo.name, checkoutInfo.email, checkoutInfo.street, checkoutInfo.apt, checkoutInfo.city, checkoutInfo.country, checkoutInfo.province, checkoutInfo.postalcode);

		cy.get(CheckoutPage.continuePaymentBtn).scrollIntoView();
		cy.get(CheckoutPage.continuePaymentBtn).click();

		cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').should('be.visible')
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type(checkoutInfo.invalid_card.number)
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type(checkoutInfo.invalid_card.expiry)
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type(checkoutInfo.invalid_card.cvc)

		cy.get(CheckoutPage.continuePaymentBtn).click();

		cy.wait(6000);
		cy.url().should('not.contain', 'order');
	});

	it("should checkout with valid information", () => {

		cy.viewport(1920, 1080);
		const product_id = Math.round(Math.random()*22)
		addToCartPage.addToCart(product_id);

		cy.get(addToCartPage.getCartSummaryItemName(1)).should('contain', productsData.productsList[product_id].name);

		cy.get(CheckoutPage.checkoutBtn).click();

		CheckoutPage.fillShippingForm(checkoutInfo.name, checkoutInfo.email, checkoutInfo.street, checkoutInfo.apt, checkoutInfo.city, checkoutInfo.country, checkoutInfo.province, checkoutInfo.postalcode);

		cy.get(CheckoutPage.continuePaymentBtn).scrollIntoView();
		cy.get(CheckoutPage.continuePaymentBtn).click();

		cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').should('be.visible')
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type(checkoutInfo.card.number)
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type(checkoutInfo.card.expiry)
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type(checkoutInfo.card.cvc)
		
		// check total
		cy.get(CheckoutPage.checkoutTotal).should('contain', `$${productsData[product_id].price.toLocaleString("en-US")}`)
		
		cy.get(CheckoutPage.continuePaymentBtn).click();
		cy.get(CheckoutPage.continuePaymentBtn).click();
		cy.wait(6000);
		
		// check invoice number
		cy.get(CheckoutPage.checkoutOrderInvoiceNumber).should('be.visible');

		// check address
		cy.get(CheckoutPage.checkoutOrderInvoiceAddress).should('be.visible');
		cy.get(CheckoutPage.checkoutOrderInvoiceAddress).should('contain', `${checkoutInfo.apt}, ${checkoutInfo.city}, ${checkoutInfo.province}, JM, ${checkoutInfo.postalcode}`);

		// check cardinfo
		cy.get(CheckoutPage.checkoutOrderInvoiceCard).should('be.visible');
		cy.get(CheckoutPage.checkoutOrderInvoiceCard).should('contain', checkoutInfo.card.number.substring(checkoutInfo.card.number.length-4, checkoutInfo.card.number.length));
	});
});