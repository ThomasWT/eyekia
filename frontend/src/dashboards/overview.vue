<template>
    <div>
        <h1 class="font-bold text-4xl mb-2">Overview</h1>
        <div class="kpi mb-12">
            <TransitionGroup class="flex" name="slide-fade" tag="div" :css="false" @enter="onEnter">
                <kpi class="opacity-0" :class="[index == 0 ? 'ml-0' : '', index == 3 ? 'mr-0' : '']" v-show="show"
                    :data-index="index" v-for="(kpi, index) in kpis" :metricData="kpi" :key="kpi"></kpi>
            </TransitionGroup>
        </div>

        <div class="charts flex mb-6">
            <transition name="slide-fade">
                <linechart v-show="show"></linechart>
            </transition>
            <transition name="slide-fade">
                <onlineorders v-show="show"></onlineorders>
            </transition>
        </div>

        <div class="stats flex">
            <transition name="slide-fade">
                <countries v-show="show"></countries>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import kpi from '../components/kpi.vue'
import gsap from 'gsap'
import {kpiType} from './models/graphtypes'
import linechart from '../components/linechart.vue'
import onlineorders from '../components/onlineorders.vue'
import countries from '../components/countries.vue'

export default defineComponent({
    name: 'dashboard',
    components: {
        kpi,
        linechart,
        onlineorders,
        countries
    },
    data(): { show: boolean, kpis: kpiType[] } {
        const show = false

        const kpis = [
            {
                name: 'Sales online',
                metric: 34,
                compare: 87,
                comparedTo: 'yesterday',
            },
            {
                name: 'Sales In Stores',
                metric: 167,
                compare: -43,
                comparedTo: 'last month',
            },
            {
                name: 'Social engagements',
                metric: 432,
                compare: 135,
                comparedTo: 'last week',
            },
            {
                name: 'Solved support tickets',
                metric: 69,
                compare: -12,
                comparedTo: 'last 2 week',
            },
        ]

        return { show, kpis }
    },
    mounted() {
        this.show = true;
    },
    methods: {
        onEnter(el: any, done: any) {
            gsap.to(el, {
                opacity: 1,
                translateY: '20px',
                height: '9rem',
                delay: el.dataset.index * 0.20,
                onComplete: done
            })
        }
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
    transition: all 0.5s ease-out;
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