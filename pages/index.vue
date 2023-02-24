<template>
  <div class="pages-index">
    <client-only>
      <el-carousel :interval="5000" :loop="true" trigger="click" height="540px">
        <el-carousel-item v-for="item in list" :key="item" class="swiper-item posr">
          <img :src="item" alt="" class="posa">
        </el-carousel-item>
      </el-carousel>
      <div class="pages-index-title" >
        <div class="pages-index-move">已有的事，后必再有。已行的事，后必再行</div>
      </div>
      <div class="article">
        <template v-for="(i, k) of articList">
          <nuxt-link to="/vuea/meet"><el-link type="success">{{ i }}</el-link></nuxt-link>
          <el-divider>
            <el-icon><star-filled /></el-icon>
          </el-divider>
        </template>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'pagesIndex'
}
</script>

<script setup>
import { StarFilled } from '@element-plus/icons-vue'
import swiperT from '@img/index/swiper-2.png'
import swiperH from '@img/index/swiper-3.png'
import swiperF from '@img/index/swiper-4.png'
const list = [
  swiperT,
  swiperH,
  swiperF
]
const articList = [
    '多希望话题不断园游会永不打烊：2022年面试经历 2022-08-29',
    '冷空气跟琉璃在清晨很有透明感：2022年面试经历 2022-08-29',
    '鸡蛋糕跟你嘴角果酱我都想要尝：2022年面试经历 2022-08-29'
]
</script>

<style lang="scss">
.pages-index {
  width: 100%;
  &-title {
    margin: 40px auto;
    text-align: center;
    font-size: 24px;
  }
  &-move {
    animation: moveTo linear .5s forwards;
  }
  @keyframes moveTo {
    from {
      transform: translateY(70px);
      opacity: 0;
    }
    to {
      transform: translateY(-10px);
      opacity: .9;
    }
  }
  .el-carousel {
    width: 100%;
  }
  .swiper-item {
    background-color: #eae7e4;
    img {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .article {
    margin-left: 180px;
    width: 466px;
  }
  .el-icon svg {
    color: #00BD6FFF;
  }
  .el-link.el-link--success {
    color: #00BD6FFF;
  }
}
</style>