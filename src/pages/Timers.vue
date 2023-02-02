<script setup>
import TimerFooter from '../components/TimerFooter.vue';
import Timer from '../components/Timer.vue';
const timers = [
  {
    title: 'Pre Sale Access NFT Mint',
    statLeft: '2.5 AVAX',
    statRight: 'Max: 5',
    icon: 'server.svg',
    statLeftIcon: 'avax.svg'
  },
  {
    title: 'Pre Sale <br> Starts',
    statLeft: '0.20 USD',
    statRight: 'Max: NFT Rarity',
    icon: 'flag.svg',
    statLeftIcon: 'dollar.svg'
  },
  {
    title: 'Public Sale <br> Starts',
    statLeft: '0.30',
    statRight: 'Max: Unlimited',
    icon: 'globe.svg',
    statLeftIcon: 'dollar.svg'
  }
]
</script>

<template>
  <div class="container main-content" style="padding-top: 50px;">
    <div class="col-lg-10 p-0 mx-auto slideOutTop">
      <div class="row slideInTop">
        <div
          v-for="timer in timers"
          class="col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <Timer
            :target-date="'2024-01-01'"
            :title="timer.title"
            :icon="timer.icon"
            :statLeft="timer.statLeft"
            :statRight="timer.statRight"
            :statLeftIcon="timer.statLeftIcon">
          </Timer>
          <div class="cta-container">
            <a href="#" class="btn-cta cristal">Connect Wallet</a>
          </div>
        </div>
      </div>

      <TimerFooter></TimerFooter>
    </div>
  </div>
</template>