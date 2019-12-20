<template>
    <div class="z-box">
        <div class="z-top">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="">
        </div>
            
        <div class="z-main">
            <div class="inp-user">
                <input type="text" placeholder="请输入手机号">
            </div>
            <div class="inp-user">
                <input type="text" placeholder="请输入密码">
            </div>
            <div class="inp-con">
                <span>找回密码</span>
                <span @click="register()">注册/验证码登录</span>
            </div>
        </div>
        <div class="z-button">
            <span>登录</span>
        </div>
       
    </div>
</template>

<script>
export default {
   name:"Zhuce",
   methods:{
       register(){
           this.$router.push("/login")
       }
   }
}
</script>
<style scoped lang="scss">
.z-box{
    width:100%;
    height:100%;
}
.z-top{
    width:100%;
}
.z-top>img{
    width:4.72rem;
    height: 1.04rem;
    display:block;
    margin: 1.3rem auto;
}
.z-main{
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
.z-button{
    width:6.1rem;
    height:0.78rem;
    margin:1rem auto;
    background: url(/static/img/bg.png);
    background-size: 100%;
}
.z-button>span{
    font-size: 0.26rem;
    color:#fff;
    display:block;
    text-align: center;
    line-height: 0.78rem;
}

</style>