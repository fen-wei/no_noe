<template>
    <div class="box">
         <header>练习</header>
        <div class="con">
            
           <nav>
               <ul>
                   <li><div><img src="/static/img/img1.jpg" alt=""></div><p>考点专练</p></li>
                   <li><router-link to="/li/tj?title=套卷练习"><div><img src="/static/img/img2.jpg" alt=""></div><p>套卷练习</p></router-link></li>
                   <li><div><img src="/static/img/img3.jpg" alt=""></div><p>仿真模考</p></li>
                   <li><div><img src="/static/img/img4.jpg" alt=""></div><p>错题练习</p></li>
                   <li><div><img src="/static/img/img5.jpg" alt=""></div><p>测评记录</p></li>
                   <li><div><img src="/static/img/img6.jpg" alt=""></div><p>习题收藏</p></li>
                   
                   
               </ul>
           </nav>

           <div class="list"> 
               
                   <h1>近期考试</h1>
                   <p><span>默认排序</span><span>时间</span></p>
                   <ul>
                       <li><img src="/static/img/img00.jpg" class="img00" alt=""></li>
                   </ul>
                   <h3>暂无模考安排,敬请期待</h3>
                 
                 
                      
           </div>
        </div>
        
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer";
export default {
    name:"lt",
    components: {Footer}
}
</script>
<style scoped lang="scss" scoped >
   a{
       color: black;
   }
    html,body,.box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
       
    }
    .con{
        flex:1;
        background: #f0f2f5;
      
    }
    
    h1,h3{
        margin: 0;
        padding: 0;
        color: #8c8c8c;
        font-weight: 100;
    }
    
    header{
        height: 0.9rem;
        text-align: center;
        font-size: 0.35rem;
        line-height: 0.9rem;
    }
    
    nav{
        padding: 0.2rem;
        ul{
           
            background: rgba($color: #fff, $alpha: 1);
            display: flex;
            flex-wrap: wrap;
             border-radius:6%;
            li{
                width: 25%;
                text-align: center;
                margin-top: 0.25rem;
               
                div{
                    margin: 0 auto;
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 50%;
                    background: white;
                    display: flex;
                   display:-webkit-box;
                   -webkit-box-pack:center;
                   -webkit-box-align:center;
                   box-shadow: 0 0 3.2vw 0 rgba(10,0,24,.07);
                    img{
                  
                        // display: block;
                        width: 0.35rem;
                        height: 0.35rem;
                        // margin: 0 auto;
                        // line-height: 0.35rem;
                       
                     
                     
                        
                    }
                    
                }
                p{
                    height: 0.5rem;
                    line-height: 0.5rem;
                    margin: 0.1rem 0;
                    font-size: 0.2rem;
                }

            }
        }
    }
    .list{
        padding: 0.3rem;
        // height:3.14rem;
        //  overflow: scroll;
        background:rgba($color: #fff, $alpha: 1);
        h1{
                font-size: 0.3rem ;
                color: #8c8c8c;
        }
        p{
            margin-top: 0.15rem;
            display: flex;
            justify-content: space-between;
            span{
                font-size: 0.2rem;
                color: #8899b2;
            }
            span:nth-of-type(1){
                color: #eb6100;
                
            }
            span:nth-of-type(2){
                margin-right: 0.1rem;
            }
        }
        .img00{
            display: block;
            margin: 0.3rem auto;
            width:2rem ;
            height: 2.5rem;
        }
        h3{
            font-size: 0.25rem;
         
            text-align: center;
        }
    }
</style>