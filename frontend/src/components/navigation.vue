<template>
    <div class="navigation h-screen fixed left-0 w-96 3xl:w-72 2xl:w-56 bg-white dark:bg-[#1d1d1d] shadow-lg rounded-2xl">
        <div class="w-full relative justify-center items-center flex my-4 2xl:p-4">
            <img class="w-60" :src="logo" />
        </div>
        <div class="pages mx-16 2xl:mx-0 flex flex-col justify-start">
            <p class="font-bold text-gray-400 mb-2 pl-2">Main menu</p>
            <div class="flex flex-col justify-center w-full">
                <router-link
                    class=" w-full py-2 my-2 px-4 rounded-lg flex items-center font-bold text-gray-500 hover:bg-purple-100 dark:hover:bg-gray-800 transition-all"
                    :class="{ '!text-purple-500 bg-purple-100 dark:bg-[#565656] dark:!text-purple-300': $route.path == link.path }"
                    v-for="link in links" :key="link.path" :to="{ path: link.path, replace: false }"> <font-awesome-icon
                        class="mr-3" :icon="link.icon" /> {{ link.name }}</router-link>
            </div>
        </div>
        <div class="pages px-16 flex flex-col justify-start absolute w-full bottom-12">
            <router-link
                class=" w-full py-2 my-2 px-4 rounded-lg flex items-center font-bold text-gray-500 hover:bg-purple-100 transition-all dark:hover:bg-gray-800"
                :class="{ '!text-purple-500 bg-purple-100 dark:bg-[#565656] dark:!text-purple-300': $route.path == '/dashboard/settings' }"
                :to="{ path: '/dashboard/settings', replace: false }"> <font-awesome-icon class="mr-3"
                    icon="fa-solid fa-gears" /> Settings</router-link>
            <div @click="logout"
                class="cursor-pointer  px-4 w-full py-2 my-2 rounded-lg flex items-center font-bold text-gray-500 hover:bg-purple-100 transition-all">
                <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" class="mr-3" /> Logout
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface navigationItem {
    name: string
    icon: string,
    path: string,
}

export default defineComponent({
    name: 'dashboard',
    data(): { links: navigationItem[], logo: string } {
        const logo = localStorage.theme != 'dark' ? '/eyekia-white.svg' : '/eyekia-dark.svg';
        const links = [
            {
                icon: 'fa-solid fa-chart-line',
                path: '/dashboard/overview',
                name: 'Overview'
            },
            {
                icon: 'fa-regular fa-thumbs-up',
                path: '/dashboard/socials',
                name: 'Socials'
            },
            {
                icon: 'fa-solid fa-people-group',
                path: '/dashboard/teams',
                name: 'Teams'
            }
        ]

        return { links, logo };
    },
    methods: {
        logout() {
            sessionStorage.clear();
            this.$router.push({ path: '/login', replace: true })
        }
    },
    mounted() {
        //observe to change logo
        var observer = new MutationObserver((mutations) => {
           this.logo = localStorage.theme != 'dark' ? '/eyekia-white.svg' : '/eyekia-dark.svg';
        });

        observer.observe(document.querySelectorAll('html')[0], {
            attributes: true,
            attributeFilter: ['class']
        });
    }
})

</script>