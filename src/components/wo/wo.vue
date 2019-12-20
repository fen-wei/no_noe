<template>
    <div class="lmn-box">
        <div class="con">
            <div class="lmn-top">
                <div class="lmn-bg">
                    <div class="lmn-tab">
                        <div class="lmn-person">
                            <img @click="person()" src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="">
                            <img @click="person()" src="/static/img/huangguan.png" alt="">  
                            <span @click="person()">135****4519</span>  
                            <p @click="person()"></p>
                            <p>去约课</p>    
                        </div>
                        <div class="lmn-price">
                            <ul>
                                <li>
                                    <h1>0</h1>
                                    <h6>我的特色课</h6>
                                    <p>已购特色课程的学习</p>
                                </li>
                                <li>
                                    <h1>0</h1>
                                    <h6>一对一辅导</h6>
                                    <p>我的一对一老师辅导</p>
                                </li>
                                <li>
                                    <h1>0.00</h1>
                                    <h6>剩余学习币</h6>
                                    <p>查看剩余学习币</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="lmn-share">
                    <div class="lmn-ss">
                        <img src="/static/img/youxiang.png" alt="">
                        <div class="font">
                            <p>邀请好友注册APP，享多重好礼</p>
                            <p>限时特惠，多邀多得</p>
                        </div>
                        <p>></p>
                    </div>
                </div>
                <div class="lmn-main">
                    <ul>
                        <li>
                            <p>课程相关</p>
                            <div class="item-box">
                                <div class="lmn-item">
                                    <img src="/static/img/person.png" alt="">
                                    <p>关注的老师</p>
                                </div>
                                <div class="lmn-item">
                                    <img src="/static/img/star.png" alt="">
                                    <p>我的收藏</p>
                                </div>
                            </div>
                            
                        </li>
                        <li>
                            <p>订单相关</p>
                            <div class="item-box">
                                <div class="lmn-item">
                                    <img src="/static/img/xiangzi.png" alt="">
                                    <p>课程订单</p>
                                </div>
                                <div class="lmn-item">
                                    <img src="/static/img/xiangzi.png" alt="">
                                    <p>会员订单</p>
                                </div>
                                <div class="lmn-item">
                                    <img src="/static/img/xiangzi.png" alt="">
                                    <p>约课订单</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p>我的账户</p>
                            <div class="item-box">
                                <div class="lmn-item">
                                    <img src="/static/img/money.png" alt="">
                                    <p>优惠券</p>
                                </div>
                                <div class="lmn-item">
                                    <img src="/static/img/study.png" alt="">
                                    <p>学习卡</p>
                                </div>
                                <div class="lmn-item">
                                    <img src="/static/img/huiyuan.png" alt="">
                                    <p>会员</p>
                                </div>
                            </div>   
                        </li>
                        <li>
                            <p>自助服务</p>
                            <div class="item-box">
                                <div class="lmn-item">
                                    <img src="/static/img/lingdang.png" alt="">
                                    <p>我的消息</p>
                                </div>
                                <div class="lmn-item">
                                    <img src="/static/img/write.png" alt="">
                                    <p>意见反馈</p>
                                </div>
                                <div class="lmn-item">
                                    <img src="/static/img/kefu.png" alt="">
                                    <p>在线客服</p>
                                </div>
                                <div class="lmn-item">
                                    <img src="/static/img/shezhi.png" alt="">
                                    <p>设置</p>
                                </div>
                            </div>   
                        </li>
                    </ul>
                </div>
            </div>
             </div>
             <Footer></Footer>
              </div>
    <!-- <div class="box">
        <header><i class="fa fa-chevron-left" aria-hidden="true" @click="tz"></i> </header>
        <div class="con">
          
        </div>
        
        
    </div> -->
