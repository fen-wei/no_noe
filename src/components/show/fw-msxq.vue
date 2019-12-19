<template>
    <div class="big">
        <div class="con">
            <div class="xq"> 
                <div>
                    <i class="fa fa-angle-left"></i>
                    <h3>讲师详情</h3>
                </div>
            </div>
            <div class="head">
                <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
                <div>
                    <p>
                        <b>杨花花</b>
                        <span>M11</span>
                    </p>
                    <p>
                        <span>女</span>
                        <span>8年教龄</span>
                    </p>
                </div>
                <button>关注</button>
            </div>
            <div class="cot">
                <van-tabs v-model="activeName">
                    <van-tab title="标签 1" name="a" class="aa">
                        <p>这个家伙是个逗比,建设大街拉萨登记卡胜利大街萨克登记卡时间放大后即可是你擦健康大输出低技能课发多次济南市大成系技能</p>
                    </van-tab>
                    <van-tab title="标签 2" name="b" class="aa">
                        <p>内容 2</p>
                    </van-tab>
                    <van-tab title="标签 3" name="c" class="aa">
                        <p>内容 3</p>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <button class="but" @click="tiao()">立即预约</button>
    </div>
</template>
<script>
export default {
    name:"msxq",
    data() {
        return {
            activeName: 'a'
        }
    },
    methods:{
        tiao(){
            this.$router.push({
                path:"/yu"
            })
        }
    }
}
</script>
<style scoped lang="scss">
    html,body,.big{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .big{
        width: 100%;
        height: 100%;
        background: #f1f1f1;
    }
    .xq{
        width: 100%;
        height: 2rem;
        background: linear-gradient(180deg,#63b7fe,#4e7de3);
        div{
            width: 7.5rem;
            height: 0.87rem;
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
                font-size: 0.3rem;
                color: #fff;
            }
        }
    }
    .head{
        width: 7.1rem;
        height: 1.82rem;
        background: #fff;
        // position: absolute;
        // top:0.87rem;
        // left: 0.2rem;
        margin-top: -1rem;
        margin-left: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        img{
            width: 0.8rem;
            height: 0.8rem;
        }
        div{
            width: 4.22rem;
            height: 1.2rem;
            p:nth-of-type(1){
                margin-top: 0.2rem;
                b{
                    font-size: 0.3rem;
                }
                span{
                    color: red;
                }
            }
            p:nth-of-type(2){
                margin-top: 0.1rem;
                span{
                    color: #999;
                }
            }
        }
        button{
            width: 1.23rem;
            height: 0.56rem;
            border-radius: 0.25rem;
            border: none;
            color: #eb6100;
            background: #ebeefe;
        }
    }
    .cot{
        width: 100%;
        height: 0.9rem;
        background: #fff;
        margin-top: 0.2rem;
        .aa{
            width: 100%;
            background: #fff;
            padding-bottom: 0.5rem;
            p{
                padding-top: 0.2rem; 
                padding-left: 0.5rem;
            }
        }
    }
    .but{
        width: 7.5rem;
        height:0.8rem ;
        background: #eb6100;
        color: #fff;
        font-size:0.3rem;
        border: 1px solid #eb6100;
    }
</style>