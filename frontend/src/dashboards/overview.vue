<template>
    <div>
        <h1 class="font-bold text-4xl mb-6">Overview</h1>
            <TransitionGroup class="flex" name="slide-fade" tag="div" :css="false" @enter="onEnter">
                <kpi class="opacity-0" :class="[index == 0 ? 'ml-0' : '', index == 3 ? 'mr-0' : '']" v-show="show" :data-index="index" v-for="(n, index) in 4" :key="n"></kpi>
            </TransitionGroup>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import kpi from '../components/kpi.vue'
import gsap from 'gsap'

export default defineComponent({
    name: 'dashboard',
    components: {
        kpi
    },
    data(): { show: boolean } {
        const show = false
        return { show }
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