<template>
    <div
        class="linechart flex flex-col w-[calc(50%-0.75rem)] h-min bg-white rounded-2xl shadow-lg mr-3 pt-6 pb-4 overflow-hidden">
        <div class="px-6">
            <div class="topbar flex justify-between">
                <p class="text-gray-500 font-bold mb-2">Forecast</p>
                <div>
                    <select id="countries"
                        class="border-2 border-purple-300 text-gray-500 rounded-lg px-4 py-2 outline-purple-500 ">
                        <option selected>Online</option>
                        <option value="US">Stores</option>
                    </select>
                </div>
            </div>

            <apexchart type="line" height="" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { series } from '../dashboards/models/graphtypes'

export default defineComponent({
    data(): { options: any, series: series[] } {
        const options = {
            chart: {
                type: 'line',
                toolbar: {
                    show: false
                },
            },
            forecastDataPoints: {
                count: 7
            },
            stroke: {
                width: 5,
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/1/2000', '2/1/2000', '3/1/2000', '4/1/2000', '5/1/2000', '6/1/2000', '7/1/2000', '8/1/2000', '9/1/2000', '10/1/2000', '11/1/2000', '12/1/2000'],
                tickAmount: 10,
                labels: {
                    formatter: function (value: string, timestamp: string, opts: any) {
                        return opts.dateFormatter(new Date(timestamp), 'MMM')
                    }
                }
            },
            title: {
                text: undefined
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#a855f7'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                },
            },
            tooltip: {
                enabled: false,
            },
            yaxis: {
                min: -10,
                max: 40
            }

        }
        const series = [{
            name: 'Sales',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5]
        }]

        return { options, series };
    },
})
</script>