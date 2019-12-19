import Vue from 'vue'
import Router from 'vue-router'
import Show from "@/components/show/show";
import Ke from "@/components/ke/ke";
import Yue from "@/components/yue/yue";
import Li from "@/components/li/li";
import Wo from "@/components/wo/wo";
import Yu from "@/components/show/fw-yuyue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/show",
      name:"show",
      component: Show
    },
    {
      path:"/ke",
      name:"ke",
      component: Ke
    },
    {
      path:"/yue",
      name:"yue",
      component: Yue
    },
    {
      path:"/li",
      name:"li",
      component: Li
    },
    {
      path:"/wo",
      name:"wo",
      component: Wo
    },
    {
      path:"/yu",
      name:"yu",
      component: Yu
    }
  ]
})
