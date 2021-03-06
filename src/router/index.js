import Vue from 'vue'
import Router from 'vue-router'
import Show from "@/components/show/show";
import Ke from "@/components/ke/ke";
import keDetail from '@/components/ke/keDetail'
import Yue from "@/components/yue/yue";
import Oto from "@/components/yue/oneToOne";
import YuePlan from "@/components/yue/yue-plan";
import TaeDetai from "@/components/yue/teacher";
import Li from "@/components/li/li";

import Zhuce from "@/components/wo/Zhuce"
import Setup from "@/components/wo/Setup"
import Login from "@/components/wo/Login"
import Study from "@/components/wo/Study"
import Wo from "@/components/wo/wo";
import Yu from "@/components/show/fw-yuyue";
import Person from "@/components/wo/Person"
import Edit from "@/components/wo/Edit"
import Sex from "@/components/wo/Sex"
import Course from "@/components/wo/Course"
import Gai from "../gai/gai.vue"
import Ms from "@/components/show/fw-msxq";

import Message from "@/components/wo/Message";
import Tj from "@/components/li/zyp-Tj"
import Zyp_Search from "@/components/li/zyp-Search"
import Rl from "../components/show/rl/rl.vue"
import Kex from "@/components/ke/kex"
import Zyp_Ct from "@/components/li/ct"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:"/message",
      name:"message",
      component:Message
    },
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
      path:"/study",
      name:"study",
      component: Study
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
      path:"/yu",
      name:"yu",
      component: Yu
  },{
      path:"/oto",
      name:"oto",
      component:Oto
    },   
    {
      path:"/yue-plan",
      name:"yue-plan",
      component:YuePlan
    },
    {
      path:"/teacher",
      name:"teadetail",
      component:TaeDetai
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
      name:"login",
      component:Login
    },
    {
      path:"/zhuce",
      name:"zhuce",
      component:Zhuce
    },
    {
      path:"/setup",
      name:"setup",
      component:Setup
    },  
    {
      path:"/rl",
      name:"rl",
      component: Rl

    },
    {
      path:"/gai",
      name:'gai',
      component: Gai
    },
    {
      path:"/kex",
      name:'kex',
      component: Kex
    }
    ,{
      path:"/ms",
      name:"ms",
      component: Ms
    },
    {
      path:"/li/ct",
      name:"ct",
      component:Zyp_Ct
    }
  ]
})
