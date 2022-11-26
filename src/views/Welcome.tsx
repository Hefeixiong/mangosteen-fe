import { defineComponent } from "vue";

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => {
      <div>Welcome</div>;
    };
  },
});
