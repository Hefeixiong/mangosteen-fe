import { Overlay } from "vant";
import { defineComponent, PropType, reactive, ref } from "vue";
import { ItemSummary } from "../components/item/ItemSummary";
import { Form, FormItem } from "../shared/Form";
import { OverlayIcon } from "../shared/Overlay";
import { Tab, Tabs } from "../shared/Tabs";
import { Time } from "../shared/time";
import { MainLayout } from "./MainLayout";
import s from "./TimeTabLayout.module.scss";

const demo = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true,
    },
    endDate: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
export const TimeTabLayout = defineComponent({
  props: {
    component: {
      type: Object as PropType<typeof demo>,
    },
  },
  setup: (props, context) => {
    const refSelected = ref("本月");
    const time = new Time();
    const customTime = reactive({
      start: new Time().format(),
      end: new Time().format(),
    });
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth(),
      },
      {
        start: time.add(-1, "month").firstDayOfMonth(),
        end: time.add(-1, "month").lastDayOfMonth(),
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfMonth(),
      },
    ];
    const refOverlayVisible = ref(false);
    const onSubmitCustomTime = (e: Event) => {
      e.preventDefault();
      refOverlayVisible.value = false;
    };
    return () => (
      <MainLayout class={s.wrapper}>
        {{
          title: () => "山竹记账",
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              <Tabs
                classPrefix={"customTabs"}
                v-model:selected={refSelected.value}
                onUpdate:selected={() =>
                  refSelected.value === "自定义时间"
                    ? (refOverlayVisible.value = true)
                    : ""
                }
              >
                <Tab name="本月">
                  <ItemSummary
                    startDate={timeList[0].start.format()}
                    endDate={timeList[0].end.format()}
                  />
                </Tab>
                <Tab name="上月">
                  <ItemSummary
                    startDate={timeList[1].start.format()}
                    endDate={timeList[1].end.format()}
                  />
                </Tab>
                <Tab name="今年">
                  <ItemSummary
                    startDate={timeList[2].start.format()}
                    endDate={timeList[2].end.format()}
                  />
                </Tab>
                <Tab name="自定义时间">
                  <ItemSummary
                    startDate={customTime.start}
                    endDate={customTime.end}
                  />
                </Tab>
              </Tabs>
              <Overlay show={refOverlayVisible.value} class={s.overlay}>
                <div class={s.overlay_inner}>
                  <header>请选择时间</header>
                  <main>
                    <Form onSubmit={onSubmitCustomTime}>
                      <FormItem
                        label="开始时间"
                        v-model={customTime.start}
                        type="date"
                      />
                      <FormItem
                        label="结束时间"
                        v-model={customTime.end}
                        type="date"
                      />
                      <FormItem>
                        <div class={s.actions}>
                          <button
                            type="button"
                            onClick={() => (refOverlayVisible.value = false)}
                          >
                            确认
                          </button>
                          <button
                            type="button"
                            onClick={() => (refOverlayVisible.value = false)}
                          >
                            取消
                          </button>
                        </div>
                      </FormItem>
                    </Form>
                  </main>
                </div>
              </Overlay>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});