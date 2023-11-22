import { h, defineComponent, ref, onMounted, isVNode, warn } from 'vue'
import { getComponentByType } from './map'

export default defineComponent({
    props: ["vnodes"],
    setup(props, ctx) {
        function handleStructure(vnodes) {
            let components = getComponentByType(vnodes.components)
            if (!components) return console.warn("please validate component type!")
            return h(components, {
                ...vnodes.props
            })
        }
        return () => {
            return handleStructure(props.vnodes)
        }
    }
})
