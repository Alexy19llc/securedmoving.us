<template>
  <!-- Header section -->
  <section class="about-header w-full">
    <div class="about-hero__wrap max-w-7xl py-20 mx-auto">
      <h1
        class="faq-heading-txt md:w-4/5 text-4xl md:text-6xl text-center font-bold mx-auto px-2 pt-12 md:pt-20 mb-10"
        v-if="$slots.headline" 
      >
        <ContentSlot :use="$slots.headline" unwrap="p" />
      </h1>
      <div class="about-hero__img-wrap relative md:w-9/12 mx-auto mb-12">
        <nuxt-img
          class="mx-auto w-[90%] object-contain"
          :alt="main_image.alt"
          provider="cloudinary"
          :src="main_image.url"
          format="webp"
          quality="auto"
          width="415"
          height="190"
          fit="fill"
         />
      </div>

      <h2
      v-if="$slots.subhead"
        class="text-2xl md:text-3xl font-bold text-center mx-auto md:w-7/12 px-3"
      >
        <ContentSlot :use="$slots.subhead" unwrap="p" />
      </h2>
    </div>
  </section>
  <!-- End header section-->
</template>
<script setup>
defineProps({
  main_image: {
    type: Object,
    default: {
      src: {
      type: String,
      default: ""
      },
      alt: {
        type: String,
        default: "",
      }
    },
  }
  });
</script>
