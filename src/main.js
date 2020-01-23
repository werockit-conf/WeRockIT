import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLink, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { globalStore } from '@/components/store.js'

library.add(faTwitter, faInstagram, faLinkedin, faFacebook, faLink, faCaretUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === 'production'
const trackingId = process.env.VUE_APP_GOOGLE_ANALYTICS_ID

Vue.use(VueAnalytics, {
  id: trackingId,
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd,
  },
})

new Vue({
  router,
  data: globalStore,
  render: h => h(App),
}).$mount('#app')
