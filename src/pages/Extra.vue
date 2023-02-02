<template>
  <div id="extra-page" class="position-relative">
    <div class="overlay"></div>
    <div class="container main-content position-relative">
      <div class="row">
        <div class="col-lg-5 chicken-wrapper slideOutLeft">
          <img src="./../assets/img/chicken_frame_top.png" class="chicken-frame-top" alt="">
          <img src="./../assets/img/chicken.png" class="chicken" alt="">
          <img src="./../assets/img/chicken_frame.png" class="chicken-frame-bottom" alt="">
        </div>
        <div class="col-lg-6 pe-sm-0 slideInLeft slideOutRight">
          <h1 class="bp-page-title text-lg-right pt-5">Extra</h1>
          <p class="bp-page-subtitle text-lg-right mb-0" style="font-weight: 700">$egg drops and raffles from El Gallinero</p>
          <p class="text-lg-right">
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat.
          </p>

          <div class="tab-panel-wrapper">
            <TabPanel></TabPanel>
          </div>
        </div>
      </div>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>

<script setup>
  import TabPanel from '../components/TabPanel.vue';
  import MainFooter from '../components/MainFooter.vue';
</script>

<style lang="scss">
@media(min-width: 991px){
  .tab-panel-wrapper {
    padding: 0 0 0 50px;
  }
}
#extra-page {
  background: linear-gradient(116.82deg, #3605D3 0%, #3605D3 0.01%, #6400AE 64.39%);
  @media(min-width: 991px){
    padding-top: 100px;
    margin-top: -100px;
  }
}

.overlay {
  height: calc(100vh + 100px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: .2;

  background-image: url('./../assets/img/extra_background.png');
  background-blend-mode: hard-light;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  -webkit-mask-image: linear-gradient(0deg, transparent 0%, #000 15%, #000 80%, transparent 100%);
}

.chicken-wrapper {
  position: relative;
  height: 350px;
  img {
    position: absolute;
  }
}

img.chicken {
  animation: slideInRight 1s forwards;
  width: 300px;
}

img.chicken-frame-top {
  animation: slideInBottomRight 1s forwards;
  top: 0;
  left: 0;
  width: 200px;
}

img.chicken-frame-bottom {
  animation: slideInTopRight 1s forwards;
  bottom: 0;
  left: 0;
  width: 200px;
}
@media(min-width: 991px){
  .chicken-wrapper {
    height: calc(100vh);
  }
  img.chicken,
  img.chicken-frame-top,
  img.chicken-frame-bottom {
    width: initial;
  }
}
</style>