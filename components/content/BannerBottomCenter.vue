<template>
  <div v-if="bannerStatus" class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-50">
    <div class="pointer-events-auto flex items-center justify-between gap-x-6 drop-shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
      <p class="text-base leading-6 text-white">
        <a href="/moving-specials"
          ><strong class="font-semibold">Moving Specials</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Move now with these great rates <span aria-hidden="true">&rarr;</span></a
        >
      </p>
      <button v-on:click="bannerStatus=false" type="button" class="-m-1.5 flex-none p-1.5">
        <span class="sr-only">Dismiss</span>
        <XMarkIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/20/solid/index.js'

const props = defineProps({
    bannerStatus: {
        type: Boolean,
        default: true
    }
})
</script>