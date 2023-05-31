<template>
  <div class="py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto text-center">
        <h2 class="text-4xl font-semibold leading-8 tracking-tight">
          Customer Testimonials
        </h2>
      </div>
      <div
        class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
      >
        <!-- Grid -->
        <div class="-mt-8 sm:-mx-4 sm:text-[0]">
          <LazyContentList
            path="/reviews"
            :limit="reviewlimit"
            v-slot="{ list }"
          >
            <div
              v-for="testimonial in list"
              :key="testimonial.title"
              class="pt-8 sm:inline-block sm:w-full"
            >
              <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                <blockquote class="text-gray-900">
                  <p>{{ testimonial.the_review }}</p>
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
                    <div class="font-semibold text-gray-900">
                      {{ testimonial.title }}
                    </div>
                    <div class="text-gray-600 flex flex-row">
                      <StarIcon
                        v-for="rating in [0, 1, 2, 3, 4]"
                        :key="rating"
                        :class="[
                          testimonial.stars > rating
                            ? 'text-amber-400'
                            : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0',
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <!-- end Grid -->
          </LazyContentList>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from "@heroicons/vue/24/solid/index.js";

const props = defineProps({
  reviewlimit: {
    type: Number,
    require: true,
    default: 10,
  },
});
</script>
