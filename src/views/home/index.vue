<template>
  <a-layout-content>
    <div class="homepage">
      <div class="parallax">
        <div class="parallax-content">
          <h1>桥梁病害的表冠病害识别</h1>
          <h2>大创项目团队</h2>
          <a-button class="arco-button" type="primary" @click="goToLogin" size="large">登录测试</a-button>

        </div>

      </div>
    </div>
    <scroll-slider/>
  </a-layout-content>
  <Footer class="fixed-footer" />
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {Button} from '@arco-design/web-vue';
import Footer from '@/components/footer/index.vue';
import ScrollSlider from '@/components/scroll-slider/index.vue'

const router = useRouter();

function goToLogin() {
  router.push('/login');
}

</script>

<style scoped>
.fixed-footer {
  position: fixed;
  bottom: 0;
  text-align: center;
}
.homepage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.parallax {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.parallax-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
}




.arco-button:hover {
  background-color: #8fd3f4;
  border-color: #8fd3f4;
}
</style>
