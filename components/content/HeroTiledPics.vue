<template>
  <div>
      <div class="relative isolate">
        <svg class="absolute inset-x-0 top-0 -z-10 h-164 w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div class="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
          <svg viewBox="0 0 801 1036" aria-hidden="true" class="w-[50.0625rem]">
            <path fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)" fill-opacity=".3" d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z" />
            <defs>
              <linearGradient id="70656b7e-db44-4b9b-b7d2-1f06791bed52" x1="508.179" x2="-28.677" y1="-116.221" y2="1091.63" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    <ContentSlot :use="$slots.headline" unwrap="p" />
                </h1>
                <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    <ContentSlot :use="$slots.subhead" unwrap="p" />
                </p>
                <div v-if="hasCTA" class="mt-10 flex items-center gap-x-6">
                  <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                  <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Live demo <span aria-hidden="true">→</span></a>
                </div>
              </div>
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative">
                    <nuxt-img 
                        src="moving_dollies_-_main_nazkhz"
                        format="webp"
                        quality="auto"
                        width="176"
                        height="264"
                        fit="fill"
                        provider="cloudinary"
                        alt="moving dollies for packing and moving furniture in Fort Worth"
                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" 
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <nuxt-img 
                        src="rolling-moving-boxes-off-a-moving-truck-in-Fort-Worth-Texas" 
                        format="webp"
                        quality="auto"
                        width="176"
                        height="264"
                        fit="fill"
                        provider="cloudinary"
                        alt="Rolling moving boxes off a moving truck in Fort Worth, Texas"
                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <nuxt-img 
                        src="Apartment_Movers_Fort_Worth_with_satisfied_mover_zpxiou"
                        format="webp"
                        quality="auto"
                        width="176"
                        height="264"
                        fit="fill"
                        provider="cloudinary"
                        alt="Apartment movers Fort Worth with satisfied mover"
                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <nuxt-img
                        src="a19_20221120_112346-jpg_2022-12-07_2223/commercial-moving-filing-cabinet-and-office-furniture" 
                        provider="cloudinary"
                        format="webp"
                        quality="auto"
                        width="176"
                        height="264"
                        fit="fill"
                        :modifiers="{g: 'west'}"
                        alt="Commercial moving, Fort Worth office furniture on a hand truck"
                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" 
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <nuxt-img
                        src="FistBump_xldzyw"
                        provider="cloudinary"
                        format="webp"
                        quality="auto"
                        width="176"
                        height="264"
                        fit="fill"
                        :modifiers="{g: 'face:center'}"
                        alt="Stress free moving-fist bump after successful move"
                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup>
const props = defineProps ({
    hasCTA: {
        type: Boolean,
        default: true
    }
})
</script>
