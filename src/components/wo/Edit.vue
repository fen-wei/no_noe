<template>
    <div class="edit">
        <div class="e-top">
            <div class="e-back">
                <img @click="e_back()" src="/static/img/back.png" alt="">
            </div>
            <h3>修改个人信息</h3>
            <div class="e-right">
                <p @click="bc">保存</p>
               
            </div>
        </div>
        <div class="e-tellphone">
            <input type="text" v-model="nickname"  >
        </div>
    </div>
</template>
<script>
import http from "../http/http"
export default {
    name:"Edit",
    data(){
        return {
            nickname: this.$store.state.User.userInfoAttr.nickname,
        }
    },
    methods:{
        e_back(){
            this.$router.push("/person")
        },
        async bc(){
            console.log(this.nickname)
            var token = this.$store.state.User.userInfo.remember_token;
            var nic = await http("put","https://test.365msmk.com/api/app/user",{
                nickname:this.nickname
            },token);
            this.$router.push("/person")
        }
    }
}
</script>
<style  lang="scss" scoped>
     body,ul,li,div,p,h1,h3,h6{
        margin: 0;
        padding: 0;
        list-style:none;
    }
    .edit{
        width:100%;
        height:100%;
        background: #f0f2f5;
    }
    .e-top{
        height:0.88rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        background: #fff;
    }
    .e-top>h3{
        font-size: 0.36rem;
        color:#595959;
        font-weight: normal;
    }
    .e-back{
        width:0.8rem;
        height:0.88rem;
    }
    .e-back>img{
        display:block;
        margin: auto;
        width:0.2rem;
        height:0.32rem;
        margin-top: 0.24rem;
    }
    .e-right{
        padding: 0 0.2rem;
    }
    .e-right>p{
        font-size: 0.3rem;
        color:#595959;
    }
    .e-tellphone{
        width:100%;
        height:0.96rem;
        margin-top: 0.2rem;
        background: #fff;
        padding: 0 0.4rem;
        box-sizing: border-box;
    }
    .e-tellphone>input{
        width:100%;
        height:100%;
        border:none;
        font-size: 0.3rem;
        color:#000;
    }
</style>