<template>
    <div class="box">
        <div class="header">
            <router-link to="/yue"><van-icon name="arrow-left" size="0.46rem" /></router-link>
            <span>一对一辅导</span>
            <van-icon name="search" size="0.46rem"/>
        </div>
        <section>
            <div class="oto">
                <div :class="active==1?'active':''"  @click="change(1)">
                    选择上课时间
                    <i class="el-icon-caret-bottom" v-if="active!=1"></i>
                    <i class="el-icon-caret-top" v-if="active==1"></i>
                </div>
                <div :class="active==2?'active':''"  @click="change(2)">
                    选择老师条件
                    <i class="el-icon-caret-bottom" v-if="active!=2"></i>
                    <i class="el-icon-caret-top" v-if="active==2"></i>
                </div>
            </div>
            <div class="time" v-show="active==1">
                <div class="time-date">
                    <p class="time-block">日期</p>
                    <van-row type="flex" justify="space-around">
                        <van-col v-for="(item,index) in week" :key="index">
                            <span class="time-week">{{item}}</span>
                        </van-col>
                    </van-row>
                    <div class="time-day">
                        <p @click.stop="selectDay(item)" v-for="(item,index) in day_list" :key="index">
                            <font
                                :class="selectTime.day == item.day ? 'active': isToday == item.day ? 'today': item.disable == 0 ? 'disable':''"
                            >
                                {{item.day}}
                                <span v-if="item.day == isToday" class="time-today">今天</span>
                            </font>
                        </p>
                    </div>
                </div>
                <div class="time-sd">
                    <p class="time-block">时段</p>
                    <div class="ts-ipt">
                        <p>
                            <input placeholder="开始时间" disabled="disabled">
                            <van-icon name="clock-o" />
                        </p>
                        -
                        <p>
                            <input placeholder="开始时间" disabled="disabled">
                            <van-icon name="clock-o" />
                        </p>
                    </div>
                </div>
            </div>
            <div class="teacher" v-show="active==2">
                <div class="tea-cate">
                    <p>老师类型</p>
                    <div class="tc-items">
                        <span></span>
                    </div>
                </div>
                <div class="tea-cate">
                    <p>只看</p>
                    <van-checkbox-group v-model="ready">
                        <van-checkbox name="1" shape="square" ckecked-color="#EB6100">已关注
                        </van-checkbox>
                        <van-checkbox name="2" shape="square" ckecked-color="#EB6100">上过课的
                        </van-checkbox>
                    </van-checkbox-group>
                </div>
                <div class="tea-cate">
                    <p>性别</p>
                    <div class="tc-items">
                        <span
                            :class="teachSearch.sex === item.sex ? 'active':''"
                            v-for="item in sexs"
                            :key="item.sex"
                            @click="teachSearch.sex = item.sex"
                            >{{item.name}}</span>
                    </div>
                </div>
                <div class="tea-cate">
                    <p>年级</p>
                    <div class="tc-items">
                        <span></span>
                    </div>
                </div>
                <div class="tea-cate">
                    <p>学科</p>
                    <div class="tc-items">
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="foot" v-show="active!=0">
                <van-button @click="change()">重置</van-button>
                <van-button @click="change()">确定</van-button>
            </div>
            <div class="tea_list">
                <div class="tea_item" v-for="(item, index) in teachLeve" :key="index">
                    <router-link to="/yue-plan">
                        <img :src="item.avatar" alt="">
                        <div>
                            <p><span>{{item.name}}</span></p>
                            <p>{{item.sex == 1 ? '女':'男'}} {{item.tea_age}}年教龄</p>
                        </div>
                        <div class="yuyue">预约</div>
                    </router-link>
                </div>
                <div class="van-list_finished">
                    没有更多了
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            show: false,
            active: 0,
            week: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            day_list: [],
            isToday: 0,
            studyTime: {
                startTime: "",
                endTime: "",
                init: function() {
                this.startTime = "";
                this.endTime = "";
                }
            },
            selectTime: {
                year: "",
                month: "",
                day: ""
            },
            teachSearch: {
                level_id: "",
                attr_val_id: {},
                is_collect: 0,
                is_attended: 0,
                sex: "",
                init: function() {
                this.sex = "";
                this.attr_val_id = {};
                this.level_id = "";
                }
            },
            timeShow: false,
            currentTime: "",
            teachLeve: [],
            attrList: [],
            sexs: [{ name: "男", sex: 0 }, { name: "女", sex: 1 }],
            ready: [],
            otoCourse: [],
            params: {},
            keywords: "",
            user_arrt_id: "",
            start: false,
            

        }
    },
    created(){
        this.login=true;
    },
    mounted(){
         axios.get("/static/teacher.json").then((res)=>{
             window.console.log(res.data.data)
             this.teachLeve=res.data.data
             window.console.log(this.teachLeve)
         })
    },
    methods: {
        change(num) {
            if(num==this.active){
                this.active=0;
            }else{
                this.active=num;
            }
        },
    },
    computed: {
        
    },
    watch: {
        ready: {
            handler(val) {
                if (val.includes("2")) {
                this.teachSearch.is_attended = 1;
                } else {
                this.teachSearch.is_attended = 0;
                }
                if (val.includes("1")) {
                this.teachSearch.is_collect = 1;
                } else {
                this.teachSearch.is_collect = 0;
                }
            },
            deep: true
        },
        $route(val) {
        if (val.name == "Oto") {
            if (this.$store.state.keywords) {
            this.keywords = this.$store.state.keywords;
            this.studyTime.init();
            this.selectTime = {};
            this.ready = [];
            this.teachSearch.init();
            this.params = {
                teacher_name: this.keywords
            };
            this.$store.commit("OTO_KEY");
            } else {
            if (this.params.teacher_name) {
                this.params.teacher_name = "";
                this.keywords = "";
            }
            }
            this.$refs.list.reset();
        }
    },
}
}
</script>

