<template>
  <div class="main-content position-relative">

    <img src="./../assets/img/cashflow.png" alt="" class="cashflow-animated-graph fadeIn"/>

    <div class="container">
      <div class="row">
        <div id="cashflow-textblock" class="col-lg-5 offset-lg-6 text-primary text-block text-lg-right slideInTop slideOutRight">
          <h1 class="bp-page-title">
            Positive Cash Flow
          </h1>
          <div class="bp-page-subtitle" style="margin-bottom: 30px;">
            From non-crypto financial services used every day.
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
</template>

<style lang="scss">
.cashflow-animated-graph {
  height: 307px;
}
@media(min-width: 991px){
  #cashflow-textblock {
    padding: 142px 50px 0 0;
  }
  .cashflow-animated-graph {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
  }
}
</style>