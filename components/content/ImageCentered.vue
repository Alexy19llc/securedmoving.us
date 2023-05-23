<template>
   <figure class="mt-16">
    <nuxt-img 
        class="aspect-video rounded-xl bg-gray-50 object-cover" 
        :src="image.url" 
        provider="cloudinary"
        :alt="image.alt" 
        :modifiers="image.modifiers"
    />
    <figcaption v-if="image.caption" class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
        <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
        {{ image.caption }}
    </figcaption>
    </figure>
</template>
<script setup>
    import { InformationCircleIcon } from '@heroicons/vue/20/solid/index.js'
    const props = defineProps({
            image: {
                type: Object,
                url: {
                    type: String,
                    default: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3'
                },
                alt: {
                    type: String,
                    default: 'Fort Worth Moving Company'
                },
                modifiers: {
                    type: String,
                    default: ''
                },
                caption: {
                    type: String,
                    default: ''
                }
            }
        })
</script>