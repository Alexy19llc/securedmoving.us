<template>
  <div class="bg-gray-100 overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <svg class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-secureRed-500" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg>

      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2 class="sr-only text-3xl font-bold tracking-tight text-stone-700 sm:text-4xl sm:tracking-tight">What sets Secured Moving Company, LLC Fort Worth apart?</h2>
        </div>
        <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md text-white">
                <!-- <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" /> -->
                <nuxt-img
                  :src="feature.icon"
                  provider="cloudinary"
                  format="svg"
                  :alt="feature.alt"
                  height="48"
                  width="48"
                 />
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-stone-800">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 text-base text-stone-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { GlobeAltIcon, BoltIcon, EnvelopeIcon, ScaleIcon, StarIcon } from '@heroicons/vue/outline/index.js'

const features = [
  {
    name: 'Reliable',
    description: 'We are rated as Best Moving Company in Fort Worth for 2021 and 2022 by Expertise and Best in DFW.',
    icon: 'icon-star_lilnmu',
    alt: 'A Star for a Great Reputation'
  },
  {
    name: 'Straight forward pricing',
    description: 'We make moving affordable for everyone with no hidden costs.',
    icon: 'icon_hand_right_color_lvun22',
    alt: 'Honest Pricing'
  },
  {
    name: 'Efficient and Dedicated',
    description: 'With our dedicated team, we are able to provide the best service and efficient moving.',
    icon: 'icon_launch_color_ifvd7p',
    alt: 'Fast movers like a rocket'
  },
  {
    name: 'Stress Free',
    description: 'Secured Moving Company makes it easy to leave the stress behind. Arrive at your next destination with peace of mind.',
    icon: 'icon-hang_color_h0rlrn',
    alt: 'Your time with moving with us will be stress free'
  },
]
</script>