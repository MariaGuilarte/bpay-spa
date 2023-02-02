<script setup>
import { onMounted } from 'vue';
import {useRouter, useRoute} from 'vue-router'
import Navbar from './components/Navbar.vue'

const router = useRouter()
const route  = useRoute()

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

function onScroll(event){
  let target = event.target
  let isBottom = (target.scrollTop > 0) &&  Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) < 1
  if( !isBottom ) return
  let nextPageIndex = routes.indexOf( route.name ) + 1
  if( nextPageIndex > routes.length - 1 ) return
  router.push({name: routes[ nextPageIndex ]})
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
    @scroll="onScroll">
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

  .col-lg-1 {
    border-right: 1px solid red;
    height: 100vh;

    &:first-child {
      border-left: 1px solid red;
    }
  }
}
</style>
