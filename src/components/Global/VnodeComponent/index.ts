import { h, defineComponent, ref, onMounted, isVNode } from 'vue'

export default defineComponent({
    props: ["vnodes"],
    setup(props, ctx) {
        function handleStructure(vnodes) {
            if (isVNode(vnodes)) {
                return h(vnodes)
            } else if (typeof vnodes == 'function') {
                return h(vnodes(h))
            } else if (typeof vnodes == 'string') {
                return h('div', { innerHTML: vnodes })
            } else if (typeof vnodes == 'object') {
                return h(vnodes.type, { ...vnodes.props })
            }
        }
        return () => {
            return handleStructure(props.vnodes)
        }
    }
})
