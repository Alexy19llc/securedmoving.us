<template>
  <section class="location-map__section w-full bg-safetyGreen-800 py-32 text-stone-900">
    <div
      class="map-content__wrap flex flex-col items-center justify-center max-w-7xl mx-auto"
    >
      <h1 class="text-3xl md:text-4xl font-bold md:mb-8 text-white">
        Our Location & Hours
      </h1>
      <!-- Grid 4 col -->
      <div class="map-wrap grid grid-cols-1 md:grid-cols-4 gap-8 w-full p-6">
        <!-- Location card -->
        <div
          class="border rounded-md p-6 flex flex-col col-span-2 md:col-span-1 gap-4 bg-white"
        >
          <img
            src="https://res.cloudinary.com/alexy-19-llc/image/upload/v1665005346/secured-moving-company/icon_usa_fabb848450.webp"
            alt=""
            class="w-20"
          />
          <h2 class="font-bold text-xl">Fort Worth</h2>
          <p>
            4500 Mercantile Plaza <br />
            Fort Worth, TX 76137x
          </p>
          <a href="tel:+18178126176" class="font-bold">(817)&nbsp;812&#8209;6176</a>
          <a
            href="mailto:securedmovingcompany@gmail.com"
            class="font-bold text-sm"
            >securedmovingcompany@gmail.com</a
          >
        </div>
        <!-- End location card -->
        <!-- Map card -->
        <div class="border rounded-md p-8 bg-white col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8548653209436!2d-97.31195154887011!3d32.82261028887231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7bce5baf2229%3A0xadceeab1f37128ab!2sSecured%20Moving%20Company%20LLC%20Fort%20Worth!5e0!3m2!1sen!2sus!4v1674507565995!5m2!1sen!2sus"
            width="100%"
            height="350"
            title="Secured Moving Company, LLC Location"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="rounded-md"
          ></iframe>
        </div>
        <!-- End map card -->
        <!-- Hours card -->
        <div
          class="border rounded-md flex flex-col col-span-2 md:col-span-1 gap-4 p-6 bg-white"
        >
          <img
            src="https://res.cloudinary.com/alexy-19-llc/image/upload/v1665005333/secured-moving-company/icon_comment_a62a747239.webp"
            alt=""
            class="w-20"
          />
          <h2 class="font-bold text-xl">Hours</h2>
          <p>
            <span class="font-bold">Monday-Friday</span> <br />
            8:00 am - 7:00 pm
          </p>
          <p>
            <span class="font-bold">Saturday</span> <br />
            9:00 am - 5:00 pm
          </p>
          <p>
            <span class="font-bold">Sunday</span> <br />
            11:00 am - 5:00 pm
          </p>
        </div>
        <!-- End hours card -->
      </div>
    </div>
  </section>
</template>
