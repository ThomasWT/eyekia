<template>
    <div class="navigation h-screen w-96 bg-white shadow-lg rounded-2xl relative">
        <div class="w-full relative self-start">
            <img class="scale-90 -mb-2 -mt-10 w-full" src="/eyekia.svg" />
        </div>
        <div class="pages mx-16 flex flex-col justify-start">
            <p class="font-bold text-gray-400 mb-2 pl-2">Main menu</p>
            <div class="flex flex-col justify-center w-full">
                <router-link
                    class=" w-full py-2 my-2 px-4 rounded-lg flex items-center font-bold text-gray-500 hover:bg-purple-100 transition-all"
                    :class="{ '!text-purple-500 bg-purple-100': $route.path == link.path }" v-for="link in links"
                    :key="link.path" :to="{ path: link.path, replace: false }"> <font-awesome-icon class="mr-3"
                        :icon="link.icon" /> {{ link.name }}</router-link>
            </div>
        </div>
        
    <!--     <div class="flex h-32 justify-center items-center w-full">
            <img class="w-12 h-12 mr-4 rounded-full shadow-lg border-2 border-purple-500 mb-2"
                src="https://pbs.twimg.com/profile_images/1615754953393307652/Pdjf6vpq_400x400.jpg" alt="Default avatar">
            <p class="font-bold">Thomas Thomsen</p>
        </div> -->


        <div class="pages px-16 flex flex-col justify-start absolute w-full bottom-12">
            <div class="cursor-pointer px-4  w-full py-2 my-2  rounded-lg flex items-center font-bold text-gray-500 hover:bg-purple-100 transition-all">
                <font-awesome-icon icon="fa-solid fa-gears" class="mr-3" /> Settings
            </div>
            <div @click="logout" class="cursor-pointer  px-4 w-full py-2 my-2 rounded-lg flex items-center font-bold text-gray-500 hover:bg-purple-100 transition-all">
                <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" class="mr-3" /> logout
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
    data(): { links: navigationItem[] } {
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

        return { links };
    },
    methods: {
        logout() {
            sessionStorage.clear();
            this.$router.push({ path: '/login', replace: true})
        }
    }
})

</script>