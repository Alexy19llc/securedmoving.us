<template>
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
          About Secured Moving Company:
          <span class="text-secureRed-700"
            >Your Trusted Partner in Hassle-Free Moves</span
          >
        </h1>
        <h2
          class="max-w-prose moving-hero_subheading w-11/12 md:w-full text-1xl md:text-xl text-center font-extralight mx-auto"
        >
          At Secured Moving Company, we are dedicated to providing exceptional
          moving services that make your relocation a seamless and stress-free
          experience. Learn more about our company's mission, values, and
          commitment to customer satisfaction.
        </h2>
      </div>
    </section>
    <!-- End hero -->
    <!-- begin mission -->
    <section class="our-mission_section bg-gray-900 w-full py-14">
      <div
        class="pack-sup_txt-wrap max-w-7xl mx-auto flex flex-col items-center"
      >
        <h2 class="text-4xl font-bold text-white text-center mb-4">
          Our Mission:
        </h2>
        <p class="text-white text-lg w-9/12">
          At Secured Moving Company, our mission is to redefine the moving
          experience. We strive to exceed customer expectations by delivering
          reliable, efficient, and personalized moving services. Our goal is to
          alleviate the stress and challenges associated with moving, ensuring a
          smooth transition for every client.
        </p>
      </div>
    </section>
    <!-- end mission -->
    <!-- begin experience -->
    <section class="packing-main_section w-full">
      <div
        v-for="wrap in wraps"
        class="packing-content_wrap w-11/12 md:max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center rounded-md"
      >
        <div class="col-left md:w-3/5 p-2 md:p-6">
          <h2 class="font-bold leading-10 text-2xl">{{ wrap.name }}</h2>
          <p>{{ wrap.description }}</p>
        </div>
        <div class="col-right md:w-2/5 py-6">
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
    <!-- end experience -->
    <!-- begin grid -->
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
    <!-- end grid -->
  </NuxtLayout>
</template>
<script setup>
const wraps = [
  {
    name: "Experience and Expertise:",
    description:
      "With over a decade of experience in the industry, we have honed our skills and expertise to become a trusted name in the moving business. Our team of professionals has successfully completed numerous moves, gaining invaluable knowledge and experience along the way.",
    imgUrl: "owner-arthur-tignor-secured-moving-company.5x-min_wdw9s9.jpg",
  },
];
const features = [
  {
    name: "Customer Focus:",
    description:
      "At the core of our business is our commitment to exceptional customer service. We prioritize your needs and concerns, providing personalized attention and tailored solutions to meet your specific requirements. Your satisfaction is our ultimate goal, and we go the extra mile to ensure that every aspect of your move is handled with care and professionalism.",
  },
  {
    name: "Skilled and Dedicated Team:",
    description:
      "Secured Moving Company takes pride in our team of skilled and dedicated professionals. Our movers are meticulously trained to handle all aspects of the moving process, from packing and loading to transportation and unloading. With their expertise and attention to detail, you can trust that your belongings are in capable hands.",
  },
  {
    name: "Quality Assurance:",
    description:
      "We hold ourselves to the highest standards of quality and professionalism. From using reliable moving equipment to employing best practices in packing and handling, we prioritize the safety and security of your belongings. Our commitment to quality assurance ensures that your move is executed flawlessly.",
  },
  {
    name: "Community Involvement:",
    description:
      "Secured Moving Company believes in giving back to the community. We actively participate in local initiatives, supporting nonprofit organizations and community events. We are proud to be part of the fabric of [location], and we continuously seek opportunities to make a positive impact.",
  },
];
</script>
