<template>
  <common-flex class="nuxt-layout">
    <Header/>
    <common-flex style="flex-grow: 1" justify="center">
      <nuxtPage />
    </common-flex>
  </common-flex>
</template>


<style lang="scss">
.nuxt-layout {
  padding: 20px;
  background-color: #fff;
}
</style>