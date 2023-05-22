<template>
  <div class="bg-white py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <p v-if="$slots.overline" class="text-base font-semibold leading-7 text-secureRed-600">
          <ContentSlot :use="$slots.overline" unwrap="p" />
        </p>
        <h1 v-if="$slots.headline" class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <ContentSlot :use="$slots.headline" unwrap="p" />
        </h1>
        <div class="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
          <div>
            <ContentSlot :use="$slots.colOne" />
          </div>
          <div>
            <ContentSlot :use="$slots.colTwo" />
          </div>
        </div>
        <div class="mt-10 flex">
          <a v-if="cta" :href="cta.url" class="rounded-md bg-secureRed-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secureRed-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secureRed-600">{{ cta.callToAction }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps ({
    cta: {
        type: Object,
        url: {
            type: String
        },
        callToAction: {
            type: String
        }
    }
})
</script>