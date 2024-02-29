<script setup>
import FollowingItem from '@/Components/app/FollowingItem.vue'
import TextInput from '@/Components/TextInput.vue';
import { ref } from 'vue';

const SearchKeyword = ref('')

</script>

<template>
    <div class="px-3">
        <h2 class="text-2xl font-bold mb-4">My Friends</h2>
                <TextInput :model-value="SearchKeyword" placeholder="Search Groups"/>
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