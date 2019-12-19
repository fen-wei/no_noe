<template>
  <div class="detail">
      <header>
          <div style="margin-left:-.35rem;">
          <!-- <router-link tag="div" to="/Course" style="margin-left:-.35rem;" > -->
              <img src="/static/img/back.png" alt="">
          <!-- </router-link> -->
          </div>
              <p>课程详情</p>
          <div style="margin-right:-.35rem;">
              <img src="/static/img/share.png" alt="">
          </div>
          
      </header>
      <div class="content">
          <div class="content-one" v-for="(item,key) in arr" :key="key">
                <div class="content-one-o">
                    <p>{{item.title}}</p>
                    <img src="/static/img/sc.png" alt="">
                </div>
                <div class="content-one-t">{{item.price}}</div>
                <div class="content-one-th"><span>{{item.hour}}</span><span>|{{item.sign}}</span></div>
                <div class="content-one-f">开课时间:<span>{{item.time}}</span></div>
          </div>
          <div class="content-two">
              <div class="content-two-o">
                  教学团队 
              </div>
              <div class="content-two-t" v-for="(item,key) in arr" :key="key">
                  <div class="content-two-t-y">
                      <img :src="'/static/img/'+item.img1" alt="">
                      <p>{{item.t1}}</p>
                  </div>
                   <div class="content-two-t-y">
                      <img :src="'/static/img/'+item.img2" alt="">
                      <p>{{item.t2}}</p>
                  </div>
                   <div class="content-two-t-y">
                      <img :src="'/static/img/'+item.img3" alt="">
                      <p>{{item.t2}}</p>
                  </div>
              </div>
          </div>

          <div class="content-three">
              <div  class="content-three-o">课程介绍</div>
              <div class="content-three-t">电饭锅电饭锅</div>
          </div>

          <div class="content-four">
               <div  class="content-four-o">课程大纲</div>
               <div class="content-four-t" v-for="(item,key) in str" :key="key">
                   <div class="content-four-t-y"><p>{{item.les}}</p><p>{{item.top}}</p></div>
                   <div  class="content-four-t-e"><p>{{item.teacher}}</p><p>{{item.up}}</p></div>
               </div>
          </div>

          <div class="content-foo">
              <img src="/static/img/1.png" alt="">
          </div>
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
header{
    width: 100%;
    height: .6rem;
    // background: seagreen;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid grey;
        // position: fixed;
        // top: 0;
        // left: 0;
        // z-index: 100;
    div{
        width: .2rem;
        height: 100%;
        // background: skyblue;
        display: flex;
        align-items: center;
        justify-content: space-around;
        img{
            width: 70%;
            height: 50%;
        }
    }
    p{
        color:#3c3b3b;
    }
}
.content{
    width: 100%;
    height:12.5rem;
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
        height: 1.83rem;
        background: white;
        // position: absolute;
        .content-one-o{
            width: 100%;
            height: 15%;
            // background: springgreen;
            // margin-top: .1rem;
            display: flex;
            justify-content: space-between;
             box-sizing: border-box;
            p{
                font-weight: bold;
            }
            img{
                width: .02rem;
                height: .18rem;
                // float: right;
                margin-right: .2rem;
            }
        }
        .content-one-t{
            width: 100%;
            height: 20%;
            // background: blue;
             box-sizing: border-box;
             color: orange;
             font-weight: bold;
        }
        .content-one-th{
            width: 100%;
            height:20%;
            // background: darkorange;
             box-sizing: border-box;
             color: grey;
             font-size: .15rem;
        }
        .content-one-f{
            width: 100%;
            height: 20%;
            // background: darkseagreen;
            box-sizing: border-box;
            color: grey;
             font-size: .15rem;
        }
        div{
            margin-top: .1rem;
            padding-left: .2rem;
            // box-sizing: border-box;
        }
    }
    .content-two{
        width: 100%;
        height: 2rem;
        background:white;
        margin-top: .15rem;
        .content-two-o{
            width: 100%;
            height: .3rem;
            // background: darkseagreen;
            padding-left: .2rem;
            box-sizing: border-box;
            line-height: .3rem;
            font-size: .18rem;
            font-weight: bold;
        }
        .content-two-t{
            width: 100%;
            height: 1.4rem;
            // background: red;
            display: flex;
            margin-top: .2rem;
            // justify-content: center;
            .content-two-t-y{
                width: 25%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img{
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    // text-align: center;
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
        margin-top: .15rem;
        .content-four-o{
            width: 50%;
            height: .5rem;
            line-height: .5rem;
            font-size: .17rem;
            font-weight: bold;
            margin-left: .2rem;
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
                width: 80%;
                height: 50%;
                display: flex;
                // background: springgreen;
                line-height: .25rem;
                p:nth-of-type(2){
                    color: grey;
                    padding-left: .2rem;
                }
                P:nth-of-type(1){
                    width: .5rem;
                    height: 100%;
                    text-align: center;
                    background: orange;
                    color: white;
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
                }
                p:nth-of-type(2){
                    padding-left: .2rem;
                }
            }
        }
    }
}
</style>