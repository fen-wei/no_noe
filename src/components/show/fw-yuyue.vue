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
                    <li v-for="(item,key) in list" @click="add(key)">
                        <span>{{item.name}}</span>
                        <p>{{item.date}}</p>
                    </li>
                </ul>
                
            </div>
            <div class="nav1" v-if="this.flog">
                <ul>
                    <li v-for="(item,key) in arr">
                        <span>{{item.date1}}</span>
                        <p>{{item.tit}}</p>
                    </li>
                </ul>
            </div>
            
        </div>
        <button class="but" @click="tiao()">立即预约</button>
        <van-overlay :show="show" >
            <div class="wrapper" @click.stop @click="show = false">
                <div class="block" >
                    <h3>预约确认</h3>
                    <p><span>预约老师：杨花花</span><span>价格：180.00</span></p>
                    <p><span>预约时间：2019 12.20 （周五）21:00</span></p>
                    <button @click="que()">确认</button>
                </div>
            </div>
        </van-overlay>
    </div>
</template>
<script>
export default {
    name:"yu",
    data(){
        return{
            show: false,
            list:[
                {id:1,name:"周一",date:"12/16"},
                {id:2,name:"周二",date:"12/17"},
                {id:3,name:"周三",date:"12/18"},
                {id:4,name:"周四",date:"12/19"},
                {id:5,name:"周五",date:"12/20"},
                {id:6,name:"周六",date:"12/21"},
                {id:7,name:"周日",date:"12/22"},
                {id:8,name:"周一",date:"12/23"}
            ],
            color: "yellow",
            flog:false,
            arr:[
                {id:1,date1:"20:00",tit:"可预约"},
                {id:2,date1:"20:30",tit:"可预约"},
                {id:3,date1:"21:00",tit:"可预约"},
                {id:4,date1:"21:30",tit:"可预约"},
                {id:5,date1:"22:00",tit:"可预约"},
                {id:6,date1:"22:30",tit:"可预约"},
                {id:7,date1:"23:00",tit:"可预约"},
                {id:8,date1:"23:30",tit:"可预约"}
            ]
        }
    },
    methods:{
        tiao(){
            this.show=!this.show
        },
        aa(){
            this.$router.push({
                path:"/ms"
            });
        },
        que(){
            alert("1")
        },
        add(key){
           
            if(this.list.id==this.arr.id){
                this.flog =true;
            }else{
                this.flog = false
            }
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
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 4rem;
        height: 2rem;
        background-color: #fff;
        h3{
            width: 4rem;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.2rem;
            text-align: center;
        }
        p{
            text-align: center;
            width: 4rem;
            height: 0.3rem;
            line-height: 0.3rem;
            font-size: 0.16rem;
            color: #999;
            span{
                display: inline-block;
                margin-left: 0.1rem;
            }
        }
        button{
            width: 4rem;
            height: 0.5rem;
            margin-top:0.1rem;
            background: #eb6100;
            border:none;
            color: #fff;
            font-size: 0.14rem;
        }
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
    .cont{
        flex:1;
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
                font-size: 0.14rem;
                span{
                    color: #999;
                }
            }
        }
        button{
            width: 1.23rem;
            height: 0.56rem;
            border-radius: 0.25rem;
            font-size: 0.14rem;
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
            li:hover{
                color: #eb6100;
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
    .nav1{
        width: 7.1rem;
        height: 2.56rem;
        background: #fff;
        margin: 0 auto;
        margin-top: 0.2rem;
        ul{
            width: 8rem;
            height: 2.56rem;
            display: flex;
            flex-wrap: wrap;
            li{
                width: 1.75rem;
                height: 1.28rem;
                text-align: center;
                span{
                    font-size: 0.2rem;
                    display: inline-block;
                    margin-top: 0.2rem;
                }
                p{
                    font-size: 0.3rem;
                    color:#eb6100;
                    margin-top: 0.1rem;
                }
            }
        }
        
    }
</style>