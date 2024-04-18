<template>
  <div>
    <!-- Hero -->
    <section class="et-hero-tabs">
      <div class="et-hero-tabs-container">
        <a v-for="(item ,i) in slides"
           :key="i"
           class="et-hero-tab"
           :href="'#'+item.id"
           @click.prevent="onTabClick($event, item.id)">
          {{item.name}}
        </a>
        <span class="et-hero-tab-slider"></span>
      </div>
    </section>
    <!-- Main -->
    <main class="et-main">
      <section v-for="(item ,i) in slides"
               key="i"
               class="et-slide"
               :id="item.id"
      >
        <component :is="item.component"/>
      </section>
    </main>
  </div>
</template>
<script>
import { h, onMounted, ref} from 'vue';
import Introduce from "@/components/sub-block/introduce.vue";
import Work from "@/components/sub-block/work.vue";
import Address from "@/components/sub-block/address.vue";
import ContactUs from "@/components/sub-block/contactUs.vue";
class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.tabs = document.querySelectorAll('.et-hero-tab');
    this.init();
  }

  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => this.onTabClick(event, tab));
    });
    window.addEventListener('scroll', () => this.onScroll());
    window.addEventListener('resize', () => this.onResize());
  }

  onTabClick(event, element) {
    event.preventDefault();
    const targetId = element.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const scrollTop =
        targetElement.offsetTop - this.tabContainerHeight + 1;
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    const tabsElement = document.querySelector('.et-hero-tabs');
    const offset =
        tabsElement.offsetTop + tabsElement.offsetHeight - this.tabContainerHeight;
    const container = document.querySelector('.et-hero-tabs-container');
    if (window.pageYOffset > offset) {
      container.classList.add('et-hero-tabs-container--top');
    } else {
      container.classList.remove('et-hero-tabs-container--top');
    }
  }

  findCurrentTabSelector() {
    let newCurrentId;
    let newCurrentTab;
    this.tabs.forEach((tab) => {
      const id = tab.getAttribute('href');
      const targetElement = document.querySelector(id);
      const offsetTop = targetElement.offsetTop - this.tabContainerHeight;
      const offsetBottom =
          targetElement.offsetTop + targetElement.offsetHeight - this.tabContainerHeight;
      if (
          window.pageYOffset > offsetTop &&
          window.pageYOffset < offsetBottom
      ) {
        newCurrentId = id;
        newCurrentTab = tab;
      }
    });
    if (this.currentId !== newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    const slider = document.querySelector('.et-hero-tab-slider');
    if (this.currentTab) {
      slider.style.width = `${this.currentTab.clientWidth}px`;
      slider.style.left = `${this.currentTab.offsetLeft}px`;
    }
  }
}
const slides=[
  {
    id:'tab-introduce',
    name:'团队介绍',
    component:"Introduce"
  },
  {
    id:'tab-work',
    name:'作品简介',
    component: Work
  },
  {
    id:'tab-project',
    name:'项目地址',
    component: Address
  },
  {
    id:'tab-contact',
    name: '联系我们',
    component: ContactUs
  }
]
export default {
  methods: {h},
  components:{
    Introduce,

  },
  setup() {
    const stickyNavigation = ref(null);

    onMounted(() => {
      stickyNavigation.value = new StickyNavigation();
    });

    const onTabClick = (event, tabId) => {
      if (stickyNavigation.value) {
        stickyNavigation.value.onTabClick(event, document.querySelector(`[href="#${tabId}"]`));
      }
    };

    return {
      onTabClick,
      slides
    };
  },
};
</script>
<style>
body {
  font-family: "Century Gothic", "Lato", sans-serif;
}

a {
  text-decoration: none;
}

.et-hero-tabs{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.et-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: auto;
  position: relative;
  background: #eee;
  text-align: center;
  padding: 0 2em;
}
.et-hero-tabs h1,
.et-slide h1 {
  font-size: 2rem;
  margin: 0;
  letter-spacing: 1rem;
}
.et-hero-tabs h3,
.et-slide h3 {
  font-size: 1rem;
  letter-spacing: 0.3rem;
  opacity: 0.6;
}

.et-hero-tabs-container {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  z-index: 10;
}

.et-hero-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #000;
  letter-spacing: 0.1rem;
  transition: all 0.5s ease;
  font-size: 0.8rem;
}
.et-hero-tab:hover {
  color: white;
  background: rgba(102, 177, 241, 0.8);
  transition: all 0.5s ease;
}

.et-hero-tab-slider {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 6px;
  background: #66B1F1;
  transition: left 0.3s ease;
}

@media (min-width: 800px) {
  .et-hero-tabs h1,
  .et-slide h1 {
    font-size: 3rem;
  }
  .et-hero-tabs h3,
  .et-slide h3 {
    font-size: 1rem;
  }

  .et-hero-tab {
    font-size: 1rem;
  }
}
</style>