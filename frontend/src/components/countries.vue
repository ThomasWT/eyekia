<template>
    <tile class="w-[calc(50%-0.75rem)] h-auto mr-3 pt-4 pb-1">
        <p class="text-gray-500 font-bold dark:text-gray-400">
            Global performance
        </p>
        <p class="text-sm text-gray-400">Earnings progress towards target</p>
            <div v-for="country in countries" :key="country.iso" class="flex justify-center items-center my-4">
                <country-flag class="!-mt-3 pr-[52px]" :country='country.iso' size='normal' />
                <div class="ml-4 w-full bg-gray-200 rounded-full h-2.5">
                    <div :class="country.color" class="h-2.5 rounded-full" :style="{width: country.amount+'%'}"></div>
                </div>
                <p class="ml-4 text-sm text-gray-500">{{country.amount}}%</p>
            </div>
    </tile>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountryFlag from 'vue-country-flag-next'
import tile from './tile.vue'

interface country {
    iso: string,
    color: string,
    amount: number
}

export default defineComponent({
    name: 'countries',
    components: {
        CountryFlag,
        tile
    },
    data(): {countries: country[]} {
        const countries = [
            {
                iso: 'dk',
                color: 'bg-red-500',
                amount: 89
            },
            {
                iso: 'it',
                color: 'bg-green-600',
                amount: 68
            },
            {
                iso: 'se',
                color: 'bg-yellow-400',
                amount: 38
            }
        ]
        return {countries}
    }
})
</script>