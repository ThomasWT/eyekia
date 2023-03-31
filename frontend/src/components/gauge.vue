<template>
  <tile class="w-[calc(50%-0.75rem)] h-auto mr-3 place-content-stretch flex-wrap">
    <div class="topbar flex justify-between">
        <p class="text-gray-500 font-bold mb-2 dark:text-gray-400">Followers by platform</p>
    </div>
    <div class="flex">

      <apexchart class="w-1/2" type="donut" height="310" :options="options" :series="series"></apexchart>
      <div class="w-1/2 px-4  grid grid-cols-2 grid-rows-2 content-evenly items-stretch justify-center">
        <div v-for="social in socials" :key="social.platform" class="socialPlatform flex flex-col my-4">
          <p :style="{color: social.color}" class="font-extrabold text-2xl text-[#1877f2]">{{ social.platform }}</p>
          <p class="text-gray-600 font-bold text-3xl dark:text-gray-400"><numberComponent :val="social.followers"></numberComponent></p>
        </div>
      </div>
    </div>

  </tile>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { platform } from '../dashboards/models/graphtypes'
import tile from './tile.vue'
import numberComponent from './numberComponent.vue'

export default defineComponent({
  name: "followersbyplatform",
  components: {
    tile,
    numberComponent
  },
  data(): { options: any, series: number[], socials: platform[] } {
    const socials = [
      {
        platform: 'Facebook',
        followers: 2142,
        color: '#5198F5'
      },
      {
        platform: 'Twitter',
        followers: 1534,
        color: '#65BEF6'
      },
      {
        platform: 'Youtube',
        followers: 1235,
        color: '#FF5C5C'
      },
      {
        platform: 'Instagram',
        followers: 1887,
        color: '#E788D2'
      },
    ]
    const options = {
      chart: {
        type: 'donut',
      },
      legend: {
        show: false
      },
      stroke:{
         colors:[localStorage.theme === 'dark' ? '#9ca3af' : '#fff']
        },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '14px',
          color: '#ffffff',
          fontFamily: 'Nunito, Arial, sans-serif',
          fontWeight: 'bold',
        },
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45
        }
      },
      plotOptions: {

        pie: {
          donut: {

            labels: {
              show: true,
              value: {
                show: true,
                color: '#a855f7',
                fontSize: '2rem',
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 600,
              },
              name: {
                show: true,
                fontSize: '22px',
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 600,
                color: undefined,
                offsetY: -10,
                formatter: function (val) {
                  return val
                }
              },
              total: {
                show: true,
                showAlways: false,
                label: 'Total followers',
                fontSize: '22px',
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 600,
                color: localStorage.theme === 'dark' ? '#6b7284' : '#9ca3af',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                }
              }
            }
          }
        }
      },
      colors: socials.map(platform => {
        return platform.color
      }),
      labels: ['Facebook', 'Twitter', 'Youtube', 'Instagram'],
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
    const series = socials.map(social => {
        return social.followers
    })

    return { options, series, socials };
  },
})
</script>