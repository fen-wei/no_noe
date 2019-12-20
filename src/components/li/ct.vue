<template>
  <div class="app">
    <Head></Head>
    <div class="con">
      <van-dropdown-menu active-color="#eb6100">


          
      
        <div class="rt">
          <van-dropdown-item v-model="value2"  :options="option2">
              <ul class="zyp-ul">
                     <li v-for="(v,i) in list" @click="ck(v,i)" @blur="bl" :style="v.zt?'color:#eb6100':'color:#000'">
                         {{v.title}}
                     </li>
                  </ul>
          </van-dropdown-item>
           
              </div>
        <p class="zyp-p"><img src="/static/img/zypfont2.png">巩固全部错题</p>
        <p class="zyp-p"  @click="onClick"><img src="/static/img/zypfont1.png">去除错题</p>
      </van-dropdown-menu>
    <ul class="zyp-bg">
        <li><img src="/static/img/zypgb.jpg" alt=""></li>
       <h3>稍后</h3>
    </ul>
     
    </div>
     
  </div>
</template>

<script>

import { Dialog } from 'vant';
import Head from "./zyp-Head";
export default {
  name: "Ct",
  components: {
    Head
  },
  data() {
    return {
      value1: 0,
      value2: 0,
       active: 2,
    //    scrollspy:false,,
     zt:false,
      
      items: [
        { text: "全部", children: [] },
        { text: "中考真题", children: [] },
        { text: "化学", children: [] }
      ],
      activeId: 1,
      activeIndex: 0,
      option1: [
        { text: "套卷分类", value: 0 }
      
      ],
      option2: [
        { text: "类型不限 ", value: 0 },
       
      ],
      list:[
          {"title":"全部",zt:true},
         {"title":"套卷练习",zt:false},
        {"title":"专点专线",zt:false},
        {"title":"仿真模考",zt:false}
      ]
    };
  },
  methods: {
      aaa(e){
        console.log(this)
      },
      ck(v,i){
          this.list.forEach(data=>{
              data.zt=false
            console.log(data.zt)
          })
        v.zt=true
        console.log(i)
        console.log(this.list)
        //   console.log(this.list)
        //   this.list[i].zt=true
      },
      bl(){
        //    this.list.forEach(data=>{
        //       data.zt=false
        //     console.log(data.zt)
        //   })
        // //   this.list[0].zt=true
        console.log(this.list[0])
          console.log(11111111)
      },
      onClick(){
             Dialog.confirm({
       
         message: '是否做对译文后自动删除该错题'
       }).then(() => {
         // on confirm
       }).catch(() => {
         // on cancel 
       });
      }
  },
  mounted () {
      
                   
  }
};
</script>

<style lang="scss" scoped  >
html,
body,
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.con {
  flex: 1;
}
 .van-dialog__confirm:active,.van-button__text{
    color: #eb6100 !important ;
}

.van-dropdown-menu__item {
    flex:1; 
  height: 100%;
  width: 2.5rem;
  font-size: 0.3rem;
  
 
}

.van-dropdown-item {
  margin-top: 0.4rem;
}
.van-ellipsis {

  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.4rem;
}

.zyp-p{

    flex: 1;
    text-align: center;
    line-height: 3.7;
    color: #8c8c8c;
    font-size: 0.3rem;
    img{
         vertical-align:baseline;
        display: inline-block;
        margin-bottom: -0.05rem;
        // margin-top: 0.2rem;
           
        width: 0.4rem;
        height: 0.4rem;
    }
}

.van-tree-select__content{
    padding: 0.3rem;
    font-size: 0.6rem;
}
.van-sidebar{
  height: 3rem;
  a{
      display: block;
      font-size: 0.4rem;
      line-height: 0.6rem;
  }
}
.van-sidebar-item__text{
    width: 100%;
    height: 100%;
    text-align: center;
}
.van-ellipsis{
    padding: 0.2rem;
}
.van-dropdown-menu__title::after{

    display: inline-block;
   width: 0.1rem;
   height: 0.1rem;
    
}
.van-tree-select{
  height: 3.3rem !important;
}
.van-tree-select__content{
  height: 3rem;
}
.zyp-ul{
     
    li{
        height: 1rem;
        text-align: center;
        font-size: 0.3rem;
        line-height: 1rem;
        border-bottom: #f5f5f5 1px solid;
       
      
    }
}
.van-sidebar-item--select{
    color: #eb6100;
}
.zyp-bg{
    img{
        height: 3rem;
    }
    h3{
        font-size: 0.3rem;
        text-align: center;
    }
    
}
/deep/ .van-dropdown-item__option{
  display: none;
  color: red;
  font-size: 5rem;
}
</style>