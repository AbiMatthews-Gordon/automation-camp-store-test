class Wishlist{

    get successfulAddedMessage(){
        return ('.chakra-toast:first-child');
    }

    get favouritesIcon(){
        return ('#top-favorite');
    }

    get removeFavouritePageMsg(){
        return ('.chakra-stack > .chakra-heading');
    }

    get favouritesItemName(){
        return ('.css-1oeb4ru > .chakra-text');
    }

    get btnRemove(){
        return ('#remove-favorite-btn');
    }

    get btnAddToCart(){
        return ('#add-to-cart');
    }

    get favouritesIconCount(){
        return ('');
    }

    getAddToFavouritesSelector(productNumber){
        return `#product-${productNumber} > div:nth-child(2) > .chakra-stack > .chakra-stack:first-child > div`;
    }
}
export default new Wishlist();