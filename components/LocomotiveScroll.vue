<template>
  <div class="js-locomotive">
    <slot />
  </div>
</template>

<script>
  import VueTypes from 'vue-types'
  export default {
    name: 'LocomotiveScroll',
    props: {
      options: VueTypes.object.def(() => {})
    },
    created () {
      if (process.client) {
        const { default: _LocomotiveScroll } = require('locomotive-scroll')
        this._LocomotiveScroll = _LocomotiveScroll
      }
    },
    mounted () {
      this.locomotive = new this._LocomotiveScroll({
        el: this.$el,
        ...this.options
      })

      this.$emit('init')
    },
    beforeDestroy () {
      this.locomotive?.destroy()
      this.locomotive = undefined
    },
    methods: {
      refreshScroll () {
        this.locomotive.destroy()
        this.locomotive.init()

        this.handleEvents()
      },
      handleEvents () {
        this.locomotive.on('scroll', ev => {
          this.$store.commit('setScroll', {
            isScrolling: this.locomotive.scroll.isScrolling,
            limit: { ...ev.limit },
            ...ev.scroll
          })
          this.$emit('scroll')
        })
      }
    }
  }
</script>

<style lang="scss">
  @import 'locomotive-scroll/dist/locomotive-scroll.css';

  .has-scroll-smooth {
    body {
      overflow: hidden;
      color: #fafafa;
    }

    .js-locomotive {
      min-height: 100%;
      width: 100%;
    }
  }
</style>
