<script setup lang="ts">
import {
  CogIcon,
  DocumentTextIcon,
  EyeIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/24/outline";

const lastUpdated = "August 3, 2025";

const principles = [
  {
    icon: ShieldCheckIcon,
    title: "Data Protection",
    description:
      "We use industry-standard encryption and security measures to protect your personal information.",
  },
  {
    icon: EyeIcon,
    title: "Transparency",
    description:
      "We clearly explain what data we collect, how we use it, and give you control over your information.",
  },
  {
    icon: CogIcon,
    title: "User Control",
    description:
      "You have the right to access, modify, or delete your personal data at any time.",
  },
  {
    icon: DocumentTextIcon,
    title: "Compliance",
    description:
      "We comply with GDPR, CCPA, and other applicable privacy regulations worldwide.",
  },
];
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="section-premium-lg relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-lavender-50 via-background to-brand-navy-50 dark:from-brand-navy-950 dark:via-background dark:to-brand-lavender-950/20">
      </div>

      <div class="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="heading-hero text-5xl lg:text-7xl mb-8 animate-fade-in-up">
            Privacy Policy
          </h1>
          <p class="subheading-premium text-xl lg:text-2xl leading-relaxed animate-fade-in-up-delay">
            Your privacy is fundamental to everything we do. Learn how we
            collect, use, and protect your information while delivering the best
            possible learning experience.
          </p>
          <p class="text-muted-foreground mt-4">
            Last updated: {{ lastUpdated }}
          </p>
        </div>
      </div>
    </section>

    <!-- Privacy Principles -->
    <section class="section-premium">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="heading-premium text-4xl lg:text-5xl mb-6">
            Our Privacy Principles
          </h2>
          <p class="subheading-premium text-xl max-w-3xl mx-auto">
            These principles guide how we handle your data and protect your
            privacy at every step.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up-delay">
          <div
            v-for="(principle, index) in principles"
            :key="principle.title"
            class="card-premium text-center group"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <component
              :is="principle.icon"
              class="w-12 h-12 text-brand-navy-600 dark:text-brand-lavender-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 class="text-lg font-manrope font-bold mb-3 text-foreground">
              {{ principle.title }}
            </h3>
            <p class="subheading-premium text-sm leading-relaxed">
              {{ principle.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="section-premium gradient-overlay-primary">
      <div class="container mx-auto px-8 lg:px-16 xl:px-24">
        <div class="max-w-4xl mx-auto prose prose-lg dark:prose-invert animate-fade-in-up">
          <h2 class="heading-premium text-3xl lg:text-4xl mb-6">
            1. Information We Collect
          </h2>

          <h3 class="text-2xl font-manrope font-bold text-foreground mb-4">
            Information You Provide
          </h3>
          <p class="subheading-premium mb-6">
            When you create an account, use our services, or contact us, we may
            collect:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            <li>
              Personal information such as your name, email address, and profile
              information
            </li>
            <li>
              Educational information like learning preferences, goals, and
              progress
            </li>
            <li>Communication data when you contact our support team</li>
            <li>
              Payment information for premium subscriptions (processed securely
              by our payment partners)
            </li>
          </ul>

          <h3 class="text-2xl font-manrope font-bold text-foreground mb-4">
            Automatically Collected Information
          </h3>
          <p class="subheading-premium mb-6">
            To improve our services and provide personalized experiences, we
            automatically collect:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            <li>
              Usage data including pages visited, features used, and time spent
              learning
            </li>
            <li>
              Device information such as browser type, operating system, and IP
              address
            </li>
            <li>Performance data to help us optimize the platform</li>
            <li>
              Cookies and similar technologies for authentication and
              preferences
            </li>
          </ul>

          <h2 class="heading-premium text-3xl lg:text-4xl mb-6 mt-12">
            2. How We Use Your Information
          </h2>

          <p class="subheading-premium mb-6">
            We use your information to provide, improve, and personalize our
            educational services:
          </p>

          <div class="space-y-6">
            <div class="card-premium">
              <h4 class="text-xl font-manrope font-bold text-foreground mb-3">
                Educational Services
              </h4>
              <p class="subheading-premium">
                Delivering personalized AI tutoring, tracking your progress,
                recommending courses, and adapting content to your learning
                style and goals.
              </p>
            </div>

            <div class="card-premium">
              <h4 class="text-xl font-manrope font-bold text-foreground mb-3">
                Platform Improvement
              </h4>
              <p class="subheading-premium">
                Analyzing usage patterns to enhance our features, fix bugs, and
                develop new educational tools and experiences.
              </p>
            </div>

            <div class="card-premium">
              <h4 class="text-xl font-manrope font-bold text-foreground mb-3">
                Communication
              </h4>
              <p class="subheading-premium">
                Sending important updates about your account, new features,
                educational content, and responding to your support requests.
              </p>
            </div>

            <div class="card-premium">
              <h4 class="text-xl font-manrope font-bold text-foreground mb-3">
                Safety & Security
              </h4>
              <p class="subheading-premium">
                Protecting our platform and users from fraud, abuse, and
                security threats while maintaining a safe learning environment.
              </p>
            </div>
          </div>

          <h2 class="heading-premium text-3xl lg:text-4xl mb-6 mt-12">
            3. Information Sharing
          </h2>

          <p class="subheading-premium mb-6">
            We do not sell your personal information. We may share information
            only in these limited circumstances:
          </p>

          <ul class="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
            <li>
              <strong>Service Providers:</strong> Trusted partners who help us
              operate our platform (hosting, analytics, payment processing)
              under strict data protection agreements
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or to protect our rights and the safety of our users
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger or
              acquisition, with advance notice to users
            </li>
            <li>
              <strong>With Your Consent:</strong> Any other sharing will require
              your explicit consent
            </li>
          </ul>

          <h2 class="heading-premium text-3xl lg:text-4xl mb-6 mt-12">
            4. Data Security
          </h2>

          <p class="subheading-premium mb-6">
            We implement robust security measures to protect your information:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="card-premium">
              <h4 class="text-lg font-manrope font-bold text-foreground mb-3">
                Encryption
              </h4>
              <p class="subheading-premium text-sm">
                All data is encrypted in transit and at rest using
                industry-standard protocols.
              </p>
            </div>
            <div class="card-premium">
              <h4 class="text-lg font-manrope font-bold text-foreground mb-3">
                Access Controls
              </h4>
              <p class="subheading-premium text-sm">
                Strict access controls ensure only authorized personnel can
                access user data.
              </p>
            </div>
            <div class="card-premium">
              <h4 class="text-lg font-manrope font-bold text-foreground mb-3">
                Regular Audits
              </h4>
              <p class="subheading-premium text-sm">
                We conduct regular security audits and penetration testing.
              </p>
            </div>
            <div class="card-premium">
              <h4 class="text-lg font-manrope font-bold text-foreground mb-3">
                Incident Response
              </h4>
              <p class="subheading-premium text-sm">
                Comprehensive incident response plan for any potential security
                issues.
              </p>
            </div>
          </div>

          <h2 class="heading-premium text-3xl lg:text-4xl mb-6 mt-12">
            5. Your Rights and Choices
          </h2>

          <p class="subheading-premium mb-6">
            You have several rights regarding your personal information:
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-brand-navy-600 dark:bg-brand-lavender-400 rounded-full mt-3 flex-shrink-0">
              </div>
              <div>
                <strong class="text-foreground">Access:</strong>
                <span class="subheading-premium ml-2"
                >Request a copy of your personal data</span>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-brand-navy-600 dark:bg-brand-lavender-400 rounded-full mt-3 flex-shrink-0">
              </div>
              <div>
                <strong class="text-foreground">Correction:</strong>
                <span class="subheading-premium ml-2"
                >Update or correct inaccurate information</span>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-brand-navy-600 dark:bg-brand-lavender-400 rounded-full mt-3 flex-shrink-0">
              </div>
              <div>
                <strong class="text-foreground">Deletion:</strong>
                <span class="subheading-premium ml-2"
                >Request deletion of your personal data</span>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-brand-navy-600 dark:bg-brand-lavender-400 rounded-full mt-3 flex-shrink-0">
              </div>
              <div>
                <strong class="text-foreground">Portability:</strong>
                <span class="subheading-premium ml-2"
                >Export your data in a machine-readable format</span>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-brand-navy-600 dark:bg-brand-lavender-400 rounded-full mt-3 flex-shrink-0">
              </div>
              <div>
                <strong class="text-foreground">Objection:</strong>
                <span class="subheading-premium ml-2"
                >Opt out of certain data processing activities</span>
              </div>
            </div>
          </div>

          <h2 class="heading-premium text-3xl lg:text-4xl mb-6 mt-12">
            6. Cookies and Tracking
          </h2>

          <p class="subheading-premium mb-6">
            We use cookies and similar technologies to enhance your experience.
            You can control cookies through your browser settings, though some
            features may not work properly if cookies are disabled.
          </p>

          <h2 class="heading-premium text-3xl lg:text-4xl mb-6 mt-12">
            7. International Data Transfers
          </h2>

          <p class="subheading-premium mb-6">
            Bryte operates globally. Your information may be transferred to and
            processed in countries other than your own. We ensure appropriate
            safeguards are in place for all international transfers.
          </p>

          <h2 class="heading-premium text-3xl lg:text-4xl mb-6 mt-12">
            8. Children's Privacy
          </h2>

          <p class="subheading-premium mb-6">
            We are committed to protecting children's privacy. If you are under
            13 (or the applicable age in your jurisdiction), you may only use
            Bryte with parental consent. We do not knowingly collect personal
            information from children without appropriate consent.
          </p>

          <h2 class="heading-premium text-3xl lg:text-4xl mb-6 mt-12">
            9. Changes to This Policy
          </h2>

          <p class="subheading-premium mb-6">
            We may update this privacy policy from time to time. We'll notify
            you of significant changes via email or through our platform. Your
            continued use of Bryte after changes constitutes acceptance of the
            updated policy.
          </p>

          <!-- <h2 class="heading-premium text-3xl lg:text-4xl mb-6 mt-12">
            10. Contact Us
          </h2>

          <p class="subheading-premium mb-6">
            If you have questions about this privacy policy or want to exercise
            your rights, please contact us:
          </p>

          <div class="card-premium">
            <div class="space-y-2">
              <p>
                <strong class="text-foreground">Email:</strong> <span
                  class="subheading-premium"
                >privacy@bryte.education</span>
              </p>
              <p>
                <strong class="text-foreground">Address:</strong> <span
                  class="subheading-premium"
                >Bryte Privacy Team, 123 Innovation Drive, San Francisco, CA
                  94105</span>
              </p>
              <p>
                <strong class="text-foreground"
                >Data Protection Officer:</strong> <span
                  class="subheading-premium"
                >dpo@bryte.education</span>
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-premium bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-700 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>

      <div class="container mx-auto px-8 lg:px-16 xl:px-24 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h2 class="text-4xl lg:text-6xl font-manrope font-bold leading-tight text-glow">
            Questions About Your Privacy?
          </h2>
          <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
            We're here to help. Reach out to our privacy team with any questions
            or concerns about how we handle your data.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <router-link
              to="/contact"
              class="inline-block bg-brand-lavender-400 hover:bg-brand-lavender-500 text-brand-navy-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              Contact Privacy Team
            </router-link>
            <router-link
              to="/"
              class="inline-block border-2 border-brand-lavender-300 bg-transparent hover:bg-brand-lavender-300 text-brand-lavender-300 hover:text-brand-navy-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 text-center"
            >
              Back to Bryte
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
