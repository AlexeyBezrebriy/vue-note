import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import Home from "@/views/Home.vue"
import Information from "@/views/Information.vue"
import TMP from "@/views/TMP.vue"

const router = createRouter({
  history: createWebHistory(),
  // routes: [
  //   {
  //     path: "/",
  //     name: "Home",
  //     components: () => import("./views/Home.vue"),
  //   },
  //   {
  //     path: "/information",
  //     name: "About",
  //     components: Information,
  //   },
  // ],
  routes: [
    {
      path: "/",
      name: "home",
      components: TMP,
    },
  ],
})

createApp(App).use(router).mount("#app")
