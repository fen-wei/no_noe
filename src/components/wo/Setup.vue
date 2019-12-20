<template>
    <div class="setup">
      <div class="u-top">
        <div class="u-back">
            <img @click="u_back()" src="/static/img/back.png" alt="">
        </div>
        <h3>设置</h3>
        <div class="u-right">

        </div>
      </div>
      <div class="u-main">
          <div class="u-message">
              <p>设置密码</p>
              <van-icon name="arrow" />
          </div>
          <div class="u-quit">
              <p>退出登录</p>
          </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'Setup',
    methods:{
      u_back(){
        this.$router.push("/wo")
      }
    }
  }
</script>
  
<style>
   body,ul,li,div,p,h1,h3,h6{
        margin: 0;
        padding: 0;
        list-style:none;
    }
    .setup{
        width:100%;
        height:100%;
        background: #f0f2f5;
    }
    .u-top{
        height:0.88rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        background: #fff;
    }
    .u-top>h3{
        font-size: 0.36rem;
        color:#595959;
        font-weight: normal;
    }
    .u-back{
        width:0.8rem;
        height:0.88rem;
    }
    .u-back>img{
        display:block;
        margin: auto;
        width:0.2rem;
        height:0.32rem;
        margin-top: 0.24rem;
    }
    .u-right{
        padding: 0 0.2rem;
    }
    .u-main{
        margin-top: 0.2rem;
        width:100%;
        background: #fff;
        padding: 0.4rem 0.4rem;
        box-sizing: border-box;
    }
    .u-message{
        display:flex;
        justify-content: space-between;
    }
    .u-message>p{
        font-size: 0.3rem;
        color:#595959;
    }
    .van-icon{
        font-size: 0.3rem;
    }
    .u-quit{
        width:100%;
        margin:1.7rem 0 0.4rem 0;
    }
    .u-quit>p{
        width:100%;
        height:0.88rem;
        background: #eb6100;
        border-radius:0.1rem;
        font-size: 0.3rem;
        color:#fff;
        text-align: center;
        line-height: 0.88rem;
    }
    
</style>
  