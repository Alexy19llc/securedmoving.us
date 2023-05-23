<template>
  <section class="footer-section w-full bg-secureRed-950 text-stone-100 pb-20">
    <!-- Begin grid container -->
    <div
      class="grid-container max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-16 w-[97%] mx-auto px-3 py-11"
    >
      <!-- Begin Column -->
      <div class="col-1 w-[1fr] flex flex-col gap-1">
        <p class="font-bold">Our Services</p>
        <a  href="/moving-services" class="font-thin">Moving Services</a>
        <a  href="/moving-services" class="font-thin">Packing Services</a>
        <a  href="/fort-worth-moving-packing" class="font-thin">Moving Tips & Resources</a>
      </div>
      <!-- End Column -->

      <!-- Begin Column -->
      <div class="col-1 w-[1fr] flex flex-col gap-1">
        <a  href="/moving-services" class="font-bold">Company</a>
        <a  href="/about-secured-moving" class="font-thin">About</a>
        <a  href="/contact-us" class="font-thin">Contact Us</a>
        <p class="font-bold">Location</p>
        <a  href="/contact-us"  class="font-thin">Fort Worth</a>
      </div>
      <!-- End Column -->

      <!-- Begin Column -->
      <div class="col-1 w-[1fr] flex flex-col gap-1">
        <p class="font-bold">Hours</p>
        <p class="font-bold">Monday&#8209;Friday</p>
        <p class="font-thin">8:00am&#8209;7:00pm</p>
        <p class="font-bold">Saturday</p>
        <p class="font-thin">9:00am&#8209;5:00pm</p>
        <p class="font-bold">Sunday</p>
        <p class="font-thin">11:00am&#8209;5:00pm</p>
      </div>
      <!-- End Column -->

      <!-- Begin Column -->
      <div class="col-4 col-span-2 md:col-span-1 pt-5 md:pt-0 pr-5">
        <nuxt-img
          class="w-[70%] md:w-[98%]"
              src="Secured_Moving_Logo_jsxaoo"
              alt="Secured Moving Company, LLC Logo Fort Worth"
              provider="cloudinary"
              format="webp"
              height="81"
              width="241"
             />
      </div>
      <!-- End Column -->
    </div>
    <!-- End grid container -->
    <!-- Begin copyright -->
    <div
      class="copyright max-w-7xl flex flex-col md:flex-row justify-between p-5 gap-9 mx-auto"
    >
      <p>© Copyright 2023 Secured Moving Company, LLC</p>
      <ul class="flex flex-col md:flex-row gap-2 md:gap-4 whitespace-nowrap">
        <li><a  href="/contact-us"><strong>Contact Us</strong></a></li>
        <li>Phone: <a href="tel:817-812-6176">(817)&nbsp;812&#8209;6176</a></li>
        <li>TxDMV No 007049919C</li>
        <li>License No: 2943806</li>
      </ul>
    </div>
    <!-- End copyright -->
  </section>
</template>
