<script setup lang="ts">
// Enhanced dark mode detection and toggle
import {
  AcademicCapIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CloudArrowDownIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PlayIcon,
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import AnalyticsDemo from "../components/ui/AnalyticsDemo.vue";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FilledButton from "../components/ui/FilledButton.vue";
import TonalButton from "../components/ui/TonalButton.vue";

const features = [
  {
    icon: CpuChipIcon,
    title: "AI-Powered Tutoring",
    description:
      "Get instant, personalized help from our advanced AI tutor that understands your learning style and adapts to your pace.",
  },
  {
    icon: ChartBarIcon,
    title: "Advanced Analytics",
    description:
      "Track your progress with beautiful, insightful dashboards that show your strengths and areas for improvement.",
  },
  {
    icon: GlobeAltIcon,
    title: "Multilingual Support",
    description:
      "Learn in your preferred language with seamless translation and localization for global accessibility.",
  },
  {
    icon: UserGroupIcon,
    title: "Collaborative Learning",
    description:
      "Connect with peers, join study groups, and learn together in our vibrant educational community.",
  },
  {
    icon: SparklesIcon,
    title: "Personalized Paths",
    description:
      "AI creates custom learning journeys tailored to your goals, interests, and current knowledge level.",
  },
  {
    icon: AcademicCapIcon,
    title: "Expert Content",
    description:
      "Access curated content from top educators and institutions, verified for quality and accuracy.",
  },
];

const stats = [
  { number: "10K+", label: "Students Learning" },
  { number: "500+", label: "Courses Available" },
  { number: "95%", label: "Success Rate" },
  { number: "4.8/5", label: "User Rating" },
];

const testimonials = [
  {
    name: "Liam K.",
    role: "University of Toronto",
    avatar:
      "https://images.pexels.com/photos/6754848/pexels-photo-6754848.jpeg",
    content:
      "I was really struggling with data structures, especially sorting algorithms. Bryte's interactive explanations and practice problems didn't just help me pass my midterm, they actually made the concepts click. My grade improved by a full letter grade.",
  },
  {
    name: "Sarah Mendez",
    role: "Medical Student",
    avatar:
      "https://images.pexels.com/photos/11113729/pexels-photo-11113729.jpeg",
    content: "Before a big test, I used to feel so disorganized. This app changed all that. It creates custom quizzes based on my weak spots and gives me a clear breakdown of my progress. I felt confident walking into my AP Biology exam because I knew I had covered everything I needed to."
  },
  {
    name: "Elena Rodriguez",
    role: "High School Senior",
    avatar:
      "https://images.pexels.com/photos/7955835/pexels-photo-7955835.jpeg",
    content:
      "Before a test, I'd just reread my notes and hope for the best. This app is way smarter than that. The advanced analytics showed me exactly which concepts I was weak on, and the personalized quizzes focused only on those topics. It feels less like studying and more like a cheat code for passing."
  },
];

const screenshots = [
  {
    src: "/1.jpg",
    alt: "Bryte Dashboard - Overview of learning progress and achievements",
  },
  {
    src: "/2.jpg",
    alt: "AI Tutor Interface - Interactive learning with personalized guidance",
  },
  {
    src: "/3.jpg",
    alt: "Course Catalog - Discover thousands of courses across all subjects",
  },
  {
    src: "/4.jpg",
    alt: "Analytics Dashboard - Detailed insights into learning patterns",
  },
  {
    src: "/5.jpg",
    alt: "Study Groups - Collaborate with peers in virtual study rooms",
  },
  {
    src: "/6.jpg",
    alt: "Mobile Learning - Learn anywhere with our responsive mobile app",
  },
];

const pricingPlans = [
  {
    name: "Student",
    price: "Free",
    description: "Perfect for individual learners getting started",
    features: [
      "Access to 100+ courses",
      "Basic AI tutoring",
      "Progress tracking",
      "Mobile app access",
    ],
  },
  {
    name: "Pro",
    price: "$4.99/month",
    description: "Advanced features for serious learners",
    features: [
      "Unlimited course access",
      "Advanced AI tutoring",
      "Detailed analytics",
      "Priority support",
      "Offline downloads",
      "Study groups",
    ],
    popular: true,
  },
  {
    name: "Institution",
    price: "Custom",
    description: "Tailored solutions for schools and organizations",
    features: [
      "Everything in Pro",
      "Custom branding",
      "Admin dashboard",
      "Bulk user management",
      "API access",
      "Dedicated support",
    ],
  },
];
</script>

<template>
  <div>
    <!-- Premium Hero Section -->
    <section class="section-premium-lg relative overflow-hidden">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-brand-lavender-50 via-background to-brand-navy-50
        dark:from-brand-navy-950 dark:via-background dark:to-brand-lavender-950/20 pointer-events-none">
      </div>

      <!-- Animated Orbs (hidden or lighter on mobile for performance) -->
      <div class="hidden sm:block absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r
                  from-brand-lavender-300/20 to-brand-navy-400/20 rounded-full blur-3xl animate-float">
      </div>
      <div class="hidden sm:block absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r
                  from-brand-navy-400/20 to-brand-lavender-400/20 rounded-full blur-3xl animate-float"
        style="animation-delay: 1s">
      </div>

      <!-- Grid Overlay (lighter on mobile) -->
      <div class="absolute inset-0 opacity-10 sm:opacity-30 pointer-events-none"
        style="background-image: radial-gradient(circle at 1px 1px, rgba(205, 205, 255, 0.15) 1px, transparent 0); background-size: 40px 40px">
      </div>

      <div class="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 justify-between">
          <div class="flex flex-col items-center lg:items-start space-y-8 lg:w-[60%]">
            <div class="text-center lg:text-left space-y-6 animate-fade-in-up">
              <h1 class="heading-hero text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
                Transform Learning with AI
              </h1>
              <h2 class="subheading-premium text-lg sm:text-xl lg:text-2xl max-w-2xl leading-relaxed">
                Bryte empowers students worldwide with personalized AI
                tutoring, advanced analytics, and collaborative learning
                experiences that adapt to your unique learning style.
              </h2>
            </div>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up-delay">
              <FilledButton href="#features" title="Start Learning Free" class="w-full sm:w-auto" />
              <TonalButton href="#analytics" title="See How It Works" class="w-full sm:w-auto" />
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12 animate-scale-in">
              <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left group">
                <div
                  class="text-2xl sm:text-3xl lg:text-4xl font-manrope font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {{ stat.number }}
                </div>
                <div class="text-sm font-medium text-muted-foreground">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="lg:w-[30%] relative animate-scale-in mt-8 lg:mt-0">
            <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium">
              <img src="/1.jpg" alt="Bryte AI Education Platform"
                class="w-full h-auto transform hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="section-premium gradient-overlay-primary">
      <div class="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-12 sm:mb-20 animate-fade-in-up">
          <h2 class="heading-premium text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6">
            Powerful Features for Modern Learning
          </h2>
          <p class="subheading-premium text-base sm:text-xl lg:text-2xl max-w-3xl sm:max-w-4xl mx-auto">
            Discover how Bryte's cutting-edge features transform the way you
            learn, teach, and grow with sophisticated AI-powered tools.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 animate-fade-in-up-delay">
          <div v-for="(feature, index) in features" :key="feature.title" class="card-premium group p-6 sm:p-8"
            :style="{ animationDelay: `${index * 100}ms` }">
            <component :is="feature.icon"
              class="w-10 h-10 sm:w-12 sm:h-12 text-brand-navy-600 dark:text-brand-lavender-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 class="text-xl sm:text-2xl font-manrope font-bold mb-3 sm:mb-4 text-foreground">{{ feature.title }}</h3>
            <p class="subheading-premium text-sm sm:text-base leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="section-premium">
      <div class="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-12 sm:mb-20 animate-fade-in-up">
          <h2 class="heading-premium text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6">
            Loved by Learners Worldwide
          </h2>
          <p class="subheading-premium text-base sm:text-xl lg:text-2xl max-w-3xl sm:max-w-4xl mx-auto">
            See what students, teachers, and institutions are saying about their
            transformative experience with Bryte.
          </p>
        </div>

        <!-- Carousel for mobile -->
        <div class="lg:hidden">
          <Carousel class="w-full">
            <CarouselContent>
              <CarouselItem v-for="testimonial in testimonials" :key="testimonial.name">
                <div class="card-premium text-center p-6">
                  <div class="flex justify-center mb-4">
                    <star-icon v-for="i in 5" :key="i" class="w-5 h-5 text-secondary fill-current" />
                  </div>
                  <p class="text-base sm:text-lg text-muted-foreground mb-6 italic leading-relaxed">
                    "{{ testimonial.content }}"
                  </p>
                  <div class="flex items-center justify-center space-x-3">
                    <img :src="testimonial.avatar" :alt="testimonial.name"
                      class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-border" />
                    <div class="text-left">
                      <div class="font-manrope font-bold text-foreground text-sm sm:text-base">
                        {{ testimonial.name }}
                      </div>
                      <div class="text-xs sm:text-sm text-muted-foreground">{{ testimonial.role }}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <!-- Grid for desktop -->
        <div class="hidden lg:grid grid-cols-3 gap-10 animate-fade-in-up-delay">
          <div v-for="(testimonial, index) in testimonials" :key="testimonial.name"
            class="card-premium text-center group" :style="{ animationDelay: `${index * 150}ms` }">
            <div class="flex justify-center mb-6">
              <star-icon v-for="i in 5" :key="i" class="w-6 h-6 text-secondary fill-current" />
            </div>
            <p class="text-lg text-muted-foreground mb-8 italic leading-relaxed">
              "{{ testimonial.content }}"
            </p>
            <div class="flex items-center justify-center space-x-4">
              <img :src="testimonial.avatar" :alt="testimonial.name"
                class="w-16 h-16 rounded-full object-cover ring-2 ring-border" />
              <div class="text-left">
                <div class="font-manrope font-bold text-foreground">
                  {{ testimonial.name }}
                </div>
                <div class="text-muted-foreground">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Pricing Section -->
    <section id="pricing" class="section-premium gradient-overlay-secondary">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-20 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-6xl mb-6">
            Choose Your Learning Journey
          </h2>
          <p class="subheading-premium text-xl lg:text-2xl max-w-4xl mx-auto">
            From individual learners to large institutions, we have a plan that
            fits your needs perfectly.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-up-delay">
          <div v-for="(plan, index) in pricingPlans" :key="plan.name" class="card-premium relative group flex flex-col"
            :class="{
              'ring-2 ring-brand-lavender-400 scale-105 shadow-premium': plan.popular,
            }" :style="{ animationDelay: `${index * 100}ms` }">
            <div v-if="plan.popular"
              class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-navy-600 to-brand-lavender-500 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide">
              Most Popular
            </div>

            <div class="text-center mb-4">
              <h3 class="text-3xl font-manrope font-bold text-foreground mb-3">
                {{ plan.name }}
              </h3>
              <div class="text-2xl font-manrope font-semibold text-brand-navy-700 dark:text-slate-300 mb-3">
                {{ plan.price }}
              </div>
              <p class="subheading-premium">{{ plan.description }}</p>
            </div>

            <ul class="space-y-4 mb-6">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center space-x-3">
                <check-circle-icon class="w-6 h-6 text-accent flex-shrink-0" />
                <span class="text-muted-foreground">{{ feature }}</span>
              </li>
            </ul>

            <div class="mt-auto">
              <FilledButton v-if="plan.popular" href="#" title="Start Free Trial" />
              <TonalButton class="bottom-[-8]" v-else-if="plan.name === 'Student'" href="/download"
                title="Get Started" />
              <TonalButton v-else href="#" onclick="return false;" title="Available Soon" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Screenshots Section -->
    <section class="section-premium">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-20 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-6xl mb-6">
            See Bryte in Action
          </h2>
          <p class="subheading-premium text-xl lg:text-2xl max-w-4xl mx-auto">
            Explore the beautiful, intuitive interface designed for modern
            learning experiences.
          </p>
        </div>

        <!-- Premium Desktop view -->
        <div class="hidden lg:grid grid-cols-3 gap-8 animate-fade-in-up-delay">
          <div v-for="(screenshot, index) in screenshots" :key="screenshot.src"
            class="group relative overflow-hidden rounded-3xl shadow-premium-lg hover:shadow-premium transition-all duration-500"
            :style="{ animationDelay: `${index * 100}ms` }">
            <img :src="screenshot.src" :alt="screenshot.alt"
              class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <p class="font-medium">{{ screenshot.alt }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Premium Mobile carousel -->
        <div class="lg:hidden">
          <Carousel class="w-full">
            <CarouselContent>
              <CarouselItem v-for="screenshot in screenshots" :key="screenshot.src">
                <div class="rounded-3xl overflow-hidden shadow-premium-lg">
                  <img :src="screenshot.src" :alt="screenshot.alt" class="w-full h-80 object-cover" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>

    <!-- Premium Analytics Section -->
    <section id="analytics" class="section-premium gradient-overlay-primary">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-20 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-6xl mb-6">
            Powerful Analytics & Insights
          </h2>
          <p class="subheading-premium text-xl lg:text-2xl max-w-4xl mx-auto">
            Track your progress, understand your learning patterns, and optimize
            your study time with detailed analytics powered by AI.
          </p>
        </div>

        <div class="animate-scale-in">
          <AnalyticsDemo />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 animate-fade-in-up-delay">
          <div class="card-premium text-center group">
            <chart-bar-icon
              class="w-16 h-16 text-brand-navy-600 dark:text-brand-lavender-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 class="text-2xl font-manrope font-bold mb-4">
              Progress Tracking
            </h3>
            <p class="subheading-premium">
              Visualize your learning journey with beautiful charts and detailed
              progress reports.
            </p>
          </div>

          <div class="card-premium text-center group">
            <cpu-chip-icon
              class="w-16 h-16 text-brand-navy-600 dark:text-brand-lavender-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 class="text-2xl font-manrope font-bold mb-4">AI Insights</h3>
            <p class="subheading-premium">
              Get personalized recommendations and insights powered by advanced
              machine learning.
            </p>
          </div>

          <div class="card-premium text-center group">
            <user-group-icon
              class="w-16 h-16 text-brand-navy-600 dark:text-brand-lavender-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 class="text-2xl font-manrope font-bold mb-4">
              Performance Comparison
            </h3>
            <p class="subheading-premium">
              Compare your performance with peers and identify areas for
              improvement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium CTA Section -->
    <section
      class="section-premium bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-700 text-white relative overflow-hidden">
      <!-- Enhanced Background Effects -->
      <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lavender-400/20 rounded-full blur-3xl animate-float">
        </div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
          style="animation-delay: 2s">
        </div>
      </div>

      <div class="container mx-auto px-8 lg:px-16 xl:px-24 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h2 class="text-5xl lg:text-7xl font-manrope font-bold leading-tight text-glow">
            Ready to Transform Your Learning?
          </h2>
          <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
            Join millions of students worldwide who are already using Bryte to
            achieve their educational goals and unlock their potential.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a href="#"
              class="btn-premium bg-brand-lavender-300 text-brand-navy-900 hover:bg-brand-lavender-200 px-10 py-4 text-lg font-bold border-0">
              Start Learning
            </a>
            <a href="#"
              class="btn-premium border-1 border-brand-lavender-600 text-brand-lavender-300 hover:bg-brand-lavender-300 hover:text-brand-navy-900 px-10 py-4 text-lg font-bold">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
