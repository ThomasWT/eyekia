<template>
    <div
        class="orders flex flex-col w-[calc(50%-0.75rem)] h-auto bg-white rounded-2xl shadow-lg ml-3 pt-6 pb-4 overflow-hidden">
        <div class="px-6">
            <p class="text-gray-500 font-bold mb-2">Orders</p>
        </div>
        <table class="w-full text-sm text-left text-gray-500 ">
            <caption class="px-5 py-2 text-lg font-semibold text-left text-gray-900 bg-white">
                <p class="mt-1 text-sm font-normal text-gray-500 ">Recent orders from both online and in store sales</p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-purple-200 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Sold
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.productname" class="bg-white border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ order.productname }}
                    </th>
                    <td class="px-6 py-4">
                        {{order.color}}
                    </td>
                    <td class="px-6 py-4">
                        {{ order.soldloc }}
                    </td>
                    <td class="px-6 py-4">
                        €{{ order.price }}
                    </td>
                    <td class="pr-3 py-4 text-right">
                        <span :class="{'bg-green-100 text-green-600' : order.state == 'completed', 'bg-yellow-100 text-yellow-600' : order.state == 'awaiting', 'bg-red-100 text-red-500' : order.state == 'cancelled'}" class="text-sm font-medium px-2.5 py-0.5 rounded capitalize">{{ order.state }}</span>
                    </td>
                </tr>
               
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { order } from '../dashboards/models/graphtypes'

export default defineComponent({
    name: 'onlineorders',
    data(): { orders: order[] } {
        const orders = [
            {
                productname: 'MOSSLANDA',
                color: 'black',
                soldloc: 'online',
                price: 65,
                state: 'completed'
            },
            {
                productname: 'ÄNGSLILJA',
                color: 'white',
                soldloc: 'store',
                price: 289,
                state: 'cancelled'
            },
            {
                productname: 'VILBORG',
                color: 'gray',
                soldloc: 'online',
                price: 429,
                state: 'completed'
            },
            {
                productname: 'GULLIVER',
                color: 'white',
                soldloc: 'online',
                price: 899,
                state: 'awaiting'
            },
            {
                productname: 'NYMÅNE',
                color: 'purple',
                soldloc: 'store',
                price: 199,
                state: 'completed'
            }
        ]
        return { orders }
    }
})
</script>