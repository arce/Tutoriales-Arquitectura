import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/armandoarce/Documents/GitHub/Tutoriales-Arquitectura/Tutorial_01/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}