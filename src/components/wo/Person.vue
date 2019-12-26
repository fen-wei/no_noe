<template>
    <div class="person">
        <div class="p-top">
            <div class="p-back">
                <img @click="back()" src="/static/img/back.png" alt="">
            </div>
            <h3>个人信息</h3>
            <div class="p-right"></div>
        </div>
        <div class="p-message">
            <ul>
                <li> 
                    <span>头像</span>
                    <span>
                        <img :src="img" alt="">
                        <van-icon class="vion" name="arrow" @click="showPopup"/>
                        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                            <ul class="s-thing">
                                <li>拍照</li>
                                <li>从手机相册选择</li>
                                <li><input type="file" ref="upload" @change="select"></li>
                                <li>取消</li>
                            </ul>
                        </van-popup>
                    </span>
                    
                </li>
                <li>
                    <span>昵称</span>
                    <span>
                        <span>{{this.$store.state.User.userInfoAttr.nickname}}</span>   
                        <van-icon name="arrow" @click="showapp1"/>
                    </span>
                </li>
                <li>
                    <span>手机号</span>
                    <span>
                        <span>{{this.$store.state.User.userInfoAttr.mobile}}</span> 
                    </span>
                </li>
                <li>
                    <span>性别</span>
                    <span>
                        <span>{{this.$store.state.User.userInfoAttr.sex==0?"男":"女"}}</span>   
                        <van-icon name="arrow" @click="showapp2"/>
                    </span>
                </li>
                <li>
                    <span>出生日期</span>
                    <span>
                        <span>{{this.$store.state.User.userInfoAttr.birthday}}</span>   
                        <van-icon name="arrow" @click="showPopup1"/>
                        <van-popup v-model="show1" position="bottom" :style="{ height: '30%' }">
                            <van-datetime-picker
                                type="date"
                                @confirm="date"
                                :min-date="minDade"
                                :max-date="maxDade"
                                />
                        </van-popup>
                    </span>
                </li>
                <li>
                    <span>所在城市</span>
                    <span>
                        <span>{{this.$store.state.User.userInfoAttr.province_name}}-{{this.$store.state.User.userInfoAttr.city_name}}-{{this.$store.state.User.userInfoAttr.district_name}}</span>   
                        <van-icon name="arrow" @click="showPopup2"/>
                        <van-popup v-model="show2" position="bottom" :style="{ height: '30%' }">
                            <van-area :area-list="areaList" @change="csc" @confirm="cit"/>
                        </van-popup>
                    </span>
                </li>
                <li>
                    <span>课程</span>
                    <span>
                        <span v-for="item in this.$store.state.User.Attr">{{item.attr_value+" "}}</span>   
                        <van-icon name="arrow" @click="showapp3"/>
                    </span>
                </li>
                <li>
                    <span>年级</span>
                    <span>
                        <span></span>   
                        <van-icon name="arrow" @click="showPopup3"/>
                        <van-popup v-model="show3" position="bottom" :style="{ height: '30%' }">
                                <van-picker
                                show-toolbar
                                :columns="columns"
                                @cancel="onCancel"
                                @confirm="onConfirm"
                              />
                        </van-popup>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import http from "../http/http"
