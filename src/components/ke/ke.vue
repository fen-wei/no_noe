<template>
    <div class="box">
        <Header>
          <span>特色课</span>

          </Header>
          
      <div class="con">
         
              <div class="content-one">
                <p @click="cate">分类</p>
                <p @click="sort">排序</p>
                <p @click="select">筛选</p>
              </div>

               <div class="cate" v-show="flag">
                  <div class="cate-one">
                    <div class="cate-one-class">年级</div>
                    <div class="cate-one-class-a">
                        <div class="cate-one-class-a-o">初一</div>
                        <div class="cate-one-class-a-o">初二</div>
                        <div class="cate-one-class-a-o">初三</div>
                        <div class="cate-one-class-a-o">高一</div>
                    </div>
                     <div class="cate-one-class-a">
                        <div class="cate-one-class-a-o">高二</div>
                        <div class="cate-one-class-a-o">高三</div>
                    </div>
                  </div>

                  <div class="cate-one">
                    <div class="cate-one-class">学科</div>
                    <div class="cate-one-class-a">
                        <div class="cate-one-class-a-o">语文</div>
                        <div class="cate-one-class-a-o">数学</div>
                        <div class="cate-one-class-a-o">英语</div>
                        <div class="cate-one-class-a-o">历史</div>
                    </div>
                     <div class="cate-one-class-a">
                        <div class="cate-one-class-a-o">地理</div>
                        <div class="cate-one-class-a-o">物理</div>   
                       <div class="cate-one-class-a-o">化学</div>

                    </div>
                  </div>


               <div class="cate-two">
                    <div class="cate-one-class">等级</div>
                    <div class="cate-one-class-a">
                        <div class="cate-one-class-a-o">高级</div>
                        <div class="cate-one-class-a-o">低级</div>
                        <div class="cate-one-class-a-o">中级</div>
                      
                    </div>
                    
                  </div>

                     <div class="cate-two">
                      <div class="cate-one-class">资深程度</div>
                      <div class="cate-one-class-a">
                          <div class="cate-one-class-a-o">入门</div>
                          <div class="cate-one-class-a-o">一般</div>
                          <div class="cate-one-class-a-o">熟悉</div>
                           <div class="cate-one-class-a-o">老手</div>
                      </div>
                    
                  </div>


                   <div class="cate-btn">
                      <button>重置</button>
                      <button>确定</button>
                   </div>
              </div>

              <div class="sort" v-show="flags"> 
                  <div class="sort-content">
                       <div class="sort-content-i">综合排序</div>
                       <div class="sort-content-i">最新</div>
                      <div class="sort-content-i">最热</div>
                      <div class="sort-content-i">价格从低到高</div>
                      <div class="sort-content-i">价格从高到底</div>
                  </div>
              </div>

              <div  class="select" v-show="flagss">
                  <div class="select-content">
                      <div class="select-content-o">
                        <div>全部</div>
                        <div>大班课</div>
                        <div>小班课</div>
                        <div>公开课</div>
                      </div>
                        <div class="select-content-o">
                        <div>点博课</div>
                        <div>面授课</div>
                        <div>音频课</div>
                        <div>系统课</div>
                      </div>
                      <div class="select-content-i">
                        <div>图文课</div>
                        <div>会员课</div>
                      </div>
                  </div>
              </div>
              
                <div>
                   <!-- {{arr}} -->
                </div>
              <div class="content-two">
               
                <div class="content-two-v" :key="key">

               
                 <router-link tag="div" :to="'/keDetail?id='+item.detail" class="content-two-o" v-for="(item,key) in arr" :key="key">  
                     <h1>{{item.title}}</h1>
                    <div class="content-two-o-time"><span>{{item.time}}</span><span>|{{item.hour}}</span></div>
                    <div class="content-two-o-img">
                        <div class="content-two-o-img-y">
                          <img :src="'/static/img/'+item.img1" alt="">
                          <p>{{item.teacher1}}</p>
                        </div>
                        <div class="content-two-o-img-y">
                          <img :src="'/static/img/'+item.img2" alt="">
                          <p>{{item.teacher2}}</p>
                        </div>
                        <div class="content-two-o-img-y">
                          <img :src="'/static/img/'+item.img3" alt="">
                          <p>{{item.teacher3}}</p>
                        </div>
                    </div>

                    <div class="content-two-o-bootom">
                        <p>{{item.sign}}</p>
                        <p>{{item.price}}</p>
                    </div> 
                   </router-link>
                   </div>
                  

                   

              </div>
      </div> 
      <Footer></Footer>
  </div>
      
