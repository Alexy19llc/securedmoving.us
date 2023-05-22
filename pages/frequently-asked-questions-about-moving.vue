<template>
  <div class="bg-safetyGreen-100">
    <NuxtLayout>
      <MainNav />
      <section class="faq-main w-full py-5 pt-20">
        <ContentDoc />
      </section>
    </NuxtLayout>
  </div>
</template>
<script setup>
const { page } = useContent()
  useContentHead(page)
</script>