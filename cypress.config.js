const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
require('dotenv').config(); // Carrega as variáveis do .env

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());

      // Injeta variáveis de ambiente no Cypress
      config.env = {
        ...config.env, // Mantém as variáveis existentes
        email: process.env.CYPRESS_EMAIL,
        password: process.env.CYPRESS_PASSWORD,
      };

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: false,
  },
});
