<template>
  <div>
    子应用 vueProject
  </div>
</template>
<script setup>
import { onBeforeMount, onMounted } from 'vue'
defineOptions({
  name: "about1",
});
console.log("1子组件-开始创建组件-about-setup");

onBeforeMount(() => {
  console.log("2.子组件-组件挂载页面之前执行--about--onBeforeMount");
});
onMounted(() => {
  console.log("3.子组件-组件挂载到页面之后执行---about----onMounted");
});
</script>
<style scoped></style>
