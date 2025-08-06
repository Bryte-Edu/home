import { ref, readonly } from 'vue'
import { analytics } from '@/lib/analytics'

const isAnalyticsReady = ref(false)

// Initialize analytics status tracking
analytics.initialize().then(() => {
  isAnalyticsReady.value = analytics.isAnalyticsEnabled()
})

/**
 * Vue composable for secure analytics tracking
 * Provides reactive analytics state and tracking methods
 */
export function useAnalytics() {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (isAnalyticsReady.value) {
      analytics.track(eventName, properties)
    }
  }

  const trackPageView = (pageName: string, additionalProperties?: Record<string, any>) => {
    trackEvent('page_view', {
      page: pageName,
      timestamp: new Date().toISOString(),
      ...additionalProperties
    })
  }

  const trackUserAction = (action: string, element?: string, additionalProperties?: Record<string, any>) => {
    trackEvent('user_action', {
      action,
      element,
      timestamp: new Date().toISOString(),
      ...additionalProperties
    })
  }

  const trackDownload = (fileName: string, fileType?: string) => {
    trackEvent('download', {
      file_name: fileName,
      file_type: fileType,
      timestamp: new Date().toISOString()
    })
  }

  const trackFormSubmission = (formName: string, success: boolean = true) => {
    trackEvent('form_submission', {
      form_name: formName,
      success,
      timestamp: new Date().toISOString()
    })
  }

  return {
    // State
    isAnalyticsReady: readonly(isAnalyticsReady),
    
    // Methods
    trackEvent,
    trackPageView,
    trackUserAction,
    trackDownload,
    trackFormSubmission
  }
}
