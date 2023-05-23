<template>
  <div>
    <NuxtLayout>
      <MainNav />
      <section class="header bg-stone-50">
        <div class="header-text-wrap max-w-7xl text-center py-14 mx-auto">
          <h1 class="text-2xl md:text-4xl font-bold pt-12 md:pt-20">
            Friendly. Fort Worth friendly.
          </h1>
          <h1 class="text-3xl md:text-6xl font-bold">
            The friendliest moving company
          </h1>
          <h1 class="text-3xl md:text-6xl font-bold text-cyan-600">
            you’ll talk to today.
          </h1>
        </div>
      <!-- Being 2 col container -->
        <div
          class="two-col flex flex-col md:flex-row md:max-w-7xl gap-10 mx-auto px-9 pb-16"
        >
          <!-- Begin card -->
          <div
            class="contact-header_card flex flex-col items-start gap-7 bg-white md:w-1/2 p-6 rounded-md"
          >
            <img
              src="https://res.cloudinary.com/alexy-19-llc/image/upload/v1665005346/secured-moving-company/icon_usa_fabb848450.svg"
              alt=""
              class="w-20"
            />
            <h1 class="text-2xl font-bold text-left">Fort Worth</h1>
            <p class="text-left w-1/3">
              4500 Mercantile Plaza Fort Worth, TX 76137
            </p>
            <a href="tel:817-812-6176" class="font-bold">(817) 812-6176</a>
            <a href="mailto:securedmovingcompany@gmail.com" class="font-bold"
              >securedmovingcompany@gmail.com</a
            >
          </div>
          <!-- End card -->
          <!-- Begin card -->
          <div
            class="contact-header_card flex flex-col items-start gap-7 bg-white md:w-1/2 p-6 rounded-md"
          >
            <img
              src="https://res.cloudinary.com/alexy-19-llc/image/upload/v1665005346/secured-moving-company/icon_worldwide_delivery_7e10d3c621.svg"
              alt=""
              class="w-20"
            />
            <h1 class="text-2xl font-bold text-left">Hours</h1>
            <p class="text-left w-1/3">
              <strong class="text-left w-1">Monday-Friday</strong><br />
              8:00 am - 7:00 pm
            </p>
            <p class="text-left w-1/3">
              <strong>Saturday</strong><br />
              9:00 am - 5:00 pm
            </p>
          </div>
          <!-- End card -->
        </div>
        <!-- End 2 cold container -->
      </section>
      <ContentDoc />
    </NuxtLayout>
  </div>
</template>
<script setup>
 const { page } = useContent()
 useContentHead(page)
</script>