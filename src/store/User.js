export default {
    state:{
        userInfo:{}, //用户信息
        userInfoAttr:{}, //修改后的用户信息
        attr:[], //课程 年级信息
        Attr:{},
        img:""
    },
    mutations:{
        setUserInfo(state,val){
            state.userInfo = val
        },
        setUserInfoAttr(state,val){
            state.userInfoAttr = val
        },
        setAttr(state,val){
            state.attr = val
        },
        getAttr(state,val){
            state.Attr = val
        },
        setImg(state,res){

        }
        
    }
}