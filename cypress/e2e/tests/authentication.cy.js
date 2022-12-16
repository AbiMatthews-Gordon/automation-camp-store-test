import Login from '../pageObjects/authentication.page';
import loginData, { login } from '../data/authentication.data';
const {faker} = require('@faker-js/faker');

describe('The user', () => {

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
    });

    it('should be able to login successfully', () => {
        
        //log in with valid credential
        Login.login(loginData.login.email, loginData.login.password);
        //sign out after successful login
        Login.signout();
    });

    it('should not login with invalid email credentials', () => {

        //log in with invalid credential
        Login.login(faker.internet.email(), loginData.login.password);
        //asserting the invalid credential
        cy.get(Login.invalidLoginErrorMessage).should('have.text', loginData.login.errorMessage);
    });

    it('should not login with invalid password credentials', () => {

        //log in with invalid credential
        Login.login(loginData.login.email, faker.internet.password());
        //asserting the invalid credential
        cy.get(Login.invalidLoginErrorMessage).should('have.text', loginData.login.errorMessage);
    });

    it('should allow users to signup with valid credentials', () => {
        
        //sign up with valid credential
        Login.login(loginData.signup.email, loginData.signup.password);
        //sign out after successful login
        Login.signout();
    });

    //should not signup with invalid email credential
    it('should not allow users to signup with invalid email credential', () => {

        //insert invalid email
        login.login(faker.internet.email(), loginData.signup.password);

        //check if the details entered exist already from saved signup.data.json file


    });

    //should not signup with invalid password credential
    // it('should not allow users to signup with invalid password credential', () => {

    //insert invalid email
    //login.login(loginData.signup.email, faker.internet.password(), );

     //check if the details entered exist already from saved signup.data.json file

    // });
});