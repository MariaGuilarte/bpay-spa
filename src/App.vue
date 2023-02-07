<script setup>
import { now } from '@vueuse/shared';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const router = useRouter()
const route = useRoute()
const lastScroll = ref(null)

const routes = [
  'index',
  'cashflow',
  'shared',
  'timer',
  'about',
  'shared2',
  'team',
  'counter',
  'participation',
  'airdrop',
  'extra',
]

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

function onScroll(event) {
  if ((now() - lastScroll.value) < 1000) return
  let target = event.target
  let isTop = (target.scrollTop == 0)
  let isBottom = (target.scrollTop > 0) && Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) < 1

  if (isBottom) {
    let nextPageIndex = routes.indexOf(route.name) + 1
    if (nextPageIndex > routes.length - 1) return
    lastScroll.value = now()
    router.push({ name: routes[nextPageIndex] })
  }
  else if (isTop) {
    let prevPageIndex = routes.indexOf(route.name) - 1
    if (prevPageIndex < 0) return
    lastScroll.value = now()
    router.push({ name: routes[prevPageIndex] })
  }
}

onMounted(() => dayjs.extend(window.dayjs_plugin_duration))
</script>

<template>
  <div :class="{
    'theme-flat': $route.meta.lighttheme,
    'theme-gradient': !$route.meta.lighttheme,
    [`page-${$route.name}`]: true,
    'page': true
  }" @scroll="onScroll">
    <div id="grid">
      <div class="container">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
          <div class="col-lg-1"></div>
        </div>
      </div>
    </div>
    <Navbar></Navbar>
    <router-view v-slot="{ Component }">
      <Transition>
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </div>
</template>

<style lang="scss">
@import './assets/scss/app.scss';

.testnav {
  background: rgba(0, 0, 0, .5);
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  color: #fff;
  z-index: 10001;

  li a {
    color: #fff;
  }
}

#grid {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
  display: none;

  .col-lg-1 {
    border-right: 1px solid red;
    height: 100vh;

    &:first-child {
      border-left: 1px solid red;
    }
  }
}
</style>
