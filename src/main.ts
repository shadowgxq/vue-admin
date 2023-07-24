import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.less'
import { setupRouter } from './router/index'
import '../mock/_index'
import { setupStore } from './store'
import { router } from '@/router/index'
import { setupRouterGuard } from './router/guard'

const app = createApp(App)
function initApp() {
    //pinia
    setupStore(app)
    //init router
    setupRouter(app)
    setupRouterGuard(router)
    app.mount('#app')
}
initApp()
