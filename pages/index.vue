<template>
  <div>
    <NuxtLayout>
      <MainNav />
      <HeroSection />
      <ValuePropsition />
      <ServicesTwoColSection />
      <NuxtLayout name="testimonialgrid" :reviewlimit="2" />
      <MovingTipsGetQuoteTeaser />
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
