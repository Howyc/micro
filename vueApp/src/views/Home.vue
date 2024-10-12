<template>
  <div>
    哈哈哈哈哈哈哈 home
  </div>
</template>
<script setup>
import { onBeforeMount, onMounted } from 'vue'
defineOptions({
  name: "home",
});
console.log("1我是子应用-开始创建组件-setup");
onBeforeMount(() => {
  console.log("2.我是子应用-组件挂载页面之前执行--home--onBeforeMount");
});
onMounted(() => {
  const data = window.microApp.getData()
  window.microApp.dispatch({type: '子应用发送的数据'})
  console.log("3.我是子应用-组件挂载到页面之后执行---home----onMounted", data);
});
</script>
<style scoped></style>
