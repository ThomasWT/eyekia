<template>
    <div class="flex flex-col bg-white dark:bg-[#1d1d1d] rounded-lg p-6 shadow-lg w-80 h-auto mb-6">
        <div class="flex flex-col">
            <div class="meta flex flex-col relative">
                <img class="w-20 h-20 rounded-md mb-4" :src="teammember?.image" />
                <p class="text-gray-600 font-bold text-2xl capitalize dark:text-gray-300">{{ teammember?.firstname }} {{ teammember?.lastname }}</p>
                <p class="text-gray-400 font-bold text-md">{{ teammember?.location }}</p>
            </div>
            <div class="socials flex justify-between items-center">
                <div class="flex my-6">
                    <a class="bg-purple-100 dark:bg-[#555555] mr-1 p-2 px-4 rounded-md hover:bg-purple-200" href="#"><font-awesome-icon class="text-purple-400 dark:text-[#969696]"
                            icon="fa-brands fa-twitter" /></a>
                    <a class="bg-purple-100 dark:bg-[#555555] mx-2 p-2 px-4 rounded-md hover:bg-purple-200" href="#"><font-awesome-icon class="text-purple-400 dark:text-[#969696]"
                            icon="fa-brands fa-linkedin" /></a>
                </div>
                <div class="flex">
                    <a class="bg-purple-100 dark:bg-[#555555] p-2 px-4 rounded-md hover:bg-purple-200" href="#"><font-awesome-icon class="text-purple-400 dark:text-[#969696]"
                            icon="fa-solid fa-comment-dots" /></a>
                </div>
            </div>
            <hr>
            <div class="flex flex-col my-6">
                <p class="text-gray-400 font-bold">POSITION</p>
                <p class="text-gray-600 font-bold dark:text-gray-300">{{ teammember?.title }}</p>
            </div>
            <div class="flex flex-col mb-6">
                <p class="text-gray-400 font-bold">TASKS</p>
                <div class="w-full bg-gray-200 dark:bg-[#626262] rounded-full h-2.5">
                    <div :class="[{ 'bg-orange-500': teamprogress < 40, 'bg-yellow-500': (teamprogress >= 40 && teamprogress <= 70), 'bg-green-500': (teamprogress > 70) }]"
                        class="h-2.5 rounded-full" :style="{ width: teamprogress + '%' }"></div>
                </div>
            </div>
            <hr>
            <div class="flex -space-x-4 mt-4">
                <img class="w-10 h-10 border-2 border-purple-500 rounded-full"
                    src="https://images.generated.photos/OK2kHGsXOcwVIFp_6xv4nYoORvI_UJRAHIwJXcagHy0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTg0NTM4LmpwZw.jpg"
                    alt="">
                <img class="w-10 h-10 border-2 border-purple-500  rounded-full"
                    src="https://images.generated.photos/Z4lcWxz99c8_UkToBtmWUD9esauh50uBwyKzUo4z1DI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU5OTc2LmpwZw.jpg"
                    alt="">
                <img class="w-10 h-10 border-2 border-purple-500  rounded-full"
                    src="https://images.generated.photos/zI2xj9dL8VKyoyxCDXhvHc-ITviVDTCYN0qQDtKIm4w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDM4NjM2LmpwZw.jpg"
                    alt="">
                <a class="flex items-center justify-center w-10 h-10 text-xs text-purple-500 font-bold bg-purple-300 border-2 border-white rounded-full "
                    href="#">+{{ Number(Math.random() * 21).toFixed(0) }}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeamsService from '../dataservice/teams'
import { teammember } from '../dashboards/models/graphtypes'

export default defineComponent({
    name: 'teammember',
    props: {
        managerid: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        const teamsService = new TeamsService();
        teamsService.fetchUser(props.managerid);

        return {
            teammember: teamsService.getUser(),
        };
    },
    data(): { show: boolean, teammember: teammember | null, teamprogress: number } {
        const show = false
        const teammember = null;
        const teamprogress: number = 0;
        return { show, teammember, teamprogress }
    },
    async mounted() {
        this.show = true;
        this.teamprogress = Math.ceil(Math.random() * 101);
    },
})
</script>