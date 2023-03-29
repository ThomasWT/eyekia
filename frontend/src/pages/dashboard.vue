<template>
    <div class="dashboard flex bg-purple-50 h-auto min-h-screen">
       <navigation />
        <div class="ml-[25rem] px-12 pt-6 w-[calc(100vw-27rem)] flex flex-wrap">
            <router-view class=" flex flex-wrap w-full flex-col"></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navigation from '../components/navigation.vue'

export default defineComponent({
    name: 'dashboard',
    components: {
        navigation
    }
})
</script>