import Vue from 'vue'
import Router from 'vue-router'
import Show from "@/components/show/show";
import Ke from "@/components/ke/ke";
import keDetail from '@/components/ke/keDetail'
import Yue from "@/components/yue/yue";
import Oto from "@/components/yue/oneToOne";
import Li from "@/components/li/li";
import Wo from "@/components/wo/wo";
import Person from "@/components/wo/Person"
import Edit from "@/components/wo/Edit"
import Sex from "@/components/wo/Sex"
import Course from "@/components/wo/Course"

import Tj from "@/components/li/zyp-Tj"
import Zyp_Search from "@/components/li/zyp-Search"
import Login from "@/components/li/Login"
import Rl from "../components/show/rl/rl.vue"
Vue.use(Router)

export default new Router({
  mode:"history",
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
      path:'/keDetail',
      name:'keDetail',
      component:keDetail
    },
    {
      path:"/yue",
      name:"yue",
      component: Yue
    },
    {
      path:"/li",
      name:"li",
      component: Li,         
    },
    {
      path:"/person",
      name:"person",
      component: Person
    },
    {
      path:"/edit",
      name:"edit",
      component: Edit
    },
    {
      path:"/sex",
      name:"sex",
      component: Sex
    },
    {
      path:"/course",
      name:"course",
      component: Course
    },
    {
      path:"/wo",
      name:"wo",
      component: Wo
    },
    {
      path:"/oto",
      name:"oto",
      component:Oto
    },   
    {
      path:"/li/tj",
      name:"tj",
      component:Tj
    },
    {
      path:"/zyp-search",
      name:'search',
      component: Zyp_Search
    },
    {
       path:"/login",
       component:Login
    },
    {path:"/wo",redirect: "/login"}
    ,{
      path:"/rl",
      name:"rl",
      component: Rl
    }
  ]
})
