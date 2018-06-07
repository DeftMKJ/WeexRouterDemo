
import mixins from '../mixins/index'
import FourthPage from '../components/FourthPage.vue'

const router = require('../router')

// register global mixins.
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, FourthPage))
router.push('/')
