<template>
  <div class="app">
    <Head></Head>
    <div class="con">
      <van-dropdown-menu active-color="#eb6100">


          
        <van-dropdown-item v-model="value1" :options="option1" >

        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          :click-nav="aaa()"
          :Close="bl()"
        >
          <template slot="content">
            <ul v-if="activeIndex === 0">
              <li></li>
            </ul>
            <ul v-if="activeIndex === 1">
              <li>初中</li>
            </ul>
            <ul v-if="activeIndex === 2">
              <li>化学</li>
            </ul>
          </template>
        </van-tree-select>
         
        </van-dropdown-item>
        <div class="rt">
          <van-dropdown-item v-model="value2"  :options="option2">
              <ul class="zyp-ul">
                     <li v-for="(v,i) in list" @click="ck(v,i)" @blur="bl" :style="v.zt?'color:#eb6100':'color:#000'">
                         {{v.title}}
                     </li>
                  </ul>
          </van-dropdown-item>
           
              </div>
      </van-dropdown-menu>
    <ul class="zyp-bg">
        <li><img src="/static/img/zypgb.jpg" alt=""></li>
       <h3>稍后</h3>
    </ul>
     
    </div>
   
  </div>
</template>

<script>
import Head from "./zyp-Head";
export default {
  name: "zyp-Tj",
  components: {
    Head
  },
  data() {
    return {
      value1: 0,
      value2: 0,
      
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
        { text: "套卷状态 ", value: 0 },
       
      ],
      list:[
          {"title":"全部",zt:true},
         {"title":"已完成",zt:false},
        {"title":"未完成",zt:false}
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
      }
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

.van-dropdown-menu__item {
  height: 0.7rem;
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