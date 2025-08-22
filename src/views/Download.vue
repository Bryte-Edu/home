<script setup lang="ts">
import {
  AcademicCapIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CloudArrowDownIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  PlayIcon,
  StarIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

const selectedPlatform = ref("mobile");

const platforms: Array<{
  id: string;
  name: string;
  icon: any;
  description: string;
}> = []

// {
//   id: "mobile",
//   name: "Mobile Apps",
//   icon: DevicePhoneMobileIcon,
//   description: "Learn on the go with our iOS and Android apps",
// },
// {
//   id: "desktop",
//   name: "Desktop Apps",
//   icon: ComputerDesktopIcon,
//   description:
//     "Full-featured desktop experience for Windows, macOS, and Linux",
// },
// {
//   id: "web",
//   name: "Web App",
//   icon: CloudArrowDownIcon,
//   description:
//     "Access Bryte directly from your browser - no download required",
// },

const features = [
  "Instant access to all your courses and notes anywhere",
  "AI-generated quizzes from your own uploaded PDFs and notes",
  "Personalized learning paths tailored to your strengths and weaknesses",
  "Gamified quiz interface with rewards and progress tracking",
  "Detailed analytics and feedback to help you improve faster",
  "Smart reminders to keep your learning on track",
  "Seamless sync across all your devices",
  "Secure cloud backup for your study materials",
];

const systemRequirements: Record<string, Record<string, string>> = {
  mobile: {
    ios: "Coming soon...", //"iOS 14.0 or later, 2GB RAM recommended",
    android: "Android 8.0 (API level 26) or later",
  },
  desktop: {
    windows: "Windows 10 or later, 4GB RAM, 2GB free storage",
    mac: "macOS 11.0 or later, 4GB RAM, 2GB free storage",
    linux: "Ubuntu 18.04+ or equivalent, 4GB RAM, 2GB free storage",
  },
  web: {
    browsers: "Chrome 90+, Firefox 88+, Safari 14+, Edge 90+",
  },
};

const stats = [
  { number: "4K+", label: "Downloads" },
  { number: "4.8★", label: "Average User Rating" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
];

const testimonials = [
  {
    name: "Liam K.",
    role: "University of Toronto",
    rating: 5,
    content:
      "I was really struggling with data structures, especially sorting algorithms. Bryte's interactive explanations and practice problems didn't just help me pass my midterm, they actually made the concepts click. My grade improved by a full letter grade.",
  },
  {
    name: "Sarah Mendez",
    role: "Medical Student",
    rating: 5,
    content: "Before a big test, I used to feel so disorganized. This app changed all that. It creates custom quizzes based on my weak spots and gives me a clear breakdown of my progress. I felt confident walking into my AP Biology exam because I knew I had covered everything I needed to."
  },
  {
    name: "Elena Rodriguez",
    role: "High School Senior",
    rating: 5,
    content:
      "Before a test, I'd just reread my notes and hope for the best. This app is way smarter than that. The advanced analytics showed me exactly which concepts I was weak on, and the personalized quizzes focused only on those topics. It feels less like studying and more like a cheat code for passing."
  }
];

const getCurrentFeatures = () => {
  return features;
};

const getCurrentRequirements = () => {
  return systemRequirements[selectedPlatform.value];
};
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="section-premium pt-[12rem] lg:section-premium-lg relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-brand-lavender-50 via-background to-brand-navy-50 dark:from-brand-navy-950 dark:via-background dark:to-brand-lavender-950/20">
      </div>

      <!-- Animated Orbs -->
      <div
        class="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-brand-lavender-300/20 to-brand-navy-400/20 rounded-full blur-3xl animate-float">
      </div>
      <div
        class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-brand-navy-400/20 to-brand-lavender-400/20 rounded-full blur-3xl animate-float"
        style="animation-delay: 1s">
      </div>

      <div class="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="heading-hero text-5xl lg:text-7xl mb-8 animate-fade-in-up">
            Download Bryte
          </h1>
          <p class="subheading-premium text-xl lg:text-2xl leading-relaxed animate-fade-in-up-delay">
            Take your learning anywhere with Bryte's powerful apps and web
            platform. Seamless AI-powered education across all your devices.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto animate-scale-in">
          <div v-for="stat in stats" :key="stat.label" class="text-center group">
            <div
              class="text-3xl lg:text-4xl font-manrope font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              {{ stat.number }}
            </div>
            <div class="text-sm font-medium text-muted-foreground">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Selection -->
    <section class="section-premium">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-5xl mb-6">
            Choose Your Platform
          </h2>
          <p class="subheading-premium text-xl max-w-3xl mx-auto">
            Bryte works seamlessly across all platforms. Pick your preferred way
            to learn and get started.
          </p>
        </div>

        <!-- Platform Tabs -->
        <div class="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto animate-fade-in-up-delay">
          <button v-for="platform in platforms" :key="platform.id" @click="selectedPlatform = platform.id" :class="[
            'flex-1 p-6 rounded-xl border-2 transition-all duration-300 text-left',
            selectedPlatform === platform.id
              ? 'border-brand-lavender-400 bg-brand-lavender-50 dark:bg-brand-lavender-950/20'
              : 'border-border hover:border-brand-lavender-300 bg-background',
          ]">
            <div class="flex items-center space-x-4">
              <component :is="platform.icon" :class="[
                'w-8 h-8 transition-colors duration-300',
                selectedPlatform === platform.id
                  ? 'text-brand-lavender-600 dark:text-brand-lavender-400'
                  : 'text-muted-foreground',
              ]" />
              <div>
                <h3 :class="[
                  'font-manrope font-bold text-lg transition-colors duration-300',
                  selectedPlatform === platform.id
                    ? 'text-brand-lavender-700 dark:text-brand-lavender-300'
                    : 'text-foreground',
                ]">
                  {{ platform.name }}
                </h3>
                <p class="text-sm text-muted-foreground">
                  {{ platform.description }}
                </p>
              </div>
            </div>
          </button>
        </div>

        <!-- Platform Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in-up">
          <!-- Download Links & Info -->
          <div>
            <h3 class="text-3xl font-manrope font-bold text-foreground mb-8">
              Get Bryte for mobile {{
                platforms.find(p => p.id === selectedPlatform)
                  ?.name
              }}
            </h3>

            <!-- Mobile Downloads -->
            <div v-if="selectedPlatform === 'mobile'" class="space-y-6">
              <div class="flex flex-col sm:flex-row gap-4">
                <!-- <a

                  class="btn-premium bg-black text-white hover:bg-gray-800 px-8 py-4 flex items-center space-x-3"
                >
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div class="text-left">
                    <div class="text-xs">Download on the</div>
                    <div class="text-lg font-bold">App Store</div>
                  </div>
                </a> -->

                <a href="https://play.google.com/store/apps/details?id=dev.pranav.bryte"
                  class="btn-premium bg-black text-white hover:bg-gray-800 px-8 py-4 flex items-center space-x-3">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div class="text-left">
                    <div class="text-xs">Get it on</div>
                    <div class="text-lg font-bold">Google Play</div>
                  </div>
                </a>
              </div>

              <div class="card-premium">
                <h4 class="font-manrope font-bold text-foreground mb-3">
                  System Requirements
                </h4>
                <div class="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>iOS:</strong> {{ getCurrentRequirements().ios }}
                  </p>
                  <p>
                    <strong>Android:</strong> {{
                      getCurrentRequirements().android
                    }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Desktop Downloads -->
            <div v-else-if="selectedPlatform === 'desktop'" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="#"
                  class="btn-premium bg-brand-navy-600 hover:bg-brand-navy-700 text-white px-6 py-4 text-center">
                  <div class="text-lg font-bold">Windows</div>
                  <div class="text-xs opacity-80">Download .exe</div>
                </a>
                <a href="#"
                  class="btn-premium bg-brand-navy-600 hover:bg-brand-navy-700 text-white px-6 py-4 text-center">
                  <div class="text-lg font-bold">macOS</div>
                  <div class="text-xs opacity-80">Download .dmg</div>
                </a>
                <a href="#"
                  class="btn-premium bg-brand-navy-600 hover:bg-brand-navy-700 text-white px-6 py-4 text-center">
                  <div class="text-lg font-bold">Linux</div>
                  <div class="text-xs opacity-80">Download .AppImage</div>
                </a>
              </div>

              <div class="card-premium">
                <h4 class="font-manrope font-bold text-foreground mb-3">
                  System Requirements
                </h4>
                <div class="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Windows:</strong> {{
                      getCurrentRequirements().windows
                    }}
                  </p>
                  <p>
                    <strong>macOS:</strong> {{ getCurrentRequirements().mac }}
                  </p>
                  <p>
                    <strong>Linux:</strong> {{ getCurrentRequirements().linux }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Web App -->
            <div v-else class="space-y-6">
              <a href="#"
                class="btn-premium bg-brand-lavender-600 hover:bg-brand-lavender-700 text-white px-12 py-6 text-xl font-bold inline-block">
                Launch Bryte Web App
              </a>

              <div class="card-premium">
                <h4 class="font-manrope font-bold text-foreground mb-3">
                  Browser Compatibility
                </h4>
                <p class="text-sm text-muted-foreground">
                  {{ getCurrentRequirements().browsers }}
                </p>
              </div>
            </div>

            <!-- QR Code for Mobile -->
            <!-- <div
              v-if="selectedPlatform === 'mobile'"
              class="mt-8 card-premium text-center"
            >
              <h4 class="font-manrope font-bold text-foreground mb-4">
                Quick Download
              </h4>
              <div class="w-32 h-32 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center">
                <p class="text-sm text-muted-foreground">QR Code</p>
              </div>
              <p class="text-sm text-muted-foreground">
                Scan with your phone to download
              </p>
            </div> -->
          </div>

          <!-- Features List -->
          <div>
            <h3 class="text-3xl font-manrope font-bold text-foreground mb-8">
              Platform Features
            </h3>

            <div class="space-y-4">
              <div v-for="feature in getCurrentFeatures()" :key="feature"
                class="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                <CheckCircleIcon class="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span class="text-muted-foreground">{{ feature }}</span>
              </div>
            </div>

            <!-- Feature Icons -->
            <div class="grid grid-cols-3 gap-6 mt-12">
              <div class="text-center">
                <CpuChipIcon class="w-12 h-12 text-brand-navy-600 dark:text-brand-lavender-400 mx-auto mb-3" />
                <p class="text-sm font-medium text-foreground">AI-Powered</p>
              </div>
              <div class="text-center">
                <ChartBarIcon class="w-12 h-12 text-brand-navy-600 dark:text-brand-lavender-400 mx-auto mb-3" />
                <p class="text-sm font-medium text-foreground">Analytics</p>
              </div>
              <div class="text-center">
                <AcademicCapIcon class="w-12 h-12 text-brand-navy-600 dark:text-brand-lavender-400 mx-auto mb-3" />
                <p class="text-sm font-medium text-foreground">
                  Expert Content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section class="section-premium gradient-overlay-primary">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24 grid gap-8">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-5xl mb-6">
            See Bryte in Action
          </h2>
          <p class="subheading-premium text-xl max-w-3xl mx-auto">
            Experience the beautiful, intuitive interface designed for seamless
            learning across all platforms.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up-delay">
          <div class="card-premium text-center group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/1.jpeg" alt="Bryte Dashboard - Personalized learning at your fingertips"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 class="text-xl font-manrope font-bold text-foreground mb-2">
              Personalized Learning
            </h3>
            <p class="subheading-premium text-sm">
              Tailor your journey with a dashboard that adapts to you.
            </p>
          </div>

          <div class="card-premium text-center group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/2.jpeg" alt="Gamified Learning - Engaging quizzes and interactive content"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 class="text-xl font-manrope font-bold text-foreground mb-2">
              Gamified Quizzes
            </h3>
            <p class="subheading-premium text-sm">
              Engage with interactive quizzes that make learning fun.
            </p>
          </div>

          <div class="card-premium text-center group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/3.jpeg" alt="AI Explanations - Detailed solutions powered by AI"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 class="text-xl font-manrope font-bold text-foreground mb-2">
              AI-Powered Explanations
            </h3>
            <p class="subheading-premium text-sm">
              Get detailed solutions and deep insights from our AI.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up-delay">
          <div class="card-premium text-center group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/4.jpeg" alt="Content Library - Upload and access diverse learning materials"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 class="text-xl font-manrope font-bold text-foreground mb-2">
              Extensive Content Library
            </h3>
            <p class="subheading-premium text-sm">
              Upload your own materials or explore our rich library.
            </p>
          </div>

          <div class="card-premium text-center group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/5.jpeg" alt="Bookmarks & Notes - Save and organize important content"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 class="text-xl font-manrope font-bold text-foreground mb-2">
              Bookmarks & Notes
            </h3>
            <p class="subheading-premium text-sm">
              Save key content and organize your thoughts with ease.
            </p>
          </div>

          <div class="card-premium text-center group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/6.jpeg" alt="Analytics Dashboard - Detailed insights into learning patterns"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 class="text-xl font-manrope font-bold text-foreground mb-2">
              Performance Analytics
            </h3>
            <p class="subheading-premium text-sm">
              Track your progress with detailed insights and reports.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-premium">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-5xl mb-6">
            What Users Are Saying
          </h2>
          <p class="subheading-premium text-xl max-w-3xl mx-auto">
            Millions of learners love using Bryte across all platforms. Here's
            what they have to say.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up-delay">
          <div v-for="(testimonial, index) in testimonials" :key="testimonial.name" class="card-premium group"
            :style="{ animationDelay: `${index * 150}ms` }">
            <div class="flex justify-center mb-4">
              <star-icon v-for="i in testimonial.rating" :key="i" class="w-5 h-5 text-secondary fill-current" />
            </div>
            <p class="text-muted-foreground mb-6 italic leading-relaxed">
              "{{ testimonial.content }}"
            </p>
            <div class="text-center">
              <div class="font-manrope font-bold text-foreground">
                {{ testimonial.name }}
              </div>
              <div class="text-muted-foreground text-sm">
                {{ testimonial.role }}
              </div>
              <!-- <div class="text-brand-navy-600 dark:text-brand-lavender-400 text-sm font-medium mt-1">
                {{ testimonial.platform }} User
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="section-premium bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-700 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lavender-400/20 rounded-full blur-3xl animate-float">
        </div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
          style="animation-delay: 2s">
        </div>
      </div>

      <div class="container mx-auto px-8 lg:px-16 xl:px-24 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h2 class="text-4xl lg:text-6xl font-manrope font-bold leading-tight text-glow">
            Start Learning Today
          </h2>
          <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
            Join millions of learners who are already using Bryte to achieve
            their educational goals. Download now and begin your learning
            journey.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a href="#"
              class="inline-block bg-brand-lavender-400 hover:bg-brand-lavender-500 text-brand-navy-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl">
              Download Now
            </a>
            <router-link to="/about"
              class="inline-block border-2 border-brand-lavender-300 bg-transparent hover:bg-brand-lavender-300 text-brand-lavender-300 hover:text-brand-navy-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 text-center">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
