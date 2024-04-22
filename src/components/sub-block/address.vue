<script setup lang="ts">
import { Notification } from '@arco-design/web-vue';
const handleNone = () => {
  Notification.info({
    title: '敬请期待',
    content: 'iOS版本暂未发布，敬请期待！',
  });
};
</script>

<template>
  <a-typography>
    <a-typography-title>项目地址</a-typography-title>
    <a-space direction="horizontal" size="large">
      <a-button type="primary" href="/app/BridgeApp.apk" style="margin-top: 30px">下载安卓安装包</a-button>
      <a-button type="primary" @click="handleNone"  style="margin-top: 30px">下载iOS安装包</a-button>
      <a-button type="primary" href="#/login" style="margin-top: 30px">访问网页版</a-button>
    </a-space>

  </a-typography>
</template>

<style scoped lang="less">

</style>