import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "areasserved" | "articles" | "basic" | "categoriesnav" | "default" | "faqsection" | "moreposts" | "pagination" | "testimonialgrid"
declare module "/Users/williamalexy/work/securedmoving.us/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}