<template>
  <div class="footer-wrapper">
    <a-layout-footer class="footer">
      大创项目团队 - Powered by @李嘉俊
    </a-layout-footer>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: var(--color-text-1);
  text-align: center;
}

.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  background: var(--color-fill-2)
}
</style>
