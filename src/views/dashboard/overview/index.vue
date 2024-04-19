<template>
  <upload-form v-model:visible="visible" />

  <a-layout class="a-layout">
    <a-space size="large" fill >
        <a-button type="primary" @click="visible = true">上传图片</a-button>
        <a-button>查看图片</a-button>
    </a-space>
    <a-space size="large" align="center" class="a-space">
      <a-statistic title="近七天图像上传数量" :value="weekUploads" animation>
        <template #prefix>
          <icon-arrow-rise />
        </template>
      </a-statistic>
      <a-divider direction="vertical"></a-divider>
      <a-statistic title="总共图片上传数量" :value="totalUploads" animation/>
    </a-space>

    <a-space>
      <picture-view/>
    </a-space>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import PictureView from "@/views/dashboard/picture-view/picture-view.vue";
import UploadForm from '../upload-form/index.vue';
import {getRecentUploadsCount} from "@/api/dashboard/picture-card";

const weekUploads = ref(0); // 近七天图像上传数量
const totalUploads = ref(0); // 总共图片上传数量


const renderChart = ref(false);
const visible = ref(false);
nextTick(() => {
  renderChart.value = true;
});

getRecentUploadsCount().then((res) => {
  weekUploads.value = res.data.data.recentUploadsCount;
  totalUploads.value = res.data.data.totalUploadsCount;
});
</script>

<style scoped>
.a-layout {
  padding: 24px;
}
.a-space {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>