import contact from '../pageObjects/contact.page';
import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
const {faker} = require('@faker-js/faker');
import routesData from '../data/routes.data';
import contactData from '../data/contact.data';

describe('The user', () => {

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");

        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
    });

    it('should submit contact form successfully', () => {

        // //check that url is products url
        cy.url().should('include', routesData.routes.products);

        //click contact button
        cy.get(contact.btnContact).click();

        //check that url is contact url
        cy.url().should('include', routesData.routes.contacts);

        //fillout form
        contact.contactForm(faker.name.firstName(), faker.name.lastName(), faker.internet.email(),
                            contactData.contacts.subject, contactData.contacts.message);

        // //check the confirmation message
        // cy.get(contact.confirmationMessage).should('have.text', contactData.contacts.confirmationMessageOne)
    });

    it('should not submit with missing firstname', () => {

        // //check that url is products url
        cy.url().should('include', routesData.routes.products);

        //click contact button
        cy.get(contact.btnContact).click();

        //check that url is contact url
        cy.url().should('include', routesData.routes.contacts);

        //fillout form
        contact.contactFormNoFirstname(faker.name.lastName(), faker.internet.email(),
                            contactData.contacts.subject, contactData.contacts.message);
        
        //check error message
        cy.get(contact.firstnameErrorMessage).should('be.visible');
        cy.get(contact.firstnameErrorMessage).should('have.text', contactData.contacts.errorMessage);

    });

    it('should not submit with missing lastname', () => {

        // //check that url is products url
        cy.url().should('include', routesData.routes.products);

        //click contact button
        cy.get(contact.btnContact).click();

        //check that url is contact url
        cy.url().should('include', routesData.routes.contacts);

        //fillout form
        contact.contactFormNoLastname(faker.name.firstName(), faker.internet.email(), contactData.contacts.subject, contactData.contacts.message);
        
        //check error message
        cy.get(contact.lastnameErrorMessage).should('be.visible');
        cy.get(contact.lastnameErrorMessage).should('have.text', contactData.contacts.errorMessage);
    });

    it('should not submit with missing email, subject & message', () => {

        // //check that url is products url
        cy.url().should('include', routesData.routes.products);

        //click contact button
        cy.get(contact.btnContact).click();

        //check that url is contact url
        cy.url().should('include', routesData.routes.contacts);

        //fillout form
        contact.contactFormNoESM(faker.name.firstName(), faker.name.firstName());
        
        //check error message
        cy.get(contact.emailErrorMessage).should('be.visible');
        cy.get(contact.emailErrorMessage).should('have.text', contactData.contacts.errorMessage);
        cy.get(contact.subjectErrorMessage).should('be.visible');
        cy.get(contact.subjectErrorMessage).should('have.text', contactData.contacts.errorMessage);
        cy.get(contact.messageErrorMessage).should('be.visible');
        cy.get(contact.messageErrorMessage).should('have.text', contactData.contacts.errorMessage);
    });

    it('should see various contact methods', () => {

        // //check that url is products url
        cy.url().should('include', routesData.routes.products);

        //click contact button
        cy.get(contact.btnContact).click();

        //check that url is contact url
        cy.url().should('include', routesData.routes.contacts);
        //check email
        cy.get(contact.qualityEmail).should('be.visible');
        cy.get(contact.qualityEmail).click();
        //check linkedin
        cy.get(contact.qualityLinkedin).should('be.visible');
        cy.get(contact.qualityLinkedin).click();
        //check twitter
        cy.get(contact.qualityTwitter).should('be.visible');
        cy.get(contact.qualityTwitter).click();
    });
});