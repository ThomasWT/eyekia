<template>
    <div class="dashboard flex bg-gray-100">
        <div class="navigation h-screen w-96 bg-white shadow-lg rounded-2xl">
            <div class="w-full relative">
                <img class="scale-90 -mb-6 -mt-10 w-full" src="/eyekia.svg" />
            </div>
            <div class="flex flex-col h-32 justify-center items-center w-full">
                <img class="w-16 h-16 rounded mb-2" src="https://pbs.twimg.com/profile_images/1615754953393307652/Pdjf6vpq_400x400.jpg" alt="Default avatar">
                <p class="font-bold">Thomas Thomsen</p>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
    name: 'dashboard',
    data(): { } {
    return { };
  },
})
</script>