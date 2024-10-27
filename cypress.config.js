const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto-web-cypress',
      reportPageTitle: 'Projeto-web-cypress',
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: true,
    },
    baseUrl: "https://front.serverest.dev",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);    
    },
  },
});