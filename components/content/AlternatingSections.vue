
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2
          v-if="$slots.headline" 
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <ContentSlot :use="$slots.headline" unwrap="p" />
        </h2>
        <div v-if="$slots.description" class="prose mt-4 text-gray-500">
          <ContentSlot :use="$slots.description" />
        </div>
      </div>

      <div class="mt-16 space-y-16">
        <div v-for="(feature, featureIdx) in features" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4']">
            <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
            <div 
              v-html="renderMdwn(feature.description)" 
              class="prose mt-2 text-sm text-gray-500">
            </div>
          </div>
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8']">
            <div class="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                <nuxt-img 
                    :src="feature.imageSrc" 
                    :alt="feature.imageAlt" 
                    class="object-cover object-center"
                    provider="cloudinary"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {micromark} from 'micromark'

const props = defineProps({
  features:{
    type: Array
  }
})

function renderMdwn(value){
  return micromark(value)
}

</script>