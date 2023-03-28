import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import pages from './routes'
import axios from 'axios'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChartLine, faPeopleGroup, faArrowRightFromBracket, faGears } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faChartLine, faThumbsUp, faPeopleGroup, faArrowRightFromBracket, faGears)


const routes = pages
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

async function validateAuth() {
  if(sessionStorage.getItem('token')) {
    return axios.post('http://localhost:3000/auth/validatetoken', {
      token: sessionStorage.getItem('token')
    }).then((res) => {
      return true
    }).catch(err => {
      return false
    })
  }
}

router.beforeEach(async (to, from) => {
  const tokenValid = await validateAuth()
  if (
    // make sure the user is authenticated
    !tokenValid && 
    // ❗️ Avoid an infinite redirect
    to.path !== '/login'
  ) {
    // redirect the user to the login page
    return { path: '/login' }
  }
  if(tokenValid && (to.path == '/login' || to.path == '/')) {
    return {path: '/dashboard/overview'}
  }
})

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
