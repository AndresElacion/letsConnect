<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { PencilIcon, TrashIcon, EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import { HandThumbUpIcon, ChatBubbleLeftRightIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import { router } from '@inertiajs/vue3'
import PostUserHeader from '@/Components/app/PostUserHeader.vue'
import { isImage } from '@/helpers.js'

const props = defineProps({
  post: Object,
})

const emit = defineEmits(['emitClick'])

function openEditModal() {
  emit('editClick', props.post)
}

function deletePost() {
  if (window.confirm('Are you sure you want to delete this post?')) {
    router.delete(route('post.destroy', props.post), {
      preserveScroll: true
    })
  }
}
</script>

<template>
  <div v-if="post" class="bg-white border rounded p-4 shadow mb-3">
    <div class="flex items-center justify-between mb-3">
      <PostUserHeader :post="post" />
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="w-8 h-8 rounded-full hover:bg-black/5 transition flex items-center justify-center"
            >
              <EllipsisVerticalIcon
                class="w-5 h-5"
                aria-hidden="true"
              />
            </MenuButton>
          </div>
    
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    @click="openEditModal"
                    :class="[
                      active ? 'bg-indigo-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <PencilIcon
                      class="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Edit
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    @click="deletePost"
                    :class="[
                      active ? 'bg-indigo-500 text-white' : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <TrashIcon
                      class="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Delete
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
    </div>

    <div class="mb-3">
      <Disclosure v-slot="{ open }">
        <div class="ck-content-output" v-if="!open" v-html="post.body.substring(0, 200)"/>
          <template v-if="post.body.length > 200">
            <DisclosurePanel>
              <div class="ck-content-output" v-html="post.body"/>
            </DisclosurePanel>
            <div class="flex justify-end">
              <DisclosureButton class="text-blue-500 hover:text-blue-600 hover:underline">
                {{ open ? 'Read Less' : 'Read More' }}
              </DisclosureButton>
            </div>
          </template>
      </Disclosure>
    </div>

    <div class="grid gap-3 mb-3" :class="[post.attachments.length == 1 ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3']">
      
      <template v-for="(attachment, ind) of post.attachments.slice(0, 6)">
        <div class="group aspect-square bg-blue-100 flex flex-col items-center justify-center relative rounded-lg">
          
          <!-- This is for the view more -->
          <div v-if="ind == 5" class="absolute left-0 top-0 right-0 bottom-0 z-10 bg-black/60 text-white flex items-center justify-center text-xl">
            +{{ post.attachments.length - 6 }} more
          </div>

          <!-- Download -->
          <button class="z-20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center w-6 h-6 text-white bg-gray-500 hover:bg-gray-600 rounded absolute right-2 top-2 cursor-pointer">
            <ArrowDownTrayIcon class="w-4 h-4"/>
          </button>
          <!-- /Download -->

          <img v-if="isImage(attachment)" 
          :src="attachment.url" 
          class="object-contain rounded-lg">

          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-gray-500">
              <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
  
            <small>{{ attachment.name }}</small>
          </template>
        </div>
      </template>
    </div>

    <div class="flex gap-2">
      <button class="text-gray-800 flex gap-1 flex-1 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4">
        <HandThumbUpIcon class="w-5 h-5 mr-2" />
        Like        
      </button>
      <button class="text-gray-800 flex gap-1 flex-1 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4">
        <ChatBubbleLeftRightIcon class="w-5 h-5 mr-2" />
        Comment
      </button>
    </div>
  </div>
</template>
