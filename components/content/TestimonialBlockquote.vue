<template>
    <figure class="mt-10 border-l w-1/2 mx-auto border-secureRed-800 pl-9">
        <blockquote class="font-semibold text-gray-900">
            <div 
                v-if="$slots.testimonial"
            >
                <ContentSlot :use="$slots.testimonial" />
            </div>
        </blockquote>
        <figcaption class="mt-6 flex gap-x-4">
            <nuxt-img 
                v-if="image"
                class="h-6 w-6 flex-none rounded-full bg-gray-50" 
                :src="image.url"
                provider="cloudinary"
                :alt="image.alt" 
            />
            <div v-if="$slots.name" class="text-sm leading-6">
                <strong class="font-semibold text-gray-900">
                    <ContentSlot :use="$slots.name" unwrap="p" />
                </strong>
                <span v-if="$slots.title"> &mdash; <ContentSlot :use="$slots.title" unwrap="p" /></span>
            </div>
        </figcaption>
      </figure>
</template>
<script setup>
const props=defineProps({
    image: {
        type: Object,
        required: false
    }
})
</script>