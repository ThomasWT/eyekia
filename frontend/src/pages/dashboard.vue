<template>
    <div class="dashboard flex bg-purple-50 h-auto min-h-screen">
       <navigation />
        <div class="ml-[23rem] px-12 pt-8 w-[calc(100vw-24rem)]">
            <router-view></router-view>
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