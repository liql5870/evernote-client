import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from "@/components/Icon.vue";
import "./style/reset.css"

Vue.config.productionTip = false

Vue.component("Icon", Icon)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
