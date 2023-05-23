<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header
    class="drop-shadow-lg fixed bg-slate-50/80 backdrop-blur-sm z-40 w-full"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center justify-between w-full">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Secured Moving Company</span>
          <nuxt-img
            class="w-auto h-9 md:h-16"
            src="Secured_Moving_Logo_jsxaoo"
            alt="Secured Moving Company, LLC Logo Fort Worth"
            provider="cloudinary"
            format="webp"
            width="192"
            height="64"
          />
        </a>
        <div>
          <div
            class="hidden flex-1 items-center justify-end gap-x-3 lg:flex mb-6"
          >
            <a
              href="/contact-us"
              class="flex items-center justify-center px-4 py-2 border text-sm font-bold rounded-md text-cyan-500 border-cyan-600 md:text-sm md:px-6"
              >Free Moving Estimate</a
            >
            <a
              href="tel:817-812‑6176"
              class="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-secureRed-100 hover:bg-sky-400 bg-secureRed-600 md:text-sm md:px-6"
              >(817)&nbsp;812‑6176</a
            >
          </div>
          <div class="hidden lg:flex lg:gap-x-8">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-sm font-semibold leading-6 text-secureRed-950"
              >{{ item.name }}</a
            >
          </div>
        </div>
      </div>
      <div class="flex lg:hidden gap-1">
        <a
          href="tel:817-812‑6176"
          class="flex items-center justify-center px-2 py-2 border border-transparent text-xs font-bold rounded-md text-secureRed-100 hover:bg-sky-400 bg-secureRed-600 md:px-6"
          >(817)&nbsp;812‑6176</a
        >
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6 text-safetyGreen-900" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <ClientOnly>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50 bg-slate-50/80 backdrop-blur-sm" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Secured Moving Company</span>
              <LogosSecuredMovingLogo class="w-auto h-8" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-safetyGreen-900"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6 flex flex-col gap-3">
                <a
                  href="tel:817-812‑6176"
                  class="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-secureRed-100 hover:bg-sky-400 bg-secureRed-600 md:text-sm md:px-6"
                  >(817) 812‑6176</a
                >
                <a
                  href="/contact-us"
                  class="flex items-center justify-center px-4 py-2 border text-sm font-bold rounded-md text-cyan-500 border-cyan-600 md:text-sm md:px-6"
                  >Free Moving Estimate</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </ClientOnly>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline/index.js";

const navigation = [
  { name: "Value Proposition", href: "/service-area/commercial-moving" },
  {
    name: "Services",
    href: "/frequently-asked-questions-about-moving",
  },
  { name: "Why Choose Us" },
  // { name: "Price Guide", href: "/blog/1" },
  { name: "Moving Tips and Tricks", href: "/blog/1" },
  // { name: "Get a Quote", href: "/blog/1" },
  { name: "About Us", href: "/blog/1" },
  // { name: "Contact Us", href: "/blog/1" },
];

const mobileMenuOpen = ref(false);
</script>
