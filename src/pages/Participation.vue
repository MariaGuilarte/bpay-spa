<template>
<div class="container main-content position-relative">
  <div class="row fadeIn">
    <div class="col-lg-8 mx-auto text-primary px-0" style="padding-top: 50px;">
      <div class="text-center slideOutRight">
          <h1 class="bp-page-title">
        Fair Participation
        </h1>
        <p class="bp-page-subtitle">
          2,000 NFTs granting access to the Blockpay token presale, with $BPAY max bid depending on 4 different tiers.
        </p>
      </div>
    </div>

    <div class="col-lg-10 text-primary mx-auto">
      <ParticipationTable></ParticipationTable>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.plan-card {
  background: #6400AE;
  padding: 2.5em;
  border-top-right-radius: 2.5em;
  border-bottom-left-radius: 2.5em;
}
.item {
  display: flex;
  height: 70.19px;
  box-sizing: border-box;
}
.item .td {
  flex: 1 0;
  text-align: center;
  position: relative;
  font-size: .9em;
  @media(min-width: 991px){
    font-size: 1em;
  }
}
.item .td .bg {
  position: absolute;
  top: .6em;
  bottom: .6em;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  background: #FAEBFF;
  transition: all .25s;
}
.item .td:first-child .bg {
  color: #fff;
  font-weight: 700;
  left: 0;
  background-color: rgba(188, 15, 253, 0.75) !important;
  
  > div:first-child {
    transition: all .4s;
    width: 24px;
    height: 24px;
    margin: 0 .5rem;
    position: relative;
    img {
      opacity: .15;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  @media(min-width: 991px){
    right: 1.5em;
  }
}
.item .td:last-child .bg {
  right: 0;
  @media(min-width: 991px){
    left: 1.5em;
  }
}

.item.active .td:first-child .bg > div:first-child {
  img { opacity: 1; }
  width: 40px;
}

.item.active .td .bg {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1.5em;
  font-weight: 700;
  color: #fff;
}
.item .td:first-child .bg {
  justify-content: flex-start;
  text-align: left;
}
.item.active .td:first-child .bg {
  background: #BC0FFD !important;
  border-bottom-left-radius: 25px;
}
.item.active .td:last-child .bg {
  background: #D566FF !important;
}
.item.active .td:nth-child(2) .bg {
  background: #C939FF !important;
}

.item:not(.active):hover .td .bg {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1.25em;
  font-weight: 700;
}
.item:not(.active):hover .td:first-child .bg {
  border-bottom-left-radius: 25px;
  font-size: 20px;
  > div:first-child {
    width: 40px;
    img {
      opacity: 1;
    }
  }
}
.item:hover .td:last-child .bg {
  background: rgba(213, 102, 255, 0.75) !important;
}
.item:hover .td:nth-child(2) .bg {
  background: rgba(201, 57, 255, 0.75) !important;
}
</style>

<script setup>
import ParticipationTable from '../components/ParticipationTable.vue';
</script>