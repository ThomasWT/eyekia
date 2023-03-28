import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import pages from './routes'
import axios from 'axios'
// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = pages

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

async function validateAuth() {
  if(sessionStorage.getItem('token')) {
    const response = await axios.post('http://localhost:3000/auth/validatetoken', {
      token: sessionStorage.getItem('token')
    })
    return response.status == 200
  } else {
    return false;
  }
}

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    await validateAuth() && 
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

createApp(App).use(router).mount('#app')
