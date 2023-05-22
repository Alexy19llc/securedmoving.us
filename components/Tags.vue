<script setup>
  const flatten = (tags, key) => {
    let _tags = tags
      .map((tag) => {
        let _tag = tag;
        if (tag[key]) {
          let flattened = flatten(tag[key]);
          _tag = flattened;
        }
        return _tag;
      })
      .flat(1);
    return _tags;
  };
  // get only tags data from `/blog`
  const { data } = await useAsyncData("tags", () => queryContent("post").only(["tags"]).find());
  // generate array without duplicates from flattened array
  const articleTags = [...new Set(flatten(data.value, "tags"))];
</script>

<template>
  <span
  v-for="(tag, n) in articleTags" :key="n"
        class="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white bg-blue-800"
    >
        <NuxtLink  :href="`/blog/tags/${tag}`" class="font-semibold"> {{ tag }} </NuxtLink>
  </span>
</template>