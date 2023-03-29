<template>
       <tile class="w-[calc(50%-0.75rem)] h-auto ml-3 pt-4 pb-4">
        <div class="flex h-full">
            <div class="w-1/3 flex flex-col justify-center items-center">
                <div class="text-center">
                    <p class="text-2xl font-bold text-purple-500">Online</p>
                </div>
                <div>
                    <apexchart type="radialBar" width="200px" height="100" :options="chartOptions" :series="online"></apexchart>
                </div>
            </div>
            <div class="w-1/3 flex flex-col justify-center items-center">
                <div class="text-center">
                    <p class="text-2xl font-bold text-purple-500">Stores</p>
                </div>
                <div>
                    <apexchart type="radialBar" width="200px" height="100" :options="chartOptions" :series="stores"></apexchart>
                </div>
            </div>
            <div class="w-1/3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-2xl shadow-lg flex flex-col justify-center items-center">
                <p class="text-2xl font-bold text-white">Total revenue</p>
                <p class="text-md text-white">of this month</p>
                <p class="text-2xl font-bold text-white mt-4">€38527</p>
            </div>
          </div>
       </tile>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import tile from './tile.vue'

export default defineComponent({
    name: 'onlinevsstore',
    components: {
      tile
    },
    data(): {stores: number[], online: number[], chartOptions: any} {
 
            const stores = [57];
           const online = [43];
        const chartOptions = {
            chart: {
              height: 150,
              type: 'radialBar',
              fontFamily: 'Nunito',
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 225,
                 hollow: {
                  margin: 0,
                  size: '70%',
                  background: '#fff',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                  }
                },
                track: {
                  background: '#fff',
                  strokeWidth: '67%',
                  margin: 0, // margin is in pixels
                },
            
                dataLabels: {
                  show: true,
                  name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '12px'
                  },
                  value: {
                    formatter: function(val:any) {
                      return parseInt(val)+'%';
                    },
                    offsetY: -2,
                    color: '#a855f7',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    show: true,
                  }
                }
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#a855f7'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            grid: {
                show: false,
                padding: {
                    left: -10,
                    right: -10,
                    bottom: -15,
                    top: -8
                },
            },
            stroke: {
              lineCap: 'round'
            },
            labels: ['Percent'],
          }
        

          return {stores, online, chartOptions}
    }
})
</script>