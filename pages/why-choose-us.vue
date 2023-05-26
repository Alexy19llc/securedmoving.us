<template>
  <div>
    <NuxtLayout>
      <MainNav></MainNav>
      <section class="choose-hero_section w-full">
        <div
          class="moving-hero_heading-wrap max-w-7xl text-center py-5 pt-20 md:pt-40 md:py-20 mx-auto"
        >
          <h1
            class="moving-hero_heading faq-heading-txt w-9/12 text-4xl md:text-6xl text-center font-bold mt-5 mx-auto pb-3"
          >
            Why Choose <br />
            <span class="text-secureRed-700">Secured Moving Company</span><br />
            For Your Hassle-Free Move?
          </h1>
          <h2
            class="max-w-prose moving-hero_subheading w-11/12 md:w-full text-1xl md:text-xl text-center font-extralight mx-auto"
          >
            At Secured Moving Company, we understand that choosing the right
            moving company is crucial for a smooth and stress-free move. Here
            are the reasons why countless customers trust us with their valuable
            belongings and rely on our exceptional services.
          </h2>
        </div>
      </section>
      <div class="choose-two-col max-w-4xl mx-auto border">
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <p class="mt-5 text-xl leading-6 font-medium">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-900">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
      <!-- End Hero -->
      <!-- Begin reliability -->
      <!-- End reliability -->
      <!-- Begin Profes -->
      <!-- End Profes -->
      <!-- Begin Cust -->
      <!-- End Cust -->
      <!-- Begin Licensed -->
      <!-- End Licensed -->
      <!-- Begin Transparent -->
      <!-- End Transparent -->
      <!-- Begin Care -->
      <!-- End Care -->
      <!-- Begin Positive -->
      <!-- End Positive -->
    </NuxtLayout>
  </div>
</template>
<script setup>
import {
  GlobeAltIcon,
  BoltIcon,
  ScaleIcon,
} from "@heroicons/vue/24/outline/index.js";

const features = [
  {
    name: "Reliability and Experience:",
    description:
      "With years of experience in the industry, we have built a reputation for reliability and professionalism. Our skilled team has successfully completed numerous moves, ensuring that each customer's belongings are handled with care and delivered safely to their new destination.",
    icon: GlobeAltIcon,
  },
  {
    name: "Professionalism and Trained Staff:",
    description:
      "At Secured Moving Company, we take pride in our team of trained professionals. Our movers are highly skilled and undergo thorough training to handle all aspects of the move efficiently and professionally. You can trust us to treat your belongings with the utmost care and respect.",
    icon: ScaleIcon,
  },
  {
    name: "Customer Service Excellence:",
    description:
      "We prioritize exceptional customer service and strive to exceed your expectations. Our friendly and knowledgeable team is here to address your concerns, answer your questions, and provide personalized assistance throughout the moving process. We believe in open communication and prompt responses to ensure your peace of mind. ",
    icon: BoltIcon,
  },
  {
    name: "Licensed and Insured:",
    description:
      "We believe in transparent pricing, providing accurate and detailed quotes without any hidden fees. Our pricing structure is fair and competitive, reflecting the quality of our services. You can trust that the quote provided is accurate, allowing you to plan your budget effectively.",
    icon: BoltIcon,
  },
];
</script>
