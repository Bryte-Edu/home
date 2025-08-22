<script setup lang="ts">
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  HomeIcon
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { supabase } from "@/lib/supabaseClient";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
  category: "general",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

// FAQ state management
const faqs = ref([
  { isOpen: false },
  { isOpen: false },
  { isOpen: false },
  { isOpen: false }
]);

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    content: "bryteedu@protonmail.com",
    description: "Send us an email and we'll respond within 3 business days (probably sooner!)",
  },
  {
    icon: HomeIcon,
    title: "Community Server",
    content: "Join our Discord community",
    description: "Connect with other users, share tips, and get help from our team",
    link: "https://discord.gg/bryte"
  },
  // {
  //   icon: PhoneIcon,
  //   title: "Call Us",
  //   content: "+1 (555) 123-4567",
  //   description: "Available Monday-Friday, 9 AM - 6 PM PST",
  // },
  // {
  //   icon: MapPinIcon,
  //   title: "Visit Us",
  //   content: "123 Innovation Drive, San Francisco, CA 94105",
  //   description: "Our headquarters in the heart of Silicon Valley",
  // },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Contact Us",
    content: "Available 24/7",
    description: "Contact us for any inquiries from the forum available below, or through the email.",
  }
];

// const offices = [
//   {
//     city: "San Francisco",
//     country: "United States",
//     address: "123 Innovation Drive, CA 94105",
//     timezone: "PST (UTC-8)",
//   },
//   {
//     city: "London",
//     country: "United Kingdom",
//     address: "45 Tech Square, London EC2A 4DN",
//     timezone: "GMT (UTC+0)",
//   },
//   {
//     city: "Singapore",
//     country: "Singapore",
//     address: "88 Marina Bay, Singapore 018956",
//     timezone: "SGT (UTC+8)",
//   },
// ];

