<template>
  <div>
    <NuxtLayout>
      <!-- End Header -->
      <MainNav />
      <ContentDoc />
      <PrinciplesSection />
      <LocationAndHours />
    </NuxtLayout>
  </div>
</template>
<script setup>
 const { page } = useContent()
 useContentHead(page)
</script>