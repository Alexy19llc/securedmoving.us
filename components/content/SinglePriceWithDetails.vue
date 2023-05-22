<template>
  <div class="">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none bg-safetyGreen-100">
        <div class="p-8 sm:p-10 lg:flex-auto w-4/5">
          <h3 class="text-3xl font-bold tracking-tight text-gray-900">
            <slot name="headline" />
          </h3>
          <p class="mt-6 text-base leading-7 text-gray-600">
            <slot name="into" />
          </p>
          <div class="mt-10 flex items-center gap-x-4">
            <h4 class="flex-none text-sm font-semibold leading-6 text-safetyGreen-700">What’s included</h4>
            <div class="h-px flex-auto bg-gray-100" />
          </div>
          <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6">
            <li v-for="feature in includedFeatures" :key="feature" class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-sky-600" aria-hidden="true" />
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="p-2 lg:mt-0 lg:flex-shrink-1">
          <div class="h-full rounded-2xl bg-safetyGreen-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div class="mx-auto max-w-xs px-8">
              <p v-if="$slots.priceIntro" class="text-base font-semibold text-gray-600">
                <slot name="priceIntro" />
              </p>
              <p class="flex items-baseline justify-center gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-gray-50">
                    <slot name="price" />
                </span>
              </p>
              <a v-if="$slots.CTAButton"
                href="#"
                class="mt-10 block w-full rounded-md bg-safetyGreen-200 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-safetyGreen-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <slot name="CTAButton" />
               </a>
              <p v-if="$slots.priceFinePrint" class="mt-6 text-xs leading-5 text-gray-50">
                <slot name="priceFinePrint" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid/index.js'

const props = defineProps({
    includedFeatures: Array
})
</script>