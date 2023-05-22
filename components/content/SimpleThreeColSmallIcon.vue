<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 
            v-if="$slots.overline"
            class="text-base font-semibold leading-7 text-secureRed-600">
            <ContentSlot :use="$slots.overline" unwrap="p" />
        </h2>
        <h3 
        v-if="$slots.headline"
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <ContentSlot :use="$slots.headline" unwrap="p" />
        </h3>
        <div 
            v-if="$slots.intro"
            class="mt-6 text-lg leading-8 text-gray-600">
            <ContentSlot :use="$slots.intro" />
        </div>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <component :is="feature.icon" class="h-5 w-5 flex-none text-secureRed-600" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <div class="prose flex-auto" v-html="renderMdwn(feature.description)"></div>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-secureRed-600">Learn more <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ClockIcon, MapPinIcon, LockClosedIcon } from '@heroicons/vue/20/solid/index.js'
import {micromark} from 'micromark'

const props = defineProps({
    features: {
        type: Array,
        default: [
  {
    name: 'Insured and Secured',
    description:
      'All moving companies with a TxDMV number have insurance, but it’s not all it’s crqacked up to be. With us you get insurance, guidance, and men qualified to do the job.',
    href: '/blog/tags/Beat-the-Movers',
    icon: LockClosedIcon,
  },
  {
    name: 'Timesaving',
    description:
      'Moving requires a lot of time-consuming tasks such as packing boxes, loading them into trucks or vans then unloading them at their destination point again before unpacking everything back out once more! Secured Moving Company takes care of these tasks, so you don’t have to worry about them yourself!',
    href: '/fort-worth-moving-packing',
    icon: ClockIcon,
  },
  {
    name: 'Our Local Presence',
    description:
      'Secured Moving Company has established a strong presence in Haltom City, Fort Worth, and Arlington over the years. The company provides reliable and efficient moving services to residents and businesses in these, and surrounding areas.',
    href: '/service-area/fort-worth',
    icon: MapPinIcon,
  },
]
    }
})

function renderMdwn(value){
  return micromark(value)
}

</script>