<template>
  <div>
    <div class="container main-content text-white position-relative">
      <div class="row fadeOut">
        <div class="col-lg-12 col-xxl-10 mx-auto">

          <div class="row justify-content-lg-end">
            <h1 class="bp-page-title p-4 position-relative" style="width: fit-content; overflow: hidden;">
              <div class="slideInBottomRight">
                Meet the Team
              </div>
            </h1>
          </div>

          <div class="row">
            <div class="col-lg-6" v-for="n in 4">
              <div class="team-member d-flex flex-column flex-lg-row ps-lg-5 mb-5">
                <div class="team-member-circle">
                  <img :src="`/team_member_${n}.png`" style="width: 100%;" />
                </div>
                <div class="py-4 ps-lg-4 pe-lg-5">
                  <h4 style="font-size: 1.5em; margin: 0;">
                    Integrante {{ n }}
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                    ut
                    laoreet.
                  </p>
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
import MainFooter from '../components/MainFooter.vue';
</script>

<style lang="scss">
.team-member {
  align-items: center;

  @media(min-width: 991px) {
    align-items: initial;
  }
}

.team-member-circle {
  width: 200px;
  height: 200px;
  padding: 1em;
  border-radius: 100%;
  flex: 0 0 200px;
  overflow: hidden;

  background: rgba(217, 217, 217, 0.01);
  box-shadow: inset 0px 15px 13px rgba(255, 255, 255, 0.5), inset 0px 7px 3px #FFFFFF, inset 0px -23px 15px rgba(96, 68, 144, 0.3), inset 0px 22px 40px rgba(202, 172, 255, 0.3), inset 0px 4px 20px rgba(154, 146, 210, 0.3), inset 0px 1px 20px rgba(227, 222, 255, 0.2);
  backdrop-filter: blur(50px);

  img {
    border-radius: 50%;
  }

  @media(min-width: 991px) {
    width: 225px;
    height: 225px;
    flex-basis: 225px;
  }
}

.page-team {
  padding-bottom: 72px;
}
</style>