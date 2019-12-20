<template>
  <div class="study">
    <div class="d-top">
        <div class="d-back">
            <img @click="d_back()" src="/static/img/back.png" alt="">
        </div>
        <h3>我的学习</h3>
        <div class="d-right">
            <img @click="to_date()" src="/static/img/date.png" alt="">
        </div>
    </div>
    <div class="d-con">
        <div class="d-tab">
            <van-tabs>
                <van-tab v-for="(item,key) in arr" :title="arr[key]">
                    
                </van-tab>
            </van-tabs>
        </div>
        <div class="d-main">
            <img src="/static/img/yu.png" alt="">
            <p>还没有课程，快去选择课程学习吧</p>
            <div class="d-info" @click="to_ke()">选择课程</div>
        </div>
    </div>
   
  </div>
</template>

<script>
export default {
    name: 'Study',
    data(){
        return {
            arr:["直播课(0)","点播课(0)","音频课(0)","图文课(0)","面授课(0)","会员课(0)"]
        }
    },
    methods:{
        d_back(){
            this.$router.push("/wo")
        },
        to_ke(){
            this.$router.push("/ke")
        },
        to_date(){
            this.$router.push("/rl")
        }
    }
}
</script>

<style>
    body,ul,li,div,p,h1,h3,h6{
        margin: 0;
        padding: 0;
        list-style:none;
    }
    .study{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
    }
    .d-top{
        height:0.88rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        background: #fff;
    }
    .d-top>h3{
        font-size: 0.36rem;
        color:#595959;
        font-weight: normal;
    }
    .d-back{
        width:0.8rem;
        height:0.88rem;
    }
    .d-back>img{
        display:block;
        margin: auto;
        width:0.2rem;
        height:0.32rem;
        margin-top: 0.24rem;
    }
    .d-right{
        padding: 0 0.2rem;
    }
    .d-right>img{
        width:0.3rem;
    }
    .d-con{
        flex:1;
        overflow-y: scroll;
    }
    .d-tab{
        height:0.9rem;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .van-tabs{
        width:100%;
    }
    .van-tabs__wrap--scrollable{
        height:0.9rem !important;
    }
    .van-ellipsis{
       font-size: 0.3rem;
        line-height: 0.9rem;
    } 
    .van-tab--active{
        color: #eb6100;
    }
    .d-main{
        width:100%;
        height:100%;
        margin-top: 2rem;
    }
    .d-main>img{
        display:block;
        margin:0 auto;
        width:3rem;
        height:3rem;
    }
    .d-main>p{
        font-size: 0.3rem;
        color: #8c8c8c;
        text-align: center;
        margin-top: 0.4rem;
    }
    .d-info{
        margin:1rem auto;
        width:1.7rem;
        height:0.56rem;
        background: #eb6100;
        border-radius: 0.1rem;
        font-size: 0.24rem;
        color: #fff;
        text-align: center;
        line-height: 0.56rem;
    }
</style>
