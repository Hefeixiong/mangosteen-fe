import { defineComponent, PropType } from "vue";
import s from './Icon.module.scss'

export type IconName = 'add' | 'chart' | 'clock' | 'cloud' | 'mangsoteen' | 'pig' | 'menu'
export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true
    }
  },
  setup: (props, context) => {
    console.log(props.name)
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})