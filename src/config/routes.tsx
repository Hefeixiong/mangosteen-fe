import { Bar } from "../components/Bar";
import { Foo } from "../components/Foo";
import { First } from "../components/welcome/First";
import { Forth } from "../components/welcome/Forth";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";

export const routes = [
  { path: "/", component: Foo },
  { path: "/bar", component: Bar },
  {
    path: "/welcome",
    children: [
      { path: "1", component: First },
      { path: "2", component: Second },
      { path: "3", component: Third },
      { path: "4", component: Forth },
    ],
  },
];
