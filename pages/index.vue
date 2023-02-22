<template>
  <div class="pages-index">
    <client-only>
      <el-carousel :interval="5000" :loop="true" trigger="click" height="5.4rem">
        <el-carousel-item v-for="item in list" :key="item" class="swiper-item posr">
          <img :src="item" alt="" class="posa">
        </el-carousel-item>
      </el-carousel>
    </client-only>
    <div class="pages-index-title" >
      <div class="pages-index-move">终有绿洲摇曳在沙漠。<br>
        我相信自己， 生来犹如璀璨的夏日之花，<br>
        不凋不败，妖冶如火， 承受心跳的负荷和呼吸的累赘， 乐此不疲。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagesIndex'
}
</script>

<script setup>
import swiperT from '@img/index/swiper-2.png'
import swiperH from '@img/index/swiper-3.png'
import swiperF from '@img/index/swiper-4.png'
const list = [
  swiperT,
  swiperH,
  swiperF
]
</script>

<style lang="scss">
.pages-index {
  width: 100%;
  &-title {
    margin: 40px 0 0 20px;
    font-size: 24px;
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
  .el-carousel {
    width: 100%;
  }
  .swiper-item {
    img {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>