<template>
  <div class="bos">
    <header>
      <van-icon name="arrow-left" @click="aa()"/>
      <p>确认订单</p>
    </header>
    <div class="cont">
      <div class="nav">
        <p>
          <b>沈老师课堂（陈同学）</b>
          <span>100.00</span>
        </p>
        <h3>12月14日 17：00~12月14日 22：00</h3>
        <b>授课老师：绳华桥</b>
      </div>
      <div class="ms">
        <van-coupon-cell   @click="showList = true" />
      </div>
       <div>
      <div class="q-ol">
        <div class="q-ols">
          商品金额
          <div class="q-olss">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"/>
            <div>100.00</div>
          </div>
        </div>
     <div class="q-ols">
          优惠卷金额
          <div class="q-olss">
            
            <div>0</div>
          </div>
        </div>
        <div class="q-ols">
          合计
          <div class="q-olss">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"/>
            <div>100.00</div>
          </div>
        </div>
      </div>

    </div>
    </div>
    <footer>
        <p>实付价格<img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"/>100.00</p>
        <button class="add()">提交</button>
    </footer>
  </div>
</template>
<script>
export default {
  name: "kex",
  methods:{
      aa(){
          this.$router.push({
              path:"/keDetail"
          })
      },
      add(){
          Dialog.alert({
            title: '标题',
            message: 'sdsd'
            }).then(() => {
            // on close
        });
      }
  }
};
</script>
<style scoped lang="scss">
footer{
    width: 7.5rem;
    height: 1rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >p{
        margin-left: 0.3rem;
        font-size: 0.3rem;
        img{
            width: 0.24rem;
            height: 0.24rem;
        }
    }
    button{
        width: 3.2rem;
        height: 1rem;
        background: orangered;
        border: none;
        color: #fff;
        font-size: 0.4rem;
    }
}
.ms {
  margin-top: 0.3rem;
}
html,
body,
.bos {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.cont {
  flex: 1;
  background: #f1f1f1;
}
header {
  width: 7.5rem;
  height: 0.9rem;
  display: flex;
  align-items: center;
  font-size: 0.3rem;
  p {
    margin-left: 2.9rem;
  }
}
.nav {
  width: 7rem;
  height: 2.04rem;
  background: #fff;
  margin: 0 auto;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  > p {
    display: flex;
    height: 0.5rem;
    line-height: 0.5rem;
    b {
      margin-left: 0.3rem;
      margin-top: 0.2rem;
      font-weight: 100;
    }
    span {
      margin-left: 0.3rem;
      margin-top: 0.2rem;
    }
  }
  h3 {
    margin-left: 0.3rem;
    margin-top: 0.2rem;
    font-weight: 100;
    color: #999;
  }
  > b {
    margin-left: 0.3rem;
    margin-top: 0.2rem;
    font-weight: 100;
    color: #ccc;
  }
}
.q-ol{
    width: 100%;
     height: 1.8rem;
     background: #fff;
     margin-top: 0.3rem; 
     padding: 0.3rem;
     font-size: 0.2rem; 
     box-sizing: border-box;
     color: grey;
     >.q-ols{
         display: flex;
         justify-content: space-between;
         margin-top: 0.1rem; 
         >.q-olss{
             display: flex;
             justify-content: center;
             align-items: center;
             >img{
                 width: 0.24rem;
                 height: 0.24rem;
             }
             >div{
                 margin-left: 0.1rem; 
             }
         }
     }
}
</style>