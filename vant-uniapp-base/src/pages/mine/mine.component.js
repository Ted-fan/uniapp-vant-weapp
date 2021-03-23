import Vue from 'vue';
import { getUserInfoApi } from "@/service/mine.service";

export default Vue.extend({
    name: 'minePage',
    data() {
        return {
        }
    },
    created() {
        // this.getUserInfo();
    },
    methods: {
        // 获取账户列表
        getUserInfo() {
            const param = { 
                "param1": 1, 
                "param2": 20 
            };
            getUserInfoApi(param).then(res => {
                console.log(res)
            })
        },

        //跳转到分包页面
        moveToSubPackage() {
            uni.navigateTo({
                url: '../subPackage/subIndex/subIndex'
            })
        },
    }
});
