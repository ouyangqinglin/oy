<template>
  <common-flex class="posr">
    <client-only>
      <el-menu
          style="min-width: 200px; position: fixed; top: 66px; left: 10px; border: none"
          active-text-color="#00DC82"
          background-color="#fff"
          class="el-menu-vertical-demo"
          default-active="1-1"
          text-color="#222"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>响应式原理</span>
          </template>
          <el-menu-item index="1-1">
            <span>vue2响应式原理</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <span>vue3响应式原理</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <span>diff算法</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span>虚拟dom</span>
        </el-menu-item>
      </el-menu>
    </client-only>
    <nuxt-page></nuxt-page>
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