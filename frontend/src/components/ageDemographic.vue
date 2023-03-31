<template>
  <tile class="w-[calc(50%-0.75rem)] h-auto mr-3 place-content-stretch flex-wrap">
    <div class="topbar flex justify-between">
      <p class="text-gray-500 font-bold mb-2 dark:text-gray-400">Followers by age</p>
    </div>
    <apexchart class="w-full" type="bar" height="150" :options="options" :series="options.series"></apexchart>
  </tile>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import tile from './tile.vue'
import numberComponent from './numberComponent.vue'

export default defineComponent({
  name: "agedemographics",
  components: {
    tile,
    numberComponent
  },
  data(): { options } {
    const options = {
      series: [{
        name: "sales",
        data: [
          {
            x: '11 - 16',
            y: 580
          }, {
            x: '17 - 21',
            y: 690
          }, {
            x: '22 - 25',
            y: 690
          },
          {
            x: '27 – 32',
            y: 400
          }, {
            x: '33 - 37',
            y: 430
          }, {
            x: '38 - 42',
            y: 448
          },
          {
            x: '43 - 48',
            y: 470
          }, {
            x: '48 - 53',
            y: 540
          },
          {
            x: '54 - 58',
            y: 540
          },
        ]
      }],
      chart: {
        type: 'bar',
        height: 380,
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: ["#a855f7"],
        opacity: 1,
        type: 'solid',
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          borderRadiusApplication: 'end'
        }
      },
      grid: {
        borderColor: '#a855f761',
        padding: {
          bottom: -15,
          top: -12
        },
      },
      colors: ["#a855f7"],
      yaxis: {
        labels: {
          style: {
              colors: localStorage.theme == 'dark' ? ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'] : [],
              fontSize: '12px',
              fontFamily: 'Nunito, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label',
          },
        }
  
      },
      xaxis: {
        type: 'category',
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#a855f761',
          height: 6,
          offsetX: 0,
          offsetY: 0
        },
        labels: {
          style: {
              colors: localStorage.theme == 'dark' ? ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'] : [],
              fontSize: '12px',
              fontFamily: 'Nunito, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label',
          },
        },
        group: {
          style: {
            fontSize: '1rem',
            fontWeight: 700,
            fontFamily: 'Nunito, Arial',
            colors: '#a855f7',
          },
          groups: [

            { title: 'Generation Z', cols: 3 },
            { title: 'Millennials', cols: 3 },
            { title: 'Generation X', cols: 3 },
          ]
        }
      },
      title: {
        text: undefined,
      },
    }

    return { options };
  },
})
</script>

<style lang="scss">
.apexcharts-xaxis-group-label {
  transform: translateY(16px);
}
</style>