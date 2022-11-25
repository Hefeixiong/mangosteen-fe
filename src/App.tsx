import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <div>
          <ul>
            <li>
              <router-link to="/">Foo</router-link>
            </li>
            <li>
              <router-link to="/bar">Bar</router-link>
            </li>
          </ul>
        </div>
        <div>
          <RouterView />
        </div>
      </>
    );
  },
});
