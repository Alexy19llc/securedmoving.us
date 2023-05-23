<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <header class="drop-shadow-lg fixed bg-slate-50/80 backdrop-blur-sm z-40 w-full">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex items-center gap-x-12">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Secured Moving Company</span>
            <nuxt-img
              class="w-auto h-8"
              src="Secured_Moving_Logo_jsxaoo"
              alt="Secured Moving Company, LLC Logo Fort Worth"
              provider="cloudinary"
              format="webp"
              width="192"
              height="64"
             />
          </a>
          <div class="hidden lg:flex lg:gap-x-12">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-secureRed-950">{{ item.name }}</a>
          </div>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6 text-safetyGreen-900" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex">
          <a href="/contact-us" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-white hover:bg-sky-400 bg-sky-500 md:py-2 md:text-sm md:px-6">Free Moving Estimate</a>
        </div>
      </nav>
      <ClientOnly>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-50 bg-slate-50/80 backdrop-blur-sm" />
          <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Secured Moving Company</span>
                <LogosSecuredMovingLogo class="w-auto h-8" />
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-safetyGreen-900" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <div class="py-6">
                  <a href="/contact-us" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white hover:bg-sky-500 bg-sky-500 md:py-4 md:text-lg md:px-10">Free Moving Estimate</a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </ClientOnly>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline/index.js'

const navigation = [
  { name: "Moving Services", href: "/moving-services" },
  { name: "Commercial Moving", href: "/service-area/commercial-moving" },
  {
    name: "FAQs",
    href: "/frequently-asked-questions-about-moving",
  },
  {
    name: "Packing Tips",
    href: "/fort-worth-moving-packing",
  },
  { name: "About Us", href: "/about-secured-moving" },
  { name: "Blog", href: "/blog/1" },
];

const mobileMenuOpen = ref(false)
</script>
