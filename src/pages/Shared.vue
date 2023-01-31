<template>
  <div class="main-content position-relative">

    <div class="shared-vector-container">
      <img src="./../assets/img/shared.gif" class="slideInTop slideOutTop" />
    </div>

    <div class="container">
      <div class="slideOutTop">
        <div class="row">
          <div class="col-lg-5 offset-lg-1 text-primary text-block slideInRight" id="shared-textblock">
            <h1 class="bp-page-title">
              Shared Revenue
            </h1>
            <div class="bp-page-subtitle" style="margin-bottom: 30px;">
              With Avalanche Validators that participate in our<br> subnet.
            </div>
            <p>
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.shared-vector-container {
  overflow: hidden;
  img {
    width: 100%;
  }
}

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
    padding-left: 43px;
  }
}
</style>