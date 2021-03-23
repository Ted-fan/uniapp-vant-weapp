import Vue from 'vue';
export default Vue.extend({
  components: { },
  data() {
    return {
    }
  },
  onLoad() {
    //设置标题
    wx.setNavigationBarTitle({
      title: "分包首页"
    })
  },
  methods: {
  }
});