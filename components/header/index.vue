<template>
  <div class="comp-common-header">
    <client-only>
      <el-menu
          style="height: 100%"
          :router="true"
          active-text-color="#222"
          :default-active="defaultRoute"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <header>
          <img class="comp-common-header-avatar" src="@img/index/avatar.jpg" alt="">
          <h3>楼南雨</h3>
        </header>
        <el-menu-item index="/">
          <span>首页</span>
        </el-menu-item>

<!--        <el-sub-menu index="2">-->
<!--          <template #title>-->
<!--            <span>文章系列</span>-->
<!--          </template>-->
<!--          <el-menu-item-group>-->
<!--            <el-menu-item index="/about">Vue</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--        </el-sub-menu>-->

        <el-sub-menu index="3">
          <template #title>
            <span>面试系列</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/argue">Vue面试题</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </client-only>
  </div>
</template>



<script setup>
const route = useRoute()
let defaultRoute = `/${route.name}`
const handleOpen = () => {

}
const handleClose = () => {

}
</script>

<style lang="scss">
.comp-common-header {
  position: sticky;
  top: 20px;
  height: calc(100vh - 40px);
  header {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
  }
  min-width: 241px;
  background-color: #fff;
  &-avatar {
    margin-right: 12px;
    @include wh(60);
    border-radius: 50%;
  }
  .is-active {
    font-weight: 600;
  }
}
</style>