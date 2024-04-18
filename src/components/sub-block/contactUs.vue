<template>
  <a-typography-title>联系我们</a-typography-title>
  <a-row class="contact-container" gutter="20" justify="center" align="center">
    <a-col :span="12">
      <div class="map-container" ref="mapContainer"></div>
    </a-col>
    <a-col :span="12">
      <a-card title="联系我们" bordered>
        <a-form ref="loginForm"
            :model="formState" @submit="handleSubmit">
          <a-form-item field="name"
                       label="姓名"
                       :rules="{required:true,maxLength:10}"
                       validate-trigger="blur">
            <a-input  v-model="formState.name"  placeholder="请输入您的姓名"/>
          </a-form-item>
          <a-form-item field="email"
                       label="邮箱"
                       :rules="{type:'email',required:true}"
                       validate-trigger="blur">
            <a-input v-model="formState.email"  placeholder="请输入您的邮箱"/>
          </a-form-item>
          <a-form-item field="message"
                       label="消息"
                        :rules="{maxLength:100,required:true}"

                       validate-trigger="blur">
            <a-textarea v-model="formState.message" placeholder="请输入您的请求，以便我们精准的给予您回复" rows="4"></a-textarea>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">提交</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup>
import {ref, onMounted, reactive} from 'vue';
import {sendContactForm} from "@/api/contact/contact";
import {Notification} from "@arco-design/web-vue";
const formState = reactive({
  name: '',
  email: '',
  message: '',
});
const rules = {
  name:{
    required: true,
    maxLength: 10,
  },
  email: {
    type: 'email',
    required: true,
  },
  message: {
    maxLength: 100,
    required: true,
  },
};
const mapContainer = ref(null);

function initMap() {
  const map = new AMap.Map(mapContainer.value, {
    zoom: 16,
    center: [113.008659, 28.06621] // 例如，北京市中心的坐标
  });

  const marker = new AMap.Marker({
    position: map.getCenter(),
    title: '我们的位置'
  });
  // 创建信息窗口
  const infoWindow = new AMap.InfoWindow({
    content: '<div>长沙理工大学（云塘校区） -  土木工程学院</div>',  // 信息窗口的内容，可以是 HTML 字符串
    offset: new AMap.Pixel(0, -30)  // 信息窗口的偏移量，以 Marker 的点为基准
  });

  // 添加点击事件监听器
  marker.on('click', function() {
    infoWindow.open(map, marker.getPosition());  // 在 Marker 的位置打开信息窗口
  });
  map.add(marker);
}

onMounted(() => {
  if (window.initAMapLoaded) {
    initMap();
  } else {
    window.initAMap = initMap; // 如果地图尚未加载，再次定义回调
  }
});

function handleSubmit() {


  sendContactForm(formState).then(() => {
    Notification.info({
      title: '提交成功',
      content: '我们已经收到您的请求，我们会尽快给您回复'
    });
  }).catch(() => {
    Notification.error({
      title: '提交失败',
      content: '请检查您的网络连接，稍后再试'
    });
  })
}
</script>

<style scoped>
.map-container {
  height: 600px;
}
.contact-container {
  width: 100%;
  height: 500px;
  margin: 40px auto;
}
</style>
