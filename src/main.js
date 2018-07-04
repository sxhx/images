import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // browser router
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/images/:id', component: ImageDetail, props: true },
    { path: '/oauth2/callback', component: AuthHandler },
  ],
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>',
// });