<style scoped lang="scss">
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F0F2F5;
    .header{
        width: 100%;
        height: 0.88rem;
        border-bottom: 0.01rem solid #ebebeb;
        display: flex;
        justify-content: space-between;
        line-height: 0.9rem;
        background: white;
        a{
            display: block;
            text-decoration: none;
            color:#595959;
            height: 0.9rem;
            i{
                margin: auto 0.18rem;
                line-height:0.9rem;
            }
        }
        i{
            margin: auto 0.18rem;
        }
        span{
            font-size: 0.36rem;
            color: #595959;
        }
    }
    section{
        
    overflow: scroll;
    }
    .oto{
        width: 100%;
        height: 0.83rem;
        display: flex;
        flex-direction: row;
        background: white;
        div{
            width: 50%;
            height:100%;
            font-size: 0.3rem;
            text-align: center;
            line-height: 0.9rem;
            color: #B7B7B7;
            
        }
        .active{
            color: #EB6100;
        }
    }
    .time{
        flex: 1;
        background: #F0F2F5;
        .time-date{
            width: 94%;
            background: white;
            margin: 0.2rem auto;
            height: 3.7rem;
            border-radius: 0.1rem;
            .time-block{
                font-size:0.25rem;
                font-weight: 400;
                color: #595959;
                padding: 0.23rem 0.2rem 0.3rem;
            }
            .time-day{
                display: flex;
                flex-wrap: wrap;
                padding: 0.2rem;
                p{
                    width: 14.28%;
                    height: 1.6rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font{
                        width: 0.64rem;
                        height:0.64rem;
                        border-radius: 50%;
                        font-size: 0.38rem;
                        font-weight: 500;
                        color: rgba(89,89,89,1);
                        text-align: center;
                        line-height: 0.64rem;
                        position: relative;
                        span{
                            width: 0.6rem;
                            position: absolute;
                            bottom: -0.6rem;
                            left: 0.04rem;
                            font-size: 0.24rem;
                            font-weight: 400;
                            color: rgba(183,183,183,1)
                        }
                    }
                    font.active{
                        background: #EB6100;
                        color: #fff;
                    }
                    font.today{
                        background: #ebeefe;
                        color: #EB6100;
                    }
                    font.disable{
                        color: #b7b7b7;
                    }
                }
            }
        }
        .time-sd{
            width: 94%;
            background: white;
            margin: 0.2rem auto;
            height: 1.85rem;
            .time-block{
                font-size:0.25rem;
                font-weight: 400;
                color: #595959;
                padding: 0.23rem 0.2rem 0.14rem;
            }
            .ts-ipt{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                margin: 0 0.1rem ;
                height: 0.7rem;
                p{
                    height: 100%;
                    width: 3rem;
                    border: 0.01rem solid #ccd;
                    border-radius: 0.07rem;
                    line-height: 0.72rem;
                    input{
                        height: 0.5rem;
                        border: none;
                        width: 2.3rem;
                        font-size: 0.24rem;
                        text-indent: 0.2rem;
                    }
                    i{
                        margin-left: 0.25rem;
                    }
                }
            }
        }
    }
    .teacher{
        flex: 1;
        padding: 0 0.3rem 0.8rem;
        background: #fff;
        border-top: 0.01rem solid #f1f1f1;
        .tea-cate{
            padding-bottom:0.2rem;
            border-bottom:0.01rem solid #f1f1f1;
            p{
                padding: 0.32rem 0 0.2rem;
                font-size: 0.24rem;
                font-weight: 400;
                color: rgba(89,89,89,1);
            }
            .tc-items{
                span{
                    margin: 0 0.46rem 0.14rem 0;
                    display: inline-block;
                    width:1.38rem;
                    height:0.66rem;
                    background: rgba(245,245,245,1);
                    border-radius: 0.06rem;
                    font-size: 0.26rem;
                    font-weight: 400;
                    color:#646464;
                    text-align: center;
                    line-height: 0.66rem;
                    &:nth-child(4n+0){
                        margin-right: 0;
                    }
                }
                span.active{
                    color: #EB6100;
                    background: #ebeefe;
                }
            }
        }
        .van-checkbox-group{
            display:flex;
            .van-checkbox{
                margin-right: 0.6rem;
            }
        }
    }
    .foot{
        width: 100%;
        height: 0.9rem;
        display: flex;
        flex-direction: row;
        button{
            flex: 1;
            height:100%;
            font-size: 0.34rem;
            border:none;
        }
        &>button:nth-of-type(1){
            color: #EB6100;
        }
        &>button:nth-of-type(2){
            background: #EB6100;
            color:white;
        }
    }
    .tea_list{
        padding: 0 0.2rem;
        .tea_item{
            padding: 0 0.3rem;
            background: #fff;
            border-radius: 0.08rem;
            height: 1.62rem;
            margin-top: 0.21rem;
            a{ 
                display: block;
                height: 100%;
                width:100%;
                display:flex;
                align-items: center;
                img{
                    width: 0.8rem;
                    height: 0.8rem;
                    margin-right: 0.24rem;
                    border-radius: 50%;
                    flex: none;
                }
                div{
                    flex: 1;
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
                .yuyue{
                    flex: none;
                    width:1.4rem;
                    height:0.62rem;
                    line-height: 0.62rem;
                    background: rgba(235,238,254,1);
                    border-radius: 0.31rem;
                    font-size: 0.28rem;
                    font-weight: 400;
                    color: #EB6100;
                    border: none;
                    text-align: center;
                }
            }
            
        }
        .van-list_finished{
            font-size: 0.28rem;
            color: #969799;
            line-height: 0.45rem;
            text-align: center;
            height: 0.45rem;
        }
    }
}
</style>