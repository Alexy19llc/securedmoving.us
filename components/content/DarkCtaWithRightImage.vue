<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-16 lg:px-8">
      <div class="relative isolate overflow-hidden bg-sky-950 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 overflow:hidden">
        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-164 w-164 -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" style="mask-image:radial-gradient(closest-side,white,transparent)" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#38bdf8" />
              <stop offset="1" stop-color="#7dd3fc" />
            </radialGradient>
          </defs>
        </svg>
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2
            v-if="$slots.headline"
            class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <ContentSlot :use="$slots.headline" unwrap="p" />
          </h2>
          <div 
            v-if="$slots.body"
            class="mt-6 text-lg leading-8 text-gray-300 prose">
            <ContentSlot :use="$slots.body" />
          </div>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a :href="cta.url" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{{cta.callToAction}}</a>
            <a :href="secondary.url" class="text-sm font-semibold leading-6 text-white">{{ secondary.secondaryAction }} <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div class="relative mt-16 lg:mt-8">
          <nuxt-img 
            provider="cloudinary"
            class="md:absolute md:left-0 md:top-0 md:w-140 md:max-w-none sm:max-w-lg object-cover rounded-md bg-white/5 ring-1 ring-white/10" 
            :src="image.url" 
            :alt="image.alt"
            :modifiers="{c: 'lfill', q:'auto', g: 'faces:center', w: 'auto', ar: '1:1', dpr:'auto'}"
            />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps ({
    image: {
      type: Object,
      alt: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: 'packing-services/20221120_123533_1_brrout'
      }
    },
    cta: {
      type: Object,
      url: {
        type: String,
        default: '/'
      },
      callToAction: {
        type: String,
        default: 'Get a Free Estimate'
      }
    },
    secondary: {
      type: Object,
      url: {
        type: String,
        default: '/about-secured-moving'
      },
      secondaryAction: {
        type: String,
        default: 'Learn more'
      }
    }
  })
</script>
