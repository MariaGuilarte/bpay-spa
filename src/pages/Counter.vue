<script setup>
import { computed } from 'vue';
import { useNow } from '@vueuse/core';

const now = useNow()
const until = dayjs('2023-02-24')
const remaining = computed(() => until.isBefore(now.value) ? dayjs.duration(0) : dayjs.duration(until.diff(now.value)))
</script>

<template>
  <div class="main-content">
    <video autoplay muted loop class="video-background">
      <source src="./../assets/video/sale.mp4" type="video/mp4">
    </video>

    <div class="container">
      <div class="row">
        <div class="col-lg-6 ms-lg-auto text-lg-right text-column slideInRight slideOutRight">
          <h1 class="bp-page-title">
            Access NFT
          </h1>
          <p class="text-white mb-3" style="font-size: 1.5em;">
            {{ until.format('DD MMMM YYYY') }}
          </p>
          <div class="singleton-timer-wrapper">
            <div class="singleton-timer">
              <div class="underlay"></div>
              <div class="timer-block">
                <div class="number">{{ String(Math.floor(remaining.asDays())).padStart(2, '0') }}</div>
                <div class="label">days</div>
              </div>
              <div class="timer-block">
                <div class="number">{{ String(remaining.$d.hours).padStart(2, '0') }}</div>
                <div class="label">hours</div>
              </div>
              <div class="timer-block">
                <div class="number">{{ String(remaining.$d.minutes).padStart(2, '0') }}</div>
                <div class="label">min.</div>
              </div>
              <div class="timer-block">
                <div class="number">{{ String(remaining.$d.seconds).padStart(2, '0') }}</div>
                <div class="label">sec.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-lg-block col-lg-1"></div>
      </div>
    </div>
  </div>
</template>