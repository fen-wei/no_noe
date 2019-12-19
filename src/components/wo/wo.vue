<template>
    <div class="box">
        <header><i class="fa fa-chevron-left" aria-hidden="true" @click="tz"></i> </header>
        <div class="con">
          
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer";
export default {
    name:"wo",
    components: {Footer},
 
}
</script>
<style scoped lang="scss">
    html,body,.box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .con{
        flex:1;
    }
</style>