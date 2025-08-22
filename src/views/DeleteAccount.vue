<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  ExclamationTriangleIcon,
  TrashIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  HeartIcon
} from '@heroicons/vue/24/outline'
import { supabase } from '@/lib/supabaseClient'

const userEmail = ref('')
const userPassword = ref('')
const showPassword = ref(false)
const isDeleting = ref(false)
const showSnackbar = ref(false)
const confirmationText = ref('')
const snackbarMessage = ref('')
const snackbarType = ref<'success' | 'error'>('success')

const confirmationMatches = computed(() =>
  confirmationText.value === 'DELETE MY ACCOUNT'
)

const canDelete = computed(() =>
  userEmail.value.length > 0 &&
  userPassword.value.length > 0 &&
  confirmationMatches.value &&
  userEmail.value.includes('@') && userEmail.value.includes('.')
)

const deleteAccount = async () => {
  isDeleting.value = true

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail.value,
      password: userPassword.value
    })

    if (error) {
      snackbarType.value = 'error'
      snackbarMessage.value = 'Login failed: ' + error.message
      showSnackbar.value = true
      autoHideSnackbar()
      isDeleting.value = false
      return
    }

    const { error: deleteError } = await supabase.auth.admin.deleteUser(data.user.id)

    if (deleteError) {
      snackbarType.value = 'error'
      snackbarMessage.value = 'Account deletion failed: ' + deleteError.message
      showSnackbar.value = true
      autoHideSnackbar()
      isDeleting.value = false
      return
    }

    snackbarType.value = 'success'
    snackbarMessage.value = 'Your account has been permanently removed'
    showSnackbar.value = true
    autoHideSnackbar()
  } catch (err: any) {
    snackbarType.value = 'error'
    snackbarMessage.value = 'Unexpected error: ' + (err?.message || err)
    showSnackbar.value = true
    autoHideSnackbar()
  } finally {
    isDeleting.value = false
  }
}

