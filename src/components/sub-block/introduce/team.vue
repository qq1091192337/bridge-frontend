<template>
<div class="container">
  <div class="container-left">
    <h1>{{title}}</h1>
    <h2 v-if="!!subtitle">{{subtitle}}</h2>
  </div>
  <div class="container-right">
    <a-typography>
      <a-typography-title></a-typography-title>

    <a-typography-paragraph>
      <a-typography-title>{{rightTitle}}</a-typography-title>
      <a-typography-text style="font-size: 1.6em ;line-height: 2em">{{rightText}}</a-typography-text>
    </a-typography-paragraph>
    </a-typography>
  </div>
</div>
</template>

<script>
export default {
  name: "team",
  props: {
    title: String,
    subtitle: String,
    rightTitle: String,
    rightText: String
  }
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
    justify-content: center;
    height: 100%;

  }
  &-right{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    max-width: 600px;

  }
}
h1{
  font-size: 50px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
}
h2{
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 1rem;
  color: #000;
  margin-bottom: 20px;
}

</style>