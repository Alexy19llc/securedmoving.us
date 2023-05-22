<template>
  <dl v-if="list.length > 1" :class="'mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 ' + listclass">
    <div v-for="item in list" :key="item.name" class="relative pl-9">
      <dt class="inline font-semibold text-stone-100">
        <component :is="TheIcon(icon.img)" :class="'absolute top-1 left-1 h-4 w-5 ' + icon.class" aria-hidden="true" />
        {{ item.name }}
      </dt>
      {{ ' ' }}
      <dd class="prose prose-invert prose-xl inline" v-html="renderMdwn(item.description)" ></dd>
    </div>
  </dl>
</template>
<script setup>
import {micromark} from 'micromark'
import {
  CheckBadgeIcon,
  SparklesIcon,
  TruckIcon,
  ShieldCheckIcon,
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
  }
}

function renderMdwn(value){
  return micromark(value)
}

</script>