<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-xl leading-7 text-gray-400">{{ stat.name }}</dt>
          <dd class="order-first font-serif text-3xl font-semibold tracking-tight text-white sm:text-5xl">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script setup>
    defineProps({
        stats : {
            type: Array,
            default: []
        }
    })
</script>