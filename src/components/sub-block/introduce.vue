<template>
  <div class="container" ref="container" @wheel="onWheel">
    <div class="slides-container" ref="slidesContainer">
      <div class="slide" >
        <SubSummary></SubSummary>
      </div>
      <div class="slide" v-for="(slide, index) in slides" :key="index">
        <div class="content">{{ slide.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import SubSummary from "@/components/sub-block/introduce/sub-summary.vue";

export default {
  name: "introduce",
  components: {SubSummary},
  setup() {
    const container = ref(null);
    const slides = [
      { content: "总的介绍" },
      { content: "团队成员 1 介绍" },
      { content: "团队成员 2 介绍" },
      { content: "团队成员 3 介绍" },
      { content: "团队成员 4 介绍" },
    ];
    const slidesContainer = ref(null);
    let currentIndex = 0;
    let isScrolling = false;

    const checkScroll = () => {
      const containerTop = container.value.getBoundingClientRect().top;
      return containerTop < 0;
    };

    const checkScrollToBottom = () => {
      const containerBottom = container.value.getBoundingClientRect().bottom;
      return containerBottom <= window.innerHeight;
    };

    const lockScroll = () => {
      if (checkScrollToBottom() && currentIndex !==slides.length-1) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    const onWheel = (event) => {
      if (!checkScroll()) return;
      if (isScrolling) return;
      isScrolling = true;

      if (event.deltaY > 0) {
        if (currentIndex < slides.length - 1) {
          currentIndex++;
        } else {
          isScrolling = false;
          document.body.style.overflow = "";
          return;
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          isScrolling = false;
          return;
        }
      }
      event.preventDefault();
      slidesContainer.value.style.transform = `translateY(-${currentIndex * 100}vh)`;

      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    onMounted(() => {
      window.addEventListener("scroll", lockScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", lockScroll);
    });

    return {
      container,
      slides,
      slidesContainer,
      onWheel,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  overflow: hidden;
}

.slides-container {
  width:
      100%;
  height: 500%;
  display: flex;
  flex-direction: column;
  transition: transform 1s ease;
}

.slide {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
  color: #1a1a1a;
}
</style>