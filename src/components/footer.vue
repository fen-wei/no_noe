<template>
    <footer>
        <ul>
            <router-link tag="li" v-for="(item,key) in list" :to="item.src" :key="key" >
                <span>
                    <img :src="item.img1" alt="">
                </span>
                <p>{{item.title}}</p>
            </router-link>
        </ul>
    </footer>
</template>
<script>
export default {
    name:"footer",
    data(){
        return{
            list:[
                {title:"首页",img1:"/static/img/shouye.png",img2:"/static/img/shouye02.png",src:"/show"},
                {title:"课程",img1:"/static/img/kechengpng.png",img2:"/static/img/kecheng02.png",src:"/ke"},
                {title:"约课记录",img1:"/static/img/yueke.png",img2:"/static/img/yueke02.png",src:"/yue"},
                {title:"练习",img1:"/static/img/lianxi.png",img2:"/static/img/star.png",src:"/li"},
                {title:"我的",img1:"/static/img/wode.png",img2:"/static/img/lianxi02.png",src:"/wo"}
            ]
        }
    },
    mounted(){
    //    console.log(this.$route.path)
      this.list.forEach((v)=>{    //v指的是list数组里的每一项
          if(this.$route.path==v.src){
              v.img1=v.img2
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