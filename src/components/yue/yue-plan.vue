<template>
    <div class="big">
        <div class="cont">
            <div class="xq"> 
                <div>
                    <i class="fa fa-angle-left" @click="aa()"></i>
                    <h3>预约课程</h3>
                </div>
            </div>
            <div class="head">
                <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg" alt="">
                <div>
                    <p><span>TNT--李</span></p>
                    <p>男 10年教龄</p>
                </div>
                <div class="look"><router-link to="/teacher">查看详情</router-link></div>
            </div>
            <div class="title">
              选择时间
              <span> (北京时间) </span>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>


                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                </ul>
            </div>
            <div class="error">
              <div>
                <img src="http://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
                <p>暂无信息</p>
              </div>
              
            </div>
        </div>
        <button class="but" @click="tiao()">立即预约</button>
    </div>
</template>
<script>
export default {
    
    methods:{
        tiao(){

        },
        aa(){
            this.$router.push({
                path:"/show"
            });
        }
    }
}
</script>
<style scoped lang="scss">
    .big{
        width: 100%;
        height: 100%;
        background: #f1f1f1;
        display: flex;
        flex-direction: column;
    }
    .xq{
        width: 100%;
        height: 2rem;
        background: linear-gradient(180deg,#63b7fe,#4e7de3);
        div{
            width: 7.5rem;
            height: 0.8rem;
            display: flex;
            align-items: center;
            i{
                width: 0.7rem;
                text-align: center;
                font-size: 0.5rem;
                color: #fff;
            }
            h3{
                width: 6.3rem;
                text-align: center;
                font-size: 0.36rem;
                font-weight: 400;
                color: #fff;
            }
        }
    }
    .cont{
        height: 7.3rem; 
        overflow: scroll;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .head{
        width: 7.1rem;
        height: 1.6rem;
        background: #fff;
        // position: absolute;
        // top:0.87rem;
        // left: 0.2rem;
        margin-top:-1.15rem;
        margin-left:0.2rem;
        border-radius: 0.08rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        img{
            width: 0.8rem;
            height: 0.8rem;
            margin: 0 0.25rem 0 0.3rem;
            border-radius: 50%;
            flex: none;
        }
        div{
            flex: 1;
            p{
                font-weight: 400;
                &:nth-child(1){
                    padding-bottom: 0.06rem;
                    span{
                        font-size: 0.3rem;
                        color:rgba(89,89,89,1);
                        line-height: 0.42rem;
                        padding-right: 0.1rem;
                    }
                }
                &:nth-child(2){
                    font-size: 0.24rem;
                    color: rgba(183,183,183,1);
                    line-height: 0.34rem;
                }
            }
        }
        .look{
            flex: none;
            width:1.6rem;
            height:0.56rem;
            line-height: 0.56rem;
            background: none;
            border-radius: 0.28rem;
            font-size: 0.28rem;
            font-weight: 400;
            color: #EB6100;
            border: 0.02rem solid  #EB6100;
            text-align: center;
            margin-right: 0.3rem;
            a{
                text-decoration: none;
                display: block;
                width:100%;
                height:100%;
                color: #EB6100;
            }
        }
    }
    .title{
      font-size: 0.3rem;
      font-weight: 400;
      color:rgba(89,89,89,1);
      line-height: 1.05rem;
      position: relative;
      padding-left: 0.5rem;
      height: 1.05rem;
      span{
        font-size: 0.24rem;
      }
      &::after{
        position: absolute;
        content:"";
        left:0.24rem;
        top: 0.37rem;
        width: 0.06rem;
        height: 0.32rem;
        background:#eb6100;
      }
    }
    .but{
        position: fixed;
        display: block;
        bottom: 0;
        width: 100%;
        height:0.85rem ;
        background: #eb6100;
        color: #fff;
        font-size:0.34rem;
        line-height:0.85rem;
        border: 1px solid #ebedf0;
    }
    
    .nav{
        width: 7.1rem;
        height: 1.45rem;
        background: #fff;
        margin: 0 auto;
        overflow-x: scroll;
        ul{
            width: 8rem;
            height: 1.45rem;
            
            white-space: nowrap;
            display: flex;
            
            li{
                width: 2.1rem;
                height: 1.25rem;
                border-bottom: 0.01rem solid #ccc;
                text-align: center;
                span{
                    font-size: 0.3rem;
                    display: inline-block;
                    margin-top: 0.2rem;
                }
                p{
                    font-size: 0.2rem;
                    margin-top: 0.1rem;
                }
            }

            li:nth-of-type(1),li:nth-of-type(2),li:nth-of-type(3){
                width: 2.1rem;
                height: 1.25rem;
                border-bottom: 0.01rem solid #ccc;
                text-align: center;
                color: #999;
                span{
                    font-size: 0.3rem;
                    display: inline-block;
                    margin-top: 0.2rem;
                }
                p{
                    font-size: 0.2rem;
                    margin-top: 0.1rem;
                }
            }
        }
        
    }
    .error{
      flex:1;
      flex-direction: column;
      align-items: center;
      display: flex;
      div{
        flex:1;
        margin-top: 0.4rem;
        img{
          width: 3rem;
          height: 3rem;
        }
        p{
          font-size: 0.3rem;
          color: #8c8c8c;margin-top:0.28rem;text-align:center;
        }
      }
      
    }
</style>