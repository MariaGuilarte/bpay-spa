<script setup>
  import { onMounted, ref } from 'vue';
  onMounted(()=>{
    currentItem.value = items.value[0]
  })
  const currentItem = ref( null )
  const items = ref([
    {
      title: {
        icon: 'server.svg',
        text: 'Pre Sale Access NFT Mint'
      },
      description: "To offer a fair token presale, participants must mint a Presale Access NFT and stake it before buying $BPAY. There are 4 tiers and the max buy allowed depends on the tier of the staked NFT.",
      stats: [
        {
          icon: 'avax.svg',
          text: '2.5 AVAX'
        },
        {
          icon: 'arrow_top.svg',
          text: 'MAX: 5'
        }
      ]
    },
    {
      title: {
        icon: 'flag.svg',
        text: 'Pre Sale Starts'
      },
      description: "To be unlocked",
      stats: [
        {
          icon: 'dollar.svg',
          text: '0.2 USD'
        },
        {
          icon: 'arrow_top.svg',
          text: 'Max: NFT Rarity'
        }
      ]
    },
    {
      title: {
        icon: 'globe.svg',
        text: 'Public Sale Starts'
      },
      description: "To be unlocked",
      stats: [
        {
          icon: 'dollar.svg',
          text: '0.30 USD'
        },
        {
          icon: 'arrow_top.svg',
          text: 'Max: Unlimited'
        },
      ]
    }
  ])
</script>

<template>
  <div class="row footer slideInRight">
    <div class="col-lg-4">
      <ul class="footer-nav">
        <li
          v-for="item in items"
          :class="{active: item == currentItem }"
          @click="currentItem = item">
          <img :src="`/${ item.title.icon }`" alt="">
          <span>
            {{ item.title.text }}
          </span>
        </li>
      </ul>
    </div>
    <div class="col-lg-4">
      <p v-if="currentItem">
        {{ currentItem.description }}
      </p>
    </div>
    <div class="col-lg-4">
      <div class="plan-feature-stats" v-if="currentItem">
        <div v-for="stat in currentItem.stats">
          <img :src="`/${ stat.icon }`" alt="">
          <span style="white-space: nowrap;">
            {{ stat.text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>