import { defineComponent, PropType } from "vue";
import { RouterView } from "vue-router";
import s from "./TagsPage.module.scss";
export const TagsPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <RouterView />;
  },
});
