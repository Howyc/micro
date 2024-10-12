<template>
  <div>

  </div>
</template>
<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
defineOptions({
  name: "about",
});
const router = useRouter();
console.log("1-开始创建组件-setup");

onBeforeMount(() => {
  console.log("2.组件挂载页面之前执行----onBeforeMount");
});
onMounted(() => {
  console.log("3.-组件挂载到页面之后执行-------onMounted");
});
</script>
<style scoped></style>
