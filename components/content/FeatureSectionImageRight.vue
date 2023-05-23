<template>
  <div class="overflow-hidden py-12 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="flex flex-column items-center lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 
              v-if="$slots.subhead"
              :class="'text-base font-semibold leading-7 text-safetyGreen-800 ' + subhead_class">
                <ContentSlot :use="$slots.subhead" unwrap="p" />
            </h2>
            <p 
              v-if="$slots.headline"
              class="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                <ContentSlot :use="$slots.headline" unwrap="p" />
            </p>
            <p 
              v-if="$slots.intro"
              class="mt-6 text-xl leading-8 text-stone-500">
                <ContentSlot :use="$slots.intro" unwrap="p" />
            </p>
            <slot name="featureslist" />
          </div>
        </div>
        <nuxt-img 
            :src="feature_image.url"
            :alt="feature_image.alt"
            provider="cloudinary"
            format="webp"
            quality="auto"
            class="w-[25rem] md:w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" 
            width="2432" height="1442" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
      feature_image: {
          type: Object
      },
      features: {
          type: Array,
          default:[]
      },
      subhead_class: {
          type: String,
          default: ''
      }
  })
</script>