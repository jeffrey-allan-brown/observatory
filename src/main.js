import { Vue } from 'vue'
import app from './app.vue'
import router from './router'

new Vue({
  router,
  render: h => h(app)
}).$mount("#app");