<template>
  <div class="detail">
      <header>
         <div>
        <van-icon name="arrow-left" @click="i()"/>
         </div>
          <div>
           课程详情
          </div>
          <div>
            <van-icon name="ellipsis" />
          </div>
      </header>
      <div class="content">
          <div class="content-one" v-for="(item,key) in arr" :key="key">
                <div class="content-one-o">
                    <p>{{item.title}}</p>
                </div>
                <div class="content-one-t">{{item.price}}</div>
                <div class="content-one-th">共1课时 | 2人已经报名</div>
                <div class="content-one-f">开课时间:2019.12.15 17:00-2019.12.15 16:00</div>
          </div>
          <div class="content-two">
              <div class="content-two-o">
                  教学团队 
              </div>
              <div class="content-two-t" v-for="(item,key) in arr" :key="key">
                 
                   <div class="content-two-t-y">
                      <img :src="'/static/img/'+item.img2" alt="">
                      <p>{{item.t2}}</p>
                  </div>
                   
              </div>
          </div>

          <div class="qwy-kecheng">课程介绍</div>

          <div class="content-four">
               <div  class="content-four-o">课程大纲</div>
               <div class="content-four-t" v-for="(item,key) in str" :key="key">
                   <div class="content-four-t-y">
                       <button class="quanquan-qwy">回放</button>
                       <p>{{item.top}}</p></div>
                   <div  class="content-four-t-e"><p>{{item.teacher}}</p><p>{{item.up}}</p></div>
               </div>
          </div>
          <div class="ms">
              <p class="qwy-iui">课程评论</p>
              <img class="qwy-ops" src="http://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
          </div>
      </div>
      <div class="content-foo">
                <button class="qwy-so" @click="but()">立即报名</button>
          </div>
 </div>
</template>

<script>
// import { Indicator } from 'mint-ui';om
import axios from "axios"
export default {
name:"keDetail",
  components: {},
  props: {},
  data() {
    return {
        arr:[],
        str:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    //   coruse(){
    //         this.$router.push({path:'/Course'})
    //   },
      add(){
        var id= this.$route.query.id;
          axios.get('/static/course.json').then(response=>{
              var str=response.data;
              Object.keys(str).map(item=>{
                //   console.log(item)
                if(item==id){
                    this.arr=str[item]
                    this.str=str[item][0].data
                }
              })
              console.log(this.str)
          })
      },
      i(){
          this.$router.push({
              path:"/ke"
          })
      },
      but(){
          this.$router.push({
              path:"/kex"
          })
      }
  },
  created() {
    //   this.coruse()
      this.add()
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.ms{
     width: 100%;
        height: auto;
        background: white;
        padding: 0.1rem 0.3rem;
        margin-top: .3rem; 
        box-sizing: border-box;
    >.qwy-iui{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size:0.3rem; 
    }
    >.qwy-ops{
        
         margin-left: 0.5rem; 
    }
}
html,body,.detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.qwy-so{
    width: 7.5rem;
    height: 1rem;
    background: #ea7a2f;
    border:none;
    font-size: 0.3rem;
    color:#fff;
}
header{
    width: 100%;
    height: .9rem;
    display: flex;
    // justify-content: center;
    justify-content: space-between;
    align-items: center;
       font-size: 0.35rem; 
       padding: 0 0.2rem;
       box-sizing: border-box;
}
.quanquan-qwy{
       border: 0.01rem solid #ea7a2f;
                   font-size: 0.17rem;
color: #fff;
                   background: #ea7a2f;
}
.qwy-kecheng{
    width: 100%;
    height: 1.2rem;
    padding: 0.1rem 0.3rem;
    font-size: .3rem;
    margin-top: .3rem; 
    background: #fff; 
    box-sizing: border-box;
}
.content{
    width: 100%;
    flex: 1;
    height:10rem;
    overflow: scroll;
    // position: absolute;
    // top: .6rem;
    // left: 0;
    background:#ededed;
    .content-foo{
        width: 100%;
        height: 4rem;
        margin-top: .2rem;
        img{
            width: 100%;
            height: 4rem;
        }
    }
    .content-one{
        width: 100%;
        height: 2.8rem;
        background: white;
        padding: 0.2rem 0.32rem;
        box-sizing: border-box;
        margin-top: 0.01rem; 
        .content-one-o{
            
           >p{
               font-size: 0.32rem; 
           }
            img{
                width: .02rem;
                height: .18rem;
                // float: right;
                margin-right: .2rem;
            }
        }
        >.content-one-t{
          
            
             color: orange;
             margin-top: 0.2rem; 
        }
        >.content-one-th{
             color: grey;
             font-size: 0.30rem; 
             margin-top: 0.24rem; 
        }
        .content-one-f{
            color: grey;
             font-size: 0.30rem; 
             margin-top: 0.24rem; 
        }
        >div{
            margin-top: 0.01rem; 
        }
    }
    .content-two{
        width: 100%;
        height: 2.6rem;
        background:white;
        margin-top: .3rem;
        padding: 0.1rem 0.3rem;
        box-sizing: border-box;
        .content-two-o{
              font-size: 0.3rem; 
              margin-top: 0.2rem; 
        }
        .content-two-t{
            width: 100%;
            height: 1.4rem;
            // background: red;
            display: flex;
            margin-top: .2rem;
             margin-right: -0.6rem; 
        
            .content-two-t-y{
                width: 25%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
               
                img{
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 50%;
                    // text-align: center;
                }
                p{
                    margin-top: 0.1rem; 
                }
            }
        }
    }
    .content-three{
        width: 100%;
        height: .82rem;
        background: white;
        margin-top: .15rem;
        .content-three-o{
            width: 50%;
            height: .3rem;
            // background: red;
            line-height: .3rem;
            margin-left: .15rem;
            font-size: .17rem;
            font-weight: bold;
        }
        .content-three-t{
            width: 50%;
            height: .3rem;
            // background: springgreen;
            line-height: .3rem;
            margin-top: .07rem;
            font-size: .17rem;
            // font-weight:bold;
            margin-left: .25rem;
        }
    }
    .content-four{
        width: 100%;
        height: auto;
        background: white;
        padding: 0.1rem 0.3rem;
        margin-top: .3rem; 
        box-sizing: border-box;
        .content-four-o{
          
            font-size: .3rem;
         
            padding-top: .1rem;
            box-sizing: border-box;
        }
        .content-four-t{
            width: 100%;
            height: .8rem;
            // background: red;
            // display: flex;
            margin-top: .2rem;
            padding-left: .4rem;
            box-sizing: border-box;
            .content-four-t-y{
                  display: flex;
                  align-items: center;
                  >p{
                      margin-left: 0.2rem; 
                  }
                
            }
            .content-four-t-e{
                width: 80%;
                height: 50%;
                // background: yellow;
                line-height: .25rem;
                display: flex;
                p{
                    color: grey;
                     padding-left: .3rem;
                     margin-top: 0.1rem; 
                }
                p:nth-of-type(2){
                    padding-left: .4rem;
                }
            }
        }
    }
}
</style>