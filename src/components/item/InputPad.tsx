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
    const appendText = (n: number | string) => {
      const nString = n.toString();
      const dotIndex = refAmount.value.indexOf(".");
      if (refAmount.value.length >= 13) {
        return;
      }
      if (dotIndex >= 0 && refAmount.value.length - dotIndex > 2) {
        return;
      }
      if (nString === ".") {
        if (dotIndex >= 0) {
          return;
        }
      } else if (nString === "0") {
        if (dotIndex === -1) {
          if (refAmount.value === "0") {
            return;
          }
        }
      } else {
        if (refAmount.value === "0") {
          refAmount.value = "";
        }
      }
      refAmount.value += n.toString();
    };
    const buttons = [
      {
        text: "1",
        onclick: () => {
          appendText(1);
        },
      },
      {
        text: "2",
        onclick: () => {
          appendText(2);
        },
      },
      {
        text: "3",
        onclick: () => {
          appendText(3);
        },
      },
      {
        text: "4",
        onclick: () => {
          appendText(4);
        },
      },
      {
        text: "5",
        onclick: () => {
          appendText(5);
        },
      },
      {
        text: "6",
        onclick: () => {
          appendText(6);
        },
      },
      {
        text: "7",
        onclick: () => {
          appendText(7);
        },
      },
      {
        text: "8",
        onclick: () => {
          appendText(8);
        },
      },
      {
        text: "9",
        onclick: () => {
          appendText(9);
        },
      },
      {
        text: ".",
        onclick: () => {
          appendText(".");
        },
      },
      {
        text: "0",
        onclick: () => {
          appendText(0);
        },
      },
      {
        text: "清空",
        onclick: () => {
          refAmount.value = "0";
        },
      },
      { text: "提交", onclick: () => {} },
    ];
    const refAmount = ref("0");
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
          <span class={s.amount}>{refAmount.value}</span>
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
