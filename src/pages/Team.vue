<template>
  <div>
    <div class="container main-content text-white position-relative">
      <div class="row justify-content-lg-end">
        <h1 class="bp-page-title p-4 position-relative" style="width: fit-content; overflow: hidden;">
          <div class="slideInBottomRight">
            Meet the Team
          </div>
        </h1>
      </div>
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-md-4 team-member" v-for="n in 16">
          <div class="graphics-container">
            <div class="sparks">
              <img src="./../assets/img/sparks.svg" alt="">
              <img src="./../assets/img/sparks.svg" alt="">
            </div>
            <div class="outer-circle">
              <div class="inner-circle">
                <img src="./../assets/img/4.png" alt="">
              </div>
            </div>
          </div>
          <div class="text-center">
            <h4>Nombre Apellido</h4>
            <p>
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>

<script setup>
import MainFooter from '../components/MainFooter.vue';
</script>

<style lang="scss">
.page-team {
  * {
    box-sizing: border-box;
  }
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.graphics-container {
  @extend .flex-center;
  margin: 0 auto;
  position: relative;

  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, #FD0FF3 0%, rgba(217, 217, 217, 0) 100%, rgba(188, 15, 253, 0) 100%);
}
.sparks {
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 0;
}
.outer-circle {
  @extend .flex-center;
  width: 130px;
  height: 130px;
  border: 8px solid #fff;
  border-radius: 50%;
  z-index: 1;
}

.inner-circle {
  @extend .flex-center;
  height: 100px;
  width: 100px;
  padding: 8px;
  background: rgba(217, 217, 217, 0.01);
  box-shadow: inset 0px -8px 7px rgba(255, 255, 255, 0.75), inset 0px 5px 10px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(11.5px);
  border-radius: 50%;
}

h4 {
  font-size: 1em;
  font-weight: 700;
  margin: 0;
}

p {
  margin: 0;
}
</style>