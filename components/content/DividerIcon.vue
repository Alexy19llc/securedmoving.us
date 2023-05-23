<template>
  <div :class="divider_wrapper_class">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div :class="'w-full border-t border-gray-300 ' + divider_class" />
      </div>
      <div class="relative flex justify-center">
        <span :class="'px-2 ' + icon_container_class">
          <SparklesIcon :class="'h-5 w-5 ' + icon_class" aria-hidden="true" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SparklesIcon } from '@heroicons/vue/20/solid/index.js'

defineProps({
  icon_class: {
    type: String,
    default: 'text-gray-500'
  },
  icon_container_class: {
    type: String,
    default: 'bg-white text-gray-500'
  },
  divider_class: {
    type: String,
    default: ''
  },
  divider_wrapper_class: {
    type: String,
    default: 'mx-auto w-1/2'
  },
})
</script>