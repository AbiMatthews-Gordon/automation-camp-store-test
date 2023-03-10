const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://ui-automation-camp.vercel.app/',
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 15000,
  },
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  }
});
