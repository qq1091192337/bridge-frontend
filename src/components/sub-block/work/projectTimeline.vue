<template>
  <div>
    <a-typography-title style="margin-bottom: 30px">
      项目过程
    </a-typography-title>
    <a-timeline direction="horizontal">
      <a-timeline-item >项目开始
        <br />
        <a-typography-text
            type="secondary"
            :style="{ fontSize: '12px', marginTop: '4px' }"
        >
          项目开始筹划，确定项目目标和计划
        </a-typography-text>
      </a-timeline-item>
      <a-timeline-item>设计阶段
        <br />
        <a-typography-text
            type="secondary"
            :style="{ fontSize: '12px', marginTop: '4px' }"
        >
          项目提交申请书，确定项目设计方案
        </a-typography-text>
      </a-timeline-item>
      <a-timeline-item>
        开发阶段
        <br />
        <a-typography-text
            type="secondary"
            :style="{ fontSize: '12px', marginTop: '4px' }"
        >
          项目开始开发，完成项目的主要功能
        </a-typography-text>
      </a-timeline-item>
      <a-timeline-item>
        提交阶段
        <br />
        <a-typography-text
            type="secondary"
            :style="{ fontSize: '12px', marginTop: '4px' }"
        >
          项目进行提交，评估项目的完成情况
        </a-typography-text>
      </a-timeline-item>
      <a-timeline-item>项目结束
        <br />
        <a-typography-text
            type="secondary"
            :style="{ fontSize: '12px', marginTop: '4px' }"
        >
          项目完成，总结项目经验，展望未来
        </a-typography-text>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
import { Timeline } from '@arco-design/web-vue';
export default {
  name: "projectTimeline",
  components: {
    'a-timeline': Timeline,
    'a-timeline-item': Timeline.Item
  }
}
</script>

<style scoped>

</style>