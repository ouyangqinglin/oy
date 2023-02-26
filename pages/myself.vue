<template>
<div style="width: 100%">
  <client-only>
    <iframe :src="pdf" class="pdf">
      <p>您的浏览器不支持 iframe 标签,请从列表中下载预览</p>
    </iframe>
  </client-only>
</div>
</template>

<script setup>
import pdf from '@img/oy.pdf'
</script>

<style lang="scss">
.pdf {
  width: 100%;
  height: calc(100vh - 64px);
}
</style>