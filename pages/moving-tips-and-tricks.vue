<template>
  <div>
    <NuxtLayout>
      <MainNav></MainNav>
      <!-- Begin hero -->
      <section class="moving-tips_hero_section w-full">
        <div
          class="moving-hero_heading-wrap max-w-7xl text-center py-5 pt-20 md:pt-40 md:py-20 mx-auto"
        >
          <h1
            class="moving-hero_heading faq-heading-txt w-9/12 text-4xl md:text-6xl text-center font-bold mt-5 mx-auto pb-3"
          >
            Moving Tips and Tricks:
            <span class="text-secureRed-700">Your Guide to a </span>
            Smooth and Stress-Free Move
          </h1>
          <h2
            class="max-w-prose moving-hero_subheading w-11/12 md:w-full text-1xl md:text-xl text-center font-extralight mx-auto"
          >
            Moving can be a daunting task, but with the right tips and tricks,
            you can make it a breeze. Our comprehensive guide is packed with
            expert advice to help you navigate every aspect of your move. From
            packing and organizing to managing logistics, we've got you covered.
          </h2>
        </div>
      </section>
      <!-- End hero -->
      <!-- Begin main -->
      <section class="packing-main_section w-full py-11">
        <div
          v-for="wrap in wraps"
          class="packing-content_wrap w-11/12 md:max-w-7xl mx-auto mb-6 p-5 flex flex-col-reverse md:flex-row items-center bg-gray-100 rounded-md"
        >
          <div class="col-left md:w-3/5 p-2 md:p-6">
            <h2 class="font-bold leading-8 text-xl">{{ wrap.name }}</h2>
            <p>{{ wrap.description }}</p>
          </div>
          <div class="col-right md:w-2/5">
            <div class="img-wrap w-auto h-auto">
              <nuxt-img
                provider="cloudinary"
                :src="wrap.imgUrl"
                class="md:w-full md:h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- End main-->
      <!-- Begin CTA -->
      <section class="services-cta w-full bg-orange-50 py-14">
        <div
          class="cta-wrap w-11/12 md:max-w-7xl mx-auto flex flex-col items-center gap-4"
        >
          <h2 class="text-4xl 11/12 md:w-10/12 text-center font-bold">
            Ready to dive into our comprehensive Moving Tips and Tricks guide?
          </h2>
          <p class="text-lg w-11/12 md:w-9/12 font-bold">
            Explore each section in detail and equip yourself with the knowledge
            and strategies to make your move a smooth and stress-free
            experience.
          </p>
          <a
            href="https://www.securedmoving.com/fort-worth-moving-packing"
            class="px-8 py-4 text-white text-center mx-auto font-bold w-11/12 md:w-1/4 bg-secureRed-700 rounded-md"
            >Get A Quote</a
          >
        </div>
      </section>
      <!-- End CTA -->
    </NuxtLayout>
  </div>
</template>
<script setup>
import {
  GlobeAltIcon,
  BoltIcon,
  ScaleIcon,
} from "@heroicons/vue/24/outline/index.js";

const wraps = [
  {
    name: "Packing Like a Pro",
    description:
      "Learn the art of efficient packing with our expert tips. Discover strategies to streamline the packing process, including room-by-room packing, labeling techniques, and utilizing packing supplies effectively. We'll help you pack your belongings securely and stay organized throughout the move.",
    imgUrl: "packing-services/20221120_123141_orcbyr",
  },
  {
    name: "Decluttering and Downsizing:",
    description:
      "Before you move, take the opportunity to declutter and downsize your belongings. Our guide provides practical tips on sorting through your items, deciding what to keep, donate, or discard. Lighten your load and start fresh in your new space.",
    imgUrl: "Packed-Boxes-Main_wn3olq",
  },
  {
    name: "Moving Day Essentials:",
    description:
      "Be prepared for moving day with our checklist of essentials. We'll guide you on what to pack in your 'moving day' box, including important documents, essential toiletries, and basic tools. Having these essentials readily accessible will help you navigate the day smoothly.",
    imgUrl: "packing-services/20221120_123538_1_tivpul",
  },
  {
    name: "Managing Logistics:",
    description:
      "Managing logistics is key to a successful move. Our guide offers tips on coordinating with moving companies, creating a moving timeline, and notifying important parties, such as utility providers and change of address notifications. Stay organized and ensure a seamless transition.",
    imgUrl: "packing-services/20221120_125008_d2eqnm.jpg",
  },
  {
    name: "Unpacking and Settling In:",
    description:
      "Once you arrive at your new home, our tips will help you unpack and settle in efficiently. From prioritizing unpacking to creating an organized system, we'll guide you through the process of making your new space feel like home.",
    imgUrl: "organized-drawer-for-move-p-1080_ymkzy6.jpg",
  },
  {
    name: "Stress Relief and Self-Care:",
    description:
      "Moving can be stressful, but it's essential to take care of yourself during the process. Our guide provides self-care tips and stress-relief techniques to help you stay grounded and maintain your well-being throughout the move. Remember to take breaks and practice self-care.",
    imgUrl: "Saqinaw_Social_7c551144a2",
  },
  {
    name: "Moving with Kids and Pets:",
    description:
      "Moving with kids and pets can present unique challenges. Our guide offers practical strategies to ease the transition for your little ones and furry friends. From involving them in the process to providing them with comfort and security, we'll help you navigate moving with your loved ones.",
    imgUrl: "jiawei-zhao-BsXeYX3efOI-unsplash_o3d8fa",
  },
  {
    name: "Environmental-Friendly Moving Tips:",
    description:
      "We believe in sustainable moving practices. Our guide includes eco-friendly tips and practices to minimize waste, recycle packing materials, and choose environmentally friendly options. Make your move not only efficient but also environmentally conscious.",
    imgUrl:
      "61d86d41bb053d5011e6596a_gerhard-crous-blue-heron-keller-tx_hyugdh",
  },
];
</script>
