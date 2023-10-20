import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VnodeComponent from '@/components/Global/VnodeComponent'
import VnodeFormComponent from '@/components/Global/VnodeFormComponent'
export function setupIcon(app) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}

//全局注册组件
export function setupGlobal(app) {
    app.component('VnodeComponent', VnodeComponent)
    app.component('VnodeFormComponent', VnodeFormComponent)
}