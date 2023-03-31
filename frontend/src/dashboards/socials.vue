<template>
    <div>
        <h1 class="font-bold text-4xl dark:text-white">Socials</h1>
        <div v-show="!isLoadingKpi" class="kpi mb-12 w-full">
            <transition-group class="flex w-full" name="slide-fade" tag="div" :css="false" @enter="onEnterKpi">
                <kpi class="opacity-0" :class="[(index == 0 ? 'ml-0' : ''), (index == 3 ? 'mr-0' : '')]" v-show="show"
                    :data-index="index" v-for="(kpi, index) in kpis" :metricData="kpi" :key="index"></kpi>
            </transition-group>
        </div>

        <transition-group class="flex flex-wrap" name="slide-fade" tag="div" :css="false" @enter="onEnterCard">
            <gauge class="opacity-0 mb-6 mt-4" :data-index="0" :key="0" v-show="show"></gauge>
            <countryDemographics class="opacity-0 mb-6 mt-4" :data-index="1" :key="1" v-show="show"></countryDemographics>
            <ageDemographic  class="opacity-0" :data-index="2" :key="2" v-show="show"></ageDemographic>
            <engagementComponent  class="opacity-0" :data-index="3" :key="3" v-show="show"></engagementComponent>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import kpi from '../components/kpi.vue'
import gsap from 'gsap'
import countryDemographics from '../components/countryDemographics.vue'
import ageDemographic from '../components/ageDemographic.vue'
import engagementComponent from '../components/engagementComponent.vue'
import gauge from '../components/gauge.vue'
import StatsService from '../dataservice/stats'
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'socials',
    components: {
        kpi,
        countryDemographics,
        ageDemographic,
        gauge,
        engagementComponent
    },
    setup() {
    const statsService = new StatsService();
    statsService.fetchKpis(useRoute().name);

    return {
      kpis: statsService.getKpis(),
      isLoadingKpi: statsService.isLoadingKpi()
    };
  },
    data(): { show: boolean } {
        const show = false
        return { show }
    },
    async mounted() {
        this.show = true;
    },
    methods: {
        onEnterKpi(el: any, done: any) {
            gsap.to(el, {
                opacity: 1,
                translateY: '20px',
                height: '9rem',
                delay: el.dataset.index * 0.20,
                onComplete: done
            })
        },
        onEnterCard(el: any, done: any) {
            gsap.to(el, {
                opacity: 1,
                translateY: '-20px',
                duration: 0.5,
                height: 'auto',
                delay: (el.dataset.index) * 0.15,
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