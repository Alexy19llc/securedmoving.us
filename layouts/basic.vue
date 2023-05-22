<template>
  <div>
      <MainNav />
      <section class="bg-safetyGreen-100 w-full py-5 pt-20">
        <ContentDoc />
      </section>
  </div>
</template>

<script setup>
  const { page } = useContent()
  useContentHead(page)
  const route = useRoute()
  useHead({
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://www.securedmoving.com${route.fullPath}`,
      }
    ],
  })
</script>