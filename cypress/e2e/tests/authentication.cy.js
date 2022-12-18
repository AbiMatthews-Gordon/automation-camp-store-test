import Authentication from '../pageObjects/authentication.page';
import loginData from '../data/authentication.data';
const {faker} = require('@faker-js/faker');

describe('Verify that the user ', () => {

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
    });

    it('is able to login successfully with valid email and password', () => {
        
        //log in with valid credential
        Authentication.login(loginData.login.email, loginData.login.password);
        //sign out after successful login
        Authentication.signout();
    });

    it('is not able to login with invalid email credentials', () => {

        //log in with invalid credential
        Authentication.login(faker.internet.email(), loginData.login.password);
        //asserting the invalid credential
        cy.get(Authentication.invalidLoginErrorMessage).should('have.text', loginData.login.errorMessage);
    });

    it('is not able to login with incorrect password credentials', () => {

        //log in with invalid credential
        Authentication.login(loginData.login.email, faker.internet.password());
        //asserting the invalid credential
        cy.get(Authentication.invalidLoginErrorMessage).should('have.text', loginData.login.errorMessage);
    });

    it('is able to signup with valid email and password', () => {
        
        //sign up with valid credential
        Authentication.login(loginData.signup.email, loginData.signup.password);
        //sign out after successful login
        Authentication.signout();
    });

    //should not signup with existing email 
    it('is not able to signup with an existing email', () => {

        //insert invalid email
        Authentication.signup(loginData.signup.email, faker.internet.password());
        //asserting already existing credential
        cy.get(Authentication.invalidSignupErrorMessage).should('have.text', loginData.signup.errorMessage);
    });

    //check for invalid email
    it('is not able to signup with invalid email ', () => {

        //insert invalid email
        Authentication.signup(loginData.signup.wrongFormatEmail, faker.internet.password());
        //assert the correct email format
        cy.get(Authentication.emailInvalidMessage).should('have.text', loginData.signup.emailInvalidMessage);
    });

    //check for emtpy fields
    it('is not able to signup with empty input fields', () => {

        cy.get(Authentication.btnSigninOrRegister).click();
        cy.get(Authentication.btnLogIn).click();

        cy.get(Authentication.emailError).should('have.text', loginData.signup.emptyEmailField);
        cy.get(Authentication.passwordError).should('have.text', loginData.signup.emptyPasswordField);
    });

  
});