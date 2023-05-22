<template>
  <section class="about-leadership w-full py-20">
    <div
      class="heading-wrap w-full md:w-9/12 mx-auto flex flex-col justify-center items-center gap-12"
    >
      <h2 v-if="$slots.headline" class="font-bold text-center text-3xl md:text-4xl">
        <ContentSlot :use="$slots.headline" unwrap="p" />
      </h2>
      <h3 v-if="$slots.subhead" class="font-bold text-center text-2xl md:text-3xl">
        <!-- <span v-html="$mdRenderer.render(subhead)"></span> -->
        <ContentSlot :use="$slots.subhead" unwrap="p" />
      </h3>
    </div>
    <div
      class="col-2-vid__wrap md:w-9/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-12 py-8"
    >
      <iframe
        v-for="theVid in video"
        width="90%"
        height="315"
        :src="theVid.src"
        :title="theVid.title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script setup>
defineProps({
  video: {
    type: Object,
    src: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    }
  }
})
</script>