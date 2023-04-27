<template>
<div class="container">
  <div class="container-left">
    <h1>团队介绍</h1>
    <a-image>

    </a-image>
  </div>
  <div class="container-right">
    <a-typography>
      <a-typography-title></a-typography-title>

    <a-typography-paragraph>
      <a-typography-title></a-typography-title>
      <a-typography-text>本团队是一个专业团队</a-typography-text>
    </a-typography-paragraph>
    </a-typography>
  </div>
</div>
</template>

<script>
export default {
  name: "sub-summary"
}
</script>

<style scoped lang="less">
.container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;

  &-left{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

  }
  &-right{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

  }
}
h1{
  font-size: 50px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
}
</style>