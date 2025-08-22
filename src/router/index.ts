import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../views/AboutUs.vue";
import Contact from "../views/Contact.vue";
import Download from "../views/Download.vue";
import Home from "../views/Home.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import DeleteAccount from "@/views/DeleteAccount.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: AboutUs,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyPolicy,
    },
    {
      path: "/download",
      name: "download",
      component: Download,
    },
    {
      path: "/deletemyaccount",
      name: "deletemyaccount",
      component: DeleteAccount
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (e.g., back button), use it
    if (savedPosition) {
      return savedPosition;
    }
    // If there's a hash (anchor link), scroll to that element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    // Otherwise, scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
