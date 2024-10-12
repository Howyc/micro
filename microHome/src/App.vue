<script setup>
import { ref } from "vue";

const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>

<template>
  <!-- name：应用名称, url：应用地址 -->
  <!-- <use-micro-app name="vueProject"/> -->
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
