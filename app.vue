<template>
  <div class="light text-secureRed-950 bg-white">
    <NuxtPage />
    <LazyFooterSection />
  </div>
</template>
<script setup>
  useHead({
    htmlAttrs: {
      lang: 'en'
    }
  })
</script>