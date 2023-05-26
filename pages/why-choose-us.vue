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
      <section class="choose-main w-full mx-auto py-20 bg-orange-50">
        <div class="choose-two-col max-w-6xl mx-auto px-8">
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
      </section>
      <section class="services-cta w-full bg-gray-900 py-14">
        <div
          class="cta-wrap max-w-7xl mx-auto flex flex-col items-center gap-4"
        >
          <h2
            class="text-4xl w-11/12 text-white text-center font-bold md:w-full"
          >
            Ready to experience the difference with Secured Moving Company?
          </h2>
          <p class="text-lg text-white text-center w-11/12 md:w-9/12 font-bold">
            Get in touch with us today for a free, no-obligation quote. Let us
            show you why we are the trusted choice for hassle-free moves.
          </p>
          <a
            href="/contact-us"
            class="px-8 py-4 text-white text-center mx-auto font-bold w-11/12 md:w-1/4 bg-secureRed-700 rounded-md"
            >Get A Quote</a
          >
        </div>
      </section>
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
      "Secured Moving Company is fully licensed and insured. This means that your belongings are protected during the entire moving process. You can have confidence knowing that your move is in the hands of a reputable and responsible company.",
    icon: BoltIcon,
  },
  {
    name: "Transparent Pricing:",
    description:
      "We believe in transparent pricing, providing accurate and detailed quotes without any hidden fees. Our pricing structure is fair and competitive, reflecting the quality of our services. You can trust that the quote provided is accurate, allowing you to plan your budget effectively.",
    icon: BoltIcon,
  },
  {
    name: "Care for Valuables and Fragile Items:",
    description:
      "We understand the importance of your valuables and fragile items. Our team has the expertise and experience to handle delicate belongings, such as pianos, artwork, or antiques. We take special care to ensure they are properly protected and transported with utmost care.",
    icon: BoltIcon,
  },
];
</script>
