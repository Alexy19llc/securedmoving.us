<template>
  <section class="blog-nav w-full">
      <!-- Menu Section -->
        <div
        class="blog-submenu flex flex-wrap justify-center gap-8 mx-auto py-8 w-4/5">
            <NuxtLink  activeClass="text-secureRed-800" href="/blog/1">All</NuxtLink>

            <NuxtLink  v-for="(category, n) in articleCategories" 
                activeClass="text-secureRed-800"
                :key="n" class="blog-submenu-link font-bold capitalize"
                :to="`/blog/category/${encodeURIComponent(category.slug)}`"
            >
            {{ category.name }}
            </NuxtLink>

        </div>
        <!-- End Menu Section -->
    </section>
</template>
<script setup>
  // get only tags data from `/post`
  const { data } = await useAsyncData("categories", () => queryContent("post").only(["category"]).find());

  // generate array without duplicates from flattened array
  let result = [];
  data.value.forEach(({category, ...postcategory}) => {
    postcategory.categories = category;
    const postcategoryLookup = postcategory.categories.slug;
    
    if (postcategoryLookup) {
      result.push(postcategory.categories);
    } else {
      // do noting
    }
  });

  const articleCategories = result.filter(function({name, slug}) {
    var key = `${name}${slug}`;
    return !this.has(key) && this.add(key);
}, new Set);
</script>