import Vue from 'vue'

import App from './App'

new Vue({
  render: h => h(App)
}).$mount('#app');

// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// });
