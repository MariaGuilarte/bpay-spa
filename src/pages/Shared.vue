<template>
  <div class="main-content position-relative">

    <video
      autoplay
      muted
      loop
      class="video-background">
      <source src="./../assets/video/shared.mp4" type="video/mp4">
    </video>

    <div class="container position-relative">
      <div class="slideOutTop">
        <div class="row">
          <div class="col-lg-5 offset-lg-1 text-primary text-block slideInRight fadeOut" id="shared-textblock">
            <h1 class="bp-page-title">
              Shared Revenue
            </h1>
            <div class="bp-page-subtitle" style="margin-bottom: 30px;">
              From non-crypto financial services<br> used every day.
            </div>
            <p>
              We charge transaction fees from +1,100 active POS terminals and +10,000 circulating prepaid cards.
            </p>
            <p>
              Business owners and their customers
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@media(min-width: 991px) {
  .shared-vector-container {
    padding-top: 55px;
    display: block;
    position: absolute;
    left: 50%;
    right: 0;
    top: 0;
    bottom: 0;

    img {
      width: 120%;
    }
  }

  #shared-textblock {
    padding-top: 96px;
  }
}
</style>