</template>
<script>
import Footer from "@/components/footer";
import axios from "axios";
export default {
    name:"ke",
    components: {Footer},
    data(){
        return{
            arr:[],
             flag:false,
               flags:false,
                flagss:false,
        }
    },
    mounted() {
         axios.get('/static/course.json').then(res=>{
                // state.arr=res.data.data
                // console.log(state.arr)
                this.arr=res.data.data
                console.log(this.arr)
            }).catch(error=>{
                console.log("报错了"+error)
            })
    },
    methods: {
 cate(){
      this.flag=!this.flag
    },
    sort(){
      this.flags=!this.flags
    },
select(){
      this.flagss=!this.flagss
    },

    },
}
</script>
<style scoped lang="scss">
    html,body,.box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .box{
        background:white;
    }
    header{
        width: 100%;
        height: .83rem;
        text-align: center;
        line-height: .39rem;
        background: white;
        font-size: .18rem;
        font-weight: bold;
        span{
          font-size:18px;
        }
    }
    .con{
        flex:1;
        
    }
    .con{
        width: 100%;
        height: 2rem;
        overflow: scroll;
        background: #ccc;
    }
   .select{
    width: 100%;
    height: 5.4rem;
    position: fixed;
    top: .8rem;
    left: 0;
    background:rgba(0,0,0,0.5);
    z-index:200;
    .select-content{
      width: 100%;
      height: 1.7rem;
      background: white;
      .select-content-o{
        width: 100%;
        height: 30%;
        // background: steelblue;
        display: flex;
        align-items: center;
        justify-content: space-around;
        div{
          width: 20%;
          height: 70%;
          background: #ededed;
          text-align: center;
          line-height: .35rem;
        }
        div:hover{
          color: orange;
          background: #e9ecff;
        }
      }
      .select-content-i{
        width: 100%;
        height: 30%;
        // background: steelblue;
        display: flex;
        align-items: center;
        // justify-content: space-around;
        div{
          width: 20%;
          height: 70%;
          background: #ededed;
          text-align: center;
          line-height: .35rem;
          margin-left: .13rem;
        }
          div:hover{
          color: orange;
          background: #e9ecff;
        }
      }
    }
}
  .sort{
      width: 100%;
      height: 5.4rem;
      position: fixed;
      top: .9rem;
      left: 0;
      background-color:rgba(0,0,0,0.5);
      z-index: 200;
      .sort-content{
        width: 100%;
        height: 5.2rem;
        background: white;
        .sort-content-i{
            width: 100%;
            height: 20%;
            border-bottom:1px solid grey; 
            text-align: center;
            line-height:.5rem;
            color: grey;
        }
        .sort-content-i:hover{
          color: orangered;
          background: #e9ecff;
        }
      }
  }
  .cate{
    width: 100%;
    height: 5.2rem;
    // position:fixed;
    // top:.9rem;
    // left:0;
    background: white;
    z-index: 200;
    .cate-btn{
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: .4rem;
      button{
        width: 37%;
        height: .3rem;
        background: white;
        border: 1px solid #f5f5f5;
      }
      button:hover{
          background:orangered;
          background: #e9ecff;
      }
    }
    .cate-two{
      width: 100%;
      height: 16%;
      border-bottom: 1px solid #f5f5f5;
         .cate-one-class{
        width: 40%;
        height: 20%;
        // background: olivedrab;
        padding-left: .2rem;
        padding-top: .05rem;
        box-sizing: border-box;
        color: grey;
      }
      .cate-one-class-a{
        width: 100%;
        height: 50%;
        // background: fuchsia;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: .10rem;
        // box-sizing: border-box;
        .cate-one-class-a-o{
            width: 19%;
            height: 80%;
            background: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
            color: grey;
        }
        .cate-one-class-a-o:hover{
          background: orangered;
          background: #e9ecff;
        }
      }
    }
    .cate-one{
      width: 100%;
      height: 25%;
      // background: springgreen;
      border-bottom: 1px solid #f5f5f5;
      .cate-one-class{
        width: 40%;
        height: 21%;
        // background: olivedrab;
        padding-left: .2rem;
        padding-top: .05rem;
        box-sizing: border-box;
        color: grey;
      }
      .cate-one-class-a{
        width: 100%;
        height: 30%;
        // background: fuchsia;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .cate-one-class-a-o{
            width: 19%;
            height: 80%;
            background: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
            color: grey;
        }
         .cate-one-class-a-o:hover{
          background: orangered;
          background: #e9ecff;
        }
      }
    }
  }
  .content-one{
    width: 100%;
    height: .66rem;
    background:white;
    border-top: 1px dashed grey;
    border-bottom: 1px dashed grey;
    position: fixed;
    top: .66rem;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // position: fixed;
    // top: .39rem;
    // left: 0;
    z-index: 100;
    p:hover{
      color: orange;
    }
  }
  .content-two{
    width: 100%;
    height: auto;
    // position: absolute;
    // top: .49rem;
    // left: 0;
    display: flex;
    // flex-direction: column;
    align-items: center;
    // justify-content: center;
    //  background:#ededed;
    .content-two-v{
      width: 100%;
      height: 2.65rem;

    }
    .content-two-o{
        margin: 0 auto;
      width: 87%;
      height: 2.65rem;
      // overflow: hidden;
      background: white;
      border-radius: .15rem;
      margin-top: .2rem;
      h1{
        margin-left: .2rem;
        margin-top: .2rem;
        font-weight: bold;
        font-size: .16rem;    
        }
        .content-two-o-time{
          width: 100%;
          margin-left: .1rem;
          margin-top: .15rem;
          span{
            font-size: .14rem;
            padding-left: .1rem;
          }
        }
        .content-two-o-img{
            width: 100%;
            margin-left: .1rem;
            margin-top: .15rem;
            display: flex;
            .content-two-o-img-y{
              display: flex;
              margin-left: .1rem;
              align-items: center;
                img{
                  width: .27rem;
                  height: .27rem;
                  border-radius: 50%;
                }
                p{
                  margin-left: .08rem;
                  font-size: .14rem;
                  color: grey;
                }
            }
        }
        .content-two-o-bootom{
            width: 100%;
            height: .4rem;
            border-radius: .1rem;
            margin-top: .15rem;
            // background: red;
            display: flex;
            border-top: 1px solid grey;
            align-items: center;
            justify-content: space-between;
            p:nth-of-type(1){
              margin-left: .15rem;
              font-size: .15rem;
              color: grey;
            }
            p:nth-of-type(2){
              margin-right: .2rem;
              color: green;
              font-weight: bold;
              font-size: .17rem;
            }
        }
    }
  }
</style>