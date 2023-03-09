<template>
  <div class="main-content">
    <video autoplay muted loop class="video-background">
      <source src="./../assets/video/shared.mp4" type="video/mp4">
    </video>

    <div class="container">
      <div class="slideOutTop">
        <div class="row">
          <div class="col-lg-5 offset-lg-1 text-primary text-right text-lg-left slideInRight fadeOut"
            id="shared-textblock">
            <div>
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
  </div>
</template>

<style lang="scss">
#shared-textblock {
  z-index: 10000;
}

@media(max-width: 991px) {
  .page-shared .video-background {
    margin-left: -100vw;
  }
}

@media(min-width: 992px) {
  #shared-textblock {
    padding-top: 96px;
  }
}
</style>