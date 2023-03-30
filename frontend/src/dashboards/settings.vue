<template>
    <div class="h-[80%] flex-nowrap">
        <h1 class="font-bold text-4xl mb-12">Settings</h1>
        <div class="flex min-h-full">
            <div class="flex flex-col bg-white shadow-lg h-full rounded-2xl w-72 px-6 mr-6">
                <div class="my-6">
                    <input v-model="search" type="text" id="password" placeholder="search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-purple-500 placeholder:text-gray-600"
                        required>
                </div>
                <div class="flex flex-col">
                    <ul>
                        <li :class="{ 'bg-purple-100 text-purple-500': activeLink == index }"
                            class="my-3 text-gray-600 font-bold text-lg hover:bg-purple-200 py-2 px-4 cursor-pointer rounded-lg"
                            v-for="(link, index) in filteredList" :key="link.text"><font-awesome-icon
                                class="mr-2 text-purple-400" :icon="link.icon" /> {{ link.text }}</li>
                    </ul>
                </div>
            </div>
            <div class="w-full h-full bg-white shadow-lg rounded-2xl p-8">
                <component :is="links[activeLink].component"></component>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, defineComponent } from 'vue';
import appearance from './settings/appearance.vue'

interface links {
    icon: string,
    text: string,
    component: Component | null
}

export default defineComponent({
    name: 'settings',
    data(): { links: links[], activeLink: number, search: string } {
        const activeLink = 3;
        const search = '';
        const links = [
            {
                icon: 'fa-regular fa-flag',
                text: 'My details',
                component: null,
            },
            {
                icon: 'fa-regular fa-user',
                text: 'Profile',
                component: null,
            },
            {
                icon: 'fa-solid fa-lock',
                text: 'Password',
                component: null,
            },
            {
                icon: 'fa-solid fa-face-grin-stars',
                text: 'Appearence',
                component: appearance,
            },
            {
                icon: 'fa-solid fa-people-group',
                text: 'Team',
                component: null,
            },
            {
                icon: 'fa-regular fa-credit-card',
                text: 'Billing',
                component: null,
            },
            {
                icon: 'fa-solid fa-rocket',
                text: 'Applications',
                component: null,
            },
            {
                icon: 'fa-solid fa-network-wired',
                text: 'API',
                component: null,
            },
        ]
        return { links, activeLink, search }
    },
    computed: {
        filteredList() {
            return this.links.filter(link => {
                return link.text.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
})
</script>