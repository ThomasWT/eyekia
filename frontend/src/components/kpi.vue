<template>
    <div class="kpi flex flex-col w-[25vw] h-36 bg-white rounded-2xl shadow-lg mx-3 pt-4 pb-6 overflow-hidden">
        <div class="px-6">
            <p class="text-gray-500 font-bold">Likes</p>
            <div class="flex justify-between items-center">

                <div class="metric">
                    <p class="text-5xl font-bold text-purple-500">25</p>
                </div>
                <div class="bg-green-300 px-2 font-bold rounded-md text-green-600 text-sm py-1 shadow-lg">
                    19% increase
                </div>
            </div>
        </div>

        <div>
            <apexchart width="100%" height="60" type="area" :options="options" :series="series"></apexchart>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface series {
    name: string,
    data: number[]
}

export default defineComponent({
    name: 'dashboard',
    data(): { options: any, series: series[] } {
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
                    speed: 300,
                    animateGradually: {
                        enabled: true,
                        delay: 150
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
                    bottom: -12,
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
        return { options, series };
    },
})
</script>