<template>
  <div class="review-wrap max-w-5xl mx-auto p-2">
    <!-- Begin Card -->
    <div class="review-card p-5 shadow-md rounded-md">
      <h2 class="font-bold">Secured Moving Company</h2>
      <!-- Begin features wrap -->
      <div
        class="ratings-features__wrap py-8 flex flex-col md:flex-row md:items-start gap-2"
      >
        <!-- Begin Numbers and stars -->
        <div class="numbers&stars flex flex-col gap-1 py-4">
          <span class="flex items-center gap-3">
            <p class="font-bold text-xl">4.9</p>
            <StarRatings />
          </span>
          <p class="block text-zinc-600">723 Google Reviews</p>
        </div>
        <!-- End Numbers and stars -->
        <!-- Begin Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 p-3 gap-5 md:gap-4 justify-items-stretch text-gray-800"
        >
          <div
            class="col-1 md:border-r-2 w-[5rem] flex flex-row-reverse md:flex-col items-center justify-between gap-3"
          >
            <p>Long Distance Moving</p>
            <Checkmark />
          </div>
          <div
            class="col-2 md:border-r-2 w-[5rem] flex flex-row-reverse md:flex-col items-center justify-between gap-3"
          >
            <p>Short Distance Moving</p>
            <Checkmark />
          </div>
          <div
            class="col-3 md:border-r-2 w-[5rem] flex flex-row-reverse md:flex-col items-center justify-between gap-3"
          >
            <p>Labor Only</p>
            <Checkmark />
          </div>
          <div
            class="col-4 w-[5rem] flex flex-row-reverse md:flex-col items-center justify-between gap-3"
          >
            <p>Storage</p>
            <Checkmark />
          </div>
        </div>
        <!-- End Grid -->
        <!-- Begin btn & logo wrap -->
        <div
          class="btn-logo__wrap h-[7.5rem] flex flex-col gap-5 items-center md:ml-auto mr-5"
        >
          <img
            src="https://res.cloudinary.com/alexy-19-llc/image/upload/q_auto:good/v1676307667/secured-moving-company/secured-moving-logo-p-130x130q80_ayeg9x.webp"
            alt=""
            class="w-15 md:w-16"
          />
          <button
            type="button"
            class="inline-flex items-center rounded-md border border-transparent bg-[#70A4BC] px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-[#2E6985] focus:outline-none transition-colors"
          >
            Visit Website<span class="ml-3">&#10132;</span>
          </button>
        </div>
        <!-- End btn & logo wrap -->
      </div>
      <!-- End features wrap -->
      <div class="drop-wrap flex justify-between items-center">
        <h2 class="font-bold">Why we picked it</h2>
        <ChevronDown />
      </div>
      <!-- Begin drop-down -->
      <div class="card-dropdown mt-3 hidden">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything.
        </p>
      </div>
      <!-- End drop-down -->
    </div>
    <!-- End Card -->
  </div>
</template>
