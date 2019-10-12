import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faInstagram, faLinkedin)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === 'production'
const trackingId = process.env.VUE_APP_GOOGLE_ANALYTICS_ID

// Vue.use(VueAnalytics, {
//   id: trackingId,
//   router,
//   debug: {
//     enabled: !isProd,
//     sendHitTask: isProd,
//   },
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
