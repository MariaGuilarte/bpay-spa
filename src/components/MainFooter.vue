<template>
  <div style="background: linear-gradient(72.44deg, #3605D3 0%, #6400AE 64.94%);">
    <div class="col-lg-10 mx-auto">
      <div class="row main-footer">
        <div class="col-lg-2 d-flex align-items-center justify-content-center">
          <img src="./../assets/img/logo.png" style="max-width: 200px; width: 100%;" />
        </div>
        <div class="col-lg-3 d-flex d-lg-block justify-content-center">
          <ul class="main-footer-nav footer-nav hidden-icons-nav">
            <li>
              <img src="./../assets/img/server.svg"/>
              <router-link to="index">Home</router-link>
            </li>
            <li>
              <img src="./../assets/img/flag.svg"/>
              <router-link to="counter">Access NFT</router-link>
            </li>
            <li>
              <img src="./../assets/img/globe.svg"/>
              <router-link to="presale">Pre Sale</router-link>
            </li>
            <li>
              <img src="./../assets/img/blockpay.svg"/>
              <router-link to="publicsale">Public Sale</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 d-flex justify-content-center footer-center-column">
          <ul class="main-footer-nav">
            <li>
              <a href="#">contacto@blockpay.mx</a>
            </li>
            <li>
              <a href="#">Centros Comerciales Desarrollo Atlixcayotl int. 403, Atlixcáyotl 3192, Puebla, México.</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 d-flex justify-content-center align-items-center flex-column">
          <div class="cta-container">
            <a href="#" class="btn-cta">
              Connect Wallet
            </a>
          </div>
          <ul class="social-nav">
            <li>
              <a href="#">
                <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.60739 6.74958L5.91768 4.57886H3.97361V3.16789C3.97361 2.57434 4.24591 1.99435 5.11662 1.99435H6V0.145845C6 0.145845 5.19578 0 4.42955 0C2.82744 0 1.77942 1.04127 1.77942 2.92369V4.57886H0V6.74958H1.77942V12H3.97045V6.74958H5.60422H5.60739Z"
                    fill="white" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.947 1.07996C11.5673 1.23764 11.1458 1.33173 10.7327 1.39531C10.9281 1.3648 11.2156 1.04436 11.33 0.912116C11.5059 0.713752 11.6511 0.487412 11.732 0.243271C11.7432 0.225469 11.7516 0.200038 11.732 0.184779C11.7069 0.174606 11.6874 0.179693 11.6678 0.189865C11.21 0.413661 10.7354 0.576422 10.2302 0.690863C10.1883 0.701036 10.1576 0.690863 10.1297 0.667975C10.0878 0.624742 10.0487 0.584052 10.0041 0.550991C9.79191 0.385687 9.56301 0.25853 9.30619 0.161891C8.96842 0.0372768 8.59994 -0.0161291 8.23704 0.00421603C7.88252 0.0245611 7.53637 0.116114 7.22372 0.266159C6.90828 0.416204 6.62913 0.624742 6.40581 0.873969C6.17411 1.13337 6.00383 1.44109 5.91729 1.76661C5.83355 2.07942 5.83913 2.38968 5.89217 2.70757C5.90054 2.76098 5.89217 2.76606 5.84192 2.76098C3.86274 2.49395 2.22691 1.85053 0.89536 0.46961C0.836738 0.408575 0.806032 0.408575 0.758576 0.474697C0.177941 1.26816 0.459884 2.54481 1.18568 3.17297C1.28338 3.25689 1.38108 3.34081 1.48995 3.41711C1.45087 3.42474 0.967939 3.37642 0.535255 3.17297C0.476633 3.13991 0.448718 3.15771 0.443135 3.21874C0.437552 3.30521 0.443135 3.38405 0.459884 3.4756C0.571545 4.28177 1.18289 5.02691 2.02313 5.31683C2.12363 5.35498 2.2325 5.38804 2.34136 5.40584C2.15154 5.44399 1.95334 5.47196 1.40621 5.43127C1.33921 5.41856 1.3113 5.45162 1.33921 5.51011C1.74956 6.53245 2.64006 6.83763 3.30444 7.01056C3.39376 7.02582 3.48309 7.02582 3.57242 7.04362C3.56684 7.05125 3.56126 7.05125 3.55567 7.05888C3.33514 7.3666 2.57027 7.59294 2.21295 7.70738C1.56532 7.91338 0.85907 8.00747 0.17515 7.94644C0.0662806 7.93118 0.0411569 7.93372 0.0132418 7.94644C-0.0174648 7.96424 0.0104503 7.98713 0.0439485 8.01256C0.183524 8.09648 0.3231 8.17023 0.468259 8.24144C0.903735 8.45252 1.35596 8.61783 1.83052 8.73735C4.28147 9.35279 7.03948 8.90012 8.87909 7.2369C10.3223 5.92973 10.8304 4.12664 10.8304 2.32102C10.8304 2.24981 10.9225 2.21166 10.9755 2.17351C11.3524 1.91666 11.6539 1.60894 11.9358 1.26561C12 1.18932 12 1.12065 12 1.09268V1.08251C12 1.05453 12 1.06216 11.9498 1.08251L11.947 1.07996Z"
                    fill="white" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./../assets/img/instagram.svg">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>