const autoHideSnackbar = () => {
  setTimeout(() => {
    showSnackbar.value = false
  }, 5000)
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const goBack = () => {
  window.history.back()
}

const hideSnackbar = () => {
  showSnackbar.value = false
}
</script>
<template>
  <div class="min-h-screen">
    <section class="section-premium-lg relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-red-50 via-background to-orange-50 dark:from-red-950/20 dark:via-background dark:to-orange-950/20 pointer-events-none"></div>

      <div class="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-red-300/10 to-orange-400/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>

      <div class="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <div class="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 animate-fade-in-up">
            <ExclamationTriangleIcon class="w-10 h-10 sm:w-12 sm:h-12 text-red-600 dark:text-red-400" />
          </div>
          <h1 class="heading-hero text-4xl sm:text-5xl lg:text-7xl mb-6 sm:mb-8 animate-fade-in-up">
            Delete Account
          </h1>
          <p class="subheading-premium text-lg sm:text-xl lg:text-2xl leading-relaxed animate-fade-in-up-delay">
            We're sorry to see you go. This action is permanent and will remove all your data from our platform.
          </p>
        </div>
      </div>
    </section>

    <section class="section-premium">
      <div class="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        <div class="max-w-2xl mx-auto">
          <div class="card-premium animate-fade-in-up">
            <div class="flex items-center space-x-3 mb-6 sm:mb-8">
              <TrashIcon class="w-7 h-7 sm:w-8 sm:h-8 text-red-500" />
              <h2 class="heading-premium text-2xl sm:text-3xl">Confirm Account Deletion</h2>
            </div>

            <div class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border border-red-200 dark:border-red-800 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 class="text-lg sm:text-xl font-bold text-red-800 dark:text-red-400 mb-4 flex items-center">
                <ExclamationTriangleIcon class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-lg" />
                This action is permanent and irreversible
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-red-700 dark:text-red-300 text-md">
                <div class="space-y-2">
                  <p>• All learning progress will be lost</p>
                  <p>• Course completions deleted</p>
                  <p>• Achievements and badges removed</p>
                </div>
                <div class="space-y-2">
                  <p>• Study analytics erased</p>
                  <p>• Premium content access lost</p>
                  <p>• Account cannot be recovered</p>
                </div>
              </div>
            </div>

            <div class="space-y-5 sm:space-y-6">
              <div>
                <label class="block text-md font-medium text-foreground mb-2 sm:mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  v-model="userEmail"
                  placeholder="Enter your email address"
                  class="w-full px-4 py-3 sm:py-4 bg-card border-2 border-border rounded-lg focus:ring-2 focus:ring-brand-lavender-400 focus:border-brand-lavender-400 transition-all duration-300 text-foreground placeholder-muted-foreground font-mono"
                  style="cursor: text !important; pointer-events: auto !important; z-index: 30; position: relative;"
                  required
                />
              </div>

              <div>
                <label class="block text-md font-medium text-foreground mb-2 sm:mb-3">
                  Password
                </label>
                <div class="relative">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    v-model="userPassword"
                    placeholder="Enter your password"
                    class="w-full px-4 py-3 sm:py-4 pr-12 bg-card border-2 border-border rounded-lg focus:ring-2 focus:ring-brand-lavender-400 focus:border-brand-lavender-400 transition-all duration-300 text-foreground placeholder-muted-foreground"
                    style="cursor: text !important; pointer-events: auto !important; z-index: 30; position: relative;"
                    required
                  />
                </div>
              </div>

              <div>
                <label class="block text-md font-medium text-foreground mb-2 sm:mb-3">
                  Type "DELETE MY ACCOUNT" to confirm
                </label>
                <input
                  type="text"
                  v-model="confirmationText"
                  placeholder="DELETE MY ACCOUNT"
                  class="w-full px-4 py-3 sm:py-4 bg-card border-2 border-border rounded-lg focus:ring-2 focus:ring-brand-lavender-400 focus:border-brand-lavender-400 transition-all duration-300 text-foreground placeholder-muted-foreground font-mono text-center"
                  style="cursor: text !important; pointer-events: auto !important; z-index: 30; position: relative;"
                  required
                />
              </div>

              <div class="flex flex-col sm:flex-row justify-between pt-4 sm:pt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  @click="goBack"
                  class="hidden lg:flex bg-background hover:bg-muted text-foreground font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-border shadow-sm hover:shadow-md w-full sm:w-auto"
                >
                  <ArrowLeftIcon class="w-5 h-5 inline mr-2" />
                  Go Back
                </button>

                <button
                  @click="deleteAccount"
                  :disabled="!canDelete || isDeleting"
                  class="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <TrashIcon v-if="!isDeleting" class="w-5 h-5" />
                  <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ isDeleting ? 'Deleting Account...' : 'Delete My Account' }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-full opacity-0"
    >
      <div
        v-if="showSnackbar"
        class="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 max-w-sm sm:max-w-md w-full px-4"
      >
        <div
          class="card-premium shadow-2xl p-4 sm:p-6"
          :class="snackbarType === 'success'
        ? 'bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800'
        : 'bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800'"
        >
          <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3 sm:space-x-4">
          <div
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
            :class="snackbarType === 'success'
          ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800'
          : 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800'"
          >
            <CheckCircleIcon
          v-if="snackbarType === 'success'"
          class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400"
            />
            <ExclamationTriangleIcon
          v-else
          class="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400"
            />
          </div>
          <div>
            <h4
          class="font-bold text-md sm:text-base"
          :class="snackbarType === 'success'
            ? 'text-emerald-800 dark:text-emerald-400'
            : 'text-red-800 dark:text-red-400'"
            >
          {{ snackbarType === 'success' ? 'Account Deleted Successfully' : 'Error' }}
            </h4>
            <p
          class="text-xs sm:text-md"
          :class="snackbarType === 'success'
            ? 'text-emerald-700 dark:text-emerald-300'
            : 'text-red-700 dark:text-red-300'"
            >
          {{ snackbarMessage }}
            </p>
          </div>
        </div>
        <button
          @click="hideSnackbar"
          :class="snackbarType === 'success'
            ? 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-200'
            : 'text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200'"
          class="transition-colors"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
