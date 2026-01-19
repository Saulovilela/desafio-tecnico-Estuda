const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bstackdemo.com/",
    defaultCommandTimeout: 15000,

    screenshotOnRunFailure: true,

    video: true,
    videoCompression: 32,

    setupNodeEvents(on, config) {
      
    },
  },
});
