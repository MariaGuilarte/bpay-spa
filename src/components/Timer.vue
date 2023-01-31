<script setup>
import { computed, onMounted } from 'vue';
import { useNow } from '@vueuse/core';

const { targetDate } = defineProps({
  'targetDate': {
    type: String,
    default: '2023-01-30'
  },
  'title': {
    type: String,
    default: ''
  },
})

const now = useNow()
const until = dayjs('2023-02-30')
const remaining = computed(() => until.isBefore(now.value) ? dayjs.duration(0) : dayjs.duration(until.diff(now.value)))
</script>

<template>
  <div class="timer-wrapper">
    <div class="bp-timer mb-5">
      <div class="underlay"></div>
      <div class="bp-timer-title">
        <span style="white-space: nowrap;">
          {{ title }}
        </span>
      </div>
      <div class="bp-timer-date">
        {{ until.format('DD MMMM YYYY, HH:mm') }} EST
      </div>
      <div class="bp-timer-timer">
        <div>
          <div class="number">
            {{ String( Math.floor( remaining.asDays() ) ).padStart(2, '0') }}
          </div>
          <div class="label">
            days
          </div>
        </div>
        <div>
          <div class="number">
            {{ String(remaining.$d.hours).padStart(2, '0') }}
          </div>
          <div class="label">
            hours
          </div>
        </div>
        <div>
          <div class="number">
            {{ String(remaining.$d.minutes).padStart(2, '0') }}
          </div>
          <div class="label">
            min.
          </div>
        </div>
        <div>
          <div class="number">
            {{ String(remaining.$d.seconds).padStart(2, '0') }}
          </div>
          <div class="label">
            sec.
          </div>
        </div>
      </div>

      <div class="bp-timer-stats">
        <div class="col-lg-6">
          2.5 AVAX
        </div>
        <div class="col-lg-6">
          MAX: 5
        </div>
      </div>
    </div>
  </div>
</template>