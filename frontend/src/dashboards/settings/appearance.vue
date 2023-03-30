<template>
    <div class="flex flex-col">
        <div class="header">
            <p class="text-gray-600 font-bold text-2xl">Appearance</p>
            <p class="text-gray-400 text-sm">Change how your UI looks and feels</p>
        </div>
        <hr class="my-6">
        <div class="flex justify-between">
            <div class="explain">
                <p class="text-gray-600 font-bold text-lg">Interface theme</p>
                <p class="text-gray-400 text-sm">Select or customize your UI theme</p>
            </div>
            <div class="flex">
                <div class="flex flex-col mx-6">
                    <div class="border-4 rounded-lg border-purple-400">
                        <img class="w-48 rounded-lg " src="/light.svg" />
                    </div>
                    <p class="font-bold text-gray-700">Light mode</p>
                </div>
                <div class="flex flex-col mx-6">
                    <div class="border-4 border-white hover:border-4 hover:border-purple-400 rounded-xl cursor-pointer">
                        <img class="w-48 rounded-lg" src="/dark.svg" />
                    </div>
                    <p class="font-bold text-gray-700">Light mode</p>
                </div>
            </div>
        </div>
        <hr class="my-6">
        <div class="flex">
            <div class="explain">
                <p class="text-gray-600 font-bold text-lg">Compact sidebar</p>
                <p class="text-gray-400 text-sm">Collapses the sidebar to be more compact</p>
            </div>
            <div class="ml-6 mt-4">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div
                        class="w-11 h-6 bg-purple-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-400">
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>