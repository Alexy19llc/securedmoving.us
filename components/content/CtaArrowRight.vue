<template>
    <div class="mt-10">
        <NuxtLink  
            :href="cta.url" 
            class="font-bold text-secureRed-800 hover:text-secureRed-700">
            <span class="text-stone-900">{{ cta.callToAction }} </span>
            <ArrowRightIcon class="w-6 inline" />
        </NuxtLink>
    </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline/index.js";

const prop = defineProps({
    cta: {
        type: Object,
        required: true,
    }
})
</script>