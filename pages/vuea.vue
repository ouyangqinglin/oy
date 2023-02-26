<template>
  <common-flex class="posr">
    <client-only>
      <el-menu
          style="min-width: 200px; position: fixed; top: 66px; left: 10px; border: none"
          active-text-color="#00DC82"
          background-color="#fff"
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="#222"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-menu-item index="1">
          <span>2022年面试经历</span>
        </el-menu-item>
<!--        <el-sub-menu index="1">-->
<!--          <template #title>-->
<!--            <h3>响应式原理</h3>-->
<!--          </template>-->
<!--          <el-menu-item index="1-1">-->
<!--            <h4>vue2响应式原理</h4>-->
<!--          </el-menu-item>-->

<!--        </el-sub-menu>-->
<!--        <el-menu-item index="2">-->
<!--          <span>diff算法</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="3">-->
<!--          <span>虚拟dom</span>-->
<!--        </el-menu-item>-->
      </el-menu>
    </client-only>
    <nuxt-page></nuxt-page>
    <client-only><el-backtop :right="100" :bottom="100" /></client-only>
  </common-flex>
</template>

<script>
export default {
  name: "vuea"
}
</script>

<script setup>
const handleOpen = () => {

}
const handleClose = () => {

}
</script>

<style scoped>

</style>