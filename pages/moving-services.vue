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
      <section class="moving-main max-w-7xl mb-20 mx-auto">
        <div
          class="moving-main_two-col flex flex-col-reverse md:flex-row w-11/12 mx-auto py-11"
        >
          <div class="col-left flex flex-col justify-center md:w-3/6 p-6 mx-auto">
            <h2 class="md:w-4/6 text-center md:text-left text-2xl font-bold mb-3">
              We are a Fort Worth moving company that loves its movers
            </h2>
            <p class="md:w-9/12 mb-2">
              Whether moving to a new home, relocating to a new office building, or
              moving out of an apartment, our experts have the skill and equipment
              to get the job done properly. Across the Dallas-Fort Worth Metroplex,
              our clients consider us the best local moving company available. We
              handle the most complicated moving projects. Stairs, tight spaces, and
              large items can be a nightmare for many moving companies, but not with
              Secured Moving Company, LLC. We never shy away from a challenge. Call
              today for a reliable, competitive, professional moving company, and
              Rest Assured with Secured!
            </p>
            <NuxtLink  href="/contact-us" class="font-bold text-secureRed-800 hover:text-secureRed-700"><span class="text-stone-900">Chat with our team </span><ArrowRightIcon class="w-6 inline" /></NuxtLink>
          </div>
          <div class="col-right md:w-3/6">
            <div class="main-img-wrap w-full">
              <nuxt-img
                src="72a9203db734c9ee0ff428d3e870df27croppedimage_p_800_3c32ceccba.webp"
                alt="Fort Worth movers moving furniture"
                class="object-cover w-full rounded-lg"
                provider="cloudinary"
              />
            </div>
          </div>
        </div>
        <div
          class="moving-main_two-col flex flex-col-reverse md:flex-row-reverse md:w-11/12 mx-auto p-6"
        >
          <div class="col-left flex flex-col justify-center md:w-3/6 p-6">
            <h2 class="md:w-4/6 text-2xl font-bold mb-3">Packing Services</h2>
            <p class="md:w-9/12 mb-2">
              There is no moving project too big or too small for our professional
              movers. If you simply need us to help you pack or unpack your
              belongings, we are more than happy to help. Our team will arrive with
              all of the necessary equipment including boxes, packing tape, packing
              paper, bubble wrap, and more. From small kitchen supplies to large
              pieces of furniture, we practice proper packing techniques in order to
              maximize the security of your belongings. Contact us now for
              affordable packing services in Dallas-Fort Worth, TX. We can’t wait to
              get started!
            </p>
            <NuxtLink  href="/contact-us" class="font-bold text-secureRed-800 hover:text-secureRed-700"><span class="text-stone-900">Pack it up, pack it in, let us begin </span><ArrowRightIcon class="w-6 inline" /></NuxtLink>
          </div>
          <div class="col-right md:w-3/6 border">
            <div class="main-img-wrap w-full">
              <nuxt-img
                src="b44e0c599ae79ab34aa841df1040f395packingservices_2_p_500_cbca849880.webp"
                alt="Fort Worth moving company and packing services"
                provider="cloudinary"
                class="object-cover w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
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