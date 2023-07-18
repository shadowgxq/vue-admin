import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.less'
import router from './router/index'
import '../mock/_index'
const app = createApp(App)
app.use(router)
app.mount('#app')
