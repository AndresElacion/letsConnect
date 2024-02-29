<script setup>
import PostItem from '@/Components/app/PostItem.vue'

const post1 = {
  user: {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
    name: 'John Developer'
  },
  group: null,
  body: `
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
  <div>
    <PostItem :post="post1"/>
    <PostItem :post="post2"/>
  </div>
</template>