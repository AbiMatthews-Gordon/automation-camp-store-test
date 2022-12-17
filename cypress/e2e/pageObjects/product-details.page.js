class ProductDetails{

    get productQualityHatImageHomePage(){
        return ('#product-0 > .css-5ge9zd > .chakra-aspect-ratio > .chakra-image');
    }

    get productTitle(){
        return ('.css-egoftb > :nth-child(1) > .chakra-heading');
    }

    get productDescription(){
        return ('.css-egoftb > :nth-child(2)');
    }

    get productPrice(){
        return ('.css-egoftb > :nth-child(3) > :nth-child(2)');
    }

    get productQuantity(){
        return ('.chakra-numberinput__field');
    }

    get productCategory(){
        return (':nth-child(5) > .css-1ccau2i');
    }

    get productAddToCartbtn(){
        return ('#add-to-cart');
    }

    get productDetailImageOne(){
        return ('.thumbs > .selected');
    }

    get productDetailImageTwo(){
        return ('.thumbs > [aria-label="slide item 2"]');
    }

    get productRelatedProducts(){
        return ('.css-ual471 > :nth-child(3)');
    }

    get productRelatedImage(){
        return ('.chakra-aspect-ratio > .chakra-image');
    }

    get productRelatedImageName(){
        return ('.css-1n64n71');
    }

    get productRelatedImagePrice(){
        return ('.css-46p1lt > .chakra-stack > .chakra-text');
    }

    get productRelatedImageCategory(){
        return ('.css-46p1lt > .chakra-stack > .css-1ccau2i');
    }

    get backToProducts(){
        return ('.css-dpkrn2 > .chakra-heading');
    }

}
export default new ProductDetails();