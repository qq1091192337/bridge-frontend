<template>
  <a-card class="a-card" :title="`地点：${location || '未知' }`">
    <template #actions>
      <a-button type="primary">查看</a-button>
      <a-button status="danger" @click="handleDelete">删除</a-button>
    </template>
    <template #cover>
      <a-image :src="src"
               alt=""
               show-loader
               :preview="false"
               fit="fill"
      />
    </template>

    <a-card-meta
        :title="`拍摄设备：${device || '未知设备'}`"
        :description="`上传日期：${uploadDate || '未知日期'}`"
    />

  </a-card>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import {Notification, Modal} from "@arco-design/web-vue";
const props = defineProps({
  src: String,
  location: String,
  device: String,
  uploadDate: String,
});

const handleDelete = () => {
  console.log('查看');
  Modal.open({
    title: '确定要删除吗？',
    content: '删除后无法恢复，请谨慎操作',
    closable: true,
    cancelText: '取消',
    okText: '删除',
    onOk: () => {
      console.log('删除');
      Notification.success({
        content: '删除成功',
      });
    },
    onCancel: () => {
      console.log('取消');
    }
  });
};

</script>

<style scoped>
.a-card{
  width: 300px;
  margin: 20px;
}
</style>