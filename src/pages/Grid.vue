<template>
  <div id="grid">
    <div class="container">
      <div class="row">
        <div class="col-lg-1" v-for="n in 12"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#grid {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.col-lg-1 {
  border-right: 1px solid #fff;
  height: 100vh;
  &:first-child {
    border-left: 1px solid #fff;
  }
}
</style>