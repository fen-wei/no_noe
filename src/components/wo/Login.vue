<template>
    <div class="l-box">
        <div class="l-top">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="">
        </div>
            
        <div class="l-main">
            <div class="inp-user">
                <input type="text" v-model="tit" placeholder="请输入手机号" >
                <p @click="getYan">获取验证码</p>
            </div>
            <div class="inp-user">
                <input type="text" v-model="name" placeholder="请输入短信验证码">
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
    data(){
        return{
            tit:"",
            name:""
        }
    },
    methods: {
       login(){
           let telstr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
           let passReg = /^\d{6}$/;
           if(!(telstr.test(this.tit))&&!(passReg.test(this.name))){
               this.$toast('登录失败');
           }else{
               this.$toast('登录成功');
               this.$store.state.mobel = this.tit;
                this.$axios.post("https://test.365msmk.com/api/app/login",{
                    mobile: this.tit,
                    sms_code: this.name,
                    type:2
                }).then((res)=>{
                    if(res.data.code==200){
                        console.log(res.data.data.is_new)
                        sessionStorage.setItem("tit",this.tit);
                        sessionStorage.setItem("name",this.name);
                        localStorage.setItem("token",res.data.data.remember_token);
                        if(res.data.data.is_new==1){
                            
                            this.$router.push("/message");
                        }else{
                            this.$router.push("/show");
                        }
                    }else{
                        console.log(res)
                        this.$toast('登录失败');
                    }
                })
           }
       },
       getYan(){
            //正则判断手机号格式
            var telstr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
            //判断输入的值符不符合正则格式 
            if(!(telstr.test(this.tit))){
                // 如果不符合弹出'手机号码格式不正确'
                this.$toast('手机号码格式不正确');
            }else{
                // 如果符合弹出'手机号码格式正确'
                this.$toast('手机号码格式正确');
                // 并进行axios请求接口
                this.$axios.post("https://test.365msmk.com/api/app/smsCode",{
                    mobile: this.tit,
                    sms_type: "login"
                }).then((res)=>{
                    this.$toast('发送验证码成功');
                })
            }
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
    color:#000;
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