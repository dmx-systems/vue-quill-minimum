<template>
  <div ref="container"></div>
</template>

<script>
import Quill from 'quill'

var cssReady    // a promise resolved once CSS is loaded

export default {

  props: ['value', 'options'],

  created () {
    // DM5 Webclient TODO: why is this component sometimes instantiated in detail panel "info" mode?
    // console.log('quill created', cssReady, this.$store.state.details.mode)
    if (!cssReady) {
      cssReady = this.loadCSS()
      this.$emit('quill-imported', Quill)
    }
  },

  mounted () {
    // console.log('quill mounted')
    cssReady && cssReady.then(() => {
      const quill = new Quill(this.$refs.container, this.options)
      quill.pasteHTML(this.value)
      quill.on('text-change', () => {
        const html = quill.root.innerHTML
        this.$emit('input', html)
      })
      this.$emit('quill-ready', quill)
    })
  },

  methods: {
    loadCSS () {
      const theme = this.options.theme
      if (theme === 'snow') {
        return import('quill/dist/quill.snow.css'   /* webpackChunkName: "quill-snow" */)
      } else if (theme === 'bubble') {
        return import('quill/dist/quill.bubble.css' /* webpackChunkName: "quill-bubble" */)
      } else {
        // TODO: custom themes
        throw Error(`"${theme}" is an unexpected Quill theme`)
      }
    }
  }
}
</script>
