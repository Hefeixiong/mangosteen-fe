import { defineComponent, PropType } from "vue";
import { TimeTabLayout } from "../layouts/TimeTabLayout";
import { Charts } from "../components/statistics/Charts";
import s from "./StatisticsPage.module.scss";
export const StatisticsPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <TimeTabLayout component={Charts} />;
  },
});
