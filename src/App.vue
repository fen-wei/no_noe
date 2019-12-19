<template>
  <div class="app">
    <div class="con">
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,.app{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        
    }
    .app{
      box-sizing: border-box;
      
    }
    .con{
        flex:1;
        overflow: scroll;
    }
    .app{
         box-sizing: border-box;
    }
</style>
