<template>
  <a-modal v-model:visible="visible">
    <a-image-preview
        v-if="src"
        :src="src"
        style="width: 100%; object-fit: contain;"
    />
    <div v-else class="placeholder">No image loaded</div>
  </a-modal>
</template>

<script setup>
// ... existing code ...

import {ref, } from "vue";

defineProps({
  src: String,
});

const visible = ref(false);

</script>