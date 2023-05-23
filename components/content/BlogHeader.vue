<template>
    <div
        class="flex flex-col-reverse md:flex-row justify-center items-center max-w-7xl mx-auto px-1 gap-5"
    >
        <div
            class="md:w-4/12 px-3 py-6 md:py-0 md:px-0 flex flex-col gap-2 justify-left items-left"
        >
            <nuxt-link href="/blog/1"
            class="font-bold text-xl w-[90%] md:w-[70%] mb-2 block -ml-3 md:-ml-6">
            <span class="px-2 text-2xl">&#8249;</span><span class="hover:border-b-4 border-secureRed-800">Blog</span>
            </nuxt-link>
            <h1 class="max-width-prose text-3xl md:text-6xl font-bold">
                {{ title }}
            </h1>
            <h2 
                v-if="$slots.subhead"
                class="text-light text-3xl md:text-4xl text-safetyGreen-800"
            >
                <ContentSlot :use="$slots.subhead" unwrap="p" />
            </h2>
            <div>
            <nuxt-link :href="'/blog/category/' + category.slug" class="hover:underline text-secureRed-800 font-bold capitalize">
                {{ category.name }}
            </nuxt-link>
            <p class=" ">{{ formatDate(pubDate) }}</p>
        </div>
        </div>
        <div class="comm-col-2 w-[90%] md:w-1/2">
            <nuxt-img
                :alt="mainimage.alt"
                provider="cloudinary"
                :src="mainimage.url"
                format="webp"
                quality="auto"
                width="660"
                height="400"
                fit="fill"
                :modifiers="{ roundCorner:'10', g: 'auto' }"
            />
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    category: Object,
    date: String,
    mainimage: {
        type: Object
    },
    title: String
})
const pubDate = Date.parse(props.date)
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en', options);
  }
</script>