<script setup>
import FollowingItem from '@/Components/app/FollowingItem.vue'
import TextInput from '@/Components/TextInput.vue';
import { ref } from 'vue';

const SearchKeyword = ref('')
</script>

<template>
    
    <TextInput :model-value="SearchKeyword" placeholder="Type to search" class="w-full mt-3"/>
    <div class="mt-3 h-[280px] lg:flex-1 overflow-auto">
        <div v-if="false" class="text-gray-400 text-center p-3">
            You don't have following yet.
        </div>
        <div v-else>
            <FollowingItem image="https://picsum.photos/200"
                       title="John Developer"/>

            <FollowingItem image="https://picsum.photos/200"
                       title="John Doe"/>

                       <FollowingItem image="https://picsum.photos/200"
                       title="John Developer"/>

            <FollowingItem image="https://picsum.photos/200"
                       title="John Doe"/>

                       <FollowingItem image="https://picsum.photos/200"
                       title="John Developer"/>

            <FollowingItem image="https://picsum.photos/200"
                       title="John Doe"/>

                       <FollowingItem image="https://picsum.photos/200"
                       title="John Developer"/>

            <FollowingItem image="https://picsum.photos/200"
                       title="John Doe"/>

                       <FollowingItem image="https://picsum.photos/200"
                       title="John Developer"/>

            <FollowingItem image="https://picsum.photos/200"
                       title="John Doe"/>

                       <FollowingItem image="https://picsum.photos/200"
                       title="John Developer"/>

            <FollowingItem image="https://picsum.photos/200"
                       title="John Doe"/>

                       <FollowingItem image="https://picsum.photos/200"
                       title="John Developer"/>

            <FollowingItem image="https://picsum.photos/200"
                       title="John Doe"/>

                       <FollowingItem image="https://picsum.photos/200"
                       title="John Developer"/>

            <FollowingItem image="https://picsum.photos/200"
                       title="John Doe"/>
        </div>
    </div>
</template>