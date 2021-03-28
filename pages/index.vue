<template>
  <div>
    <LocomotiveScroll
      ref="scroller"
      :options="locomotiveOpts">
      <div class="container">
        <div class="head">
          <Logo />
          <h1 class="title">
            locomotive-test
          </h1>
          <nuxt-link to="test">
            Go to Testpage
          </nuxt-link>
        </div>
        <div class="foot">
          <h2 class="title">
            Hi footer
          </h2>
        </div>
      </div>
    </LocomotiveScroll>
  </div>
</template>

<script>
  export default {
    created () {
      this.locomotiveOpts = {
        smooth: true,
        direction: 'vertical',
        smartphone: {
          smooth: true,
          direction: 'vertical'
        },
        tablet: {
          smooth: true,
          direction: 'vertical'
        }
      }
    },
    async mounted () {
      console.log("This is the PAGE's own MOUNTED")
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 300vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .head,
  .foot {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

</style>
