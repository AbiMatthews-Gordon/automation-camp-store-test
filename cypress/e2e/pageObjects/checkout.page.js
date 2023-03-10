class CheckoutPage{

	get btnCheckout(){
		return ('.snipcart-cart__footer-buttons button.snipcart-button-primary')
	}

	get btnContinuePayment(){
		return ('.snipcart-form__footer button[type=submit]')
	}

	get shippingMethodsHeader(){
		return ('snipcart-featured-payment-methods h3')
	}

	get shippingMethodsHeader(){
		return ('snipcart-featured-payment-methods h3')
	}

	get nameText(){
		return ('#snipcart-billing-form input[name=name]')
	}

	get emailText(){
		return ('#snipcart-billing-form input[name=email]')
	}

	get streetText(){
		return ('#snipcart-billing-form input[name=address1]')
	}
	
	get aptText(){
		return ('#snipcart-billing-form input[name=address2]')
	}
	
	get cityText(){
		return ('#snipcart-billing-form input[name=city]')
	}
	
	get countryDropdown(){
		return ('#snipcart-billing-form select[name=country]')
	}

	get countryText(){
		return ('#snipcart-billing-form > div.snipcart__box > div:nth-child(3)  .snipcart-form__set div.snipcart-form__field:nth-child(3)')
	}
	
	get emailError(){
		return ('#snipcart-billing-form > .snipcart__box > fieldset:nth-child(2) .snipcart-form__field:nth-child(2) .snipcart-field-error');
	}

	get cityError(){
		return ('#snipcart-billing-form > .snipcart__box > div:nth-child(3) .snipcart-form__set .snipcart-form__field:nth-child(2) .snipcart-field-error')
	}

	get countryError(){
		return ('#snipcart-billing-form > .snipcart__box > div:nth-child(3) .snipcart-form__set .snipcart-form__field:nth-child(3) .snipcart-field-error')
	}

	get provinceText(){
		return ('#snipcart-billing-form input[name=province]')
	}

	get zipCodeText(){
		return ('#snipcart-billing-form input[name=postalCode]')
	}

	get zipCodeError(){
		return ('#snipcart-billing-form > .snipcart__box > div:nth-child(3) .snipcart-form__set .snipcart-form__row:nth-child(4) .snipcart-field-error')
	}

	get checkoutTotal(){
		return ('.snipcart-summary-fees__total .snipcart-summary-fees__amount')
	}

	get invoiceNumber(){
		return ('div.snipcart-order__invoice-number .snipcart-order__invoice-number--highlight')
	}

	get invoiceCreditCard(){
		return ('div.snipcart-order__card')
	}

	get invoiceAddress(){
		return ('div.snipcart-billing-completed .snipcart-checkout-step__col:nth-child(2) .snipcart-billing-completed__information')
	}

	getShoppingCartSummaryItemNameSelector(itemNumber){
		return `ul.snipcart-cart-summary-items-list .snipcart-cart-summary-item:nth-child(${itemNumber}) .snipcart-cart-summary-item__name`
	}

	getShoppingCartSummaryItemPriceSelector(itemNumber){
		return `ul.snipcart-cart-summary-items-list .snipcart-cart-summary-item:nth-child(${itemNumber}) .snipcart-cart-summary-item__name`
	}

	getInvoiceSummaryItemNameSelector(itemNumber){
		return `ul.snipcart-cart-summary-items-list .snipcart-cart-summary-expanded-item:nth-child(${itemNumber}) >div:first-child  .snipcart-cart-summary-expanded-item__name`
	}

	getInvoiceSummaryItemPriceSelector(itemNumber){
		return `ul.snipcart-cart-summary-items-list .snipcart-cart-summary-expanded-item:nth-child(${itemNumber}) >div:nth-child(3) `
	}

	fillShippingForm(name, email, street, apt, city, country, province, postalCode){
		cy.get(this.nameText).type(name);
		cy.get(this.emailText).type(email);
		cy.get(this.aptText).type(apt);
		cy.get(this.cityText).type(city);
		cy.get(this.zipCodeText).type(postalCode);
		cy.get(this.countryText).type("Jamaica{downArrow}{enter}");
		cy.wait(1500);
		cy.get(this.provinceText).type(province);
	}
}
export default new CheckoutPage();