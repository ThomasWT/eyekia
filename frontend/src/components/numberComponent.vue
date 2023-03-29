<template>
    <number
    :ref="`number${val}`"
	:from="(val/2)"
	:to="val"
	:duration="duration"
    :delay="delay"
    easing="Power1.easeOut"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: 'numberComponent',
    props: {
        val: {
            type: Number as PropType<number>,
            required: true,
            default: 0
        },
        duration: {
            type: Number as PropType<number>,
            required: false,
            default: 1.2
        },
        delay: {
            type: Number as PropType<number>,
            required: false,
            default: 0
        }
    }
})
</script>