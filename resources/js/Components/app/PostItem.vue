<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineProps({
  post: Object,
})
</script>

<template>
  <div v-if="post" class="bg-white border rounded p-4 shadow mb-3">
    <div class="flex items-center gap-2 mb-3">
      <a href="javascript:void(0)">
        <img v-if="post.user" :src="post.user.avatar" class="w-[40px] rounded-full border-2 transition-all hover:border-blue-500">
      </a>
      <div>
        <h4 class="font-bold">
          <a v-if="post.user" href="javascript:void(0)" class="hover:underline">{{ post.user.name }}</a>
          <template v-if="post.group">
            >
            <a href="javascript:void(0)" class="hover:underline">{{ post.group.name }}</a>
          </template>
        </h4>
        <small class="text-gray-400">{{ post.created_at }}</small>
      </div>
    </div>
    <div>
      <Disclosure v-slot="{ open }">
        <div v-if="!open" v-html="post.body ? post.body.substring(0, 80) : ''"/>
        <DisclosurePanel>
          <div v-html="post.body"/>
        </DisclosurePanel>
        <div class="flex justify-end">
          <DisclosureButton class="text-blue-500 hover:text-blue-600 hover:underline">
            {{ open ? 'Read Less' : 'Read More' }}
          </DisclosureButton>
        </div>
      </Disclosure>
    </div>
  </div>
</template>
