<template>
    <div class="sex">
        <div class="s-top">
            <div class="s-back">
                <img @click="s_back()" src="/static/img/back.png" alt="">
            </div>
            <h3>修改个人信息</h3>
            <div class="s-right">
                <p>保存</p>
            </div>
        </div>
        <div class="s-sex">
            <ul>
                <li>男</li>
                <li>女</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"Sex",
    data(){
        return {

        }
    },
    methods:{
        s_back(){
            this.$router.push("/person")
        }
    }
}
</script>
<style  lang="scss">
    body,ul,li,div,p,h1,h3,h6{
        margin: 0;
        padding: 0;
        list-style:none;
    }
    .sex{
        width:100%;
        height:100%;
        background: #f0f2f5;
    }
    .s-top{
        height:0.88rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        background: #fff;
    }
    .s-top>h3{
        font-size: 0.36rem;
        color:#595959;
        font-weight: normal;
    }
    .s-back{
        width:0.8rem;
        height:0.88rem;
    }
    .s-back>img{
        display:block;
        margin: auto;
        width:0.2rem;
        height:0.32rem;
        margin-top: 0.24rem;
    }
    .s-right{
        padding: 0 0.2rem;
    }
    .s-right>p{
        font-size: 0.3rem;
        color:#595959;
    }
    .s-sex{
        margin-top: 0.2rem;
        width:100%;
        height:2.3rem;
        background: #fff;
    }
    .s-sex>ul{
        padding: 0.1rem 0.4rem;
    }
    .s-sex>ul>li{
        height:1.15rem;
        font-size: 0.3rem;
        color:#595959;
        line-height: 1.1rem;
        position: relative;
    }
    .s-sex>ul>li:nth-child(2){
        background: url(/static/img/duigou.png) no-repeat 6.2rem 0.44rem;
    }
</style>