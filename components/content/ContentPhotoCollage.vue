<template>
  <div class="mt-32 overflow-hidden sm:mt-40">
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><ContentSlot :use="$slots.headline" unwrap="p" /></h2>
          <h3 class="mt-6 text-xl leading-8 text-gray-600"><ContentSlot :use="$slots.subhead" unwrap="p" /></h3>
          <div class="mt-6 text-base leading-7 text-gray-600"><ContentSlot :use="$slots.body" /></div>
        </div>
        <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
          <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
            <nuxt-img 
                :src="spotlightImg.url"
                :alt="spotlightImg.alt"
                loading="lazy"
                provider="cloudinary"
                format="webp"
                quality="auto"
                width="590"
                class="aspect-7/5 w-137 max-w-none rounded-2xl bg-gray-50 object-cover" />
          </div>
          <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-137 lg:items-start lg:justify-end lg:gap-x-8">
            <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <nuxt-img 
                :src="imgOne.url"
                :alt="imgOne.alt"
                provider="cloudinary"
                format="webp"
                quality="auto"
                width="385"
                class="aspect-4/3 w-124 max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
            </div>
            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <nuxt-img 
                :src="imgTwo.url"
                :alt="imgTwo.alt"
                provider="cloudinary"
                format="webp"
                quality="auto"
                width="590"
                class="aspect-7/5 w-137 max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
            </div>
            <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <nuxt-img 
                :src="imgThree.url"
                :alt="imgThree.alt"
                provider="cloudinary"
                format="webp"
                quality="auto"
                width="385"
                class="aspect-4/3 w-124 max-w-none rounded-2xl bg-gray-50 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
    spotlightImg: {
        type: Object,
        url: {
            type: String,
            default: 'Bear-Creek-Park/covered-bridge'
        },
        alt: {
            type: String,
            default: ''
        },
    },
    imgOne: {
        type: Object,
        url: {
            type: String,
            default: 'Bear-Creek-Park/covered-bridge'
        },
        alt: {
            type: String,
            default: ''
        },
    },
    imgTwo: {
        type: Object,
        url: {
            type: String,
            default: 'Bear-Creek-Park/covered-bridge'
        },
        alt: {
            type: String,
            default: ''
        },
    },
    imgThree: {
        type: Object,
        url: {
            type: String,
            default: 'Bear-Creek-Park/covered-bridge'
        },
        alt: {
            type: String,
            default: ''
        },
    },
})
</script>