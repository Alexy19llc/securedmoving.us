<template>
  <div class="bg-gray-50 overflow-hidden">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl pb-16 lg:pb-24">
     
      <!-- Begin A Better Section -->
      <div class="a-better-section relative">
        <h2 
          v-if="$slots.headline"
          class="mt-16 lg:mt-24 text-center text-3xl leading-8 font-bold tracking-tight text-secureRed-950 sm:text-4xl sm:tracking-tight"
        >
          <ContentSlot :use="$slots.headline" unwrap="p" />
        </h2>
        <div 
          v-if="$slots.subhead"
          class="mt-4 max-w-3xl mx-auto text-center text-xl text-stone-500">
          <ContentSlot :use="$slots.subhead" />
        </div>
      </div>

      <!-- Begin 2 col containter -->
      <div
        class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center z-10"
      >
        <!-- Begin col-1 -->
        <div class="col-1 relative z-10">
          <slot name="leftfeature" />
        </div>
        <!-- End col-1 -->
        <!-- Begin col-2 -->
        <div class="mt-10 relative lg:mt-0" aria-hidden="true">
          <!-- Begin Section Two ------------------------------------------>
            <slot name="rightfeature" />
        </div>
        <!-- End col-2 -->
      </div>
      <!-- End 2 col containter -->
    </div>
  </div>
</template>

<script setup>
import {
  CheckBadgeIcon,
  SparklesIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/24/outline/index.js";

const transferFeatures = [
  {
    id: 1,
    name: "Plain and Simple Prices for Our Moving and Packing Services",
    description:
      "You get straightforward pricing for our moving and packing services.",
    icon: SparklesIcon,
  },
  {
    id: 2,
    name: "Our movers are trained professionals",
    description:
      "Our team of movers and packers will treat you with kindness and professionalism.",
    icon: CheckBadgeIcon,
  },
  {
    id: 3,
    name: "Secure and kind end-to-end moving service",
    description:
      "We provide  exceptional moving services from packing to delivery.",
    icon: ShieldCheckIcon,
  },
  {
    id: 4,
    name: "We pay attention to details so that you can enjoy a smooth move",
    description:
      "We handle your local or long-distance move as if it were our own.",
    icon: TruckIcon,
  },
];
</script>
