<template>
  <div>
    <NuxtLayout>
      <MainNav />
      <HeroSection />
      <ValuePropsition />
      <ServicesTwoColSection />
      <NuxtLayout name="testimonialgrid" :reviewlimit="2" />
      <MovingTipsGetQuoteTeaser />
      <section class="services-cta w-full bg-gray-900 py-14">
        <div
          class="cta-wrap max-w-7xl mx-auto flex flex-col items-center gap-4"
        >
          <h2
            class="text-4xl w-11/12 text-white text-center font-bold md:w-full"
          >
            About Secured Moving Company
          </h2>
          <p class="text-lg text-white text-center w-11/12 md:w-9/12 font-bold">
            Curious to know more about Secured Moving Company and our commitment
            to excellence? Visit our About Us page to learn about our history,
            values, and dedication to customer satisfaction.
          </p>
          <a
            href="/about-us"
            class="text-white text-center font-bold bg-secureRed-700 w-10/12 md:w-1/5 px-4 py-3 rounded-md"
            >About Us</a
          >
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false,
});
const { page } = useContent();
useContentHead(page);
</script>
