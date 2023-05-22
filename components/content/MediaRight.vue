<template>
  <div class="text-left flex">
    <div class="max-w-prose">
        <h4 
          v-if="$slots.headlineH4"
          class="text-5xl font-semibold">
            <ContentSlot :use="$slots.headlineH4" unwrap="p" />
        </h4>
        <div 
          v-if="$slots.body"
          class="text-2xl font-normal mt-1">
            <ContentSlot :use="$slots.body" unwrap="p" />
        </div>
    </div>
    <div class="ml-4 flex-shrink-0">
      <nuxt-img
        provider="cloudinary"
        :src="image"
        format="webp"
        quality="auto"
       />
    </div>
  </div>
</template>
<script setup>
    defineProps({
        image: {
            type: String,
            required: true
        }
    })
</script>