<template>
  <div>
    <NuxtLayout>
      <MainNav />
      <section class="moving-hero_section w-full">
        <div
          class="moving-hero_heading-wrap max-w-7xl text-center py-5 pt-20 md:pt-40 md:py-20 mx-auto"
        >
          <h1
            class="moving-hero_heading faq-heading-txt w-9/12 text-3xl md:text-6xl text-center font-bold mx-auto pb-3"
          >
            Fort Worth moving services <br />
            <span class="text-secureRed-700">that go further</span>
          </h1>
          <h2
            class="max-w-prose moving-hero_subheading w-[90%] md:w-full text-1xl md:text-3xl text-center font-extralight mx-auto"
          >
          We help people like you simplify your move and safeguard your belongings.
          </h2>
        </div>
      </section>
      <ContentDoc />
      <section class="moving-long-distance_section bg-orange-50 w-full">
        <div
          class="moving-long-distance_img-txt-wrap flex flex-col items-center gap-3 mx-auto py-28 w-10/12 md:w-8/12"
        >
          <nuxt-img
            src="long-distance-moving_avxeuy.svg"
            alt="Fort Worth moving truck"
            format="svg"
            provider="cloudinary"
            class="md:w-4/6"
          />
          <h2 class="text-4xl md:text-7xl font-bold w-full text-center">
            Long Distance Moving
          </h2>
          <p
            class="text-2xl md:text-3xl text-center font-extralight md:w-9/12 mb-3.5"
          >
            From the third coast of Texas, and sea to shining sea, we'll move your
            things with care and efficiency.
          </p>
            <NuxtLink 
              href="/contact-us"
              type="button"
              class="inline-flex items-center rounded border border-transparent bg-secureRed-800 hover:bg-secureRed-700 px-10 md:px-20 py-2 md:py-3 font-bold text-white shadow-sm mb-4"
            >
              Contact us about your long distance move
            </NuxtLink>
          <p class="text-1xl text-center font-extralight w-full mb-3.5">
            Join over 3,000 satisfied Secured Moving Company Customers. If you are
            looking for skilled, experienced, and cost competitive long distance or
            intrastate moving services, Secured Moving Company, LLC has you covered!
            We have been helping families and businesses move to and from
            Dallas-Fort Worth for years. Interstate or long distance moves pose
            unique challenges handled best by long haul move experts. Knowing what
            to do and how to do it can prevent property damage, save money, and
            ensure timely services. Secured Moving Company, LLC comes prepared with
            boxes, padding, furniture disassembly know how, shrink wrap, tape, and
            everything needed to
            <strong class="font-bold"
              >prep, pack, load, secure, and transport</strong
            >
            your valuables across the USA.
            <strong class="font-bold"
              >Call now to get the answers and solutions for your long distance move
              today!</strong
            >
          </p>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>
<script setup>
 import { ArrowRightIcon } from "@heroicons/vue/24/outline/index.js";
 const { page } = useContent()
 useContentHead(page)

</script>