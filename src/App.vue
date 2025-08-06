<script setup lang="ts">

import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import TonalButton from "./components/ui/TonalButton.vue";

const isDarkMode = ref(false);

// Check for saved dark mode preference or system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia
  && window.matchMedia("(prefers-color-scheme: dark)").matches;

// if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
isDarkMode.value = true;
document.documentElement.classList.add("dark");
// } else {
//   isDarkMode.value = false;
//   document.documentElement.classList.remove("dark");
// }

// Listen for system theme changes
// window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
//   "change",
//   (e) => {
//     if (!localStorage.getItem("theme")) {
//       if (e.matches) {
//         isDarkMode.value = true;
//         document.documentElement.classList.add("dark");
//       } else {
//         isDarkMode.value = false;
//         document.documentElement.classList.remove("dark");
//       }
//     }
//   },
// );

// // Toggle dark mode function
// const toggleDarkMode = () => {
//   isDarkMode.value = !isDarkMode.value;
//   if (isDarkMode.value) {
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// };
</script>

<template>
  <div class="min-h-screen">
    <!-- Premium Navigation Header -->
    <header class="fixed top-0 left-0 right-0 z-50 nav-premium">
      <div class="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto">
        <div class="flex items-center space-x-4 animate-fade-in-up">
          <img src="./assets/logo.svg" alt="Bryte logo" class="h-12 w-12" />
          <router-link
            to="/"
            class="text-3xl font-manrope font-bold tracking-tight text-foreground hover:text-brand-navy-700 dark:hover:text-brand-lavender-300 transition-colors duration-300"
          >
            Bryte
          </router-link>
        </div>
        <nav class="hidden md:flex items-center space-x-10 animate-fade-in-up-delay">

          <router-link
            to="/#pricing"
            class="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium focus-premium"
          >Pricing</router-link>
          <router-link
            to="/download"
            class="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium focus-premium"
          >Download</router-link>
          <router-link
            to="/about"
            class="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium focus-premium"
          >About</router-link>
          <router-link
            to="/contact"
            class="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium focus-premium"
          >Contact</router-link>
        </nav>
        <div class="flex items-center space-x-4 animate-fade-in-up-delay">
          <!-- Dark Mode Toggle -->
          <!-- <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 focus-premium"
            :aria-label="isDarkMode
            ? 'Switch to light mode'
            : 'Switch to dark mode'"
          >
            <SunIcon v-if="isDarkMode" class="w-5 h-5 text-foreground" />
            <MoonIcon v-else class="w-5 h-5 text-foreground" />
          </button> -->
          <TonalButton href="/#pricing" title="Get Started" />
        </div>
      </div>
    </header>

    <main class="relative">
      <router-view />
    </main>

    <!-- Premium Footer -->
    <footer class="bg-muted py-16">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-4 mb-6">
              <img src="./assets/logo.svg" alt="Bryte logo" class="h-10 w-10" />
              <span class="text-2xl font-manrope font-bold text-foreground"
              >Bryte</span>
            </div>
            <p class="subheading-premium mb-6 max-w-md leading-relaxed">
              Empowering learners worldwide with AI-driven education,
              personalized learning paths, and powerful analytics.
            </p>
            <div class="flex items-center space-x-3 text-muted-foreground">
              <span>Made with</span>
              <heart-icon class="w-5 h-5 text-red-500" />
              <span>for learners everywhere</span>
            </div>
          </div>

          <div>
            <h4 class="font-manrope font-bold text-foreground mb-6 text-lg">
              Product
            </h4>
            <ul class="space-y-4 text-muted-foreground">
              <li>
                <router-link
                  to="/#features"
                  class="hover:text-foreground transition-colors duration-300 focus-premium"
                >Features</router-link>
              </li>
              <li>
                <router-link
                  to="/#pricing"
                  class="hover:text-foreground transition-colors duration-300 focus-premium"
                >Pricing</router-link>
              </li>
              <li>
                <router-link
                  to="/#analytics"
                  class="hover:text-foreground transition-colors duration-300 focus-premium"
                >Analytics</router-link>
              </li>
              <li>
                <router-link
                  to="/download"
                  class="hover:text-foreground transition-colors duration-300 focus-premium"
                >Download</router-link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-manrope font-bold text-foreground mb-6 text-lg">
              Company
            </h4>
            <ul class="space-y-4 text-muted-foreground">
              <li>
                <router-link
                  to="/about"
                  class="hover:text-foreground transition-colors duration-300 focus-premium"
                >About Us</router-link>
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="hover:text-foreground transition-colors duration-300 focus-premium"
                >Contact</router-link>
              </li>
              <li>
                <router-link
                  to="/privacy"
                  class="hover:text-foreground transition-colors duration-300 focus-premium"
                >Privacy Policy</router-link>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-foreground transition-colors duration-300 focus-premium"
                >Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2025 Bryte. All rights reserved. Built with ❤️ for the future
            of education.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
