import { h, defineComponent, ref, onMounted, isVNode } from 'vue'

/**
  * Note: Two-way binding of data and one-way data flow are not supported.
  * Rendering component and customer h()
  * 
  * implementation corresponding of if/else
  * 
  *  1.  return h('div', "test")
  *  2.  reutrn () => h('div', "test")
  *  3.  return "test"
  *  4.  return {
            components: ElButton,
            props: {
                type: "primary", innerHTML: "hello"
            }
        }
  */
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
                return h(vnodes.components, { ...vnodes.props })
            }
        }
        return () => {
            return handleStructure(props.vnodes)
        }
    }
})
