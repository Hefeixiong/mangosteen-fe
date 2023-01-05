import { defineComponent, reactive } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Button } from "../../shared/Button";
import { Icon } from "../../shared/Icon";
import { Rules, validate } from "../../shared/validate";
import s from "./Tag.module.scss";
import { TagForm } from "./TagForm";
export const TagEdit = defineComponent({
  setup: (props, context) => {
    const formDate = reactive({
      name: "",
      sign: "",
    });
    const errors = reactive<{ [k in keyof typeof formDate]?: string[] }>({});
    const onSubmit = (e: Event) => {
      const rules: Rules<typeof formDate> = [
        { key: "name", type: "required", message: "必填" },
        {
          key: "name",
          type: "pattern",
          regex: /^.{1,4}$/,
          message: "只能填 1 到 4 个字符",
        },
        { key: "sign", type: "required", message: "必填" },
      ];
      Object.assign(errors, {
        name: undefined,
        sign: undefined,
      });
      Object.assign(errors, validate(formDate, rules));
      e.preventDefault();
    };

    return () => (
      <MainLayout>
        {{
          title: () => "新建标签",
          icon: () => (
            <Icon
              name="left"
              onClick={() => {
                console.log("hi");
              }}
            />
          ),
          default: () => (
            <>
              <TagForm />
              <div class={s.actions}>
                <Button level="danger" class={s.removeTags} onClick={() => {}}>
                  删除标签
                </Button>
                <Button
                  level="danger"
                  class={s.removeTagsAndItems}
                  onClick={() => {}}
                >
                  删除标签和记账
                </Button>
              </div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
