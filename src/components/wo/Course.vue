<template>
    <div class="course">
        <div class="c-top">
            <div class="c-back">
                <img @click="c_back()" src="/static/img/back.png" alt="">
            </div>
            <h3>修改个人信息</h3>
            <div class="c-right">
                <p @click="bc()">保存</p>
            </div>
        </div>
        <div class="c-our">
            <ul>
                <li v-for="(item,index) in kecheng" :key="index" >
                    <input type="checkbox" @click="dian(item)"  >
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import http from "../http/http"
export default {
    name:"course",
    data(){
        return {
            kecheng:this.$store.state.User.attr[1].value,
            show:false,
            attr:[]
        }
    },

    methods:{
        c_back(){
            this.$router.push("/person")
        },
        dian(item){
            var obj = {"attr_id":2,"attr_val_id":item.id};
            console.log(obj)
            this.attr.push(obj);
            console.log(this.attr)
        },
        async bc(){
            var token = this.$store.state.User.userInfo.remember_token;
            var nic = await http("put","https://test.365msmk.com/api/app/user",{
                user_attr:JSON.stringify(this.attr)
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
    .course{
        width:100%;
        height:100%;
        background: #f0f2f5;
        display:flex;
        flex-direction: column;
    }
    .c-top{
        height:0.88rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        background: #fff;
    }
    .c-top>h3{
        font-size: 0.36rem;
        color:#595959;
        font-weight: normal;
    }
    .c-back{
        width:0.8rem;
        height:0.88rem;
    }
    .c-back>img{
        display:block;
        margin: auto;
        width:0.2rem;
        height:0.32rem;
        margin-top: 0.24rem;
    }
    .c-right{
        padding: 0 0.2rem;
    }
    .c-right>p{
        font-size: 0.3rem;
        color:#595959;
    }    
    .c-our{
        flex:1;
        overflow-y: scroll;
        margin-top: 0.2rem;
        width:100%;
        background: #fff;
    } 
    .c-our>ul{
        padding: 0.1rem 0.4rem;
    }
    .c-our>ul>li{
        height:1.04rem;
        border-bottom: 1px solid #eee;
        display:flex;
        align-items:center;
    }
    .c-our>ul>li>input{
        width:0.4rem;
        height:0.4rem;
        line-height: 1.04rem;
        margin-right: 0.2rem;
    }
    .c-our>ul>li>span{
        font-size: 0.3rem;
        color:#595959;
    }
</style>