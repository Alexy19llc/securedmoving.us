<template>
  <div class="relative isolate overflow-hidden bg-gray-200 py-24 sm:py-32">
    <nuxt-img 
        :src="backgroundImage.url"
        provider="cloudinary"
        format="webp"
        quality="auto:eco"
        :alt="backgroundImage.alt"
        class="absolute inset-0 -z-10 h-full w-full object-cover" 
        :modifiers="{effect: 'multiply', overlay: 'secured-moving-company:'+ backgroundImage.url.replace('/',':'), effect:'brightness:-54'}"
    />
    <svg viewBox="0 0 1097 845" aria-hidden="true" class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
      <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
      <defs>
        <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
          <stop stop-color="#776FFF" />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <svg viewBox="0 0 1097 845" aria-hidden="true" class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:hrefp-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
      <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
      <defs>
        <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
          <stop stop-color="#776FFF" />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h1 
          v-if="$slots.headline"
          class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          <ContentSlot :use="$slots.headline" unwrap="p" />
        </h1>
        <h2
          v-if="$slots.subhead"
          class="mt-6 text-xl leading-8 text-white">
          <ContentSlot :use="$slots.subhead" unwrap="p" />
        </h2>
      </div>
    </div>
  </div>
  <div class="faq-main-txt__wrapper mx-auto md:w-3/5 max-w-7xl px-6 pt-5 pb-5">
    <div class="faq-heading-txt__wrapper mx-auto max-w-7xl">
      <p 
        v-if="$slots.introtext"
        class="md:text-3xl text-center font-extralight py-4 pl-2">
        <ContentSlot :use="$slots.introtext" unwrap="p" />
      </p>
    </div>
  </div>
  <!-- End Txt ---------------------------->
</template>
<script setup>
  defineProps({
    backgroundImage: {
        type: Object,
        default:{
          url: 'Moving-Packing',
          alt: 'Secured Moving Company Fort Worth Movers',
        }
    }
})
</script>
