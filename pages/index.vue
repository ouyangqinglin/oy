<template>
  <div class="pages-index">
    <div class="pages-index-title" >
      <h1 class="pages-index-move">终有绿洲摇曳在沙漠。<br>
        我相信自己， 生来犹如璀璨的夏日之花，<br>
        不凋不败，妖冶如火， 承受心跳的负荷和呼吸的累赘， 乐此不疲。</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagesIndex'
}
</script>

<script setup>

</script>

<style lang="scss">
.pages-index {
  &-title {
    margin: 200px 0 0 120px;
  }
  &-move {
    animation: moveTo linear 500ms forwards;
  }
  @keyframes moveTo {
    from {
      transform: translateY(70px);
      opacity: 0;
    }
    to {
      transform: translateY(-0px);
      opacity: 1;
    }
  }
}
</style>