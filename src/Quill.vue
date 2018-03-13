<template>
  <div ref="container"></div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

var emitted = false

export default {

  props: ['value', 'options'],

  created () {
    // TODO: why is this component sometimes instantiated in detail panel "info" mode?
    console.log('quill created', emitted, this.$store.state.details.mode)
    // emit only once
    if (!emitted) {
      this.$emit('quill-imported', Quill)
      emitted = true
    }
  },

  mounted () {
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
