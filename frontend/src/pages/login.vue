<template>
    <div class="w-full h-full background flex justify-center items-center">
        <div class="bg-white shadow-lg rounded-lg px-6 py-6 flex">
            <div class="flex flex-col px-4 w-72">
                <h1 class="text-lg font-bold text-purple-500">Sign in to your account</h1>
                <div class="inputfields">
                    <div class="my-6">
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                        <input v-model="username" type="text" id="username"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-purple-500"
                            required>
                    </div>
                    <div class="my-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input v-model="password" type="password" id="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-purple-500"
                            required>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input v-model="rememberme" id="remember" aria-describedby="remember" type="checkbox"
                                class=" cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-purple-500 focus:ring-3 focus:ring-pruple-500">
                        </div>
                        <div class="ml-2 text-sm">
                            <label for="remember" class="text-gray-900 cursor-pointer">Remember me</label>
                        </div>
                    </div>
            
                </div>
                <div class="flex flex-col justify-center items-center">
                    <button @click="login"
                    class="w-full mt-6 text-white bg-purple-500 hover:bg-purple-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                    in</button>
                    <p class="text-red-400 mt-2 text-sm" v-if="errormsg != ''">{{ errormsg }}</p>
                    <a href="#" class="text-xs mt-4 font-normal text-primary-600 hover:underline dark:text-primary-500">Forgot
                        password?</a>
                </div>
        
            </div>

            <div class="max-w-lg ml-6 flex justify-end items-end">
                <img class="rounded-lg shadow-lg min-h-full w-auto"
                    src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
    name: 'login',
    data(): { username: string, password: string, rememberme: boolean, errormsg: string, loading: boolean } {
    const username = '';
    const password = '';
    const rememberme = false;
    const errormsg = ''
    const loading = false;
    return { username, password, rememberme, errormsg, loading };
  },
  methods: {
        login() {
            this.loading = true;
            axios.post(`${import.meta.env.VITE_API}/auth/login`, {
                "username": this.username,
                "password": this.password
            }).then(res => {
                sessionStorage.setItem("token", res.data.token);
                this.$router.push({path: '/dashboard/overview', replace: true })
            }).catch((err) => {
                this.errormsg = err.response.data
                this.loading = false;
            })
        }
    }
})
</script>

<style lang="scss" scoped>
.background {
    background: rgb(208, 172, 244);
    background: radial-gradient(circle, rgba(208, 172, 244, 1) 0%, rgba(120, 83, 157, 1) 100%);
}
</style>