import Vue from 'vue'
import Router from 'vue-router'
import Show from "@/components/show/show";
import Ke from "@/components/ke/ke";
import Yue from "@/components/yue/yue";
import Li from "@/components/li/li";
import Wo from "@/components/wo/wo";
import Person from "@/components/wo/Person"
import Edit from "@/components/wo/Edit"
import Sex from "@/components/wo/Sex"
import Course from "@/components/wo/Course"

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
    }
  ]
})
