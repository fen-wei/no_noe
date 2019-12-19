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
    .con{
        flex:1;
        overflow: scroll;
    }
</style>
