<template>
  <nav class="bp-navbar container" :class="{'active': !collapse}">
    <div class="bp-navbar-brand" style="display: inline-block;" @click="$router.push('/')">
      <svg width="172" height="68" viewBox="0 0 172 68" fill="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect x="31" y="16" width="130" height="37.8808" fill="url(#pattern0)" />
        <circle cx="37.5" cy="19.5" r="1.5" fill="#fff" />
        <circle cx="151" cy="30" r="1" fill="#fff" />
        <circle cx="146.5" cy="39.5" r="1.5" fill="#fff" />
        <circle cx="33" cy="28" r="1" fill="#fff" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_131_3729" transform="translate(-0.10309 -1.54911) scale(0.000372048 0.00127037)" />
          </pattern>
          <image id="image0_131_3729" width="3234" height="3234"
            :xlink:href="`/logo${!$route.meta.lighttheme ? '' : '_morado'}.png`" />
        </defs>
      </svg>
    </div>
    <ul class="bp-navbar-nav" :class="{'active': !collapse}">
      <li>
        <router-link to="counter" class="bp-nav-link" @click="collapse=!collapse">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.474407 0C0.19975 0 0 0.19975 0 0.474407V8.73908C0 9.4382 0.549313 9.98752 1.24844 9.98752H16.2297C16.9288 9.98752 17.4782 9.4382 17.4782 8.73908V0.474407C17.4782 0.19975 17.2784 0 17.0037 0H0.449438L0.474407 0ZM0 12.2597V19.5256C0 19.8002 0.19975 20 0.474407 20H17.0287C17.3034 20 17.5031 19.8002 17.5031 19.5256V12.2597C17.1036 12.4095 16.7041 12.4844 16.2547 12.4844H1.27341C0.82397 12.4844 0.424469 12.3845 0.0249688 12.2597H0ZM13.7328 14.9813C14.432 14.9813 14.9813 15.5306 14.9813 16.2297C14.9813 16.9288 14.432 17.4782 13.7328 17.4782C13.0337 17.4782 12.4844 16.9288 12.4844 16.2297C12.4844 15.5306 13.0337 14.9813 13.7328 14.9813Z"
              fill="white" />
          </svg>
          <span>Access NFT</span>
        </router-link>
      </li>
      <li>
        <router-link to="counter" class="bp-nav-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V20H2.5V0H0ZM5 0V10H10V12.5H20L15 7.575L20 2.5H12.5V0H5V0Z" fill="white" />
          </svg>
          <span>Pre sale</span>
        </router-link>
      </li>
      <li>
        <router-link to="counter" class="bp-nav-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0C4.475 0 0 4.475 0 10C0 15.525 4.475 20 10 20C15.525 20 20 15.525 20 10C20 4.475 15.525 0 10 0ZM10 2.5C10.825 2.5 11.6 2.725 12.35 2.975C11.825 3.475 11.225 3.925 11.325 4.375C11.425 4.825 13.05 4.7 13.05 5.625C13.05 6.3 12 6.5 12.725 7.275C13.6 8.15 11.125 9.725 11.075 10.875C11 12.95 13.175 13.3 14.9 13.3C15.95 13.3 16.225 13.8 16.15 14.4C14.8 16.325 12.5 17.525 9.975 17.525C9.025 17.525 8.15 17.3 7.325 16.975C7.875 15.875 6.625 13.7 5.45 13C4.875 12.425 3.65 12.65 2.95 12.375C2.725 11.7 2.5 11.025 2.475 10.275C2.55 10.15 2.675 10.05 2.875 10.05C3.35 10.05 4 11 4.35 10.9C4.8 10.8 2.5 7.625 3.575 7C4.075 6.7 5.075 7.975 4.75 6.6C4.45 5.325 5.65 5.9 6.4 5.575C7.05 5.3 7.525 4.55 6.725 4.1C6.575 4.025 6.4 3.85 6.175 3.625C7.3 2.95 8.6 2.525 10 2.525V2.5ZM15.775 5.225C16.225 5.775 16.575 6.375 16.875 7.025V7.1C16.775 7.275 16.6 7.375 16.325 7.65C15.625 8.35 15.525 7.125 15.225 6.875C14.9 6.575 13.725 6.925 13.575 6.55C13.4 6.1 14.825 5.5 15.775 5.225Z"
              fill="white" />
          </svg>
          <span>Public sale</span>
        </router-link>
      </li>
      <li style="width: 230px;" class="d-flex justify-content-center ms-lg-5">
        <a href="#" class="btn-cta">
          Connect Wallet
        </a>
      </li>
    </ul>
    <div class="bp-navbar-toggler hamburger" @click="collapse = !collapse">
      <span class="main-nav-toggle" :class="{'active': !collapse}">
        <i>Menu</i>
      </span>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';
const collapse = ref(true)

watch(collapse, (newValue, oldValue)=>{
  if( oldValue ){
    return document.querySelector('#app').classList.add('navbarActive')
  }
  return document.querySelector('#app').classList.remove('navbarActive')
})
</script>