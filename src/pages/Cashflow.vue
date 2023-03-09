<template>
  <div class="main-content position-relative">

    <img src="./../assets/img/cashflow.png" alt="" class="cashflow-animated-graph fadeIn" />

    <div class="container">
      <div class="row">
        <div id="cashflow-textblock"
          class="col-lg-5 offset-lg-6 text-primary text-lg-right slideInTop slideOutRight">
          <div>
            <h1 class="bp-page-title">
              Positive Cash Flow
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
.cashflow-animated-graph {
  height: 307px;
}

@media(min-width: 991px) {
  .page-cashflow .container:not(.bp-navbar) {
    padding: 0;
  }

  #cashflow-textblock {
    padding: 142px 0 0 60px;
  }

  .cashflow-animated-graph {
    display: block;
    position: absolute;
    top: 100px;
    bottom: 0;
    left: 0;
    height: calc(100vh - 160px);
  }
}
</style>