import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router.js'
import './assets/style.css';



Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
