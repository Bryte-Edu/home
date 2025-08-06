import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeAnalytics } from "./lib/analytics";

// Initialize secure analytics
initializeAnalytics().catch(error => {
  console.warn('Analytics initialization failed:', error);
});

createApp(App)
  .use(router)
  .mount("#app");
