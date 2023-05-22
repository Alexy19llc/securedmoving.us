<template>
  <div class="relative isolate overflow-hidden bg-sky-950 mt-12">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 v-if="$slots.headline" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <ContentSlot :use="$slots.headline" unwrap="p" />
        </h2>
        <div  
        v-if="$slots.body"
            class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                <ContentSlot :use="$slots.body" />
        </div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a :href="cta.url" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{{cta.callToAction}}</a>
          <a :href="secondary.url" class="text-sm font-semibold leading-6 text-white">{{ secondary.secondaryAction }} <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-164 w-164 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
      <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.7" />
      <defs>
        <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
          <stop stop-color="#38bdf8" />
          <stop offset="1" stop-color="#7dd3fc" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<script setup>
  const props = defineProps ({
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
