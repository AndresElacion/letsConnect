<script setup>
import FollowingItem from '@/Components/app/FollowingItem.vue'
import TextInput from '@/Components/TextInput.vue';
import { ref } from 'vue';

const SearchKeyword = ref('')

</script>

<template>
    <div class="px-3 bg-white rounded border py-3">
        <h2 class="text-xl font-bold mb-4">My Followers</h2>
                <TextInput :model-value="SearchKeyword" placeholder="Search Followers" class="w-full"/>
                <div class="py-8">
                    <div v-if="false" class="text-gray-400 flex text-center">
                        You don't have friends yet.
                    </div>
                    <div v-else>
                        <FollowingItem image="https://picsum.photos/200"
                                   title="John Developer"/>
    
                        <FollowingItem image="https://picsum.photos/200"
                                   title="John Doe"/>
                    </div>
                </div>
    </div>
</template>