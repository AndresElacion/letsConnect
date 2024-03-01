<script setup>
import GroupItem from '@/Components/app/GroupItem.vue'
import TextInput from '@/Components/TextInput.vue';
import { ref } from 'vue';

const SearchKeyword = ref('')

</script>

<template>
    <div class="px-3 bg-white rounded border py-3 h-[580px] overflow-hidden flex flex-col">
        <h2 class="text-xl font-bold mb-4">My Groups</h2>
                <TextInput :model-value="SearchKeyword" placeholder="Search Groups" class="w-full"/>
                <div class="mt-3 flex-1 overflow-auto">
                    <div v-if="false" class="text-gray-400 flex text-center p-3">
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
    </div>
</template>