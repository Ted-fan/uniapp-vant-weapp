# uniapp+vant开发小程序手册

## 项目安装
```
npm install
```

### 修改配置文件
修改manifest.json中appid
```
"mp-weixin": {
        "usingComponents":true,
        "appid": "wx2cb0075ac37982b3",
        "setting" : {
        "urlCheck" : true
    }
}

```

### 编译与运行
```
npm run dev:mp-weixin
npm run build:weixin
```
### 导入到微信开发者工具
将 dist-> dev-> mp-weixin导入到开发者工具项目中

### 文件结构
```
components:存放业务组件
pages:存放页面
service:存放接口请求
static:存放静态文件/图片
store:vuex状态管理
tabbar:tab导航栏
utils:通用方法
wxcomponents:https://github.com/youzan/vant-weapp/tree/dev/dist下载后将文件放入wxcomponents
app.css:自定义的全局css
app.vue:项目根组件
main.js:项目入口文件
manifest:uniapp编译配置文件
pages.json:小程序页面配置文件
```
```
注意vant组件在pages.json文件中接入时要使用如下格式
"usingComponents": {
    "van-tabbar": "/wxcomponents/vant/tabbar/index",
}
```

### 包含功能
1.页面跳转
2.组件调用(参照tab页)
3.自定义Tab
4.vuex状态管理
5.接口绑定
6.vant组件接入

