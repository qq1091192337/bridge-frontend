<template>
  <a-modal v-model:visible="visible" title="上传图片">
    <a-upload
        :action="uploadUrl"
        :headers="headers"
        :before-upload="beforeUpload"
        :on-change="handleChange"
        :on-drop="handleDrop"
        :multiple="true"
        :accept="'image/*'"
        name="file"
        draggable
    >

      <p class="ant-upload-text">点击或拖动文件到此区域上传</p>
      <p class="ant-upload-hint">支持单次或批量上传</p>
    </a-upload>
  </a-modal>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import axios from 'axios';
import {FileItem} from "@arco-design/web-vue";

const visible = ref(false);
const uploadUrl = '/api/picture-card/upload'; // 请替换为你的上传URL
const headers = {
  'Authorization': 'Bearer ' + 'your-token', // 请替换为你的token
};

const beforeUpload = (file:File) => {
  const isImage = file.type.indexOf('image/') === 0;
  if (!isImage) {
    // 这里可以使用 Arco Design 的 Message 组件来显示错误消息
    console.log('只能上传图片文件!');
  }
  return isImage;
};

const handleChange = (fileList:FileItem[],fileItem:FileItem) => {
  if (fileItem.status === 'uploading') {
    console.log('上传中...');
  } else if (fileItem.status === 'done') {
    console.log('上传完成: ', fileItem.response);
  } else if (fileItem.status === 'error') {
    console.log('上传失败: ', fileItem.response);
  }
};

const handleDrop = (e:Event) => {
  console.log('文件被拖到了上传区域', e);
};
</script>

<style scoped lang="less">
.ant-upload-drag-icon {
  color: var(--color-primary-1);
}
.ant-upload-text {
  color: var(--color-text-1);
}
.ant-upload-hint {
  color: var(--color-text-3);
}
</style>