export default {
    name:"person",
    data() {
        return {
            columns:[],
            minDade:new Date(1970,0,1),
            maxDade:new Date(2020,1,1),
            show: false,
            show1:false,
            show2:false,
            show3:false,
            areaList:{
                province_list: {},
                city_list: {},
                county_list: {}
            },
            img:""
        }
    },
    mounted(){

        this.getUserInfoAndAttr()
    },
    methods: {
        select(val){
            console.log(val)
            var file = this.$refs.upload.files[0];
            console.log(file)
            var formdata = new FormData() //创建form对象
            formdata.append("file",file); //通过appen向from对象添加数据，可以通过append继续添加数据
            let config = {
                headers:{'Content-Type':'multipart/form-data;boundary=----WebKitFormBoundarypXP5Pa4AAVRml',Authorization: "Bearer "+ this.$store.state.User.userInfo.remember_token }
            }//添加请求头
            let _this = this;
            this.$axios.post("https://www.365msmk.com/api/app/public/img",formdata,config).then((res)=>{
                if(res.data.code == 200){
                    this.$axios.put("https://test.365msmk.com/api/app/user",{
                        avatar:res.data.data.path
                    },{
                        headers:{Authorization: "Bearer "+this.$store.state.User.userInfo.remember_token}
                    }).then((res)=>{
                        console.log(res.data.data.avatar);
                        this.img = res.data.data.avatar;
                    })
                }
            })

        },
        async getUserInfoAndAttr(){
            var token = this.$store.state.User.userInfo.remember_token;
            var userInfoAttr = await http("get","https://test.365msmk.com/api/app/userInfo?",null,token);
            this.$store.commit("setUserInfoAttr",userInfoAttr.data.data);
            this.$store.commit("getAttr",userInfoAttr.data.data.attr);
            var attr = await http("get","https://test.365msmk.com/api/app/module/attribute/1?",null,token);
            this.$store.commit("setAttr",attr.data.data);
        },
        async date(value){
            var date = value;
            var m = date.getMonth() + 1;
            var d = date.getDate();
            if (m >= 1 && m <= 9) {
                m = "0" + m;
            }
            if (d >= 0 && d <= 9) {
                d = "0" + d;
            }
            var reqdata= date.getFullYear() + "-" + m + "-" + d
            // this.$toast(date.getFullYear() + "-" + m + "-" + d)
           var token = this.$store.state.User.userInfo.remember_token;
           var nic = await http("put","https://test.365msmk.com/api/app/user",{
                birthday: reqdata
            },token);
            this.show1 = !this.show1
            this.getUserInfoAndAttr()
        },
        showPopup() {
            this.show = true;
        },
        showPopup1() {
            this.show1 = true;      
        },
        //城市开始
        async showPopup2() {
            var token = this.$store.state.User.userInfo.remember_token;
            var shen = await http("get","https://test.365msmk.com/api/app/sonArea/0?",null,token);
            var obj = {}
            shen.data.data.forEach((v,i)=>{
                obj[v.id] = v.area_name
            })
            this.areaList.province_list = obj
            var shi = await http("get","https://test.365msmk.com/api/app/sonArea/110000?",null,token);
            var obj1 = {};
            shi.data.data.forEach((v,i)=>{
                obj1[v.id] = v.area_name
            })
            this.areaList.city_list = obj1
            var qu = await http("get","https://test.365msmk.com/api/app/sonArea/110100?",null,token);
            var obj2 = {};
            qu.data.data.forEach((v,i)=>{
                obj2[v.id] = v.area_name
            })
            this.areaList.county_list = obj2
            this.show2 = true;
        },
        async csc(Picker,value,index){
            console.log(value)
            var c =value[0].code; 
            var token = this.$store.state.User.userInfo.remember_token;
            var shi = await http("get","https://test.365msmk.com/api/app/sonArea/"+c+"?",null,token);
            var obj1 = {};
            shi.data.data.forEach((v,i)=>{
                obj1[v.id] = v.area_name
            })
            var b = value[0].code;
            var bb = parseInt( b)+100;
            console.log(bb)
            var qu = await http("get","https://test.365msmk.com/api/app/sonArea/"+bb+"?",null,token);
            var obj2 = {};
            qu.data.data.forEach((v,i)=>{
                obj2[v.id] = v.area_name
            })
            this.areaList.county_list = obj2
            this.areaList.city_list = obj1
        },
        async cit(val){
          

            var token = this.$store.state.User.userInfo.remember_token;
            var nic = await http("put","https://test.365msmk.com/api/app/user",{
                city_id: val[1].code,
                district_id: val[2].code,
                province_id: val[0].code
            },token);
            this.getUserInfoAndAttr();
            this.show2 = !this.show2
        },
        //城市结束
        //年级数据的渲染
        showPopup3() {
            var a = this.$store.state.User.attr[0].value;
            console.log(a);
            a.sort(function(a,b){
                return a.id -b.id
            })
            a.forEach((v)=>{
                this.columns.push(v.name)
            })
            this.show3 = true;
        },
        showapp1(){
            this.$router.push("/edit")
        },
        showapp2(){
            this.$router.push("/sex")
        },
        showapp3(){
            this.$router.push("/course")
        },
        back(){
            this.$router.push("/wo")
        },
        //年级开始
        async onConfirm(val,id) {
            var a = this.$store.state.User.attr[0].value;
            var obj = {"attr_id":1,"attr_val_id":a.id}
            console.log(obj)
            var token = this.$store.state.User.userInfo.remember_token;
            var nic = await http("put","https://test.365msmk.com/api/app/user",{
                user_attr:JSON.stringify(this.attr)
            },token);
        },
        onCancel() {
            // Toast('取消');
        }
        //年级取消
    }
}
</script>
<style lang="scss" scoped>
    body,ul,li,div,p,h1,h3,h6{
        margin: 0;
        padding: 0;
        list-style:none;
    }
    .person{
        width:100%;
        height:100%;
        background: #f0f2f5;
        display: flex;
        flex-direction: column;
    }
    .p-top{
        height:0.88rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        background: #fff;
    }
    .p-top>h3{
        font-size: 0.48rem;
        color:#595959;
        font-weight: normal;
    }
    .p-back{
        width:0.8rem;
        height:0.88rem;
    }
    .p-back>img{
        display:block;
        margin: auto;
        width:0.2rem;
        height:0.32rem;
        margin-top: 0.24rem;
    }
    .p-message{
        margin-top: 0.2rem;
        background: #fff;
        flex:1;
        overflow-y: scroll;
    }
    .p-message>ul{
        padding: 0.12rem 0.4rem;
    }
    .p-message>ul>li{
        height:1.1rem;
        border-bottom: 1px solid #f0f2f5;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .p-message>ul>li>span{
        font-size: 0.36rem;
        color:#595959;
    }
    .p-message>ul>li>span>span{
        font-size: 0.3rem;
        color:#8c8c8c;
    }
    .p-message>ul>li>span:nth-child(2){
        position: relative;
        margin-right: 0.6rem;
    }
    .p-message>ul>li img{
        width:0.74rem;
        height:0.74rem;
    }
    .vion{
        line-height: 0.74rem;
    }
    .van-icon{
        font-size: 0.46rem;
        color:#ccc;
        position: absolute;
        top: 0.06rem;
        right: -0.8rem;
    }
    .s-thing{
        padding: 0.13rem 0.4rem;
    }
    .s-thing>li{
        text-align: center;
        font-size:0.34rem;
        line-height: 1rem;
        color:#000;
    }
    
</style>