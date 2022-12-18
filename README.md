# Automation Camp Store Testing

This is a Cypress Test Automation project for the Automation Camp Store website, which can be found at https://ui-automation-camp.vercel.app/. It carries out the following workflows:

* Cart
* Search 
* Contact 
* Checkout
* Add to cart
* Authentication
* Filter and sort
* Product details
* Product gallery home page

It also includes Data-Driven Tests, Negative Tests, Sorts and the Mochaawesome reporter.

---

## Instructions

1. Clone the repository
2. Navigate to the project's root directory in your Terminal.
3. Enter the command **npm install** to install the ***dependencies***.
4. Enter the given commands below to run tests.

---

## Commands

* To execute a single test in command line:
```bash
npx cypress run --spec < path >
```
Examples
```bash
    npx cypress run --spec cypress/e2e/tests/cart.cy.js
```
```bash
    npx cypress run --spec cypress/e2e/tests/search.cy.js
```
```bash
    npx cypress run --spec cypress/e2e/tests/contact.cy.js
```
```bash
    npx cypress run --spec cypress/e2e/tests/checkout.cy.js
```
```bash
    npx cypress run --spec cypress/e2e/tests/add-to-cart.cy.js
```
```bash
    npx cypress run --spec cypress/e2e/tests/authentication.cy.js
```
```bash
    npx cypress run --spec cypress/e2e/tests/filter-and-sort.cy.js
```
```bash
    npx cypress run --spec cypress/e2e/tests/product-details.cy.js
```
```bash
    npx cypress run --spec cypress/e2e/tests/product-gallery-home.cy.js
```
* To execute tests in Cypress
```bash
    npx cypress open
```

---
## Reporter

* To execute tests in Mochawesome reporter
```bash
    npx cypress run --reporter mochawesome
```
* To execute individual tests in mochawesome
```bash
    npx cypress run --spec cypress/e2e/tests/cart.cy.js --reporter mochawesome
```
```bash
    npx cypress run --spec cypress/e2e/tests/search.cy.js --reporter mochawesome
```
```bash
    npx cypress run --spec cypress/e2e/tests/contact.cy.js --reporter mochawesome
```
```bash
    npx cypress run --spec cypress/e2e/tests/checkout.cy.js --reporter mochawesome
```
```bash
    npx cypress run --spec cypress/e2e/tests/add-to-cart.cy.js --reporter mochawesome
```
```bash
    npx cypress run --spec cypress/e2e/tests/authentication.cy.js --reporter mochawesome
```
```bash
    npx cypress run --spec cypress/e2e/tests/filter-and-sort.cy.js --reporter mochawesome
```
```bash
    npx cypress run --spec cypress/e2e/tests/product-details.cy.js --reporter mochawesome
```
```bash
    npx cypress run --spec cypress/e2e/tests/product-gallery-home.cy.js --reporter mochawesome
```


