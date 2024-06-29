import allureWriter from '@shelex/cypress-allure-plugin/writer.js';
import { defineConfig } from 'cypress';

export default defineConfig({
  retries: 1,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      config.video = false;
      allureWriter(on, config);
      return config;
    },
  },
    
  "chromeWebSecurity":false 
    
});
