<template>
    <div
        class="flex flex-col bg-white dark:bg-[#1d1d1d] rounded-2xl shadow-lg pt-6 pb-4 overflow-x-hidden">
        <div class="px-6 h-full">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "tile",
})
</script>