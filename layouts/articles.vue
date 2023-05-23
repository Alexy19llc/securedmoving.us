<template>
  <div class="bg-white">
    <MainNav />
    <!-- Header section -->
    <section class="blog-header w-full px-6">
      <div class="max-w-7xl pt-16 mx-auto rounded-md">
        <div class="mx-auto max-w-7xl px-6 sm:pt-20 sm:pb-6 lg:px-8">
          <div class="text-center">
            <h1
              class="mt-1 text-4xl font-bold tracking-tight w-10/12 md:w-2/5 sm:text-5xl lg:text-6xl mx-auto"
            >
              Our Fort Worth Moving Blog
            </h1>
            <h2 class="mx-auto mt-5 max-w-xl text-xl">Posts that move you</h2>
          </div>
        </div>
      </div>
    </section>
    <!-- End Header Section -->
    
    <NuxtLayout name="categoriesnav" />

    <!-- Blog Current Section -->
    <main class="blog-current">
      <div class="relative bg-gray-50 px-6 pt-4 md:pb-20 lg:px-8 lg:pt-4 lg:pb-28">
        <div class="absolute inset-0">
          <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              <slot name="headline">
                From the blog
              </slot>
            </h2>
            <p v-if="$slots.subhead" class="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
              <slot name="subhead" />
            </p>
          </div>
          <slot name="articlelist" />
        </div>
      </div>
    </main>
    <!-- End Blog Current Section -->
    <!-- Btn Wrapper -->
    <div
      class="blog-grid__btn-wrap w-4/5 flex justify-center flex-wrap gap-4 mx-auto py-12"
    >
      <Tags />
    </div>
    <!-- End Btn Wrapper -->
    <!-- Blog Grid Section -->
    <!-- End Blog Grid Section -->
    <!-- Begin CTA Section -->
    <!-- End CTA Section -->
  </div>
</template>