import Vue from 'vue'
import App from './App.vue'
import Message from './Message.vue'     // import object from component file
import Button from './Button.vue'

Vue.component('app-message', Message) // set-up selector (used in App.vue file) & object (imported)
Vue.component('on-off-button', Button)


new Vue({
  el: '#app',
  render: h => h(App)                   // renders App.vue file
})
