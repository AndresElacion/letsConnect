<script setup>
defineProps({
  selected: Boolean,
  text: String,
})
</script>

<template>
  <button :class="['px-3 py-2.5 outline-none text-small',
  selected ? 'text-blue-500 bg-white border-b-2 border-blue-500' : 'text-gray-700',]">
   {{ text}}
 </button>
</template>