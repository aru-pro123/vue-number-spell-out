import { createApp } from 'vue'
import App from './App.vue'
import NumberSpell from "./components/NumberSpell";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).mount('#app')

export default {
    install(Vue){
        Vue.component("vue-number-spell-out", NumberSpell)
    }
}

