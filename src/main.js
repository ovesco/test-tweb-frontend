import Vue from 'vue';
import App from './App.vue';
import router from './router';
import apolloProvider from './apollo';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    apolloProvider,
    render: h => h(App),
}).$mount('#app');
