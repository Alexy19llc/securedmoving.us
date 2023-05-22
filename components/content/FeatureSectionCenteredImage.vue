<template>
  <div class="mt-16 py-16 sm:py-16 bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2
        v-if="$slots.overline" 
        :class="'text-base font-semibold leading-7 text-secureRed-600 ' + overline_class">
          <ContentSlot :use="$slots.overline" unwrap="p" />
        </h2>
        <h3 
            v-if="$slots.headline" 
            class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
            <ContentSlot :use="$slots.headline" unwrap="p" />
        </h3>
        <div 
        v-if="$slots.intro" 
            class="prose mt-6 text-lg leading-8 text-gray-300"
        >
        <ContentSlot :use="$slots.intro" />
    </div>
      </div>
    </div>
    <div class="relative overflow-hidden pt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <nuxt-img 
            :src="image.src" 
            :alt="image.alt" 
            class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" width="2432" height="1442" 
            provider="cloudinary"
        />
        <div class="relative" aria-hidden="true">
          <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
        </div>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <slot name="featureslist" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
    image: {
        type: Object
    },
    overline_class: {
        type: String,
        default: ''
    },
})
</script>