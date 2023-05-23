<template>
    <div :class="'mx-auto max-w-7xl py-6 pt-10 ' + classesWrapper">
      <div class="w-4/5 mx-auto">
        <ContentDoc v-slot="{ doc }">
          <h2 v-if="$slots.headlineH2" :class="'text-center py-4 ' +  classesH2">
              <ContentSlot :use="$slots.headlineH2" unwrap="p" />
          </h2>
      </ContentDoc>
        <slot name="body" />
      </div>
    </div>
</template>
<script setup>
  const props=defineProps ({
    classesH2: {
      type: String,
      default: 'font-bold text-2xl'
    },
    classesWrapper: {
      type: String,
      default: 'bg-safetyGreen-100'
    }
  })
</script>