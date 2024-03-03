<script setup>
  import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
  import { usePage } from '@inertiajs/vue3'
  import { ref } from 'vue'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

  const user = usePage().props.auth.user;
  
  const categories = ref({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })
</script>
  
<template>
<AuthenticatedLayout>
    <div class="container mx-auto mt-3">
        <div class="relative">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf1db591258469.5ee6a7ebdea1f.png" 
            class="w-full h-[200px] object-cover">
            <img src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png" 
            class="absolute left-[48px] w-[128px] h-[128px] -bottom-[52px] rounded-full">
        </div>

        <div>
            <TabGroup>
              <TabList class="pl-[200px] flex bg-white">
                <Tab
                  v-for="category in Object.keys(categories)"
                  as="template"
                  :key="category"
                  v-slot="{ selected }"
                >
                  <button
                    :class="[
                      'px-3 py-2.5 outline-none text-small',
                      selected
                        ? 'text-blue-500 bg-white border-b-2 border-blue-500'
                        : 'text-gray-700',
                    ]"
                  >
                    {{ category }}
                  </button>
                </Tab>
              </TabList>
        
              <TabPanels class="mt-2">
                <TabPanel
                  v-for="(posts, idx) in Object.values(categories)"
                  :key="idx"
                  :class="[
                    'rounded-xl bg-white p-3',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  ]"
                >
                  <ul>
                    <li
                      v-for="post in posts"
                      :key="post.id"
                      class="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 class="text-sm font-medium leading-5">
                        {{ post.title }}
                      </h3>
        
                      <ul
                        class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
                      >
                        <li>{{ post.date }}</li>
                        <li>&middot;</li>
                        <li>{{ post.commentCount }} comments</li>
                        <li>&middot;</li>
                        <li>{{ post.shareCount }} share</li>
                      </ul>
        
                      <a
                        href="#"
                        :class="[
                          'absolute inset-0 rounded-md',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                        ]"
                      />
                    </li>
                  </ul>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
    </div>
</AuthenticatedLayout>
</template>