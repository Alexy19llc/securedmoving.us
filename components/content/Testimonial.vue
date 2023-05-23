<template>
 <div class="pt-8 sm:inline-block sm:w-full sm:px-4">
    <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
      <blockquote class="text-gray-900">
        <p>{{ testimonial.the_review}} </p>
      </blockquote>
      <figcaption class="mt-6 flex items-center gap-x-4">
        <nuxt-img
          class="h-10 w-10 rounded-full bg-gray-50"
          :src="testimonial.profile_pic.url"
          provider="cloudinary"
          :alt="testimonial.profile_pic.alt"
          format="webp"
          quality="auto"
          />
        <div>
          <div class="font-semibold text-gray-900">{{ testimonial.title }}</div>
          <div class="text-gray-600 flex flex-row">
            <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[testimonial.stars > rating ? 'text-amber-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
<script setup>
import { StarIcon } from '@heroicons/vue/24/solid/index.js'

const props = defineProps ({
    testimonial: {
        type: Object,
        default: {}
    }
})
</script>