const submitForm = async () => {
  isSubmitting.value = true;

  await supabase.from("contact").insert({
    full_name: form.value.name,
    email: form.value.email,
    subject: form.value.subject,
    message: form.value.message,
    category: form.value.category,
  })

  isSubmitting.value = false;
  isSubmitted.value = true;

  // Reset form
  setTimeout(() => {
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
      category: "general",
    };
    isSubmitted.value = false;
  }, 3000);
};
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="section-premium-lg relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-lavender-50 via-background to-brand-navy-50 dark:from-brand-navy-950 dark:via-background dark:to-brand-lavender-950/20 pointer-events-none">
      </div>

      <div class="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="heading-hero text-5xl lg:text-7xl mb-8 animate-fade-in-up">
            Get in Touch
          </h1>
          <p class="subheading-premium text-xl lg:text-2xl leading-relaxed animate-fade-in-up-delay">
            Have questions about Bryte? Want to partner with us? We'd love to
            hear from you. Reach out and let's start a conversation about the
            future of education.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div
          class="flex flex-col lg:flex-row justify-center gap-8 animate-fade-in-up"
        >
          <div
            v-for="(info, index) in contactInfo"
            :key="info.title"
            class="card-premium text-center group interactive-premium"
            :style="{ animationDelay: `${index * 100}ms`, pointerEvents: 'auto', position: 'relative', zIndex: '20' }"
          >
            <component
              :is="info.icon"
              class="w-12 h-12 text-brand-navy-600 dark:text-brand-lavender-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 class="text-xl font-manrope font-bold mb-2 text-foreground">
              {{ info.title }}
            </h3>
            <p class="text-brand-navy-700 text-lg dark:text-brand-lavender-300 font-medium mb-2">
              {{ info.content }}
            </p>
            <p class="subheading-premium text-md">{{ info.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Form & Map Section -->
    <section class="section-premium gradient-overlay-primary">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div class="animate-fade-in-up">
            <h2 class="heading-premium text-3xl lg:text-4xl mb-8">
              Send us a Message
            </h2>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="name"
                    class="block text-md font-medium text-foreground mb-2"
                  >Full Name</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:ring-2 focus:ring-brand-lavender-400 focus:border-brand-lavender-400 transition-all duration-300 text-foreground placeholder-muted-foreground"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-md font-medium text-foreground mb-2"
                  >Email Address</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:ring-2 focus:ring-brand-lavender-400 focus:border-brand-lavender-400 transition-all duration-300 text-foreground placeholder-muted-foreground"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  for="category"
                  class="block text-md font-medium text-foreground mb-2"
                >Category</label>
                <select
                  id="category"
                  v-model="form.category"
                  class="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:ring-2 focus:ring-brand-lavender-400 focus:border-brand-lavender-400 transition-all duration-300 text-foreground"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales & Partnerships</option>
                  <option value="press">Press & Media</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div>
                <label
                  for="subject"
                  class="block text-md font-medium text-foreground mb-2"
                >Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:ring-2 focus:ring-brand-lavender-400 focus:border-brand-lavender-400 transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  for="message"
                  class="block text-md font-medium text-foreground mb-2"
                >Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:ring-2 focus:ring-brand-lavender-400 focus:border-brand-lavender-400 transition-all duration-300 resize-vertical text-foreground placeholder-muted-foreground"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting || isSubmitted"
                class="w-full bg-brand-navy-600 hover:bg-brand-navy-700 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <span
                  v-if="isSubmitting"
                  class="flex items-center justify-center"
                >
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    >
                    </circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    >
                    </path>
                  </svg>
                  Sending...
                </span>
                <span v-else-if="isSubmitted" class="text-green-400"
                >Message Sent! ✓</span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>

          <!-- Office Locations -->
          <!-- <div class="animate-fade-in-up-delay" v-if="offices.length > 0">
            <h2 class="heading-premium text-3xl lg:text-4xl mb-8">
              Our Global Offices
            </h2>

            <div class="space-y-6">
              <div
                v-for="(office, index) in offices"
                :key="office.city"
                class="card-premium group interactive-premium"
                :style="{ animationDelay: `${index * 150}ms`, pointerEvents: 'auto', position: 'relative', zIndex: '20' }"
              >
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-brand-navy-100 dark:bg-brand-navy-800 rounded-lg flex items-center justify-center group-hover:bg-brand-lavender-100 dark:group-hover:bg-brand-lavender-900 transition-colors duration-300">
                    <GlobeAltIcon
                      class="w-6 h-6 text-brand-navy-600 dark:text-brand-lavender-400"
                    />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-manrope font-bold text-foreground mb-1">
                      {{ office.city }}
                    </h3>
                    <p class="text-muted-foreground mb-2">
                      {{ office.country }}
                    </p>
                    <p class="text-sm text-muted-foreground mb-1">
                      {{ office.address }}
                    </p>
                    <div class="flex items-center space-x-2 text-sm text-brand-navy-600 dark:text-brand-lavender-400">
                      <ClockIcon class="w-4 h-4" />
                      <span>{{ office.timezone }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-premium">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-5xl mb-6">
            Frequently Asked Questions
          </h2>
          <p class="subheading-premium text-xl max-w-3xl mx-auto">
            Quick answers to common questions. Can't find what you're looking
            for? Send us a message above.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6 animate-fade-in-up-delay">
          <!-- FAQ 1 -->
          <div
            @click="faqs[0].isOpen = !faqs[0].isOpen"
            class="card-premium group interactive-premium faq-item cursor-pointer"
            style="pointer-events: auto; position: relative; z-index: 20;"
          >
            <div
              class="faq-header text-lg font-manrope font-bold text-foreground group-hover:text-brand-navy-700 dark:group-hover:text-brand-lavender-300 transition-colors duration-300 flex items-center justify-between"
              style="pointer-events: auto; cursor: pointer;"
            >
              <span>How quickly can I expect a response?</span>
              <svg
                :class="['w-5 h-5 faq-arrow', faqs[0].isOpen ? 'rotated' : '']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Transition name="faq-content" mode="out-in">
              <div v-if="faqs[0].isOpen" key="content-0" class="mt-4 faq-content">
                <p class="subheading-premium">
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent technical issues, our live chat support
                  is available 24/7.
                </p>
              </div>
            </Transition>
          </div>

          <!-- FAQ 2 -->
          <!-- <div
            @click="faqs[1].isOpen = !faqs[1].isOpen"
            class="card-premium group interactive-premium faq-item cursor-pointer"
            style="pointer-events: auto; position: relative; z-index: 20;"
          >
            <div
              class="faq-header text-lg font-manrope font-bold text-foreground group-hover:text-brand-navy-700 dark:group-hover:text-brand-lavender-300 transition-colors duration-300 flex items-center justify-between"
              style="pointer-events: auto; cursor: pointer;"
            >
              <span>Do you offer phone support?</span>
              <svg
                :class="['w-5 h-5 faq-arrow', faqs[1].isOpen ? 'rotated' : '']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Transition name="faq-content" mode="out-in">
              <div v-if="faqs[1].isOpen" key="content-1" class="mt-4 faq-content">
                <p class="subheading-premium">
                  Yes! Phone support is available for Pro and Institution plan users
                  during business hours (9 AM - 6 PM PST). Free users can access our
                  comprehensive help center and live chat.
                </p>
              </div>
            </Transition>
          </div> -->

          <!-- FAQ 3 -->
          <div
            @click="faqs[2].isOpen = !faqs[2].isOpen"
            class="card-premium group interactive-premium faq-item cursor-pointer"
            style="pointer-events: auto; position: relative; z-index: 20;"
          >
            <div
              class="faq-header text-lg font-manrope font-bold text-foreground group-hover:text-brand-navy-700 dark:group-hover:text-brand-lavender-300 transition-colors duration-300 flex items-center justify-between"
              style="pointer-events: auto; cursor: pointer;"
            >
              <span>Can I schedule a demo for my institution?</span>
              <svg
                :class="['w-5 h-5 faq-arrow', faqs[2].isOpen ? 'rotated' : '']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Transition name="faq-content" mode="out-in">
              <div v-if="faqs[2].isOpen" key="content-2" class="mt-4 faq-content">
                <p class="subheading-premium">
                  Absolutely! We'd love to show you how Bryte can transform learning
                  at your institution. Select "Sales & Partnerships" in the form
                  above and mention you'd like to schedule a demo.
                </p>
              </div>
            </Transition>
          </div>

          <!-- FAQ 4 -->
          <div
            @click="faqs[3].isOpen = !faqs[3].isOpen"
            class="card-premium group interactive-premium faq-item cursor-pointer"
            style="pointer-events: auto; position: relative; z-index: 20;"
          >
            <div
              class="faq-header text-lg font-manrope font-bold text-foreground group-hover:text-brand-navy-700 dark:group-hover:text-brand-lavender-300 transition-colors duration-300 flex items-center justify-between"
              style="pointer-events: auto; cursor: pointer;"
            >
              <span>Are you hiring?</span>
              <svg
                :class="['w-5 h-5 faq-arrow', faqs[3].isOpen ? 'rotated' : '']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Transition name="faq-content" mode="out-in">
              <div v-if="faqs[3].isOpen" key="content-3" class="mt-4 faq-content">
                <p class="subheading-premium">
                  We're always looking for talented individuals who share our
                  passion for education. Contact us through mail, or server, or reach out
                  using the "Careers" category above.
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-premium bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-700 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <div class="container mx-auto px-8 lg:px-16 xl:px-24 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h2 class="text-4xl lg:text-6xl font-manrope font-bold leading-tight text-glow">
            Let's Build the Future of Education Together
          </h2>
          <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
            Whether you have questions, ideas, or want to explore partnerships,
            we're here to listen and collaborate on making education better for
            everyone.
          </p>
          <div class="pt-8">
            <router-link
              to="/"
              class="inline-block bg-brand-lavender-400 hover:bg-brand-lavender-500 text-brand-navy-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              Explore Bryte
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
