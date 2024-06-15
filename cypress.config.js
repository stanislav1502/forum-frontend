import { defineConfig } from "cypress";

export default defineConfig({
    baseUrl: 'http://localhost:5173/', // UI server port
    video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
