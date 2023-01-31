<script setup>
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue'
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

function onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
  console.log('Scrolling over')
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log('You reached the bottom')
  }
}

onMounted(() => dayjs.extend(window.dayjs_plugin_duration))
</script>

<template>
  <div
    :class="{
      'theme-flat': $route.meta.lighttheme,
      'theme-gradient': !$route.meta.lighttheme,
      [`page-${ $route.name }`]: true,
      'page': true
      }"
    style="min-height: 100vh;">
    <!-- <div id="grid">
      <div class="container">
        <div class="row">
          <div class="col-lg-1" v-for="n in 12"></div>
        </div>
      </div>
    </div> -->
    <Navbar></Navbar>
    <router-view v-slot="{ Component }" @scroll="onScroll">
      <Transition>
        <component :is="Component"></component>
      </Transition>
    </router-view>

    <ol class="testnav">
      <li v-for="route in routes">
        <router-link :to="{ path: route }">{{ route }}</router-link>
      </li>
    </ol>

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

  .col-lg-1 {
    border-right: 1px solid red;
    height: 100vh;

    &:first-child {
      border-left: 1px solid red;
    }
  }
}
</style>
