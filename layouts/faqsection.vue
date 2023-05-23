<template>
  <div class="bg-gray-900">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl sm:tracking-tight">Frequently asked questions</h2>
        <p class="mt-4 text-gray-400">As always, our team is available to answer any additional questions you may have and assist you with every step of the moving process.</p>
      </div>
      <ContentList :query="query" v-slot="{ list }">
        <div class="mt-20">
          <dl class="space-y-10 lg:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="max-width-prose text-base" v-for="faq in list" :key="faq.id">
              <dt class="font-semibold text-white">
                {{ faq.title }}
              </dt>
              <dd class="mt-3 text-gray-400">
                {{ faq.faq_answer }}
              </dd>
            </div>
          </dl>
        </div>
        </ContentList>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
  const query: QueryBuilderParams = { path: '/faqs', where: [{ feature: true }], limit: 6 }
</script>