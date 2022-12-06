import { defineComponent } from "vue";
import s from './Button.module.scss'

interface Props{
  onClick?: (e: MouseEvent) => void
}

export const Button = defineComponent<Props>({
  setup: (props, context) => {

    console.log(context.slots.default)

    return () => (
      <button class={s.button}> { context.slots.default?.() } </button>
    )
  }
})