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
  'statLeft': String,
  'statRight': String,
  'icon': String,
  'statLeftIcon': String,
})

const now = useNow()
const until = dayjs('2023-02-30')
const remaining = computed(() => until.isBefore(now.value) ? dayjs.duration(0) : dayjs.duration(until.diff(now.value)))
</script>

<template>
  <div class="timer-wrapper">
    <div class="bp-timer mb-5">
      <div class="underlay"></div>
      <div class="bp-timer-title px-lg-4">
        <span v-html="title">
        </span>
        <img :src="'/' + icon"/>
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
          <img :src="`/${statLeftIcon}`"/>
          <span>{{  statLeft  }}</span>
        </div>
        <div class="col-lg-6">
          {{ statRight }}
        </div>
      </div>
    </div>
  </div>
</template>