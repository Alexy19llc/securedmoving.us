<template>
  <div>
    <MainNav />
    <Head>
      <Meta property="og:image" :content="'https://res.cloudinary.com/alexy-19-llc/image/upload/c_fill,g_auto,h_600,w_1200/secured-moving-company/' + page.main_image.url + '.jpg'" />
      <Meta property="og:image:url" :content="'https://res.cloudinary.com/alexy-19-llc/image/upload/c_fill,g_auto,h_600,w_1200/secured-moving-company/' + page.main_image.url + '.jpg'" />
    </Head>
    <main class="commercial-header w-full py-12 pt-28 md:pt-40">
      <ContentDoc v-slot="{ doc }" />
    </main>
    <!-- End Main -->
    <!-- Begin More Blog -->
      <NuxtLayout name="moreposts" :postlimit="3" />
  </div>
</template>

<script setup>

  definePageMeta({
    layout: false,
  })
  const { page } = useContent()
  const route = useRoute()
  useContentHead(page)
  useHead({
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://www.securedmoving.com${route.fullPath}`,
      },
    ],
  })
</script>