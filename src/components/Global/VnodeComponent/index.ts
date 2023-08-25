import { h, defineComponent, ref } from 'vue'

export default defineComponent({
  props: ["vnodes"],
  setup(props, ctx) {
    return () => {
      return typeof props.vnodes == 'function' ? h(props.vnodes(h)) : h(props.vnodes)
    }
  }
})
