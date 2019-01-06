import Vue from "vue";
import Router from "vue-router";

// 引入页面
import Index from "@/view/pages/index/index.vue";
import About from "@/view/pages/about/about.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/about",
      name: "About",
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      // import(/* webpackChunkName: "about" */ "@/view/about.vue")
    }
  ]
});
