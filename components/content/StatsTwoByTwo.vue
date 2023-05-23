<template>
  <div class="relative bg-white">
    <div class="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
      <h2 v-if="$slots.overline" class="text-base font-semibold leading-8 text-secureRed-800">
        <ContentSlot :use="$slots.overline" unwrap="p" />
      </h2>
      <p v-if="$slots.headline" class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <ContentSlot :use="$slots.headline" unwrap="p" />
      </p>
      <div v-if="$slots.intro" class="mt-6 text-lg leading-8 text-gray-600">
        <ContentSlot :use="$slots.intro" />
      </div>
      <dl class="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
        <div v-for="stat in stats" :key="stat.id" class="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
          <dt class="text-sm leading-6 text-gray-600">{{ stat.name }}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
          </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stats: {
    type: Array,
    required: true,
    default: []
  }
})
</script>