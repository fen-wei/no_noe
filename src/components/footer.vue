<template>
    <footer>
       
        <ul>                                          
              <router-link v-for="(v,i) in list" :to="v.src" tag="li" :key="i"  >
                <span>
                    <img :src="v.img">
                </span>
                <p :style="v.zt?'color:black':'color:rgb(235, 97, 0)'">{{v.title}}</p>
            </router-link> 
        </ul>
    </footer>
</template>
<script>
export default {
    name:"foot",
    data(){
        return{
            show: false,
            list:[
               {title:"首页",src:"/show",img:"/static/img/shouye.png",zt:true,img2:"/static/img/shouye02.png"},
               {title:"课程",src:"/ke",img:"/static/img/kechengpng.png",zt:true,img2:"/static/img/kecheng02.png"},
               {title:"约课记录",src:"/yue",img:"/static/img/yueke.png",zt:true,img2:"/static/img/yueke02.png"},
               {title:"练习",src:"/li",img:"/static/img/lianxi.png",zt:true,img2:"/static/img/lianxi02.png"},
               {title:"我的",src:"/wo",img:"/static/img/wode.png",zt:true,img2:"/static/img/lianxi02.png"}
            ]
        }
    },
    mounted () {
        console.log(this.$route)
        this.list.forEach(data=>{
           if(this.$route.path==data.src){
               console.log(data.img="/static/img"+data.src+"02.png")
               data.img=data.img2
               data.zt=false
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
    }
    footer>ul{
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
    }
    footer>ul>li{
        width: 20%;
        text-align: center;
    }
    footer>ul>li>span{
        width: 0.5rem;
        height: 0.5rem;
    }
    footer>ul>li>span>img{
        height: 0.40rem;
    }
    footer>ul>li>p{
        font-size: 0.12rem;       
    }
    footer>ul .router-link-active>p{
        color:rgb(235, 97, 0);
    }
</style>