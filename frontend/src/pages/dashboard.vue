<template>
    <div>
        Dashie
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
    name: 'dashboard',
    data(): { } {
    return { };
  },
})
</script>