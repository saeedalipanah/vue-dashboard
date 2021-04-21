import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

  let lan = to.params.lang;
  if(!lan) {
    lan = 'en'
  }

  i18n.locale = lan
  
  next()

})

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
