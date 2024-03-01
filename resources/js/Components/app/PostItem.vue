<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineProps({
  post: Object,
})

function isImage(attachment) {
  const mime = attachment.mime.split('/')
  return mime[0].toLowerCase() === 'image'
}
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

    <div class="mb-3">
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

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
      <template v-for="attachment of post.attachments">
        <div class="aspect-square bg-blue-100 flex flex-col items-center justify-center text-white relative">
          
          <button class="flex items-center justify-center w-6 h-6 bg-gray-500 hover:bg-gray-600 rounded absolute right-2 top-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 hover:text-black">
              <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
            </svg>
          </button>

          <img v-if="isImage(attachment)" 
          :src="attachment.url" 
          class="object-cover aspect-square">

          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16 text-gray-500">
              <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
  
            {{ attachment.name }}
          </template>
        </div>
      </template>
    </div>

    <div>
      <button>
        Like
      </button>
      <button>
        Comment
      </button>
    </div>
  </div>
</template>
