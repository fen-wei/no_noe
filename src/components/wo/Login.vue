<template>
    <div class="l-box">
        <div class="l-top">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="">
        </div>
            
        <div class="l-main">
            <div class="inp-user">
                <input type="text" placeholder="请输入手机号">
                <p>获取验证码</p>
            </div>
            <div class="inp-user">
                <input type="text" placeholder="请输入短信验证码">
            </div>
            <div class="inp-con">
                <span>*未注册的手机号将自动注册</span>
                <span>使用密码登录</span>
            </div>
        </div>
        <div class="l-button">
            <span @click="login()">登录</span>
        </div>
       
    </div>
</template>

<script>
export default {
    name:"Login",
    methods: {
       login(){
           this.$router.push("/wo")
       }
    }
}
</script>
<style scoped lang="scss">
.l-box{
    width:100%;
    height:100%;
}
.l-top{
    width:100%;
}
.l-top>img{
    width:4.72rem;
    height: 1.04rem;
    display:block;
    margin: 1.3rem auto;
}
.l-main{
    width:100%;
    box-sizing: border-box;
    padding:0 1rem;
}
.inp-user{
    width:100%;
    height:1rem;
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
}
.inp-user>input{
    border:none;
    font-size: 0.32rem;
    color:#ccc;
}
.inp-user>p{
    font-size: 0.28rem;
    color:#eb6100;
    line-height: 1rem;
}
.inp-con{
    height:1rem;
    display: flex;
    justify-content: space-between;
}
.inp-con>span{
    font-size: 0.26rem;
    color:#ccc;
    line-height: 1rem;
}
.inp-con>span:nth-child(2){
    font-size: 0.26rem;
    color:#888;
}
.l-button{
    width:6.1rem;
    height:0.78rem;
    margin:1rem auto;
    background: url(/static/img/bg.png);
    background-size: 100%;
}
.l-button>span{
    font-size: 0.26rem;
    color:#fff;
    display:block;
    text-align: center;
    line-height: 0.78rem;
}

</style>