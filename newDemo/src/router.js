/* global Vue */
import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage'
import LoginPage from '@/components/LoginPage'
import MainTabPage from '@/components/MainTabPage'

Vue.use(Router)

module.exports = new Router({
    routes: [{
            path: '/',
            name: 'WelcomePage',
            component: WelcomePage
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/main',
            name: 'MainTabPage',
            component: MainTabPage
        },
    ]
})
