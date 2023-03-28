<template>
    <div class="dashboard flex bg-gray-100">
       <navigation />
        <div class="px-12 pt-8">
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