<script src="./tab.component.js"></script>
<style src="./tab.css" scoped></style>
<template>
  <view>
    <scroll-view scroll-y="true" class="app-container">
      <home-page v-if="active === 0"></home-page>
      <order-page v-if="active === 1"></order-page>
      <mine-page v-if="active === 2"></mine-page>
    </scroll-view>
    <van-tabbar :active="active">
      <van-tabbar-item v-for="(item,index) in tabbar" :key="index" :icon="item.icon" @tap="changeTab(item,index)">{{ item.title }}</van-tabbar-item>
    </van-tabbar>
  </view>
</template>
