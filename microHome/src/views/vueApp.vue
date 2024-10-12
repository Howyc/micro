<template>
  <div>
    <micro-app
      name="vueProject"
      url="http://localhost:6060"
      iframe
      baserouter="vueProject"
    ></micro-app>
  </div>
</template>
<script setup>
import microApp, { EventCenterForMicroApp } from "@micro-zoe/micro-app";
import { onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
</script>
<style scoped></style>
