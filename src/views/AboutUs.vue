<script setup lang="ts">
import {
  AcademicCapIcon,
  GlobeAltIcon,
  HeartIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";

const team = [{
    name: "Pranav Purwar",
    role: "Co-founder",
    avatar: "https://avatars.githubusercontent.com/u/75154889",
    github: "https://github.com/PranavPurwar",
    bio: "A 17-year-old high school student with a passion for technology. He loves building innovative solutions to real-world problems.",
  },
  {
    name: "Nethical",
    role: "Co-founder",
    avatar: "https://avatars.githubusercontent.com/u/79095297",
    github: "https://github.com/nethical6",
    bio: "A 18-year-old high school student with a passion for technology and computers.",
  },
];

const values = [{
    icon: AcademicCapIcon,
    title: "Education First",
    description: "We believe quality education should be accessible to everyone, regardless of background or location.",
  },
  {
    icon: SparklesIcon,
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible with AI-powered learning technologies.",
  },
  {
    icon: UserGroupIcon,
    title: "Community",
    description: "Learning is better together. We foster a supportive community where everyone can thrive.",
  },
  {
    icon: GlobeAltIcon,
    title: "Global Impact",
    description: "Our mission is to transform education worldwide and create opportunities for all learners.",
  },
];

const milestones = [{
    date: "August 25, 2024",
    event: "Bryte was founded, aiming to revolutionize education"
  },
  {
    date: "September 14, 2025",
    event: "Launched closed beta on the Play Store"
  }
];

</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section
      class="section-premium pt-[12rem] lg:section-premium-lg relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-brand-lavender-50 via-background to-brand-navy-50 dark:from-brand-navy-950 dark:via-background dark:to-brand-lavender-950/20">
      </div>

      <div class="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="heading-hero text-5xl lg:text-7xl mb-8 animate-fade-in-up">
            About Bryte
          </h1>
          <p
            class="subheading-premium text-xl lg:text-2xl leading-relaxed animate-fade-in-up-delay">
            We're on a mission to transform education through AI, making quality
            learning accessible, personalized, and engaging for everyone,
            everywhere.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="section-premium">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="grid grid-cols-1 lg:grid-cols-[75%] gap-12 items-center">
          <div class="animate-fade-in-up">
            <h2 class="heading-premium text-4xl lg:text-5xl mb-8">
              Our Mission
            </h2>
            <p class="subheading-premium text-lg leading-relaxed mb-8">
              At Bryte, we believe that everyone deserves access to world-class
              education. Our AI-powered platform breaks down barriers to
              learning by providing personalized tutoring, adaptive content, and
              powerful analytics that help learners achieve their full
              potential.
            </p>
            <p class="subheading-premium text-lg leading-relaxed">
              We're building the future of education – one where technology
              enhances human connection, creativity flourishes, and every
              learner can succeed regardless of their starting point.
            </p>
          </div>
          <!-- <div class="animate-scale-in">
            <div class="relative rounded-3xl overflow-hidden shadow-premium">
              <img src="/1.jpeg" alt="Students learning with Bryte"
                class="w-full h-96 object-cover" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent">
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-premium gradient-overlay-primary">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-8 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-6xl mb-6">Our Values</h2>
          <p class="subheading-premium text-xl lg:text-2xl max-w-4xl mx-auto">
            These core principles guide everything we do and shape the way we
            build products and serve our community.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 animate-fade-in-up-delay">
          <div v-for="(value, index) in values" :key="value.title"
            class="card-premium text-center group"
            :style="{ animationDelay: `${index * 100}ms` }">
            <component :is="value.icon"
              class="w-16 h-16 text-brand-navy-600 dark:text-brand-lavender-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 class="text-xl font-manrope font-bold mb-4 text-foreground">
              {{ value.title }}
            </h3>
            <p class="subheading-premium text-md leading-relaxed">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-premium">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24 w-full">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-6xl mb-6">
            Meet Our Team
          </h2>
          <p class="subheading-premium text-xl lg:text-2xl max-w-4xl mx-auto">
            Passionate individuals with diverse backgrounds, united by a common
            goal: to revolutionize education through technology.
          </p>
        </div>
        <div class="flex justify-center">
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in-up-delay">
            <a v-for="(member, index) in team" :key="member.name"
              :href="member.github" target="_blank" rel="noopener noreferrer"
              class="card-premium text-center group"
              :style="{ animationDelay: `${index * 150}ms` }">
              <img :src="member.avatar" :alt="member.name"
                class="w-32 h-32 rounded-full object-cover mx-auto mb-6 ring-4 ring-border group-hover:ring-brand-lavender-400 transition-all duration-300" />
              <h3 class="text-xl font-manrope font-bold mb-2 text-foreground">
                {{ member.name }}
              </h3>
              <p
                class="text-brand-navy-600 dark:text-brand-lavender-400 font-medium mb-4">
                {{ member.role }}
              </p>
              <p class="subheading-premium text-md leading-relaxed">
                {{ member.bio }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <!-- <section class="section-premium gradient-overlay-secondary">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-20 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-6xl mb-6">Our Journey</h2>
          <p class="subheading-premium text-xl lg:text-2xl max-w-4xl mx-auto">
            From a small startup to a global platform serving millions of
            learners worldwide.
          </p>
        </div>

        <div class="max-w-4xl mx-auto animate-fade-in-up-delay">
          <div class="relative"> -->
    <!-- Timeline line -->
    <!-- <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-lavender-400">
            </div>

            <div class="space-y-12">
              <div
                v-for="(milestone, index) in milestones"
                :key="milestone.date"
                class="relative flex items-start space-x-8"
                :style="{ animationDelay: `${index * 200}ms` }"
              >
                <div class="card-premium flex-1 group">
                  <div class="text-2xl font-manrope font-bold text-brand-navy-700 dark:text-brand-lavender-400 mb-2">
                    {{ milestone.date }}
                  </div>
                  <p class="subheading-premium text-lg">
                    {{ milestone.event }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- CTA Section -->
    <section
      class="section-premium bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-700 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute top-0 left-0 w-full h-full">
        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lavender-400/20 rounded-full blur-3xl animate-float">
        </div>
        <div
          class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
          style="animation-delay: 2s">
        </div>
      </div>

      <div
        class="container mx-auto px-8 lg:px-16 xl:px-24 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h2
            class="text-4xl lg:text-6xl font-manrope font-bold leading-tight text-glow">
            Join Our Mission
          </h2>
          <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
            Be part of the education revolution. Whether you're a learner,
            educator, or simply someone who believes in the power of knowledge,
            there's a place for you in the Bryte community.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <router-link to="/"
              class="inline-block bg-brand-lavender-400 hover:bg-brand-lavender-500 text-brand-navy-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl">
              Start Learning
            </router-link>
            <router-link to="/contact"
              class="inline-block border-2 border-brand-lavender-300 bg-transparent hover:bg-brand-lavender-300 text-brand-lavender-300 hover:text-brand-navy-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 text-center">
              Get in Touch
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
