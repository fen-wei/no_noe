import Vue from "vue";
import vuex from "vuex";
import User from "./User"; //引入一个模块
Vue.use(vuex);

//自动本地存储结束
import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
    storage: window.localStorage 
})
//自动本地存储结束
//创建vuex实例并导出
export default new vuex.Store({
    plugins:[vuexLocal.plugin],
    modules:{
        User  //引入的模块
    }
})