<template>
    <div class="box">
        <div class="con">
            <div class="header">约课记录</div>
            <van-tabs title-active-color="#EB6100" size="0.28rem" v-model="active" :line-width="16" @change="change">
                <van-tab title="待上课"></van-tab>
                <van-tab title="已上课"></van-tab>
                <van-tab title="已取消"></van-tab>
            </van-tabs>
            <div class="rp-empty" v-show="!show">
                <img src="http://wap.365msmk.com/img/no-message.8d3ca5af.png" />
                <p>{{emptyTip}}</p>
                <router-link to="/oto"><van-button v-show="(active == 0||active == 1)">立即约课</van-button></router-link>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer";
export default {
    name:"yue",
    components: {Footer},
    data() {
        return {
            active: 0,
            login:false,
            prams:{
                type:1
            },
            list:[]
        }
    },
    created() {
        this.login = true;
    },
    methods: {
        change() {
            if(!this.login){
                return;
            }
            this.show=false;
            this.params={
                type:this.active+1
            };
        },
    },
    computed:{
        show:{
            get(){
                return this.list.length
            },
            set(){}
        },
        emptyTip(){
            let ret="";
            if(this.login){
                switch(this.active){
                    case 0:
                        ret="还没有待上课记录哦";
                        break;
                    case 1:
                        ret="还没有上课记录哦";
                        break;
                    case 2:
                        ret="还没有取消上课记录哦";
                        break;
                }
            }
            else{
                ret="请登录后查看相关内容"
            }
            return ret;
        }
    }
}
</script>
<style scoped lang="scss">
    html,body,.box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .con{
        background:#F0F2F5;
        flex:1;
        .header{
            width:100%;
            height:0.9rem;
            text-align: center;
            line-height: 0.9rem;
            font-size: 0.36rem;
            color: #595959;
            background: white;
        }
        .van-tab.active{
            color: #EB6100;
        }
        .rp-empty{
            img{
                display:block;
                width:3.58rem;
                height:2.58rem;
                margin:2rem auto 0.2rem;
            }
            p{
                font-size: 0.26rem;
                font-weight: 400;
                color: rgba(183,183,183,1);
                line-height: 0.4rem;
                margin-bottom: 0.5rem;
                text-align: center;
            }
            
            a{
                display: block;
                width: 100%;
                height:100%;
                color: white;
                text-decoration: none;
                button{
                    margin: 0 auto;
                    display: block;
                    width: 1.76rem;
                    height: 0.56rem;
                    font-size: 0.26rem;
                    color: rgba(255,255,255,1);
                    background:#EB6100;
                    border-radius: 0.05rem;
                    line-height: 0.56rem;
                }
            }
        }
    }
</style>