</template>
<script>
import Footer from "@/components/footer";
export default {
    name:"wo",
    components: {Footer},
    methods:{
        person(){
            this.$router.push("/person")
        }
    }
 
}
</script>
<style lang="scss" scoped>
    body,ul,li,div,p,h6,h1{
        margin: 0;
        padding: 0;
        list-style:none;
    }
    html,body,.lmn-box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .con{
        flex:1;
        overflow-y: scroll;
    }
    .lmn-top{
        width:100%;
    }
    .lmn-bg{
        height:3.7rem;
        background: url(/static/img/user_bg.ab306a5c.png) no-repeat top;
        background-size: 100%;
        padding-top: 1rem;
    }
    .lmn-tab{
        width:6.9rem;
        height:3.46rem;
        background: #fff;
        border-radius:0.1rem;
        margin:0 auto;
        box-shadow: 0 0 0.32rem 0 rgba(0,0,0,.05);
    }
    .lmn-person{
        height:1.73rem;
        padding: 0 0 0 0.4rem;
        position: relative;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    .lmn-person>img{
        width:1.18rem;
        height:1.18rem;
        border-radius:50%;
    }
    .lmn-person>img:nth-child(2){
        width:0.4rem;
        height: 0.4rem;
        position: absolute;
        top:0.3rem;
        left:1.4rem;
    }
    .lmn-person>span{
        font-size: 0.3rem;
    }
    .lmn-person>p:nth-child(4){
        width:0.3rem;
        height:0.31rem;
        background: url(/static/img/xiazai.png) no-repeat ;
        background-size: 100%;
    }
    .lmn-person>p:nth-child(5){
        width:1.11rem;
        height: 0.5rem;
        font-size: 0.28rem;
        color:#fff;
        background: #eb6100;
        text-align: center;
        line-height: 0.5rem;
        border-radius:0.2rem 0 0 0.2rem;
    }
    .lmn-price>ul{
        display:flex;
    }
    .lmn-price>ul>li{
        flex:1;
    }
    .lmn-price h1{
        font-size: 0.64rem;
        font-weight: normal;
        color:#eb6100;
        text-align: center;
        line-height: 0.8rem;
    }
    .lmn-price h6{
        font-size: 0.36rem;
        color:#595959;
        text-align: center;
        font-weight: normal;
        line-height: 0.6rem;
    }
    .lmn-price p{
        font-size: 0.24rem;
        color: #b7b7b7;
        text-align: center;
        line-height: 0.4rem;
    }
    .lmn-share{
        width:100%;
        padding: 0.4rem 0.4rem 0 0.4rem;
        box-sizing: border-box;
    }
    .lmn-ss{
        height:1.1rem;
        background: linear-gradient(-90deg,#f2995a,#eb6100);
        border-radius:0.5rem;
        display:flex;
        align-items: center;
        padding: 0 0.34rem;
        justify-content: space-between;
    }
    .lmn-ss>img{
        width: 0.4rem;
        height: 0.36rem;
    }
    .font{
        height:0.7rem;
        margin-right: 0.2rem;
    }
    .font>p{
        font-size: 0.3rem;
        color:#fff;
    }
    .font>p:nth-child(2){
        font-size: 0.24rem;
    }
    .lmn-ss>p{
        font-size: 0.6rem;
        color:#fff;
    }
    .lmn-main>ul{
        width:100%;
        padding: 0 0.4rem;
        box-sizing: border-box;
    }
    .lmn-main>ul>li{
        padding: 0.5rem 0;
        border-bottom: 1px solid #eee;
    }
    .lmn-main>ul>li>p{
        font-size: 0.38rem;
        color:#333;
    }
    .item-box{
        display:flex;
    }
    .lmn-item{
        display:flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width:25%;
        height:1.6rem;
        text-align: center;
    }
    .lmn-item>img{
        width: 0.5rem;
        height:0.56rem
    }
    .lmn-item>p{
        font-size: 0.28rem;
        color: #666;
        margin-top: 0.26rem;
    }
</style>