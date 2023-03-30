<template>
     <tile class="w-[calc(50%-0.75rem)] h-min mr-3">
            <div class="topbar flex justify-between">
                <p class="text-gray-500 font-bold mb-2">Followers by platform</p>
            </div>
            <apexchart type="donut" height="310" :options="options" :series="series"></apexchart>
    </tile>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { series } from '../dashboards/models/graphtypes'
import tile from './tile.vue'

export default defineComponent({
    name: "linechart",
    components: {
        tile
    },
    data(): { options: any, series: number[] } {
        const options = {
            chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]

        }
        const series = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5]

        return { options, series };
    },
})
</script>