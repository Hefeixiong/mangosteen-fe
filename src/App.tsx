import { defineComponent, ref } from "vue";

export const App = defineComponent({
  setup() {
    const refConut = ref(0);
    const onClik = () => {
      refConut.value += 1;
    };

    return () => (
      <>
        <div>{refConut.value}</div>
        <div>
          <button onClick={onClik}>+1</button>
        </div>
      </>
    );
  },
});
