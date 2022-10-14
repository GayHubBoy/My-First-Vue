import { createApp } from 'vue'
import './style.css'
import router from "./router";
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/less/index.less'
import store from './store/index.js'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
app.use(router).use(store)
