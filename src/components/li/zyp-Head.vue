<template>
  <header>
      <i class="fa fa-chevron-left" aria-hidden="true" @click="tz"></i> 
      <span>{{this.$route.query.title}}</span>
      <router-link to="/zyp-search"><i class="fa fa-search" aria-hidden="true"></i> </router-link>
  </header>
</template>

<script>
export default {
    name:"Head",
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
           color: black;
       }
   }
</style>