<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PictureCard from '@/components/picture-card/index.vue';
import { getPictureCardList, PictureCardData } from "@/api/dashboard/picture-card";

const pictureCards = ref<PictureCardData[]>([]);

onMounted(async () => {
  const response = await getPictureCardList(1, 10);
  pictureCards.value = response.data;
});
</script>

<template>
  <a-space wrap>
    <PictureCard
        v-for="card in pictureCards"
        :key="card.id"
        :src="`${card.image_path}`"
        :location="card.location"
        :device="card.device"
        :upload-date="card.createdAt"
        :image-id="card.id"
    />

  </a-space>
</template>

<style scoped lang="less">

</style>