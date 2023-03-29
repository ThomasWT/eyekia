<template>
    <div class="kpi flex flex-col w-[25vw] h-36 bg-white rounded-2xl shadow-lg mx-3 pt-4 pb-6 overflow-hidden">
        <div class="px-6">
            <p class="text-gray-500 font-bold">Likes</p>
            <div class="flex justify-between items-center">

                <div class="metric">
                    <p class="text-5xl font-bold text-purple-500">
                        <numberComponent :val="randomNumber"></numberComponent>
                    </p>
                </div>
                <transitionGroup name="slide-fade">
                    <div v-show="badge"
                        class="px-2 font-bold rounded-md  text-sm py-1 shadow-lg text-center"
                        :class="[badgePerc < 0 ? 'bg-red-300 text-red-600' : 'bg-green-300 text-green-600']"
                        >
                        <numberComponent :val="badgePerc" :duration="1" :delay="0.5"></numberComponent>% {{ badgePerc < 0 ? 'decrease' : 'increase' }}
                    </div>
                    <p class="font-light text-xs text-gray-400 mt-2">compared to yesterday</p>
                </transitionGroup>

            </div>
        </div>

        <div>
            <apexchart width="100%" height="60" type="area" :options="options" :series="series"></apexchart>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import numberComponent from './numberComponent.vue';

interface series {
    name: string,
    data: number[]
}

export default defineComponent({
    name: 'dashboard',
    components: {
        numberComponent
    },
    data(): { badge: boolean, options: any, series: series[], randomNumber: number, badgePerc: number } {
        const badge = false;
        const options = {
            chart: {
                id: 'vuechart-example',
                parentHeightOffset: 0,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 1000
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                }
            },
            colors: ["#a855f7"],
            grid: {
                show: false,
                padding: {
                    left: -10,
                    right: -10,
                    bottom: -7,
                    top: -10
                },
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                labels: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },

        }
        const series = [{
            name: 'series-1',
            data: [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101),]
        }]

        const randomNumber = Math.random() * 99
        const badgePerc = parseInt(Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1))

        return { options, series, badge, randomNumber, badgePerc };
    },
    mounted() {
        setTimeout(() => {
            this.badge = true;
        }, 200)

    }
})
</script>

<style lang="scss" scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transform: translateY(0px);
    transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>