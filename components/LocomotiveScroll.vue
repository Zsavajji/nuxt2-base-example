<template>
  <div class="js-locomotive">
    <slot />
  </div>
</template>

<script>
  import LocomotiveScroll from 'locomotive-scroll'

  export default {
    name: 'LocomotiveScroll',
    props: {
      options: {
        type: Object,
        default: () => {}
      }
    },
    beforeDestroy () {
      this.locomotive?.destroy()
      this.locomotive = undefined
    },
    methods: {
      init () {
        this.locomotive = new LocomotiveScroll({
          el: this.$el,
          ...this.options
        })

        this.$emit('init')
        console.log('Locomotive inserted!')
      },
      refreshScroll () {
        this.locomotive.destroy()
        this.locomotive.init()

        this.handleEvents()
        console.log('Locomotive refreshed!')
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
  @import '~locomotive-scroll/dist/locomotive-scroll.css';

  .has-scroll-smooth {
    body {
      overflow: hidden;
    }

    .js-locomotive {
      min-height: 100%;
      width: 100%;
    }
  }
</style>
