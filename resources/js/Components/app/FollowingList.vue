<script setup>
import FollowingItem from '@/Components/app/FollowingItem.vue'
import TextInput from '@/Components/TextInput.vue';
import { ref } from 'vue';

const SearchKeyword = ref('')

</script>

<template>
    <div class="px-3 bg-white rounded border py-3 h-[580px] overflow-hidden flex flex-col">
        <h2 class="text-xl font-bold mb-4">My Followers</h2>
                <TextInput :model-value="SearchKeyword" placeholder="Search Followers" class="w-full"/>
                <div class="mt-3 flex-1 overflow-auto">
                    <div v-if="false" class="text-gray-400 flex text-center p-3">
                        You don't have followers yet.
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
    </div>
</template>