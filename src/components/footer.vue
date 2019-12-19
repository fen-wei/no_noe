<template>
    <footer>
        <ul>
            <router-link to="/show" tag="li">
                <span>
                    <img src="/static/img/shouye.png" alt="" v-show="!this.show">
                    <img src="/static/img/shouye02.png" alt="" v-show="this.show">
                </span>
                <p>首页</p>
            </router-link> 
            <router-link to="/ke" tag="li">
                <span>
                    <img src="/static/img/kechengpng.png" alt="" v-show="!this.show">
                    <img src="/static/img/kecheng02.png" alt="" v-show="this.show">
                </span>
                <p>课程</p>
            </router-link> 
            <router-link to="/yue" tag="li">
                <span>
                    <img src="/static/img/yueke.png" alt="" v-show="!this.show">
                    <img src="/static/img/yueke02.png" alt="" v-show="this.show">
                </span>
                <p>约课记录</p>
            </router-link> 
            <router-link to="/li" tag="li">
                <span>
                    <img src="/static/img/lianxi.png" alt="" v-show="!this.show">
                    <img src="/static/img/lianxi02.png" alt="" v-show="this.show">
                </span>
                <p>练习</p>
            </router-link> 
            <router-link to="/wo" tag="li" >
                <span>
                    <img src="/static/img/wode.png" alt="" v-show="!this.show">
                    <img src="/static/img/lianxi02.png" alt="" v-show="this.show">
                </span>
                <p>我的</p>
            </router-link> 
        </ul>
    </footer>
</template>
<script>
export default {
    name:"fot",
    data(){
        return{
            show: false
        }
    },
    methods:{
        add(){
            console.log("11")
            this.show = !this.show;
        }
    }
}
</script>
<style scoped lang="scss">
    footer{
        width: 100%;
        height: 1rem;
        border-top: 0.01rem solid #ccc;
        ul{
            width: 100%;
            height: 1rem;
            display: flex;
            align-items: center;
            li{
                width: 20%;
                text-align: center;
                span{
                    width: 0.5rem;
                    height: 0.5rem;
                    img{
                        width: 0.5rem;
                        height: 0.5rem;
                    }
                }
                p{
                    font-size: 0.12rem;
                }
            }
        }
    }
</style>