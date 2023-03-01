<script setup>
import { onMounted, ref } from 'vue';
onMounted(() => {
  currentItem.value = items.value[0]
})
const currentItem = ref(null)
const items = ref([
  {
    icon: 'fish.svg',
    title: 'Fish',
    value1: '1200',
    value2: '2,500.00',
    badge: 'fish.png',
  },
  {
    icon: 'dolphin.svg',
    title: 'Dolphin',
    value1: '600',
    value2: '10,000.00',
    badge: 'dolphin.png',
  },
  {
    icon: 'shark.svg',
    title: 'Shark',
    value1: '180',
    value2: '30,000.00',
    badge: 'shark.png',
  },
  {
    icon: 'whale.svg',
    title: 'Whale',
    value1: '20',
    value2: '130,000.00',
    badge: 'whale.png',
  },
])
</script>

<template>
  <div class="row slideOutLeft">
    <div class="col-lg-6">
      <div class="table py-4">
        <div v-for="item in items" class="item" :class="{ active: currentItem == item }" @click="currentItem = item">
          <div class="td">
            <div class="bg">
              <div>
                <img :src="`/${item.icon}`" style="width: 100%;" />
              </div>
              <div style="flex: 0 1 auto;">
                {{ item.title }}
              </div>
            </div>
          </div>
          <div class="td">
            <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.215 0C5.83617 0 3.07167 2.7645 3.07167 6.14333V9.215H0V21.5017H18.43V9.215H15.3583V6.14333C15.3583 2.7645 12.5938 0 9.215 0ZM9.215 3.07167C10.9351 3.07167 12.2867 4.4232 12.2867 6.14333V9.215H6.14333V6.14333C6.14333 4.4232 7.49487 3.07167 9.215 3.07167Z"
                fill="#fff" />
            </svg>
            <div class="bg">
              {{ item.value1 }}
            </div>
          </div>
          <div class="td">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 0V18.43H18.43V0H0ZM2.30375 2.30375H16.1263V9.215L13.8225 6.91125L11.5188 9.215L16.1263 13.8225V16.1263H13.8225L4.6075 6.91125L2.30375 9.215V2.30375Z"
                fill="#fff" />
            </svg>
            <div class="bg">
              {{ item.value2 }}
            </div>
          </div>
        </div>
      </div>
      <div class="cta-container mx-auto">
        <a href="#" class="btn-cta px-5">
          <b>MINT</b>
        </a>
      </div>
    </div>

    <div class="col-lg-4 offset-lg-1">
      <div class="plan-card" v-if="currentItem">
        <div class="plan-overlay"></div>
        <img :src="`/${currentItem.badge}`" style="width: 100%;" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.plan-card {
  position: relative;
  transition: transform .4s;
  &:hover {
    transform: scale(1.1);
    .plan-overlay {
      opacity: 1;
    }
  }
}
.plan-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  mix-blend-mode: overlay;
  filter: blur(16.5px);
  opacity: 0;
  transition: opacity .4s;
}

.item, .td, .bg {
  overflow: hidden;
}
.item {
  svg {
    transition: all .5s;
    position: absolute;
    left: 1em;
    top: 100%;
    z-index: 1;
  }

  &.active,
  &:hover {
    .td .bg {
      padding-left: 1em;
    }
    svg {
      top: 50%;
      transform: translateY(-50%);
      path { fill: #fff; }
    }
  }
}
</style>