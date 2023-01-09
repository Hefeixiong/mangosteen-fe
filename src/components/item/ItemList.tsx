import { defineComponent } from "vue";
import { TimeTabLayout } from "../../layouts/TimeTabLayout";
import { ItemSummary } from "./ItemSummary";

export const ItemList = defineComponent({
  setup: (props, context) => {
    return () => <TimeTabLayout component={ItemSummary} />;
  },
});
