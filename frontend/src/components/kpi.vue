<template>
    <tile class="w-[calc(25%)] h-36 mx-3 pb-6 pt-3 overflow-y-hidden">
        <p class="text-gray-500 font-bold mb-2">{{ metricData.name }}</p>
        <div class="flex justify-between items-center">

            <div class="metric">
                <p class="text-5xl font-bold text-purple-500">
                    <numberComponent :val="metricData.metric"></numberComponent>
                </p>
            </div>
            <div class="flex flex-col text-center">
                <transition-group name="slide-fade">
                    <div v-show="badge" :key="0" class="px-2 font-bold rounded-md  text-sm py-1 shadow-md text-center"
                        :class="[metricData.compare < 0 ? 'bg-red-100 text-red-400' : 'bg-green-100 text-green-600']">
                        <numberComponent :val="metricData.compare" :duration="1" :delay="0"></numberComponent>% {{
                            metricData.compare < 0 ? 'decrease' : 'increase' }} </div>
                            <p class="font-light text-xs text-gray-400 mt-2" :key="1">vs. to {{ metricData.comparedTo
                            }}</p>
                </transition-group>
            </div>
        </div>
        <div>
            <apexchart class="-ml-6 -mt-2" width="115%" height="60" type="area" :options="options" :series="series"></apexchart>
        </div>
    </tile>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import numberComponent from './numberComponent.vue';
import { kpiType } from '../dashboards/models/graphtypes';
import tile from './tile.vue'
interface series {
    name: string,
    data: number[]
}

export default defineComponent({
    name: 'dashboard',
    props: {
        metricData: {
            type: Object as PropType<kpiType>,
            required: true,
        }
    },
    components: {
        numberComponent,
        tile
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
                    bottom: 1,
                    top: -12
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
            tooltip: {
                enabled: false
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
        const badgePerc = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)

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