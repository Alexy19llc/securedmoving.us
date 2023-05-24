<template>
  <div>
    <NuxtLayout>
      <MainNav />
      <HeroSection />
      <LazyLogoCloudSimpleHeading />
      <ServicesThreeColSection />
      <OffesetTwoByTwoGrid />
      <NuxtLayout name="testimonialgrid" :reviewlimit="8" />
      <LazyCTABrandPanel />
      <ContentDoc />
      <NuxtLayout name="faqsection" />
      <NuxtLayout name="moreposts" :postlimit="6">
        <template #headline
          >Great articles about living and moving in Fort Worth</template
        >
      </NuxtLayout>
      <NuxtLayout name="areasserved" />
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
