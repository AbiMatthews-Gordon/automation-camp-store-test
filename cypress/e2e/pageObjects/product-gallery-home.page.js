class ProductGallery{

    get automationCamptStore(){
        return ('#__next #logo div h2');
    }

    get btnHome(){
        return ('#top-home');
    }

    get btnAbout(){
        return ('#top-about');
    }

    get btnContact(){
        return ('#top-contact');
    }

    get btnCart(){
        return ('#top-cart');
    }

    get btnSignout(){
        return ('#top-sign-out');
    }

    get aboutRedirectedUrl(){
        return 'https://qualityworkscg.com/automation-bootcamp/#';
    }

    get shopNow(){
        return ('');
    }

    get qualityItem(){
        return ('');
    }

    get shopForWide(){
        return ('');
    }

    get youtubeSelector(){
        return ('');
    }

    get sortOptions(){
        return ('[id="field-:r2:-label"]');
    }

    get sort(){
        return ('#sort');
    }

    get search(){
        return ('[id="field-:r3:-label"]');
    }

    get searchTextField(){
        return ('#search');
    }

    get selectCategory(){
        return ('#category option:nth-child(1)');
    }

    get category(){
        return ('[id="field-:r4:-label"]');
    }

    get resetFilters(){
        return ('[id="field-:r5:-label"]');
    }

    get btnReset(){
        return ('#reset span');
    }


}
export default new ProductGallery();