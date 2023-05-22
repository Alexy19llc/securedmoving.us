<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <h2 
            v-if="$slots.overline"
            class="text-base font-semibold leading-7 text-secureRed-700">
                <ContentSlot :use="$slots.overline" unwrap="p" />
            </h2>
          <h3 
          v-if="$slots.headline"
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <ContentSlot :use="$slots.headline" unwrap="p" />
          </h3>
          <div
            v-if="$slots.intro"
            class="mt-6 text-base leading-7 text-gray-600"
          >
          <ContentSlot :use="$slots.intro" />
          </div>
          
        </div>
        <dl v-if="list.length > 1" :class="'col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16 ' + listclass">
          <div v-for="item in list" :key="item.name" class="relative pl-9">
            <dt class="font-semibold text-gray-900">
                <component :is="TheIcon(icon.img)" :class="'absolute left-0 top-1 h-5 w-5 text-indigo-500 ' + icon.class" aria-hidden="true" />
              {{ item.name }}
            </dt>
            <dd class="mt-2">{{ item.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CheckBadgeIcon,
  SparklesIcon,
  TruckIcon,
  ShieldCheckIcon,
  StopIcon,
  CheckCircleIcon,
  XCircleIcon} from '@heroicons/vue/20/solid/index.js'

const props = defineProps({
    icon: {
        type: Object,
        default: {
          class: 'text-safetyGreen-800',
          img: 'CheckCircleIcon'
        }
    },
    listclass: {
      type: String,
      default: ''
    },
    list: {
        type: Array,
        default:[]
    },
})
  
function TheIcon(iname){
  if (iname=='CheckCircleIcon'){
    return CheckCircleIcon
  }else if (iname=='CheckBadgeIcon'){
    return CheckBadgeIcon
  }else if (iname=='SparklesIcon'){
    return SparklesIcon
  }else if (iname=='XCircleIcon'){
    return XCircleIcon
  }else if (iname=='TruckIcon'){
    return TruckIcon
  }else if (iname=='ShieldCheckIcon'){
    return ShieldCheckIcon
  }else if (iname=='StopIcon'){
    return StopIcon
  }
}

</script>