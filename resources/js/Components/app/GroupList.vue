<script setup>
import GroupItem from '@/Components/app/GroupItem.vue'
import TextInput from '@/Components/TextInput.vue';
import { ref } from 'vue';

const SearchKeyword = ref('')

</script>

<template>
    <div class="px-3">
        <h2 class="text-2xl font-bold mb-4">My Groups</h2>
                <TextInput :model-value="SearchKeyword" placeholder="Search Groups"/>
                <div class="py-8">
                    <div v-if="false" class="text-gray-400 flex text-center">
                        You are not joined in any groups
                    </div>
                    <div v-else>
                        <GroupItem image="https://picsum.photos/100"
                                   title="Laravel Developer"
                                   description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>
    
                        <GroupItem image="https://picsum.photos/100"
                                   title="Vue.js Developer"
                                   description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>
                    </div>
                </div>
    </div>
</template>