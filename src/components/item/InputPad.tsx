import { DatetimePicker, Popup } from "vant";
import { defineComponent, PropType, ref } from "vue";
import { Icon } from "../../shared/Icon";
import { time } from "../../shared/time";
import s from "./InputPad.module.scss";
export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const buttons = [
      { text: "1", onclick: () => {} },
      { text: "2", onclick: () => {} },
      { text: "3", onclick: () => {} },
      { text: "清空", onclick: () => {} },
      { text: "4", onclick: () => {} },
      { text: "5", onclick: () => {} },
      { text: "6", onclick: () => {} },
      { text: "+", onclick: () => {} },
      { text: "7", onclick: () => {} },
      { text: "8", onclick: () => {} },
      { text: "9", onclick: () => {} },
      { text: "-", onclick: () => {} },
      { text: ".", onclick: () => {} },
      { text: "0", onclick: () => {} },
      { text: "删", onclick: () => {} },
      { text: "提交", onclick: () => {} },
    ];
    const now = new Date();
    const refDate = ref<Date>(now);
    const refDatePickerVisible = ref(false);
    const showDatePicker = () => (refDatePickerVisible.value = true);
    const hideDatePicker = () => (refDatePickerVisible.value = false);
    const setDate = (date: Date) => {
      refDate.value = date;
      hideDatePicker();
    };
    return () => (
      <>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span>
              <span onClick={showDatePicker}>
                {time(refDate.value).format()}
              </span>
              <Popup
                position="bottom"
                v-model:show={refDatePickerVisible.value}
              >
                <DatetimePicker
                  value={refDate.value}
                  type="date"
                  title="选择年月日"
                  onConfirm={setDate}
                  onCancel={hideDatePicker}
                />
              </Popup>
            </span>
          </span>
          <span class={s.amount}>199.00</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button) => (
            <button onClick={button.onclick}>{button.text}</button>
          ))}
        </div>
      </>
    );
  },
});
