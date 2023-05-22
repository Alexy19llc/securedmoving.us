<!-- ./pages/blog/tags/[slug].vue -->
<template>
  <div>
    <NuxtLayout name="articles">
      <template #headline />
      <template #subhead />
      <template #articlelist>
        <!-- Render list of all articles in ./content/blog using `path` -->
        <!-- Provide only defined fieldsin the `:query` prop -->
        <ContentList
          path="/post"
          :query="{
            only: [
              'title',
              'description',
              'tags',
              '_path',
              'main_image',
              'category',
              'updated_on',
              'slug',
            ],
            where: {
             'category.slug': {
                $contains: slug,
              },
            },
            $sensitivity: 'base',
            sort: [{ updated_on: -1 }]
          }"
        >
          <!-- Default list slot -->
          <template v-slot="{ list }">
            <div
              class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              <LazyPostFeaturette
                v-for="article in list"
                :key="article._path"
                :article="article"
              />
            </div>
          </template>

          <!-- Not found slot to display message when no content us is found -->
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentList>
      </template>
    </NuxtLayout>
  </div>
  <!-- Begin More Blog Posts List -->
  <NuxtLayout name="moreposts" :postlimit="3" />
</template>

<script setup>
  definePageMeta({
    layout: false,
  });
  // get current route
  const {
    params: { slug },
  } = useRoute();
  const route = useRoute();

  // set meta for page
  useHead({
    title: `All Secured Moving Company articles with ${slug}`,
    meta: [
      { name: "description", content: "Here's a list of our great moving articles" },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://www.securedmoving.com${route.fullPath}`,
      }
    ],
  });
</script>
