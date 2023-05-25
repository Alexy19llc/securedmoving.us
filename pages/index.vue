<template>
  <div>
    <NuxtLayout>
      <MainNav />
      <HeroSection />
      <ValuePropsition />
      <!-- <LazyLogoCloudSimpleHeading /> -->
      <ServicesTwoColSection />
      <!-- <OffesetTwoByTwoGrid /> -->
      <NuxtLayout name="testimonialgrid" :reviewlimit="2" />
      <!-- <LazyCTABrandPanel /> -->
      <!-- <ContentDoc /> -->
      <!-- <CTAButton /> -->
      <!-- <NuxtLayout name="faqsection" /> -->
      <MovingTipsGetQuoteTeaser />
      <!-- <NuxtLayout name="moreposts" :postlimit="6">
        <template #headline
          >Great articles about living and moving in Fort Worth</template
        >
      </NuxtLayout> -->
      <!-- <NuxtLayout name="areasserved" /> -->
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
