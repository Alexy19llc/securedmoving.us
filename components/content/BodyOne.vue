<template>
    <section :class="'w-full ' + classNames">
        <div
            class="prose about-story__wrap w-9/12 md:w-6/12 text-black mx-auto md:px-6 py-24 flex flex-col gap-4"
        >
            <ContentSlot  :use="$slots.default" />
        </div>
    </section>
</template>
<script setup>
defineProps ({
    classNames: {
      type: String,
      default: ""
    }
  })
</script>