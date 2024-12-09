const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://mock-lloydsbank.com',
        specPattern: 'cypress/integration/**/*.spec.js',
        supportFile: 'cypress/support/index.js',
    },
});
