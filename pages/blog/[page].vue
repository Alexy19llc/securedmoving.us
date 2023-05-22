<template>
  <div>
    <NuxtLayout name="articles">
      <template #headline></template>
      <template #subhead></template>
      <template #articlelist>
        <!-- Render list of all articles in ./content/blog using `path` -->
        <!-- Provide only defined fieldsin the `:query` prop -->
        <ContentList
          path="post"
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
              tags: {
                $contains: filter,
              },
            },
            limit: limitVal,
            skip: limitVal * (page - 1),
            $sensitivity: 'base',
            sort: [{ updated_on: -1 }]
          }"
        >
          <!-- Default list slot -->
          <template v-slot="{ list }">
            <div
              class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              <PostFeaturette
                v-for="article in list"
                :key="article._path"
                :article="article"
              />
            </div>
            <div class="px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-0">
              <NuxtLayout
                name="pagination"
                :navList="'post'"
                :pageNumber="page"
                :numArticles="limitVal"
              >
                <template #nav />
              </NuxtLayout>
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
</template>
<script setup>
definePageMeta({
  layout: false,
});

const route = useRoute();
const page = Number(route.params.page);
const limitVal = 9;

useHead({
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: `https://www.securedmoving.com${route.fullPath}`,
    }
  ],
  title: `Secured Moving Company Moving Reviews | Page ${page}`,
  meta: [
    { name: "description", content: "Page" + page + "of our great Moving and Lifestyle articles" },
  ],
});
</script>