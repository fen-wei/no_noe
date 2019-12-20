<template>
    <div class="big">
        <div class="cont">
            <div class="xq"> 
                <div>
                    <i class="fa fa-angle-left" @click="aa()"></i>
                    <h3>讲师详情</h3>
                </div>
            </div>
            <div class="head">
                <div class="top">
                    <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg" alt="">
                    <div>
                        <p><span>TNT--李</span></p>
                        <p>男 10年教龄</p>
                    </div>
                    <div class="concern">关注</div>
                </div>
                <div class="bottom">
                    <span>幽默风趣</span>
                    <span>分析到位</span>
                    <span>亲和力强</span>
                    <span>讲解专业</span>
                </div>
            </div>
            <div class="conbox">
                <van-tabs v-model="active" line-width="16px" line-height="2px" title-active-color="#ea7e2f">
                    <van-tab title="讲师介绍"></van-tab>
                    <van-tab title="主讲课程"></van-tab>
                    <van-tab title="学员评分"></van-tab>
                </van-tabs>
                <div class="teajie" v-show="active==0">
                    <van-row type="flex" >
                        <van-col span="7" align="center">教学年龄</van-col>
                        <van-col span="18">&nbsp;10年</van-col>
                    </van-row>
                    <van-row type="flex">
                        <van-col span="7" align="center">授课价格</van-col>
                        <van-col span="18">&nbsp;160学习币</van-col>
                    </van-row>
                    <van-row type="flex">
                        <van-col span="7" align="center">老师简介</van-col>
                        <van-col span="16"><p>教学风格善于因材施教，针对不同学生的心理，采用不同的教学方式，以求达到更好的学习境界。从事多年教育工作，拥有丰富的一线经验，持有高级中学教师资格证。对于专业知识苦心孤诣，格物致知，对于学科知识内在联系逻辑有自己独特的见解。培养学生养成习惯，对于复杂的知识娓娓道来，将复杂的知识简单化。将教材的知识生活化，更深入，更直接，更生动，更活泼。</p></van-col>
                    </van-row>
                </div>
            </div>
        </div>
        <button class="but" @click="aa()">立即预约</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    methods:{
         
        aa(){
            this.$router.push({
                path:"/yue-plan"
            });
        }
    }
}
</script>
<style scoped lang="scss">
    .big{
        width: 100%;
        height: 100%;
        background: #f1f1f1;
        display: flex;
        flex-direction: column;
    }
    .xq{
        width: 100%;
        height: 2rem;
        background: linear-gradient(180deg,#63b7fe,#4e7de3);
        div{
            width: 7.5rem;
            height: 0.8rem;
            display: flex;
            align-items: center;
            i{
                width: 0.7rem;
                text-align: center;
                font-size: 0.5rem;
                color: #fff;
            }
            h3{
                width: 6.3rem;
                text-align: center;
                font-size: 0.36rem;
                font-weight: 400;
                color: #fff;
            }
        }
    }
    .cont{
        overflow: scroll;
        flex: 1;
    }
    .head{
        width: 7.1rem;
        height: 2.55rem;
        background: #fff;
        margin-top:-1.15rem;
        margin-left:0.2rem;
        margin-bottom: 0.2rem;
        border-radius: 0.08rem;
        display: flex;
        flex-direction: column;
        .top{
            display: flex;
            align-items: center;
            height: 1.6rem;
            width: 100%;
            img{
                width: 0.8rem;
                height: 0.8rem;
                margin: 0.15rem 0.25rem 0 0.3rem;
                border-radius: 50%;
                flex: none;
            }
            div{
                flex: 1;
                margin-top: 0.15rem;
                p{
                    font-weight: 400;
                    &:nth-child(1){
                        padding-bottom: 0.06rem;
                        span{
                            font-size: 0.3rem;
                            color:rgba(89,89,89,1);
                            line-height: 0.42rem;
                            padding-right: 0.1rem;
                        }
                    }
                    &:nth-child(2){
                        font-size: 0.24rem;
                        color: rgba(183,183,183,1);
                        line-height: 0.34rem;
                    }
                }
            }
            .concern{
                flex: none;
                width:1.3rem;
                height:0.56rem;
                line-height: 0.56rem;
                background: none;
                border-radius: 0.28rem;
                font-size: 0.28rem;
                font-weight: 400;
                color: #eb6100;
                background: #ebeefe;
                text-align: center;
                margin-right: 0.3rem;
            }
        }
        .bottom{
            display: flex;
            align-items: center;
            height: 1.6rem;
            span{
                display: inline-block;
                width: 1.45rem;
                height: 0.5rem;
                line-height: 0.5rem;
                background: #ffe4d3;
                border-radius: 0.32rem;
                font-size: 0.24rem;
                font-weight: 400;
                color: #ea7e2f;
                text-align: center;
                margin-right: 0.18rem;
                &:nth-child(1){
                    margin-left: 0.3rem;
                }
            }
        }
    }
    .conbox{
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 0.3rem;
        background: white;
        margin-bottom: 1.2rem;
        .teajie{
            flex: 1;
            display: flex;
            flex-direction: column;
            font-size: 0.27rem;
            color: #9c9c9c;
            margin-bottom: 0.2rem;
            &>div{
                height: 1rem;
                line-height: 1.15rem;
            }
            &>div:nth-child(3){
                flex: 1;
                div:nth-child(1){
                    line-height: 1.15rem;
                }
                div:nth-child(2){
                    line-height: 0.65rem;
                    padding-top: 0.25rem;
                }
            }
        }
    }
    .but{
        position: fixed;
        display: block;
        bottom: 0;
        width: 100%;
        height:0.85rem ;
        background: #eb6100;
        color: #fff;
        font-size:0.34rem;
        line-height:0.85rem;
        border: 1px solid #ebedf0;
    }
</style>