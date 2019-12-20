<template>
    <footer>
        <!-- <ul>
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
             -->
        <ul>
              <router-link v-for="(v,i) in list" :to="v.src" tag="li" :key="i"  >
                <span>
                    <img :src="v.img">
                    <!-- <img :src="v.img2" alt="" > -->
                    <!-- <img src="/static/img/lianxi02.png" alt="" v-show="this.show"> -->
                </span>
                <p>{{v.title}}</p>
            </router-link> 
        </ul>
    </footer>
</template>
<script>
export default {
    name:"fot",
    data(){
        return{
            show: false,
            list:[
               {title:"首页",src:"/show",img:"/static/img/shouye.png",zt:true,img2:"/static/img/shouye02.png"},
               {title:"课程",src:"/ke",img:"/static/img/kechengpng.png",zt:true,img2:"/static/img/kecheng02.png"},
               {title:"约课记录",src:"/yue",img:"/static/img/yueke.png",zt:true,img2:"/static/img/yueke02.png"},
               {title:"我的",src:"/li",img:"/static/img/lianxi.png",zt:true,img2:"/static/img/lianxi02.png"},
               {title:"我的",src:"/wo",img:"/static/img/wode.png",zt:true,img2:"/static/img/lianxi02.png"}
            ]
        }
    },
    mounted () {
        console.log(this.$route)
        this.list.forEach(data=>{
           if(this.$route.path==data.src){
               console.log(data.img="/static/img"+data.src+"02.png")
            //    data.img=data.img="/static/img"+data.src+"02.png"
               data.img=data.img2
           }
        })
       
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
                       
                        height: 0.40rem;
                    }
                }
                p{
                    font-size: 0.12rem;
                }
            }
        }
    }
</style>