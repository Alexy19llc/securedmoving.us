<template>
  <NuxtLayout>
    <MainNav />
    <!-- Begin Hero -->
    <section
      class="top-hero w-full md:h-[60vh] flex flex-col md:relative md:mb-20"
    >
      <div
        class="hero-img__wrap md:w-[1242px] h-[40vh] md:-top-[215px] md:-left-20 relative block md:absolute -z-10"
      >
        <img
          src="https://res.cloudinary.com/alexy-19-llc/image/upload/q_auto:good/v1677003186/secured-moving-company/best-movers-logos/Racing-Stripe.webp"
          alt=""
          class="absolute -top-[5px] -left-[90px]"
        />
        <h1
          class="text-3xl md:text-4xl font-bold mb-5 block md:hidden absolute top-16 right-12"
        >
          Top Ten <span class="text-sky-300">Fort<br />Worth</span><br />
          Moving<br />Companies
        </h1>
      </div>
      <div
        class="top-hero__content-wrap max-w-7xl md:w-[50%] md:h-[50vh] py-16 px-8 md:px-20 md:absolute md:hrefp-0 md:right-0"
      >
        <h1 class="text-4xl font-bold mb-5 hidden md:block">
          Top Ten <span class="text-sky-300">Fort Worth</span><br />
          Moving Companies
        </h1>
        <p class="mb-5">
          No one can perfectly execute a skill or job on their own. That's why
          it's important to hire a professional. They take pride in their work and
          are committed to delivering the best results.
        </p>
        <p>
          As a prominent moving company, we must confront many challenges and
          struggles to safely transfer our clients' belongings, regardless of the
          size of the job. Our satisfaction comes from the joy of our clients and
          from helping them move their hard-earned and valuable possessions
          without damage.
        </p>
      </div>
    </section>
    <!-- End Hero -->
    <!-- ---------------------------------------- -->
    <!-- Begin Tabs -->
    <section class="top-sub-menu w-full mb-4">
      <TabsNav />
      <div class="sub-men__txt max-w-7xl mx-auto px-8 md:px-24 py-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus ligula nec dolor placerat, a consequat elit volutpat. Quisque
          nibh lacus, posuere et turpis in, pretium facilisis nisl. Proin congue
          sem vel sollicitudin sagittis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per
        </p>
      </div>
    </section>
    <!-- End Tabs -->
    <!-- ---------------------------------------- -->
    <!-- Begin Reviews -->
    <section class="top-reviews__section w-full mb-10">
      <ReviewCard/>
    </section>
    <!-- End Reviews -->
  </NuxtLayout>
</template>
