<template>
  <div class="main-content text-white position-relative">
    <div class="container position-relative" style="z-index: 1;">
      <div class="row">
      <div class="col-lg-10 mx-auto slideInBottom slideOutTop">
        <h1 class="bp-page-title mb-0 text-center text-lg-left">
          About us
        </h1>
      </div>

      <div class="text-center col-lg-8 mx-auto slideInTop fadeOutInstant">
        <div class="about-logo-vector">
          <img src="./../assets/img/blockpay_logo_vector.png" style="max-width: 100%;" alt="">
        </div>
      </div>

      <div class="col-lg-10 mx-auto px-lg-5 text-center fadeOutInstant">
        <p class="bp-page-subtitle mt-0">
          Everything you need, in one place.
        </p>
      </div>
    </div>
    </div>
    <div class="about-underlay" style="opacity: 1;">
      <img src="./../assets/img/about_pos.png" class="slideInBottom slideOutTop about-pos">
      <img src="./../assets/img/about_gradient_cube.png" class="slideInRight fadeOutInstant about-gradient-cube"/>
      <img src="./../assets/img/about_outlined_cube.png" class="d-none d-lg-block slideInLeft fadeOutInstant about-outlined-cube"/>
      <img src="./../assets/img/about_outlined_cube_small.png" class="d-none d-lg-block  slideInRight fadeOutInstant about-outlined-cube-small"/>
    </div>
  </div>
</template>

<style lang="scss">
.page-about .main-content {
  @media(max-width: 991px){
    padding-top: 160px;
    height: 101vh;
    .about-underlay {
      top: 160px;
    }
  }
  @media(min-width: 992px){
    padding: 150px;
  }
}
.about-underlay {
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  img {
    display: block;
  }
}
.about-pos {
  max-width: 200px;
  display: none;
  margin: 0 auto;
}
.about-gradient-cube {
  position: absolute;
  left: 180px;
  top: 370px;
}
.about-outlined-cube {
  position: absolute;
  top: 110px;
  right: 200px;
}
.about-outlined-cube-small {
  position: absolute;
  top: 150px;
  left: 455px;
}
.v-leave-active {
  .fadeOutInstant {
    display: none !important;
  }
}

@media(min-width: 991px){
  .page-about .bp-title {
    padding: 40px 0 0 30px;
    margin-bottom: 74px;
  }
  .page-about .bp-subtitle {
    font-size: 2em;
    font-weight: 600;
  }
  .about-logo-vector {
    padding: 70px 0 100px 0;
  }
  .about-pos {
    max-width: inherit;
    margin: 0 auto;
    display: block;
  }  
}
</style>