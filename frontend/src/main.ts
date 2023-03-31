import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import pages from './routes'
import axios from 'axios'
import VueApexCharts from "vue3-apexcharts";

import VueNumber from 'vue-number-animation'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChartLine, faPeopleGroup, faArrowRightFromBracket, faGears, faCommentDots, faLock, faFaceGrinStars, faRocket, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faThumbsUp, faFlag, faUser, faCreditCard  } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faLock, faFaceGrinStars, faRocket, faNetworkWired, faFlag, faUser, faCreditCard, faChartLine, faThumbsUp, faPeopleGroup, faArrowRightFromBracket, faGears, faCommentDots, faTwitter, faLinkedin)


const routes = pages
const router = createRouter({
  history: createWebHistory(),
  routes,
})

async function validateAuth() {
  if (sessionStorage.getItem('token')) {
    return axios.post('http://localhost:3000/auth/validatetoken', {
      token: sessionStorage.getItem('token')
    }).then(() => {
      return true
    }).catch(() => {
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
  if (tokenValid && (to.path == '/login' || to.path == '/')) {
    return { path: '/dashboard/overview' }
  }
})

//handle darkmode on entry
if(!('theme' in localStorage)) {
  //default
  localStorage.theme = 'light'
} else {
  if(localStorage.theme == 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

createApp(App).use(router).use(VueApexCharts).use(VueNumber).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
