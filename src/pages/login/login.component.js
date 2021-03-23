import Vue from 'vue';
import { userLoginApi } from '@/service/login.service'

export default Vue.extend({
    name: "loginPage",
    data() {
        return {
            // statusBarHeight: this.$store.state.statusBarHeight,
            username: "",
            password: ""
        }
    },
    methods: {
        // 登录
        userLogin() {
            // 由于接口失效,所以注释掉调用接口部分
            // const param = {
            //     "userName": this.username,
            //     "password": this.password
            // };
            // userLoginApi(param).then(res => {
            //     if (res.code === "200") {
            //         uni.setStorageSync('operationId', res.data.objectId);
            //         this.moveToTab();
            //     }
            // })
            uni.setStorageSync('operationId', '1234567890');
            this.moveToTab();
        },

        //跳转到首页
        moveToTab() {
            uni.navigateTo({
                url: '../tab/tab'
            })
        }
    }
});
