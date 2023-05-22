<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 
                v-if="$slots.overline"
                class="text-base font-semibold leading-7 text-secureRed-600"
            >
                <ContentSlot :use="$slots.overline" unwrap="p" />
            </h2>
            <h3 
                v-if="$slots.headline"
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
                <ContentSlot :use="$slots.headline" unwrap="p" />
            </h3>
            <div 
                v-if="$slots.intro"
                class="mt-6 text-lg leading-8 text-gray-600 prose"
            >
                <ContentSlot :use="$slots.intro" />
            </div>
            <slot name="body" />
            <slot name="cta" />
          </div>
        </div>
        <div class="flex items-start justify-end lg:order-first">
            <nuxt-img 
                :src="image.url" 
                :alt="image.alt" 
                provider="cloudinary"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" 
                crop="crop"
                fit="fill"
                width="2432"
                height="1442" 
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps({
        image: {
            type: Object,
            required: true
        }
    })
</script>