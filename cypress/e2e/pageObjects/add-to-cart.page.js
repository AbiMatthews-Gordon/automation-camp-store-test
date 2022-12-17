class Products{

    get qualityTruckerHat(){
        return ('#product-1 div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p');
    }
    
    get qualityTruckerHatPrice(){
        return ('#product-1 div:nth-child(2) > div:nth-child(1) > div:nth-child(3) p');
    }

    get qualityTruckerHatCategory(){
        return ('#product-1 div:nth-child(2) > div:nth-child(1) > div:nth-child(3) span');
    }

    get qualityTruckerHatQuantity(){
        return ('#product-1 .chakra-numberinput input');
    }

    get qualityTruckerHatImage(){
        return ('#product-1 .chakra-image');
    }

    get btnQualityTruckerHat(){
        return ('#product-1 #add-to-cart');
    }

    get selectSortDropDown() { 
        return ('#sort'); 
    }

    get cartIcon(){
        return ('#top-cart');
    }

    get cartSummaryHeader(){
        return ('#snipcart .snipcart-cart-header');
    }

    get cartSummaryItemName(){
        return ('.snipcart-item-list >li:nth-child(1) .snipcart-item-line__title');
    }

    get cartSummaryQuantity(){
        return ('.snipcart-item-quantity__quantity > .snipcart__font--secondary');
    }

    get cartTotalQuantity(){
        return ('.snipcart-cart-header__option');
    }

    get cartSummaryPrice(){
        return ('.snipcart-item-quantity__total-price');
    }

    get cartSummaryPriceTotal(){
        return ('.snipcart-summary-fees__item .snipcart-summary-fees__amount');
    }

    get continueShopping(){
        return ('.snipcart-modal__close-title');
    }

    get btnBackToStore(){
        return ('.snipcart-button-secondary');
    }

    //cart selectors
    get increaseCartBtn(){
        return ('[aria-label="Increment quantity"]');
    }

    get decreaseCartBtn(){
        return ('[aria-label="Decrement quantity"]');
    }

    selectSort(sort) {
        cy.get(this.selectSortDropDown).select(sort)
    }

    addToCart(productNumber){
        let addToCartBtn = this.getAddToCartSelector(productNumber);

        cy.get(addToCartBtn).scrollIntoView();
        cy.wait(1500);

        cy.get(addToCartBtn).should('be.visible')
        cy.get(addToCartBtn).click()
    }
    
    navigateToCart(){
        cy.get(this.cartIcon).click()
    }
    
    removeFromCart(itemNumber){
        let removeFromCartBtn = this.getRemoveFromCartSelector(itemNumber);

        cy.get(removeFromCartBtn).should('be.visible')
        cy.get(removeFromCartBtn).click()
    }

    getAddToCartSelector(productNumber){
        return `#product-${productNumber} #add-to-cart`;
    }

    getRemoveFromCartSelector(itemNumber){
        return `.snipcart-item-line:nth-child(${itemNumber})  [title="Remove item"]`;
    }

    getCartSummaryItemName(cartItemNumber){
        return `.snipcart-item-list >li:nth-child(${cartItemNumber}) .snipcart-item-line__title`;
    }

}

export default new Products();