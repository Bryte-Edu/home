/**
 * Secure DataBuddy Analytics Utility
 * Implements domain validation and secure script loading
 */

interface DataBuddyConfig {
  clientId: string
  trackHashChanges?: boolean
  trackAttributes?: boolean
  trackOutgoingLinks?: boolean
  trackInteractions?: boolean
  trackEngagement?: boolean
  trackScrollDepth?: boolean
  trackExitIntent?: boolean
  trackBounceRate?: boolean
  trackWebVitals?: boolean
  trackErrors?: boolean
  enableBatching?: boolean
}

class SecureAnalytics {
  private static instance: SecureAnalytics
  private isInitialized = false
  private allowedDomains: string[] = []

  private constructor() {
    this.allowedDomains = this.parseAllowedDomains()
  }

  public static getInstance(): SecureAnalytics {
    if (!SecureAnalytics.instance) {
      SecureAnalytics.instance = new SecureAnalytics()
    }
    return SecureAnalytics.instance
  }

  private parseAllowedDomains(): string[] {
    const domains = import.meta.env.VITE_DATABUDDY_ALLOWED_DOMAINS || ''
    return domains.split(',').map(domain => domain.trim()).filter(Boolean)
  }

  private isValidDomain(): boolean {
    const currentDomain = window.location.hostname

    // Allow localhost in development
    if (import.meta.env.DEV && currentDomain === 'localhost') {
      return true
    }

    return this.allowedDomains.some(domain => {
      // Exact match or subdomain match
      return currentDomain === domain || currentDomain.endsWith(`.${domain}`)
    })
  }

  private validateEnvironment(): boolean {
    const clientId = import.meta.env.VITE_DATABUDDY_CLIENT_ID
    const analyticsEnabled = import.meta.env.VITE_ANALYTICS_ENABLED === 'true'

    if (!analyticsEnabled) {
      console.info('Analytics is disabled via environment variable')
      return false
    }

    if (!clientId || clientId === 'your_databuddy_client_id_here') {
      console.warn('DataBuddy client ID is not properly configured')
      return false
    }

    if (!this.isValidDomain()) {
      console.warn(`Analytics blocked: Domain ${window.location.hostname} is not in allowed domains list`)
      return false
    }

    return true
  }

  private createAnalyticsScript(config: DataBuddyConfig): HTMLScriptElement {
    const script = document.createElement('script')
    script.src = 'https://cdn.databuddy.cc/databuddy.js'
    script.async = true

    // Set data attributes
    script.setAttribute('data-client-id', config.clientId)

    if (config.trackHashChanges) script.setAttribute('data-track-hash-changes', 'true')
    if (config.trackAttributes) script.setAttribute('data-track-attributes', 'true')
    if (config.trackOutgoingLinks) script.setAttribute('data-track-outgoing-links', 'true')
    if (config.trackInteractions) script.setAttribute('data-track-interactions', 'true')
    if (config.trackEngagement) script.setAttribute('data-track-engagement', 'true')
    if (config.trackScrollDepth) script.setAttribute('data-track-scroll-depth', 'true')
    if (config.trackExitIntent) script.setAttribute('data-track-exit-intent', 'true')
    if (config.trackBounceRate) script.setAttribute('data-track-bounce-rate', 'true')
    if (config.trackWebVitals) script.setAttribute('data-track-web-vitals', 'true')
    if (config.trackErrors) script.setAttribute('data-track-errors', 'true')
    if (config.enableBatching) script.setAttribute('data-enable-batching', 'true')

    return script
  }

  public async initialize(customConfig?: Partial<DataBuddyConfig>): Promise<boolean> {
    if (this.isInitialized) {
      console.info('Analytics already initialized')
      return true
    }

    if (!this.validateEnvironment()) {
      return false
    }

    try {
      const config: DataBuddyConfig = {
        clientId: import.meta.env.VITE_DATABUDDY_CLIENT_ID,
        trackHashChanges: true,
        trackAttributes: true,
        trackOutgoingLinks: true,
        trackInteractions: true,
        trackEngagement: true,
        trackScrollDepth: true,
        trackExitIntent: true,
        trackBounceRate: true,
        trackWebVitals: true,
        trackErrors: true,
        enableBatching: true,
        ...customConfig
      }

      const script = this.createAnalyticsScript(config)

      return new Promise((resolve, reject) => {
        script.onload = () => {
          this.isInitialized = true
          console.info('DataBuddy Analytics initialized successfully')
          resolve(true)
        }

        script.onerror = () => {
          console.error('Failed to load DataBuddy Analytics script')
          reject(false)
        }

        document.head.appendChild(script)
      })
    } catch (error) {
      console.error('Error initializing analytics:', error)
      return false
    }
  }

  public track(eventName: string, properties?: Record<string, any>): void {
    if (!this.isInitialized) {
      console.warn('Analytics not initialized, skipping track call')
      return
    }

    // DataBuddy's global tracking function (adjust based on their API)
    if (typeof (window as any).databuddy !== 'undefined') {
      (window as any).databuddy.track(eventName, properties)
    }
  }

  public isAnalyticsEnabled(): boolean {
    return this.isInitialized
  }
}

// Export singleton instance
export const analytics = SecureAnalytics.getInstance()

// Export default configuration
export const initializeAnalytics = async (customConfig?: Partial<DataBuddyConfig>) => {
  return await analytics.initialize(customConfig)
}

export type { DataBuddyConfig }
