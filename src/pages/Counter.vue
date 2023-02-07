<script setup>
import { computed } from 'vue';
import { useNow } from '@vueuse/core';

const now = useNow()
const until = dayjs('2023-02-30')
const remaining = computed(() => until.isBefore(now.value) ? dayjs.duration(0) : dayjs.duration(until.diff(now.value)))
</script>

<template>
  <div class="main-content position-relative">

    <img
      class="fadeOut fadeIn"
      src="./../assets/img/counter.png" style="position: absolute; left: 0; top: 0; bottom: 0; height: 100%;"
    />

    <div class="container position-relative">
      <div class="row py-100 fadeIn slideOutRight">
        <div class="col-lg-10 mx-auto text-lg-right">
          <h1 class="bp-page-title">
            Pre Access NFT Mints
          </h1>
          <p class="text-white mb-3">
            {{ until.format('DD MMMM YYYY, HH:mm') }} EST
          </p>
        </div>
        <div class="row">
          <div class="col-lg-7 ms-lg-auto singleton-timer-wrapper">
            <div class="singleton-timer">
              <div class="underlay"></div>
              <div class="timer-block">
                <div class="number">{{ String( Math.floor( remaining.asDays() ) ).padStart(2, '0') }}</div>
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
          <div class="col-lg-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>