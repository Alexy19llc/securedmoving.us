<script setup>
    defineProps({
        postlimit: {
            type: Number,
            require: true,
        }
    })
</script>

<template>
    <section class="blog-grid w-full bg-gray-50">
      <!-- Blog Grid -->
      <div class="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="absolute inset-0">
          <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
                <slot name="headline">
                More great articles
                </slot>
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                <slot name="subhead" />
            </p>
          </div>

          <div class="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-none gap-5 lg:max-w-none " >
            <LazyContentList path="/post" v-slot="{ list }" :limit="postlimit" :sort="{ updated_on: -1 }">
                <PostFeaturette :article="post"
                  v-for="post in list" :key="post._path" />
            </LazyContentList>
          </div>
        </div>
      </div>
      <!-- End Blog Grid -->
    </section>
</template>