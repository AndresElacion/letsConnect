<script setup>
import PostModal from '@/Components/app/PostModal.vue'
import PostItem from '@/Components/app/PostItem.vue'
import { ref } from 'vue';

defineProps({
  posts: Array
})

const showEditModal = ref(false)

const editPost = ref({})

function openEditModal(post) {
  editPost.value = post
  showEditModal.value = true
}

const post1 = {
  user: {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
    name: 'John Developer'
  },
  group: null,
  attachments: [
    {
      id: 1,
      name: 'Test.pnh',
      url: 'https://picsum.photos/1000',
      mime: 'image/png',
    },
    {
      id: 2,
      name: 'Test.pnh',
      url: 'https://picsum.photos/1000',
      mime: 'image/png',
    },
    {
      id: 3,
      name: 'MyDocuments.docx',
      url: '#',
      mime: 'application/msword',
    },
  ],
  body: `
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>
  `,
  created_at: '2023-11-19 15:12'
}

const post2 = {
  user: {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    name: 'John Doe'
  },
  group: {
    id: 1,
    name: 'Laravel Developer'
  },
  body: `
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia.</p>
  `,
  created_at: '2023-11-19 15:12'
}
</script>

<template>
  <div class="h-full overflow-auto">
    <PostItem v-for="post of posts" :key="post.id" :post="post" @editClick="openEditModal"/>

    <PostModal :post="editPost" v-model="showEditModal" />
  </div>
</template>