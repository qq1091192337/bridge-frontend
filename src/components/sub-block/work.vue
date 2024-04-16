<template>
  <div>
    <ProjectIntro/>
    <ProjectTimeline/>
  </div>
</template>

<script>
import ProjectTimeline from "@/components/sub-block/work/projectTimeline.vue";
import ProjectIntro from "@/components/sub-block/work/projectIntro.vue";

export default {
  name: "work",
  components: {
    ProjectIntro,
    ProjectTimeline,
  }
}
</script>

<style scoped>

div > * {
  margin-bottom: 50px;
}
</style>