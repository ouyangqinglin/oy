<template>
  <div class="comp-common-header">
    <header>
      <img class="comp-common-header-avatar" src="@img/index/avatar.jpg" alt="">
    </header>
  </div>
</template>



<script  setup>

</script>

<style lang="scss">
.comp-common-header {
  padding: 20px;
  &-avatar {
    @include wh(60);
    border-radius: 50%;
  }
}
</style>