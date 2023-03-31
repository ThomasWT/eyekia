<template>
    <tile class="w-[calc(50%-0.75rem)] h-min mr-3">
        <p class="text-gray-500 font-bold mb-2">Engagement growth</p>
        <apexchart type="line" height="180" :options="options" :series="series"></apexchart>
    </tile>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { series } from '../dashboards/models/graphtypes'
import tile from './tile.vue'

export default defineComponent({
    name: "engagementComponent",
    components: {
        tile
    },
    data(): { options: any, series: series[] } {
        const options = {
            chart: {
                type: 'line',
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
            stroke: {
                width: 5,
                curve: 'smooth'
            },
            grid: {
        borderColor: '#a855f761',
      },
            xaxis: {
                
                type: 'datetime',
                categories: ['1/1/2000', '2/1/2000', '3/1/2000', '4/1/2000', '5/1/2000', '6/1/2000', '7/1/2000', '8/1/2000', '9/1/2000', '10/1/2000', '11/1/2000', '12/1/2000'],
                tickAmount: 10,
                labels: {
                    formatter: function (value: string, timestamp: string, opts: any) {
                        return opts.dateFormatter(new Date(timestamp), 'MMM')
                    },
                    style: {
                        colors: localStorage.theme == 'dark' ? ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'] : [],
                        fontSize: '12px',
                        fontFamily: 'Nunito, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },

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
                labels: {
                    style: {
                        colors: localStorage.theme == 'dark' ? ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'] : [],
                        fontSize: '12px',
                        fontFamily: 'Nunito, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                },
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