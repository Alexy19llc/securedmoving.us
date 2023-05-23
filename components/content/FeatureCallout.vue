<template>
  <div class="flex flex-column items-center lg:pr-8 lg:pt-4 z-1">
    <div class="lg:max-w-lg">
      <h2
        v-if="$slots.subhead" 
        :class="'prose text-base font-semibold leading-7 text-safetyGreen-800 ' + subhead_class">
          <ContentSlot :use="$slots.subhead" unwrap="p" />
      </h2>
      <p
        v-if="$slots.headline" 
        class="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          <ContentSlot :use="$slots.headline" unwrap="p" />
      </p>
      <div 
        v-if="$slots.introtext"
        class="prose mt-6 text-xl leading-8 text-stone-500">
          <ContentSlot :use="$slots.introtext" />
      </div>
      <slot name="featureslist" />
    </div>
  </div>
</template>

<script setup>
  defineProps({
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