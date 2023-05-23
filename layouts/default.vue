<template>
    <div>
        <slot />
    </div>
</template>
<script setup>
const route = useRoute();
useHead({
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: `https://www.securedmoving.com${route.fullPath}`,
    }
  ]
})
</script>