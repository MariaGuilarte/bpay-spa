<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const pageContainer = ref(null)

const router = useRouter()
const route = useRoute()

const currentRouteGroup = computed(()=>{
  if ( route.name == 'default' ){ return routes.group1 }
  if ( route.name == 'base' ){ return routes.group1 }
  if ( routes.group1.includes(route.name) ) { return routes.group1 }
  if ( routes.group2.includes(route.name) ) { return routes.group2 }
  if ( routes.group3.includes(route.name) ) { return routes.group3 }
  return []
})

const routes = {
  group1: [
    'index',
    'cashflow',
    'shared',
    'timer'
  ],
  group2: [
    'about',
    'shared2',
    'team',
  ],
  group3: [
    'counter',
    'participation',
    'airdrop',
    'extra',
  ]
}

var limitedSkipPage;
var goToIndex;

function skipPage(index = 1){
  goToIndex = route.name == 'base' ? 1 : currentRouteGroup.value.indexOf(route.name) + index
  if( (goToIndex < 0) || (goToIndex > currentRouteGroup.value.length - 1)) return
  touchStartedAt = null
  router.push({ name: currentRouteGroup.value[goToIndex] })
}

function throtle(callback, limit = 1000) {
  let locked;
  return (...args) => {
    if (locked) return
    locked = true
    callback(args[0])
    setTimeout(() => locked = false, limit)
  }
}

function onWheel(wheelEvent) {
  if (wheelEvent.deltaY > 0) return
  if( pageContainer.value.scrollTop != 0 ) return
  limitedSkipPage(-1)
}

var touchStartedAt = null;

function onTouchStart(e){
  touchStartedAt = e.changedTouches[0].screenY
}

function touchListener(e) {
  let touchEndAt = Math.round( e.changedTouches[0].screenY )

  if (touchEndAt === touchStartedAt) return;
  if (touchEndAt < touchStartedAt) return;
  if( pageContainer.value.scrollTop == 0 ){
    limitedSkipPage(-1)
  }
}

function onScroll(event) {
  let isTop    = (pageContainer.value.scrollTop == 0)
  let isBottom = Math.abs(pageContainer.value.scrollHeight - pageContainer.value.scrollTop - pageContainer.value.clientHeight) < 1

  if(!isBottom) return
  limitedSkipPage()
}

onMounted(() => {
  dayjs.extend(window.dayjs_plugin_duration)
  limitedSkipPage = throtle(skipPage, 1000)
})
</script>

<template>
  <div ref="pageContainer" :class="{
    'theme-flat': $route.meta.lighttheme,
    'theme-gradient': !$route.meta.lighttheme,
    [`page-${$route.name}`]: true,
    'page': true
  }" @scroll="onScroll"
     @wheel="onWheel"
     @touchstart="onTouchStart"
     @touchmove="touchListener">
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
