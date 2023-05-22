<template>

    <div class="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg">
        <a  :href="article._path">
            <nuxt-img
                class="flex-shrink-0"
                :alt="article.main_image.alt"
                provider="cloudinary"
                :src="article.main_image.url"
                format="webp"
                quality="auto"
                width="415"
                height="190"
                fit="fill"
                loading="lazy"
                :modifiers="{ g: 'auto' }"
            />
        </a>
            <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                    <p class="mb-2 text-sm font-medium text-secureRed-600">
                        <a 
                            no-prefetch="true"
                            :href="'/blog/category/' + article.category.slug"
                            class="py-2 hover:underline capitalize"
                        >
                            {{ article.category.name }}
                        </a>
                    </p>
                    <p class="text-xl font-semibold text-slate-900">
                        <a no-prefetch="true" :href="article._path">{{ article.title }}</a>
                    </p>
                    <p class="mt-3 text-base text-slate-800">
                        <a no-prefetch="true" :href="article._path">{{ article.description }}</a>
                    </p>
                </div>
                <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                    <span>
                        <span class="sr-only">{{ article.tags }}</span>
                        <TagIcon class="h-6 w-6 text-secureRed-800" />
                    </span>
                </div>
                <div class="ml-3">
                    <p class="text-sm font-medium text-slate-700">
                        <a 
                        no-prefetch="true"
                            class="hover:underline inline py-2"
                            v-for="(tag, n, index) in article.tags" :key="n"
                            :href="'/blog/tags/' + encodeURIComponent(tag)"
                        >
                            {{ tag  }}<span v-if="index != Object.keys(n).length - 1">, </span>
                        </a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-600">
                    <time datetime="2020-03-16">{{ formatDate(article.updated_on) }}</time>
                    </div>
                </div>
                </div>
            </div>
    </div>
</template>
<script setup>
  import { TagIcon } from "@heroicons/vue/24/solid/index.js";
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en', options);
    }
    defineProps({ 
        article: {
            type: Object
        }
    })
</script>