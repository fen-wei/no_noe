<template>
    <div class="box">
        <div class="con">
            ddfdff
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/components/footer";
export default {
    name:"show",
    components: {Footer}
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