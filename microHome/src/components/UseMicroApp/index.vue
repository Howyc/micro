<template>
  <div class="micro-app-child">
    <micro-app :url="url" :name="name" :inline="inline" :disable-sandbox="disableSandbox" />
  </div>
</template>

<script>
import microApps from '@/microApps'

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    disableSandbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      url: ''
    }
  },
  created() {
    const appInfo = microApps[this.name]
    if (!appInfo) {
      console.error(`No micro app found for name: ${this.name}`)
      return
    }
    const { publicPath, origin, devOrigin } = appInfo
    const isLocal = location.hostname === 'localhost'
    this.url = (isLocal ? devOrigin : origin) + publicPath
    console.log(this.url)
  },
  unmounted() {
    window.dispatchEvent(new Event('unmount'))
  }
}
</script>

<style>
.micro-app-child {
  height: 100%;
}
</style>