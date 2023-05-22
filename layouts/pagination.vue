<template>
    <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <slot name="nav">
            <div class="-mt-px flex w-0 flex-1">
                <NuxtLink  v-if="nextPage > Math.ceil((numOfArticles.length/limitVal)-1)" :href="prevPage" class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-stone-700 hover:border-stone-300 hover:text-stone-600">
                    <ArrowLeftIcon class="mr-3 h-5 w-5 text-stone-600" aria-hidden="true" />
                    Previous
                </NuxtLink>
            </div>
            <div class="hidden md:-mt-px md:flex">
                <!-- Custom Override Link COmponent for Pagination Links -->
                <PaginationLink
                    v-for="link of Math.ceil(numOfArticles.length/limitVal)"
                    :key="link.id"
                    :to="'./' + link"
                >
                {{ link }}
                </PaginationLink>
            </div>
            <div class="-mt-px flex w-0 flex-1 justify-end">
                <NuxtLink  v-if="nextPage < Math.ceil((numOfArticles.length/limitVal)+1) " :href="nextPage" class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-stone-700 hover:border-stone-300 hover:text-stone-600">
                Next
                    <ArrowRightIcon class="ml-3 h-5 w-5 text-stone-600" aria-hidden="true" />
                </NuxtLink>
            </div>
        </slot>
    </nav>
</template>
  
<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid/index.js';

const props = defineProps({
    navList: {
        type: String,
        require: true,
        default: ''
    },
    pageNumber: {
        type: Number,
        require: true,
        default: 1
    },
    limitVal:{
        type: Number,
        default: 9
    }
})
const nextPage = String(props.pageNumber + 1);
const prevPage = String(props.pageNumber - 1);
// const totalPages = ''
const paginatonQuery = await useAsyncData('list', () => queryContent(props.navList)
    .skip(nextPage)
    .only(['_path'])
    .sort( {updated_on: -1, $sensitivity: 'base'} )
    .where({ published: { $ne: false } })
    .find()
)
const numOfArticles = paginatonQuery.data;
</script>
<style scoped>
    .router-link-active {
        @apply text-secureRed-800 font-bold border-secureRed-700 !important;
    }
</style>