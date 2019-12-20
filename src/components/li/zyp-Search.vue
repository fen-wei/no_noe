<template>
  <div class="app">
      <header>
      <i class="fa fa-chevron-left" aria-hidden="true" @click="tz"></i> 
      <input type="text" placeholder="请输入内容">
      <span>取消</span>
    </header>
    
    <div class="con">
        <ul class="list">
            <h3><span>历史搜索</span><span><i class="fa fa-trash-o" aria-hidden="true"></i></span></h3>
        </ul>
    </div>
  </div>
</template>
   
   

<script>
export default {
    name:"Search",
    methods: {
        tz(){
            this.$router.go(-1)
        }
    }

}
</script>

<style lang="scss" scoped>
   header{
       display: flex;
       padding: 0 0.3rem;
       justify-content: space-between;
       height: 0.94rem;
       font-size: 0.4rem;
       line-height: 0.94rem;
       
       border-bottom: 1px solid #eaeaea;
       i{
           line-height: 0.9rem;
           color: #ccc;
           margin-left: 0.2rem;

       }
       input{
           display: block;
           width: 4.85rem;
           height: 0.6rem;
           padding-left: 0.55rem;
        //    margin-bottom: 0.1rem;
           border-radius: 0.35rem;
           border: none;
           font-size: 0.3rem;
           margin-top: 0.15rem;
           background: #e4e7ed;

       }
       span{
           color: #d2d2d1;
           font-size: 0.26rem;
       }
   }
   .list{
       padding: 0.3rem;
       line-height: 0.6rem;
       h3{
        //    line-height: 0.3rem;
           font-size: 0.30rem;
           display: flex;
           justify-content: space-between;
           font-weight: none;
           margin: 0;
           padding: 0;
        //    font-size: 0.28rem;
       }
       i{
           color: #d2d2d1;
           font-size: 0.34rem;
       }
   }
</style>