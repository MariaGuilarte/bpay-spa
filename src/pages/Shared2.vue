<template>
  <div class="main-content position-relative" style="padding-bottom: 150px;">

    <div class="shared2-animated-graph d-none d-lg-block">
      <img src="./../assets/img/cards.png" class="slideOutTop slideInLeft" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-7 offset-lg-1 slideOutTop shared-blockpay-logo">
          <img src="./../assets/img/blockpay_logo_vector_2.png" alt="">
        </div>

        <div class="shared2-textblock col-lg-6 offset-lg-1 slideInRight fadeOut">
          <h1 class="bp-page-title mt-0" style="margin-bottom: 20px;">
            Shared Revenue
          </h1>
          <p class="bp-page-subtitle" style="margin-bottom: 30px;">
            With Avalanche Validators that participate in our subnet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>

    <div class="shared-underlay fadeOutInstant d-none d-lg-block" style="opacity: 1;">
      <img src="./../assets/img/about_gradient_cube.png" class="introduceGradientCube shared-gradient-cube" />
      <img src="./../assets/img/about_outlined_cube.png" class="introduceOutlinedCube shared-outlined-cube" />
      <img src="./../assets/img/about_outlined_cube_small.png"
        class="introduceOutlinedCubeSmall shared-outlined-cube-small" />
    </div>
  </div>
</template>

<style lang="scss">
.shared2-animated-graph {
  text-align: center;
  img {
    width: 50%;
  }
  
  @media(min-width: 991px){
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    img {
      width: initial;
      margin-top: 50px;
    }
  }
}

.shared-blockpay-logo {
  display: none;
  img { max-width: 100%; }
}

@media(min-width: 991px) {
  .shared-blockpay-logo {
    padding: 96px 0 0 45px;
    display: block;
  }
  .shared2-textblock {
    padding-left: 45px;
  }
}

.shared-underlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 1;

  img {
    display: block;
  }
}

.shared-gradient-cube {
  position: absolute;
  left: 10px;
  top: 570px;
}

.shared-outlined-cube {
  position: absolute;
  top: 50px;
  right: 415px;
}

.shared-outlined-cube-small {
  position: absolute;
  top: 30px;
  left: 456px;
}

.v-enter-active {
  .introduceOutlinedCube {
    animation: introduceOutlinedCube .5s ease-out forwards;
  }

  .introduceOutlinedCubeSmall {
    animation: introduceOutlinedCubeSmall .5s ease-out forwards;
  }

  .introduceGradientCube {
    animation: introduceGradientCube .5s ease-out forwards;
  }

  .shared-blockpay-logo {
    animation: introduceBlockpayLogo .5s ease-out forwards;
  }
}

@keyframes introduceGradientCube {
  from {
    left: 180px;
    top: 370px;
  }

  to {
    left: 10px;
    top: 570px;
  }
}

@keyframes introduceOutlinedCubeSmall {
  from {
    left: 455px;
    top: 150px;
  }

  to {
    left: 456px;
    top: 30px;
  }
}

@keyframes introduceOutlinedCube {
  from {
    top: 110px;
    right: 200px;
  }

  to {
    top: 50px;
    right: 415px;
  }
}

@keyframes introduceBlockpayLogo {
  from {
    transform: scale(1.195) translateY(110px) translateX(127px);
  }

  to {
    transform: none;
  }
}

.shared-blockpay-logo {
  transform-origin: left;
}
</style>