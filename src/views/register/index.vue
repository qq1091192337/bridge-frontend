<template>

  <div class="container">

    <!--    <LoginBanner style="margin-right: 40px" />-->
    <div class="content">

      <div class="content-inner ">
        <register-form />
      </div>
      <div class="footer">
        <Footer />
      </div>

    </div>
  </div>


</template>

<script lang="ts" setup>

import RegisterForm from "@/views/register/components/register-form.vue";
</script>

<style scoped lang="less">
.container {
  display: flex;
  height: 100vh;

  .banner {
    width: 550px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .footer {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  &-text {
    margin-right: 4px;
    margin-left: 4px;
    color: var(--color-fill-1);
    font-size: 20px;
  }
}
@media (max-width: @screen-lg) {
  .container {
    .banner {
      width: 25%;
    }
  }
}
</style>