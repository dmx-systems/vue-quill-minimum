<template>
  <div ref="container"></div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

let init    // boolean

export default {

  props: ['value', 'options'],

  created () {
    // DM5 Webclient TODO: why is this component sometimes instantiated in detail panel "info" mode?
    // console.log('quill created', init, this.$store.state.details.mode)
    if (!init) {
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
  }
}
</script>
