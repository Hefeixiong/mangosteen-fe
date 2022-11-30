import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { FirstAction } from "../components/welcome/FirstAction";
import { Forth } from "../components/welcome/Forth";
import { ForthAction } from "../components/welcome/ForthAction";
import { Second } from "../components/welcome/Second";
import { SecondAction } from "../components/welcome/SecondAction";
import { Third } from "../components/welcome/Third";
import { ThirdAction } from "../components/welcome/ThirdAction";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      { path: "1", components: {main: First, footer: FirstAction} },
      { path: "2", components: {main: Second, footer: SecondAction} },
      { path: "3", components: {main: Third, footer: ThirdAction} },
      { path: "4", components: {main: Forth, footer: ForthAction} },
    ],
  },
];
