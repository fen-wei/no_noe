<template>
    <div>
        <header>
            <i class="fa fa-angle-left" @click="aa()"></i>
            <p>日历</p>
        </header>
        <el-calendar v-model="value">
        </el-calendar>
    </div>
</template>
<script>
export default {
     data() {
      return {
          value: new Date()
      }
    },
    methods:{
        aa(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped lang="scss">
   header{
       width: 7.5rem;
       height: 1rem;
       border-bottom: 0.01rem solid #ccc;
       display: flex;
       align-items: center;
       i{
           font-size: 0.5rem;
           margin-left: 0.3rem;
       }
       p{
           font-size: 0.3rem;
           margin-left: 3rem;
       }
   }
</style>