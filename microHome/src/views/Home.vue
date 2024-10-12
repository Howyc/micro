<template>
  <div>
    <el-tabs tab-position="left" style="height: 700px" class="demo-tabs">
      <el-tab-pane label="vueApp">
        <el-button @click="handleJump('vite-vue3-app')">点击去 vite vue3子应用</el-button>
      </el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { onBeforeMount, onMounted } from "vue";
import microApp, { EventCenterForMicroApp } from "@micro-zoe/micro-app";
import { useRouter } from "vue-router";
// @ts-ignore 因为vite子应用关闭了沙箱，我们需要为子应用vueProject创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForAppNameVite = new EventCenterForMicroApp("vueProject");
defineOptions({
  name: "home",
});
const handleJump = (path) => {
  router.replace({ path: `/micro-app/vue#/vite-vue3` });
};
const router = useRouter();
onMounted(() => {
  microApp.setData("vueProject", { path: "/vueProject/page" });
});
</script>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
