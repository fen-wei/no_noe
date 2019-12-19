<template>
  <div class="app">
      <header>
      <i class="fa fa-chevron-left" aria-hidden="true" @click="tz"></i> 
      <input type="text">
      <span>取消</span>
    </header>
    <div class="con">
        <ul class="list">
            <h3><span>历史记录</span><span><i class="fa fa-trash-o" aria-hidden="true"></i></span></h3>
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
       justify-content: space-between;
       height: 0.9rem;
       font-size: 0.4rem;
       line-height: 0.9rem;
       padding: 0 0.3rem;
       i{
           line-height: 0.9rem;
       }
       input{
           display: block;
           width: 5.1rem;
           height: 0.64rem;
           padding-left: 0.3rem;
           border-radius: 0.35rem;
           font-size: 0.3rem;
           margin-top: 0.15rem;
           background: #e4e7ed;
       }
       span{
           color: #ccc;
       }
   }
   .list{
       padding: 0.3rem;
       h3{
           font-size: 0.35rem;
           display: flex;
           justify-content: space-between;
       }
   }
</style>