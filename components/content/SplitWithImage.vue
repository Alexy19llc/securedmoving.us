<template>
  <div class="relative mt-16">
    <div class="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
      <div class="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
        <div class="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
          <nuxt-img 
            class="absolute inset-0 h-full w-full bg-gray-50 object-cover rounded-lg" 
            :src="image.url" 
            provider="cloudinary"
            :alt="image.alt" 
            :modifiers="image.modifiers"
        />
        </div>
      </div>
      <div class="px-6 lg:contents">
        <div class="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
          <ContentSlot :use="$slots.default" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
    const props = defineProps({
            image: {
                type: Object,
                url: {
                    type: String,
                    default: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80'
                },
                alt: {
                    type: String,
                    default: 'Fort Worth Moving Company'
                },
                modifiers: {
                    type: String,
                    default: ''
                }
            }
        })
</script>