import { ref } from 'vue'
import type { Router } from 'vue-router'
export function useBreadcrumb() {
    const breadcrumbList = ref()
    const breadcrumbVisiable = ref<boolean>(true)
    function initBreadcrumb(router: Router) {
        let hideBreadcrumb = router.currentRoute.value.meta.hideBreadcrumb

        if (hideBreadcrumb) {
            breadcrumbVisiable.value = false
            return
        }
        breadcrumbList.value = router.currentRoute.value.matched.map(i => {
            return {
                key: i.path,
                name: i.name
            }
        })
    }
    return {
        breadcrumbList,
        initBreadcrumb,
        breadcrumbVisiable
    }
}