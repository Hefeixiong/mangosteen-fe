import { FunctionalComponent } from "vue";
import s from "./Welcome.module.scss";
import cloud  from "../../assets/icons/cloud.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Forth: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <img src={cloud} />
      <h2>每日提醒<br />不遗漏每一笔账单</h2>
    </div>
  );
};
Forth.displayName = "Forth";