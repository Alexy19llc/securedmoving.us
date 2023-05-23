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
              'published_on',
              'slug',
            ],
            where: {
              tags: {
                $contains: filter,
              },
            },
            limit: 9,
            $sensitivity: 'base',
          }"
        >
          <!-- Default list slot -->
          <template v-slot="{ list }">
            <div
              class="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-lg gap-5 lg:max-w-none"
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
  key: (route) => route.fullPath,
});
definePageMeta({
  layout: false,
});
const { pageCont } = useContent()
  useContentHead(pageCont)
  
const page = 0;
const limitVal = 9;

// get tag query
const {
  query: { tags },
} = useRoute();
const filter = ref(tags?.split(","));
// set meta for page
useHead({
  title: "All articles",
  meta: [
    { name: "description", content: "Here's a list of all my great articles" },
  ],
});

const posts = await useAsyncData("posts", () =>
  queryContent("post")
    .limit(numArticles)
    .skip(numArticles * (pageNo - 1))
    .sort({ updated_on: -1, $sensitivity: "base" })
    .where({ published: { $ne: false } })
    .find()
);

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
}
</script>