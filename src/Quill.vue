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
      quill: undefined      // Quill instance
    }
  },

  created () {
    // DMX Webclient TODO: why is this component sometimes instantiated in detail panel "info" mode?
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

  // Note: we can't use a "value" watcher to synchronize Quill content, by calling setHTML(), as this might fire
  // an "input" event, causing an endless cycle (at least if app utilizes 2-way bindung through v-model).

  methods: {

    setHTML (html) {
      // Note: convert() is internal Quill API.
      // We want set content w/o changing focus/selection.
      const delta = this.quill.clipboard.convert({html})
      this.quill.setContents(delta)
    },

    focus () {
      this.quill.focus()
    }
  }
}
</script>
