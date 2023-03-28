//pages
import login from './pages/login.vue'
import dashboard from './pages/dashboard.vue'

//overview
import overview from './dashboards/overview.vue'
import socials from './dashboards/socials.vue'
import teams from './dashboards/teams.vue'
import settings from './dashboards/settings.vue'

export default [
  { "path": "/", name: 'frontpage', component: login },
  { "path": "/login", name: 'login', component: login },
  {
    "path": "/dashboard", name: 'dashboard', component: dashboard,
    children: [
      {
        path: 'overview',
        component: overview,
      },
      {
        path: 'socials',
        component: socials,
      },
      {
        path: 'teams',
        component: teams,
      },
      {
        path: 'settings',
        component: settings,
      },
    ]
  }
]

