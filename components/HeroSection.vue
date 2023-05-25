<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <main
          class="pt-28 mx-auto max-w-7xl px-4 sm:pt-32 sm:px-6 md:pt-40 lg:pt-40 lg:px-8 xl:pt-40"
        >
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-bold text-secureRed-950 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
              <span class="block xl:inline">Welcome to </span>
              <span class="block text-secureRed-700 xl:inline">Secured Moving Company</span>
              <span class="block xl:inline"> of Fort Worth, Your Hassle-Free Move Starts Here!</span>
            </h1>
            <!-- <p class="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We are a leader in <a href="/service-area/fort-worth">Fort Worth, Texas, with an outstanding reputation</a> for quality service and known as one of the best moving companies around.
            </p> -->
            <!-- <div class="mt-5 sm:mt-8 flex-col sm:flex sm:justify-center lg:justify-start md:w-3/5">
              <div class="rounded-md shadow">
                <a 
                  @click="gtag"
                  href="/contact-us"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-400 md:py-4 md:text-lg md:px-10"
                >
                  Get a Free Estimate
              </a>
              </div>
              <p class="text-lg md:text-2xl text-center mt-2 font-bold"><a href="tel:(817) 812‑6176">(817) 812‑6176</a></p>
            </div> -->
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <nuxt-img
        class="h-56 w-full object-cover md:h-96 lg:w-full lg:h-full"
        provider="cloudinary"
        src="boyd-texas-happy-family_ooisw0"
        alt="Happy movers in Fort Worth who have just moved with Secured Moving Company"
        width="320"
        height="320"
        sizes="sm:320px md:414px lg:705"
        format="webp"
        :modifiers="{c: 'fill', q:'auto', g: 'faces:center', w: 'auto', ar: '2:3', dpr:'auto'}"
      />
    </div>
  </div>
</template>
<script setup>
const gtag = useGtag()
gtag('event', 'phone_call_tracking', {
  action: 'Click to Call',
  label: '(817) 812‑6176'
})
</script>