<template>
  <div class="py-12 bg-gray-50">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only text-slate-900">Moving and packing services that go the distance</h2>
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
        <div v-for="feature in features" :key="feature.name">
          <dt>
            <p class="mt-5 text-xl leading-6 font-medium">{{ feature.name }}</p>
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
    name: 'Residential Moving',
    description:
      "From packing to unpacking, we've got you covered.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Commercial Moving',
    description:
      'Minimize business disruption with our efficient commercial moving solutions.',
    icon: ScaleIcon,
  },
  {
    name: 'Specialty Moving',
    description:
      'Trust us with your delicate and valuable items, including pianos and antiques. ',
    icon: BoltIcon,
  },
  {
    name: 'Storage Solutions',
    description:
      'We offer secure and convenient storage options for your belongings. ',
    icon: BoltIcon,
  },
]
</script>