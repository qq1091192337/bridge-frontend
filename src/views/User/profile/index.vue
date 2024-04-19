<script setup lang="ts">

import {useRouter} from "vue-router";
const router = useRouter();

const handleBack = () => {
  console.log('back');
  router.push('/dashboard/overview');
}
</script>

<template>
  <a-result status="success" title="敬请期待" >
    <template #subtitle>
      该页面正在制作中，敬请期待
    </template>
    <template #extra>
      <a-space>
        <a-button type='primary' @click="handleBack">返回</a-button>
      </a-space>
    </template>
  </a-result>
</template>

<style scoped lang="less">

</style>