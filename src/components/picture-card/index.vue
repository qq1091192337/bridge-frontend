<template>
  <a-card class="a-card" :title="`地点：${location || '未知' }`">
    <template #actions>
      <a-button type="primary" @click="handleDetail">查看</a-button>
      <a-button status="danger" @click="handleDelete">删除</a-button>
    </template>
    <template #cover>
      <a-image
          class="image-size"
          :src="src"
          alt=""
          show-loader
          :preview="false"
          fit="contain"
          width="200px"
          height="200px"
      />
    </template>

    <a-card-meta
        :title="`拍摄设备：${device || '未知设备'}`"
        :description="`上传日期：${uploadDate || '未知日期'}`"
    />

  </a-card>
  <DetailView
      v-model:visible="visible"
      :image-src="src"
      :masks="maskData"
      @close="handleClose" />

</template>

<script setup lang="ts">
import {defineProps, onMounted, ref} from 'vue';
import {Notification, Modal} from "@arco-design/web-vue";
import DetailView from "@/views/dashboard/picture-view/detail-view.vue";
import {getMask} from "@/api/dashboard/picture-card";
const visible = ref(false);

const detailViewVisible = ref(false);

const maskData = ref([]);
const handleClose = () => {
  detailViewVisible.value = false;
};
const props = defineProps({
  src: String,
  location: String,
  device: String,
  uploadDate: String,
  imageId: Number,
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
      Notification.error({
        title: '删除失败',
        content: '当前配置只有管理员才能删除图片',
      });
    },
    onCancel: () => {
      console.log('取消');
    }
  });
};
const handleDetail = () => {
  visible.value = true;
};

onMounted(async () => {
  getMask(props.imageId).then((res) => {
    console.log(res);
    maskData.value= res.data.mask;
  });
})
</script>

<style scoped>
.a-card{
  width: 300px;
  margin: 20px;
}
.image-size {
  max-width: 100%;
  max-height: 100%;
}
</style>