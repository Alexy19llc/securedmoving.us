<template>
  <div class="flex bg-gray-50 flex-col mx-auto px-20">
    <h3 class="font-bold text-secureRed-950 text-3xl text-center md:text-left mb-8 pl-2">
      Secured Moving Company Local Service Areas
    </h3>
    <ul class="grid grid-cols-2 md:grid-cols-5 items-center gap-2 mb-8">
      <li v-for="(area, n) in pageAreas" :key="n" class="text-slate-900 mx-5">
        <a  :href="`/service-area/${ slugified(area) }`" class="">
          {{ area }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
  // helper function to flatten areas array
  const flatten = (areas, key) => {
    let _areas = areas
      .map((area) => {
        let _area = area;
        if (area[key]) {
          let flattened = flatten(area[key]);
          _area = flattened;
        }
        return _area;
      })
      .flat(1);
    return _areas;
  };

  // get only area data from `/landing-pages`
  const { data } = await useLazyAsyncData("area", () =>
    queryContent("service-area").only(["area"]).find()
  );

  // generate array without duplicates from flattened array
  const pageAreas = [...new Set(flatten(data.value, "area"))];

  const slugified = (value) => {
      return value
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, "-");
  }
</script>