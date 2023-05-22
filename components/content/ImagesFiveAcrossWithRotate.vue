<template>
    <div className="mt-16 sm:mt-20">
        <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div
                v-for="(image, imageIdx) in images" :key="image.index"
                :class="[imageIdx % 2 === 0 ? 'rotate-2' : '-rotate-2', 'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl']">
                <nuxt-img
                    :src="image.url"
                    provider="cloudinary"
                    :alt="image.alt"
                    class="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        images: {
            type: Array
        }
    })
</script>