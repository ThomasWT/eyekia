<template>
    <div class="flex flex-col">
        <div class="header">
            <p class="text-gray-600 font-bold text-2xl dark:text-gray-400">Appearance</p>
            <p class="text-gray-400 text-sm dark:text-gray-500">Change how your UI looks and feels</p>
        </div>
        <hr class="my-6">
        <div class="flex justify-between">
            <div class="explain">
                <p class="text-gray-600 font-bold text-lg dark:text-gray-400">Interface theme</p>
                <p class="text-gray-400 text-sm dark:text-gray-500">Select or customize your UI theme</p>
            </div>
            <div class="flex">
                <div class="flex flex-col mx-6">
                    <div @click="changeTheme('light')" :class="{'!border-purple-600' : !darkmode}" class="transition-all border-4 border-gray-300 hover:border-purple-400 hover:border-purple-40 rounded-xl cursor-pointer">
                        <img class="w-48 rounded-lg " src="/light.svg" />
                    </div>
                    <p class="font-bold text-gray-700 dark:text-gray-400">Light mode</p>
                </div>
                <div class="flex flex-col mx-6">
                    <div @click="changeTheme('dark')"
                    :class="{'!border-purple-600' : darkmode }" class="transition-all border-4 border-gray-300 hover:border-4 hover:border-purple-400 rounded-xl cursor-pointer">
                        <img class="w-48 rounded-lg" src="/dark.svg" />
                    </div>
                    <p class="font-bold text-gray-700 dark:text-gray-400">Dark mode</p>
                </div>
            </div>
        </div>
        <hr class="my-6">
        <div class="flex">
            <div class="explain">
                <p class="text-gray-600 font-bold text-lg dark:text-gray-400">Compact sidebar</p>
                <p class="text-gray-400 text-sm dark:text-gray-500">Collapses the sidebar to be more compact</p>
            </div>
            <div class="ml-6 mt-4">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div
                        class="w-11 h-6 bg-purple-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-400">
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'appearance',
    data() : {darkmode: boolean} {
        
        const darkmode = localStorage.theme == 'dark';

        return {darkmode}
    },
    methods: {
        changeTheme(mode: string) {
            localStorage.theme = mode
            if (mode != 'dark') {
                this.darkmode = false;
                document.documentElement.classList.remove('dark')
            } else {
                this.darkmode = true;
                document.documentElement.classList.add('dark')
            }
        }
    },
})
</script>
