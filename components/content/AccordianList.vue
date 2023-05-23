<template>
  <div :class="classes">
    <!-- Accordian div ------------->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ContentList  :path="path" v-slot="{list}">
          <dl class="mt-10 divide-y divide-gray-900/10">
            <Disclosure as="div" v-for="item in list" :key="item.created_on" class="pt-6" v-slot="{ open }">
              <dt>
                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                  <span class="text-base font-semibold leading-7">{{ item.title }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12 prose text-left text-slate-700 text-base mx-auto">
                <ContentRenderer :value="item">
                  <template #empty>
                    <p>No content found.</p>
                  </template>
                </ContentRenderer>
              </DisclosurePanel>
            </Disclosure>
          </dl>
      </ContentList>
    </div>
<!-- End accordian ------------->
  </div>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline/index.js'

const props = defineProps({
    path:{
        type: String,
        default:'/'
    },
    classes: {
        type:String,
        default: 'full'
    }
})
</script>