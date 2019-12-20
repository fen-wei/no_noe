<template>
    <div class="box">
        <Header>
          <span>特色课</span>
          </Header>
           <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item v-model="value1" :options="option1" />
     <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
</van-dropdown-menu>
      <div class="con">
         
            
   <div class="quanbu-qwy">
     
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
                    <div class="qwy-i">
                       <div class="qwy-cop">{{item.title}}</div>
                    <div class="content-two-o-time"><van-icon name="clock-o" /><span>{{item.time}}</span><span>|{{item.hour}}</span></div>
                    <div class="content-two-o-img">
                        <div class="content-two-o-img-y">
                          <img :src="'/static/img/'+item.img1" alt="">
                          <p>{{item.teacher1}}</p>
                        </div>
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
      </div> 
      <Footer></Footer>
  </div>
      
</template>
<script>
import Footer from "@/components/footer";
import axios from "axios";
import Kec from "./kec"
export default {

    
    name:"ke",
    components: {Footer,Kec},
    data(){
        return{
            arr:[],
             flag:false,
               flags:false,
                flagss:false,
value1: 0,
      value2: 'a',
      value3: 'a',
      option1: [
        { text: '分类', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      option3: [
        { text: '筛选', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
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
    .qwy-cop{
      color: #0a243f;
      font-size: 0.32rem; 
      margin-top: 0.2rem; 
    }
    header{
        width: 100%;
        height: .86rem;
        text-align: center;
        line-height: .86rem;
        background: white;
        font-size: .18rem;
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
        background: #f0f2f5;
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
      .sort-content{
        margin-top: 0.8rem; 
        width: 100%;
        height: 100%;
        background: white;
        .sort-content-i{
            width: 100%;
            height: 1rem;
            border-bottom:1px solid grey; 
            text-align: center;
            line-height:1rem;
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
    background: white;
    margin-top:  0.80rem;
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
    height: .80rem;
    background:white;
    border-bottom: 1px solid #f0f2f5;
    position: fixed;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
      height: 2.8rem;
      background: white;
      border-radius: .15rem;
      margin-top: .28rem;
      padding: 0.25rem 0.44rem;
      .qwy-i{
        height: 1.8rem;
      }
        .content-two-o-time{
          display: flex;
          align-items: center;
          font-size: 0.24rem;
          margin-top: 0.2rem; 
          span{
            font-size: .14rem;
            padding-left: .1rem;
          }
        }
        .content-two-o-img{
            width: 100%;
            margin-top: .3rem;
            display: flex;
            .content-two-o-img-y{
              display: flex;
              align-items: center;
                img{
                  width: .52rem;
                  height: .52rem;
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
            height: 0.88rem;
            margin-top: .15rem;
            // background: red;
            display: flex;
            border-top: 1px solid #f0f2f5;
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
  .quanbu-qwy{
    padding: 0 0.28rem
  }
</style>