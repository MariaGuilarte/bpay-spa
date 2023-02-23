<template>
  <div class="container main-content position-relative">

    <video
      autoplay
      muted
      loop
      class="video-background">
      <source src="./../assets/video/index.mp4" type="video/mp4">
    </video>

    <div class="row">
      <div class="col-lg-6 offset-lg-1 text-white index-text-block fadeOut">
        <h1 class="bp-page-title mb-0">
          An ERC20 token
        </h1>

        <div class="bp-page-subtitle mb-2">
          backed by a network of point-of-sale terminals enabling card payments in Mexico
        </div>

        <ul class="ps-3" style="margin-bottom: 3rem; line-height: 2em;">
          <li>Built on Avalanche C-chain</li>
          <li>Powers our institutional subnet</li>
          <li>Decentralized storage for our financial data</li>
          <li>POS terminals connected to the VISA network</li>
          <li>Real yield for our validators</li>
        </ul>

        <div class="d-flex flex-column flex-lg-row align-items-center" style="margin-bottom: 3rem;">
          <div class="cta-container">
            <a href="#" class="btn-cta">
              Lite Paper
            </a>
          </div>
          <div class="cta-container">
            <a href="#" class="btn-cta">
              buy $BPAY
            </a>
          </div>
        </div>

        <div style="font-weight: 500">
          Contract:
        </div>
        <span style="font-weight: 300;">
          <a href="https://snowtrace.io/token/0x8CcEE641C3D937dC89D1d94fe4D8051624042Fcf" class="text-white contract-link">
            0x8CcEE641C3D937dC89D1d94fe4D8051624042Fcf
          </a>
        </span>
      </div>
    </div>
  </div>
</template>