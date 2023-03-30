<template>
    <div class="dashboard flex bg-purple-50 dark:bg-[#2a2a2a] h-auto min-h-screen">
       <navigation />
        <div class="ml-[25rem] px-12 pt-6 w-[calc(100vw-27rem)] flex flex-wrap">
            <router-view class=" flex flex-wrap w-full flex-col"  v-slot="{ Component }">
                <transition name="fade">
    <component :is="Component" />
  </transition>
            </router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navigation from '../components/navigation.vue'

export default defineComponent({
    name: 'dashboard',
    components: {
        navigation
    }
})
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>