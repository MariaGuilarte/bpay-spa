<template>
  <div id="extra-page" class="position-relative">
    <div class="overlay"></div>
    <div class="container main-content position-relative">
      <div class="row">
        <div class="col-lg-5 chicken-wrapper slideOutLeft">
          <img src="./../assets/img/chicken_frame_top.png" class="chicken-frame-top" alt="">
          <img src="./../assets/img/chicken.png" class="chicken" alt="">
          <img src="./../assets/img/chicken_frame.png" class="chicken-frame-bottom" alt="">
        </div>
        <div class="col-lg-6 pe-sm-0 slideInLeft slideOutRight">
          <h1 class="bp-page-title text-lg-right pt-5">Extra</h1>
          <p class="bp-page-subtitle text-lg-right mb-0" style="font-weight: 700">
            $egg drops and raffles from El Gallinero
          </p>

          <div class="tab-panel-wrapper">
            <div class="tabpanel">
              <div class="tabpanel-header">
                <div class="tabpanel-tab" v-for="tab in tabs" @click="activeTab = tab"
                  :class="{ active: activeTab == tab, leaving: activeTab != tab }">
                  <div class="tabpanel-tab-content">
                    <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.977 34.6287C15.7568 34.4487 15.5046 34.2942 15.3228 34.0837C14.8928 33.5857 14.3995 33.4363 13.7519 33.6536C13.4959 33.7394 13.1964 33.7062 12.7705 33.7381C12.9492 33.5855 12.9965 33.5232 13.0603 33.4939C14.1115 33.0125 14.3908 32.2518 13.8983 31.2119C13.3007 29.9575 12.8166 28.6223 11.4685 27.8716C10.881 27.5445 10.2806 27.2388 9.54964 26.851C9.49012 28.2143 9.5095 29.3748 9.98824 30.4904C10.2256 31.0434 10.6177 31.3498 11.2819 31.3352C11.7153 31.3257 12.1509 31.411 12.5664 31.6345H10.515C10.6999 32.7849 12.1414 32.4413 12.6865 33.5051C11.6504 33.0258 10.793 32.676 9.98322 32.244C8.65665 31.5364 8.67051 31.5145 7.80434 32.6336C7.72923 32.7307 7.63422 32.8136 7.54846 32.903C7.47903 32.8815 7.4096 32.8599 7.34017 32.8384C7.54891 32.0048 7.75765 31.1712 7.96827 30.3301C7.51397 30.3818 7.07916 30.4313 6.53617 30.4932C7.22063 30.0361 8.04357 29.7637 8.31004 29.2341C8.60081 28.6561 8.37611 27.8398 8.37611 27.1017C4.69615 26.5147 3.31358 23.8456 2.32278 20.9014C2.13036 20.3296 2.36706 19.583 2.54166 18.9516C2.71629 18.3201 2.73394 17.7714 2.20757 17.3247C1.61952 16.8256 1.41228 16.2056 1.35865 15.4796C1.33645 15.1791 1.21197 14.7955 0.988666 14.6141C0.00504679 13.815 -0.25453 13.4549 0.254434 12.4086C0.765613 11.3578 0.716371 10.4004 0.544401 9.30276C0.362089 8.13915 0.412003 6.90596 0.603816 5.73994C0.698897 5.16195 1.32276 4.65374 1.74027 4.13845C1.99072 3.82934 2.2757 3.53147 2.59765 3.29392C2.96029 3.02635 3.37737 2.82432 3.7809 2.61143C3.89014 2.5538 4.05318 2.58993 4.16244 2.53232C5.35896 1.90151 6.04842 1.98037 6.80356 3.03955C7.23114 3.63929 7.54917 4.35382 7.73102 5.06052C7.95317 5.92381 8.00651 6.83103 8.08493 7.72313C8.15544 8.52521 8.49409 9.1697 9.2017 9.58732C10.9691 10.6304 12.9068 10.8973 14.9226 10.5678C16.4809 10.313 17.3025 9.1812 17.9991 7.95695C18.1782 7.64219 18.3207 7.30776 18.4711 6.97859C19.4759 4.77869 20.5877 2.66969 23.0902 1.92946C23.0117 1.44798 22.9482 1.05814 22.8846 0.668289C22.9663 0.649462 23.0479 0.630634 23.1296 0.611807C23.2614 0.713614 23.3932 0.815421 23.5818 0.961064C23.6475 0.66581 23.6987 0.435649 23.7923 0.0149368C23.9346 0.362183 24.004 0.531482 24.1033 0.773815C24.1709 0.570303 24.2134 0.442268 24.269 0.275123C24.3491 0.450152 24.4096 0.582481 24.5127 0.807601C24.7774 0.519281 24.9941 0.283115 25.254 0C25.2843 0.273228 25.308 0.48626 25.3385 0.761664C25.4855 0.663893 25.5884 0.595382 25.7582 0.482412C25.737 0.699398 25.7207 0.867097 25.6984 1.09615C25.8844 1.06056 26.0526 1.0284 26.2635 0.988038C26.2836 1.17139 26.3069 1.38412 26.3304 1.59885C26.5047 1.57417 26.6501 1.55358 26.5796 1.56357C27.0843 2.58491 27.5448 3.51667 28 4.43787C27.5392 4.37418 27.0182 4.30217 26.3696 4.21251C26.618 5.14263 26.5811 5.89257 25.7968 6.31522C25.429 6.51343 24.9289 6.48606 24.4888 6.56092C24.4342 6.47884 24.3796 6.39676 24.325 6.31468C24.2565 6.54097 24.1047 6.77743 24.1333 6.99187C24.2911 8.17876 24.444 9.36987 24.6937 10.5409C24.9279 11.6388 25.4407 12.6996 25.5444 13.8015C25.7121 15.5831 25.8164 17.4014 25.6321 19.1741C25.4209 21.2061 24.0468 22.7683 21.6543 23.1034C20.8778 23.2122 20.1245 23.9031 19.4984 24.468C18.5452 25.328 17.7716 26.3774 16.4889 26.8539C16.394 26.8891 16.2496 26.971 16.2458 27.0374C16.1799 28.2066 15.1219 28.3232 14.1477 28.7962C14.5841 29.9711 14.9668 31.1882 15.4894 32.3474C15.8894 33.2346 16.2253 33.2769 17.1526 32.9194C17.4338 32.811 17.7513 32.7892 18.0523 32.7277C18.0764 32.8065 18.1005 32.8853 18.1246 32.9641C17.8591 33.0636 17.5935 33.163 17.1446 33.3311C18.2111 33.5267 19.0945 33.6887 19.9779 33.8506C19.9609 33.9621 19.944 34.0735 19.927 34.1849C18.7482 34.1251 17.5694 34.0653 16.371 34.0044C16.2957 34.2063 16.217 34.4175 16.1382 34.6287H15.977Z"
                        fill="white" />
                    </svg>
                    <span>
                      {{ tab.tabTitle }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="tabpanel-body" :style="{ backgroundColor: activeTab?.background }" v-if="activeTab">
                <div class="tabpanel-column">
                  <div>
                    <h4>Total kg in the Barn</h4>
                    <div class="tabpanel-valuebox" style="background: #A72FFF;">
                      {{ activeTab.valuebox1 }}
                    </div>
                  </div>

                  <div>
                    <h4>Total kg in the Barn</h4>
                    <div class="tabpanel-valuebox tabpanel-valuebox-small" style="background: #6400AE;">
                      {{ activeTab.valuebox2 }}
                    </div>
                  </div>
                </div>
                <div class="tabpanel-column">
                  <div class="tabpanel-showcase">
                    <div class="tabpanel-valuebox"
                      :style="{ fontSize: (String(activeTab.valuebox3).length > 6) ? '2em' : '2.5em' }">
                      <span>
                        {{ activeTab.valuebox3 }}
                      </span>
                      <img src="/egg.svg" v-show="activeTab.showCaseIcon == 'egg'">
                      <img src="/seed.svg" v-show="activeTab.showCaseIcon == 'seed'">
                    </div>
                    <h4>
                      {{ activeTab.showCaseLabel }}
                    </h4>
                    <p style="font-weight: 300">
                      {{ activeTab.showCaseText }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>

<script setup>
import TabPanel from '../components/TabPanel.vue';
import MainFooter from '../components/MainFooter.vue';
import { ref, onMounted } from 'vue';

const activeTab = ref(null)
const tabs = ref([
  {
    background: '#8334C6',
    tabTitle: 'CHIKN',
    valuebox1: '478 kg',
    valuebox2: '365,822 kg',
    valuebox3: '40,091',
    showCaseLabel: 'Available egg to claim',
    showCaseText: 'Est. 127,750 egg a day',
    showCaseIcon: 'egg'
  },
  {
    background: '#BC0FFD',
    tabTitle: 'ROOSTR',
    valuebox1: '364 kg',
    valuebox2: '291,240 kg',
    valuebox3: '244,409',
    showCaseLabel: 'Available fert to claim',
    showCaseText: 'Est. 127,750 fert a day',
    showCaseIcon: 'seed'
  },
])

onMounted(()=> activeTab.value = tabs.value[0])
</script>

<style lang="scss">
@media(min-width: 991px) {
  .tab-panel-wrapper {
    padding: 0 0 0 50px;
  }
}

#extra-page {
  background: linear-gradient(116.82deg, #3605D3 0%, #3605D3 0.01%, #6400AE 64.39%);

  @media(min-width: 991px) {
    padding-top: 100px;
    margin-top: -100px;
  }
}

.overlay {
  height: calc(100vh + 100px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: .2;

  background-image: url('./../assets/img/extra_background.png');
  background-blend-mode: hard-light;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  -webkit-mask-image: linear-gradient(0deg, transparent 0%, #000 15%, #000 80%, transparent 100%);
}

.chicken-wrapper {
  position: relative;
  height: 350px;

  img {
    position: absolute;
  }
}

img.chicken {
  animation: slideInRight 1s forwards;
  width: 300px;
}

img.chicken-frame-top {
  animation: slideInBottomRight 1s forwards;
  top: 0;
  left: 0;
  width: 200px;
}

img.chicken-frame-bottom {
  animation: slideInTopRight 1s forwards;
  bottom: 0;
  left: 0;
  width: 200px;
}

@media(min-width: 991px) {
  .chicken-wrapper {
    height: calc(100vh);
  }

  img.chicken,
  img.chicken-frame-top,
  img.chicken-frame-bottom {
    width: initial;
  }
}
</style>