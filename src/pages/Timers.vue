<script setup>
import TimerFooter from '../components/TimerFooter.vue';
import Timer from '../components/Timer.vue';
</script>

<template>
  <div class="container main-content" style="padding-top: 50px;">
    <div class="col-lg-10 p-0 mx-auto slideOutTop">
      <div class="row slideInTop">
        <div
          v-for="n in 3"
          class="col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <Timer
            :target-date="'2024-01-01'"
            :title="'Pre Sale Starts'">
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