<template>
      <div class="box">
        <header><i class="fa fa-chevron-left" aria-hidden="true" @click="tz"></i> </header>
        <div class="con">
            <img src="/static/img/bg3.jpg" class="bg3" alt="">
             <div class="login">
            <ul>
                <li>
                      <label><img src="/static/img/login2.jpg"></label>
                    <div>
                      
                        <input type="text" placeholder="输入手机号">
                        <button>获取验证码</button>
                    </div>
                </li>
                <li>
                      <label><img src="/static/img/login1.jpg"></label>
                    <div>
                      
                        <input type="text" placeholder="输入验证码">
                    
                    </div>
                </li>
                <li><button></button></li>
            </ul>
        </div>
        </div>
       
    </div>
</template>

<script>
export default {
   name:"Login",
      methods: {
        tz(){
            this.$router.go(-1) 
        }
    }
}
</script>
<style scoped lang="scss" scoped>
    html,body,.box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .con{
        flex:1;
    }
    header{
        height: 0.8rem;
        font-size: 0.3rem;
        line-height: 0.8rem;
        padding-left: 0.3rem;
    }
    .bg3{
        width: 7.5rem;
        height: 3.5rem;
    }

    ul{
        margin-top: 0.17rem;
        padding: 0.17rem 0.67rem;
        li{
            padding-left: 0.3rem;
            width: 5.85rem;
            display: flex;
            justify-content: space-between;
            height: 0.7rem;;
            padding-bottom:0.7rem ;
            // line-height: 0.7rem;
        }
        label{
            padding-top: 0.13rem;           
             img{
        width: 0.25rem;
        height: 0.4rem;
        }
        }
        
        div{
            width: 5rem;
            height: 0.7rem;
           
            
            justify-content: space-between;
            height: 0.66rem;
             border-bottom: 1px solid black;
            input{
                // width: 3.8rem;
                // margin-left: 0.6rem;
                height: 95%;
                border: none;
                // height: 0.68rem;
               
                
            }
            ::-webkit-input-placeholder{
                color: #ccc;
            }
            button{
                width: 1.65rem;
                height: 0.5rem;
                margin-left: 0.65rem;
                // margin-bottom: 0.2rem;
                background: #eb6100;
                color: white;
                text-align: center;
                font-size: 0.24rem;
                border: none;
                
            }
        }
    }
</style>