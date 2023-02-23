<template>
  <div class="comp-common-header">
    <client-only>
      <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
      >
        <img class="comp-common-header-logo" src="@img/index/favicon.png" alt="">
        <div class="flex-grow" />
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>面试系列</template>
          <el-menu-item index="2-1">Vue</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">nuxt</el-menu-item>
        <div class="w40"></div>
      </el-menu>
    </client-only>
  </div>
</template>



<script setup>
const routeMap = {
  '1': '/',
  '2-1': '/vuea/meet'
}
const activeIndex = ref('1')
const handleSelect = (e) => {
  console.log(e)
  if (routeMap[e]) navigateTo(routeMap[e])
}
</script>

<style lang="scss">
.comp-common-header {
  padding-top: 15px;
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 520;
  @include nFont(16);
  background-color: rgba(0, 0, 0, .1);
  &-logo {
    margin-top: -12px;
    margin-left: 18px;
    @include wh(50)
  }
  .el-menu--horizontal {
    //margin-top: 15px;
    height: 36px;
    background-color: rgba(0, 0, 0, .0);
    border: none;
    @include nFont(16 600 46);
    .el-menu-item, .el-sub-menu, .el-sub-menu__title, .is-active {
      color: #222 !important;
      &:hover {
        background-color: rgba(0, 0, 0, .0);
      }
    }
    .el-menu-item {
      background-color: rgba(0, 0, 0, .0) !important;
    }
    .is-active {
      background-color: rgba(0, 189, 111, 1) !important;
      line-height: 36px;
      border-radius: 4px;
      border-bottom: 2px solid #fff;
      color: #fff !important;
    }
    .el-sub-menu.is-active .el-sub-menu__title{
      border-bottom: none;
      color: #fff !important;

    }
  }
  .flex-grow {
    flex-grow: 1;
  }
  .w40 {
    width: 40px;
  }
}
</style>