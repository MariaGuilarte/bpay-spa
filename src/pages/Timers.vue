<script setup>
import TimerFooter from '../components/TimerFooter.vue';
import MainFooter from '../components/MainFooter.vue';
import Timer from '../components/Timer.vue';
const timers = [
  {
    targetDate: '2023-02-24',
    title: 'Presale Access NFT',
    statLeft: '2.5 AVAX',
    statRight: 'Max: 5',
    icon: 'server.svg',
    statLeftIcon: 'avax.svg',
    ctaText: 'Presale Access'
  },
  {
    targetDate: '2023-03-01',
    title: 'Presale Starts',
    statLeft: '0.20 USD',
    statRight: 'Max: NFT Rarity',
    icon: 'flag.svg',
    statLeftIcon: 'dollar.svg',
    ctaText: 'Presale'
  },
  {
    targetDate: '2023-04-03',
    title: 'Public Sale <br> Starts',
    statLeft: '0.30',
    statRight: 'Max: Unlimited',
    icon: 'globe.svg',
    statLeftIcon: 'dollar.svg',
    ctaText: 'Public Sale'
  }
]
</script>

<template>
  <div class="main-content" style="padding: 150px 0 0 0;">
    <div class="container">
      <div class="col-lg-10 p-0 mx-auto slideOutTop">
        <div class="row slideInTop">
          <div v-for="timer in timers" class="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <Timer
              :target-date="timer.targetDate"
              :title="timer.title"
              :icon="timer.icon"
              :statLeft="timer.statLeft"
              :statRight="timer.statRight"
              :statLeftIcon="timer.statLeftIcon">
            </Timer>
            <div class="cta-container">
              <a href="#" class="btn-cta cristal">
                {{ timer.ctaText }}
              </a>
            </div>
          </div>
        </div>

        <TimerFooter></TimerFooter>
      </div>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>