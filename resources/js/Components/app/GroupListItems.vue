<script setup>
import GroupItem from '@/Components/app/GroupItem.vue'
import TextInput from '@/Components/TextInput.vue';
import { ref } from 'vue';

const SearchKeyword = ref('')
</script>

<template>
    <TextInput :model-value="SearchKeyword" placeholder="Type to search" class="w-full mt-4"/>
    <div class="mt-3 h-[280px] lg:flex-1 overflow-auto">
        <div v-if="false" class="text-gray-400 text-center p-3">
            You are not joined in any groups
        </div>
        <div v-else>
            <GroupItem image="https://picsum.photos/100"
                       title="Laravel Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

            <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>

                       <GroupItem image="https://picsum.photos/100"
                       title="Vue.js Developer"
                       description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, officia."/>
        </div>
    </div>
</template>