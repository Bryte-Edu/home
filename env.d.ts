/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DATABUDDY_CLIENT_ID: string
  readonly VITE_DATABUDDY_ALLOWED_DOMAINS: string
  readonly VITE_ANALYTICS_ENABLED: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
