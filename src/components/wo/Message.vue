<template>
    <div class="message">
        <div class="m-top">
            <div class="left"></div>
            <p>设置密码</p>
            <div class="m-right" @click="to_wo()">跳过</div>
        </div>
        <div class="l-main">
            <div class="inp-user">
                <input type="text" placeholder="请输入密码" v-model="phone">
            </div>
            <div class="inp-user">
                <input type="text" placeholder="请确认密码" v-model="code">
            </div>
        </div>
        <div class="l-button">
            <span @click="to_wo()">登录</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"Message",
    data(){
        return{
            phone:"",
            code:""
        }
    },
    methods:{
        to_wo(){
            if(this.phone==this.code){
                this.$axios.post("https://test.365msmk.com/api/app/password",{
                    mobile: sessionStorage.getItem("tit"),    
                    password: this.phone,     
                    sms_code: sessionStorage.getItem("name")        
                },{
                    headers: { Authorization: "Bearer " + this.$store.state.User.userInfo.remember_token }
                }).then((res)=>{
                    sessionStorage.setItem("pass",this.phone);
                    this.$toast('设置密码成功');
                    this.$router.push("/wo");
                })
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .m-top{
        display:flex;
        height:0.9rem;
        align-items: center;
        justify-content: space-around;
    }
    .left{
        width:0.6rem;
        height:0.9rem;
    }
    .m-top>p{
        font-size: 0.32rem;
        color:#333;
    }
    .m-right{
        font-size: 0.3rem;
        color:#444;
        
    }
   .l-main{
    width:100%;
    box-sizing: border-box;
    padding:0 1rem;
    margin-top: 1rem;
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