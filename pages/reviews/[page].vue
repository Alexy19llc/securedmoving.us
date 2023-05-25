<template>
  <div>
    <NuxtLayout>
      <MainNav />
      <ContentDoc path="moving-company-reviews" />
      <!-- End header -->
      <main>
        <LazyContentList
          path="reviews"
          :query="{
            where: {
              stars: {
                $contains: 5,
              },
            },
            limit: limitVal,
            skip: limitVal * (page - 1),
            $sensitivity: 'base',
          }"
        >
          <template v-slot="{ list }">
            <div
              class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none px-16"
            >
              <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                <Testimonial
                  v-for="review in list"
                  :key="review._path"
                  :testimonial="review"
                />
              </div>
            </div>
            <div
              class="px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-16 py-0 md:py16"
            >
              <NuxtLayout
                name="pagination"
                :navList="'reviews'"
                :pageNumber="page"
                :numArticles="limitVal"
              >
                <template #nav />
              </NuxtLayout>
            </div>
          </template>
        </LazyContentList>
      </main>
      <!-- End main -->
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const route = useRoute();
const page = Number(route.params.page);
const limitVal = 10;

useHead({
  title: `Secured MOving Company Moving Reviews | Page ${page}`,
});
</script>
