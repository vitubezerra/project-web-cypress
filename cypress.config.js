const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto-web-ambev',
      reportPageTitle: 'Projeto-web-ambev2',
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    baseUrl: "https://front.serverest.dev",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);    
    },
  },
});