<template>
  <a-modal v-model:visible="visible" title="检测结果">
    <template #title>
      <a-space>
        <span>检测结果</span>
        <a-spin :loading="loading" v-if="loading"/>
      </a-space>
    </template>


    <div v-if="error" class="error-msg" v-html="appendErrorSuffix(error)"></div>


    <div class="wrapper">
      <div v-if="!imageSrc" class="viewer">Please select an image above</div>
      <div v-else class="viewer"  :style="{ backgroundImage: backgroundImageUrl }">
        <canvas ref="canvasRef" class="canvas"></canvas>

      </div>

    </div>
  </a-modal>
</template>

<script setup>
import {ref, watch, onMounted, computed} from 'vue';
import {defineProps} from 'vue';

// Define props
const props = defineProps({
  imageSrc: String,
  masks: Array,
});

const error = ref('');
const canvasRef = ref(null);
const visible = ref(false);
const loading= ref(true);
const backgroundImageUrl = computed(() => {
  // 使用encodeURIComponent确保URL中的特殊字符被正确编码

  return `url('${props.imageSrc.replace('\\', '/')}')`;
});
const appendErrorSuffix = (error) => {
  if (!error) return '';
  return `${error} <a target="_blank" href="https://ai.baidu.com/docs#/EasyDL_VIS_Segmentation_API/f94eb3c2">Click to view error details</a>`;
};

watch([() => props.imageSrc, () => props.masks], ([newSrc, newMasks]) => {
  if (newSrc && newMasks.length) {
    loading.value=false;
    drawMasks(newMasks);
  }
}, {immediate: true});

function drawMasks(masksData) {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = props.imageSrc; // Set the image source

  img.onload = () => {
    // Get the actual dimensions of the image element
    // Set canvas size to match the image dimensions
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the image to fit the canvas
    masksData.forEach(mask => {
      applyMask(ctx, mask.mask);
    });
  };
  img.src = props.imageSrc;
}

function applyMask(ctx, mask) {
  const canvas = canvasRef.value;

  canvas.width = mask[0].length; // Assuming all rows are the same length
  canvas.height = mask.length;
  // Assume mask is a 2D array (e.g., 1024x1024)
  const color = { r: 0, g: 0, b: 255, a: 0.5 }; // Blue color
  const pixelSize = 1; // Size of each mask pixel

  for (let y = 0; y < mask.length; y++) {
    for (let x = 0; x < mask[y].length; x++) {
      if (mask[y][x]) {
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        ctx.fillRect(x, y, pixelSize, pixelSize); // Draw a pixelSize x pixelSize rectangle
      }
    }
  }
}

onMounted(() => {

  if (canvasRef.value) {
    canvasRef.value.width = 1024;  // Default width
    canvasRef.value.height = 1024; // Default height
    // canvasRef.value.width = 400;
    // canvasRef.value.height = 300;
  }

});
</script>

<style scoped>
.error-msg {
  color: #e60000;
  padding: 10px 0;
}

.wrapper {
  position: relative;
  width: 100%;
  height: auto;
  max-width: 1024px;
  border: 1px solid #eee;
  margin: 20px 0;
  overflow: hidden;
}

.viewer {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; /* Make sure the image fits the viewer */
  width: 100%; /* Viewer width adjusts to the parent */
  padding-top: 100%; /* Aspect ratio hack to maintain image aspect ratio */
}

.viewer img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.canvas {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
