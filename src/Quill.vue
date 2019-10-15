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

  data () {
    return {
      quill: undefined    // quill instance
    }
  },

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
    this.quill = new Quill(this.$refs.container, this.options)
    this.setHTML(this.value)
    this.quill.on('text-change', () => {
      this.$emit('input', this.quill.root.innerHTML)
    })
    this.$emit('quill-ready', this.quill)
  },

  methods: {

    setHTML (html) {
      const delta = this.quill.clipboard.convert(html)
      this.quill.setContents(delta)
    },

    focus () {
      this.quill.focus()
    }
  }
}
</script>
