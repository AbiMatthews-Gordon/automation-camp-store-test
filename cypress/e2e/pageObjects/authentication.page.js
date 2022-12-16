class Login {

    get welcomeMessage() {
        return ('#login-text');
    }

    get btnSigninOrRegister() {
        return ('#signInOrRegister');
    }

    get loginQualityName() {
        return ('.auth0-lock-header-welcome .auth0-lock-name');
    }

    get loginName() {
        return ('.auth0-lock-tabs-container .auth0-lock-tabs-current');
    }

    get signInWithGoogle() {
        return ('.auth0-lock-social-button div:nth-child(2)');
    }

    //Login Selectors
    get emailTextField() {
        return ('[id="1-email"]');
    }

    get passwordTextField() {
        return ('[id="1-password"]');
    }

    get btnDontRememberPassword() {
        return ('a.auth0-lock-alternative-link');
    }

    get invalidLoginErrorMessage() {
        return ('.animated span');
    }

    //Login & Signout button
    get btnLogIn() {
        return ('span.auth0-label-submit');
    }

    get btnSignOut() {
        return ('button#top-sign-out');
    }

    //Signup Selectors
    get signupPageHeader() {
        return ('.auth0-lock-header-welcome > div');
    }

    get signupName() {
        return ('.auth0-lock-tabs li:nth-child(2)');
    }

    get signupWithGoogle() {
        return ('.auth0-lock-social-button div:nth-child(2)');
    }

    get signupPageDescription() {
        return ('.auth0-lock-terms span');
    }

    get invalidSignupErrorMessage(){
        return ('.animated span');
    }

    get emailInvalidMessage(){
        return ('.auth0-lock-error-invalid-hint');
    }

    get emailError(){
        return ('#auth0-lock-error-msg-email');
    }

    get passwordError(){
        return ('#auth0-lock-error-msg-password');
    }

    get signupTab(){
        return ('ul.auth0-lock-tabs > li:nth-child(2) a');
    }

    get btnSignup() {
        return ('span.auth0-label-submit');
    }

    //method to login
    login(email, password) {
        cy.get(this.btnSigninOrRegister).click();

        cy.get(this.emailTextField).type(email);
        cy.get(this.passwordTextField).type(password);
        cy.get(this.btnLogIn).click();
    };

    //method to signout
    signout() {
        cy.get(this.btnSignOut).click();
    }

    //method to signup
    signup(email, password) {

        //click the signupOrRegister button
        cy.get(this.btnSigninOrRegister).click();
        //click the signup tab
        cy.get(this.signupTab).click();
        //enter signup details
        cy.get(this.emailTextField).type(email);
        cy.get(this.passwordTextField).type(password);

        cy.get(this.btnSignup).click();
    }
}

export default new Login();