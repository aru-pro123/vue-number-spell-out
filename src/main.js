import { createApp } from 'vue'
import App from './App.vue'
import NumberSpell from "./components/NumberSpell";

createApp(App).mount('#app')

export default {
    install(Vue){
        Vue.component("vue-number-spell-out", NumberSpell)
    }
}

