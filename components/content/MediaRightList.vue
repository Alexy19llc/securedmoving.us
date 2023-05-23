<template>
  <ContentList :path="path" v-slot="{ list }">
  <div v-for="item in list" class="text-left flex gap-5 items-center justify-center mb-10">
    <ContentRenderer :value="item">
    <div class="max-w-prose">
        <h4 class="text-4xl font-light">{{ item.title }}</h4>
        <ContentRendererMarkdown class="prose text-xl font-normal mt-1" :value="item" />
        <div class="text-xl font-bold mt-5">
          <NuxtLink  
            :href="item.cta.link"
            :external="item.cta.external"
            class="flex flex-row items-center gap-2 "
          >
              <span>{{ item.cta.text }}</span>
              <ChevronRightIcon class="h-7" />
          </NuxtLink>
        </div>
    </div>
    <div class="ml-4 max-w-sm flex-shrink-1">
      <nuxt-img
      class=" rounded-xl shadow-xl ring-1 ring-gray-400/10"
      provider="cloudinary"
      :src="item.main_image.url"
      :alt="item.main_image.alt"
      width="300"
      format="webp"
      quality="auto"
      />
  </div>
    </ContentRenderer>
  </div>
  </ContentList>
</template>
<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid/index.js';

    defineProps({
        path: {
            type: String,
            required: false,
            default:'/'
        }
    })
</script>