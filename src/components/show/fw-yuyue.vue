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
            <h3 class="h3"><p>选择时间（北京时间）</p></h3>
            <div class="nav">
                <ul>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>


                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                    <li>
                        <span>
                            周一
                        </span>
                        <p>12/16</p>
                    </li>
                </ul>
            </div>
            <div >

            </div>
        </div>
        <button class="but" @click="tiao()">立即预约</button>
    </div>
</template>
<script>
export default {
    name:"yu",
    
    methods:{
        tiao(){

        },
        aa(){
            this.$router.push({
                path:"/show"
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
    .cont{
        height: 7.3rem; 
        overflow: scroll;
    }
    .head{
        width: 7.1rem;
        height: 1.82rem;
        background: #fff;
        // position: absolute;
        // top:0.87rem;
        // left: 0.2rem;
        margin-top:-1rem;
        margin-left:0.2rem;
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
    .but{
        width: 7.5rem;
        height:0.8rem ;
        background: #eb6100;
        color: #fff;
        font-size:0.3rem;
        border: 1px solid #eb6100;
    }
    .h3{
        width: 7.5rem;
        height: 0.5rem;
        line-height: 0.5rem;
        // margin-top: 0.3rem;
        // margin-left: 0.2rem;
        box-sizing: border-box;
        padding-left: 0.2rem;
        p{
            height: 0.5rem;
            line-height: 0.5rem;
            border-left: 0.05rem solid red;
            padding-left: 0.2rem;
            font-size: 0.2rem;
        }
    }
    .nav{
        width: 7.1rem;
        height: 1.45rem;
        background: #fff;
        margin: 0 auto;
        overflow-x: scroll;
        ul{
            width: 8rem;
            height: 1.45rem;
            
            white-space: nowrap;
            display: flex;
            
            li{
                width: 2.1rem;
                height: 1.25rem;
                border-bottom: 0.01rem solid #ccc;
                text-align: center;
                span{
                    font-size: 0.3rem;
                    display: inline-block;
                    margin-top: 0.2rem;
                }
                p{
                    font-size: 0.2rem;
                    margin-top: 0.1rem;
                }
            }

            li:nth-of-type(1),li:nth-of-type(2),li:nth-of-type(3){
                width: 2.1rem;
                height: 1.25rem;
                border-bottom: 0.01rem solid #ccc;
                text-align: center;
                color: #999;
                span{
                    font-size: 0.3rem;
                    display: inline-block;
                    margin-top: 0.2rem;
                }
                p{
                    font-size: 0.2rem;
                    margin-top: 0.1rem;
                }
            }
        }
        
    }
</style>