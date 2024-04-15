<template>
  <a-layout class="layout-demo">


    <a-layout-header>
      <a-page-header :title="currentRouteConfig.title" :subtitle="currentRouteConfig.subtitle" @back="$router.go(-1)"/>
      <a-divider/>
    </a-layout-header>

    <a-layout>
    <a-layout-sider
        collapsible breakpoint="xl"
    >
        <a-menu
            :style="{ width: '200px', borderRadius: '4px' ,height:'600px'}"
            :default-open-keys="['0']"
            :default-selected-keys="['0_2']"
        >
          <a-sub-menu v-for="(menu, index) in routerConfig" :key="index.toString()">
            <template #icon><component :is="menu.icon"></component></template>

            <template #title>{{ menu.title }}</template>
            <a-menu-item v-for="(item, index) in menu.children" :key="index.toString()" @click="$router.push(item.path)">{{ item.title }}</a-menu-item>
          </a-sub-menu>
        </a-menu>


    </a-layout-sider>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>

  </a-layout>

</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import { routerConfig } from './dashboard-router';

import {
  IconMenuFold,
  IconMenuUnfold,
  IconApps,
  IconBug,
  IconBulb,
} from '@arco-design/web-vue/es/icon';
import {useRoute} from "vue-router";
const route = useRoute();
const breadcrumbItems = computed(() => route.path.split('/').filter(item => item));
const currentRouteConfig = computed(() => {
  for (const config of routerConfig) {
    for (const child of config.children) {
      if (child.path === route.path) {
        return {subtitle:child.title, title: config.title};
      }
    }
  }
  return { title: '', subtitle:'' };
});
</script>

<style scoped>
.menu-demo {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  min-height: 750px;
  min-width: 1280px;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
.layout-demo{
  height: 100vh;
  width: 100vw;
  min-height: 750px;
  min-width: 1280px;
  padding: 40px;
  background-color: var(--color-neutral-2);
}


</style>