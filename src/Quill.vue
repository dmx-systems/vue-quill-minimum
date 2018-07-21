<template>
  <div ref="container"></div>
</template>

<script>
import Quill from 'quill'

console.log('Vue Quill Minimum 2018/07/21')

var init    // boolean

export default {

  props: ['value', 'options'],

  created () {
    // DM5 Webclient TODO: why is this component sometimes instantiated in detail panel "info" mode?
    // console.log('quill created', init, this.$store.state.details.mode)
    if (!init) {
      this.loadCSS()
      this.$emit('quill-imported', Quill)
      init = true
    }
  },

  mounted () {
    // console.log('quill mounted')
    const quill = new Quill(this.$refs.container, this.options)
    quill.pasteHTML(this.value)
    quill.on('text-change', () => {
      const html = quill.root.innerHTML
      this.$emit('input', html)
    })
    this.$emit('quill-ready', quill)
  },

  methods: {
    // TODO: split CSS chunk? At the moment quill.core.css is contained twice in the CSS chunk.
    loadCSS () {
      const theme = this.options.theme
      if (theme === 'snow') {
        require('quill/dist/quill.snow.css')
      } else if (theme === 'bubble') {
        require('quill/dist/quill.bubble.css')
      } else {
        // TODO: custom themes
        throw Error(`"${theme}" is an unexpected Quill theme`)
      }
    }
  }
}
</script>
