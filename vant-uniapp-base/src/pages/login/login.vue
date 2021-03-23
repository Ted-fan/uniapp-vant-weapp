<script src="./login.component.js"></script>
<style src="./login.css" scoped></style>
<template>
  <view>
    <van-row>
      <van-col span="24">
        <van-cell-group>
          <van-field label="用户名" @input="username=$event.mp.detail" :value="username" placeholder="请输入用户名" type="text" />
          <van-field label="密码" @input="password=$event.mp.detail" :value="password" placeholder="请输入密码" type="password" />
        </van-cell-group>
      </van-col>
    </van-row>
    <van-button type="primary" block @click="userLogin()">登录</van-button>
  </view>
</template>
