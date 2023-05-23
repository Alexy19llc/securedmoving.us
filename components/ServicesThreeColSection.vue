<template>
  <div class="py-12 bg-white">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only text-slate-900">Moving and packing services that go the distance</h2>
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="feature in features" :key="feature.name">
          <dt>
            <p class="mt-5 text-lg leading-6 font-medium">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 text-base text-gray-900">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { GlobeAltIcon, BoltIcon, ScaleIcon } from '@heroicons/vue/24/outline/index.js'

const features = [
  {
    name: 'Local, Long-Distance and Commercial Moving',
    description:
      'Arrive at your next destination with peace of mind. We’ll go the distance with you. Whether it is local or long-distance, we are here to help make your move as smooth and easy for you!',
    icon: GlobeAltIcon,
  },
  {
    name: 'Packing Services',
    description:
      'Take a load off. We know how complicated packing can be, which is why we\’re here to help! If you need exceptional moving services in the Dallas-Fort Worth area and are looking for a reliable company with skilled packers who will go above any other competitor\'s level, then look no further than us.',
    icon: ScaleIcon,
  },
  {
    name: 'Safe moving, literally',
    description:
      'Protecting what matters most, one safe at a time. Moving safes is a big deal and we have the skills and equipment to do it #MovingDay #SafesOnTheGo ',
    icon: BoltIcon,
  },
]
</script>