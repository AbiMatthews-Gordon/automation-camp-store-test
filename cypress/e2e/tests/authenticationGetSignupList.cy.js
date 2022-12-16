const fs = require('fs');

describe('Load signuplist list', () => {

    //this hook runs before each test
    beforeEach(() => {
        cy.visit("");
    });

    it('should get signup from signup page & save it to authentication json data file', async () => {

        //array to save multiple signup
        let signupList = [];

        //getting individual signups
        for (let i = 0; i < 20; i++) {

            //creating an empty object to store signup details
            let signup = {};

            //get the container
            //then get the name from inside the container
            //await cy.get()


            //adding signup to list
            signupList.push(signup);

        }
        const path = "cypress/e2e/data/products.data.json";
        cy.writeFile(path,

            `{
    "productsList":
        ${JSON.stringify(productsList, null, 4)}
    }`);
         });

});
