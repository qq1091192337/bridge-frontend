<script setup>
import {ref} from 'vue';

const pictures = ref([
  'https://example.com/picture1.jpg',
  'https://example.com/picture2.jpg',
  // 更多照片 URL...
]);
</script>

<template>
<!--    <div>-->
<!--      <a-image-->
<!--          v-for="(picture, index) in pictures"-->
<!--          :key="index"-->
<!--          :src="picture"-->
<!--          :preview="{ src: picture }"-->
<!--      />-->
<!--    </div>-->
Content of the picture view
</template>

<style scoped lang="less">

</style>