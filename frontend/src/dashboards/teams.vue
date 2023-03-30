<template>
    <div>
        <h1 class="font-bold text-4xl mb-12">Teams</h1>
        <transition-group class="flex flex-wrap" name="slide-fade" tag="div" :css="false" @enter="onEnterCard">
          <teammember v-show="show" class="mx-3 opacity-0 w-[calc(25%-1.5rem)]" v-for="(manager, index) in managers" :key="index" :data-index="index" :managerid="manager"></teammember>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap'
import teammember from '../components/teammember.vue'
import TeamsService from '../dataservice/teams'

export default defineComponent({
    name: 'teams',
    components: {
        teammember
    },
    setup() {
    const teamsService = new TeamsService();
    teamsService.fetchManagers();

    return {
      managers: teamsService.getManagers(),
      isLoadingmanagers: teamsService.isLoadingManagers()
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
        onEnterCard(el: any, done: any) {
            gsap.to(el, {
                opacity: 1,
                translateY: '-20px',
                duration: 0.5,
                height: 'fit-content',
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