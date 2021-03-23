<script>  
import { tabbar } from './tabbar/tabbar'
export default {
  onLaunch: function () {
    // console.log('App Launch，app启动');
    // 如果已登录则跳转到首页Tab
    const operationId = uni.getStorageSync('operationId');
    if(operationId){
      uni.reLaunch({ url: '../tab/tab' })
    }
    // 获取胶囊按钮的布局位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    this.$store.commit("SET_TABBAR", tabbar.tabbar);
    // 自定义header是可以使用到-获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 计算导航栏高度
    this.$store.commit("SET_STATUS_HEIGHT", systemInfo.statusBarHeight);
    this.$store.commit("SET_NAVBAR_HEIGHT", (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight);
    this.$store.commit("SET_MENU_RIGHT", systemInfo.screenWidth - menuButtonInfo.right);
    this.$store.commit("SET_MENU_BOTTOM", menuButtonInfo.top - systemInfo.statusBarHeight);
    this.$store.commit("SET_MENU_HEIGHT", menuButtonInfo.height);
  },
  onShow: function () {
    // console.log('App Show，app展现在前台');
  },
  onHide: function () {
    // console.log('App Hide，app不再展现在前台')
  }
}  
</script>

<style>
@import "/wxcomponents/vant/common/index.wxss";
@import "app.css"; /* 项目的app.css */
</style>