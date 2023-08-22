import { ref } from 'vue'
import type { Router } from 'vue-router'
export function useBreadcrumb() {
    const breadcrumbList = ref()
    function initBreadcrumb(router: Router) {
        breadcrumbList.value = router.currentRoute.value.matched.map(i => {
            return {
                key: i.path,
                name: i.name
            }
        })
    }
    return {
        breadcrumbList,
        initBreadcrumb
    }
}