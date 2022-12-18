class Contact{

    get btnContact(){
        return ('#top-contact');
    }

    get firstnameTextField(){
        return ('#firstName');
    }

    get firstnameErrorMessage(){
        return ('[id="field-:r6:-feedback"]');
    }

    get lastnameTextField(){
        return ('#lastName');
    }

    get lastnameErrorMessage(){
        return ('[id="field-:r7:-feedback"]');
    }

    get emailTextField(){
        return ('#email');
    }

    get emailErrorMessage(){
        return ('[id="field-:r8:-feedback"]');
    }

    get subjectTextField(){
        return ('#subject');
    }

    get subjectErrorMessage(){
        return ('[id="field-:r9:-feedback"]');
    }

    get messageTextField(){
        return ('#message');
    }

    get messageErrorMessage(){
        return ('[id="field-:ra:-feedback"]');
    }

    get btnSentMessage(){
        return ('.css-1pdqelo button span svg');
    }

    get wantToGetInTouch(){
        return ('.css-103gdes h2');
    }

    get reachOut(){
        return ('.css-103gdes h2+p');
    }

    get qualityEmail(){
        return ('[href="mailto:info@qualityworkscg.com"] > .chakra-stack > .chakra-text');
    }

    get qualityLinkedin(){
        return ('[href="https://www.linkedin.com/company/qualityworks-consulting-group-llc"] > .chakra-stack > .chakra-text');
    }

    get qualityTwitter(){
        return ('[href="https://twitter.com/qualityworkscg"] > .chakra-stack');
    }

    get confirmationMessage(){
        return ('#chakra-toast-manager-bottom .chakra-toast');
    }

    contactForm(firstname, lastname, email, subject, message){
        cy.get(this.firstnameTextField).type(firstname);
        cy.get(this.lastnameTextField).type(lastname);
        cy.get(this.emailTextField).type(email);
        cy.get(this.subjectTextField).type(subject);
        cy.get(this.messageTextField).type(message);

        cy.get(this.btnSentMessage).click();
    }

    contactFormNoFirstname(lastname, email, subject, message){
        cy.get(this.lastnameTextField).type(lastname);
        cy.get(this.emailTextField).type(email);
        cy.get(this.subjectTextField).type(subject);
        cy.get(this.messageTextField).type(message);

        cy.get(this.btnSentMessage).click();
    }

    contactFormNoLastname(firstname, email, subject, message){
        cy.get(this.firstnameTextField).type(firstname);
        cy.get(this.emailTextField).type(email);
        cy.get(this.subjectTextField).type(subject);
        cy.get(this.messageTextField).type(message);

        cy.get(this.btnSentMessage).click();
    }

    contactFormNoESM(firstname, lastname){
        cy.get(this.firstnameTextField).type(firstname);
        cy.get(this.lastnameTextField).type(lastname);

        cy.get(this.btnSentMessage).click();
    }

}
export default new Contact();