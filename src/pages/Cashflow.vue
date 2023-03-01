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
</template>

<style lang="scss">
.page-cashflow .container {
  @media(min-width: 991px){
    padding: 0;
  }
}
.cashflow-animated-graph {
  height: 307px;
}
@media(min-width: 991px){
  #cashflow-textblock {
    padding: 142px 0 0 60px;
  }
  .cashflow-animated-graph {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: calc(100vh - 160px);
  }
}
</style>