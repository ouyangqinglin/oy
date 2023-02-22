<script>
export default {
  name: 'common-flex',
  render () {
    return h(
        `${this.tag}`,
        {
          style: this.style,
          class: ['common-flex', this.classes, this.noShrink && 'no-shrink', this.noGrow && 'no-grow'],
          props: this.$attrs
        },
        this.slots()
    )
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    auto: Boolean,
    noShrink: Boolean,
    noGrow: Boolean,
    direction: String,
    justify: String,
    align: String,
    wrap: String,
    span: [Number, String],
    self: String,
    inline: Boolean
  },
  computed: {
    slots() {
      return this.$slots.default
    },
    style () {
      let styles = {}
      let prefix = ['-ms-', '']
      for (let i = 0; i < prefix.length; i++) {
        if (this.auto) styles[`${prefix[i]}flex`] = '1'
        if (this.span) {
          styles[`${prefix[i]}flex`] = typeof this.span === 'number'
              ? `0 0 ${(this.span * 100).toFixed(2)}%`
              : `0 0 ${this.span}`
        }
        if (this.direction) styles[`${prefix[i]}flex-direction`] = this.direction
        if (this.wrap) styles[`${prefix[i]}flex-wrap`] = this.wrap
      }
      return styles
    },
    classes () {
      let c = []
      switch (this.justify) {
        case 'space-between':
          c.push('jcsb')
          break
        case 'space-around':
          c.push('jcsa')
          break
        case 'flex-start':
          c.push('jcfs')
          break
        case 'flex-end':
          c.push('jcfe')
          break
        case 'center':
          c.push('jcc')
          break
      }
      switch (this.align) {
        case 'flex-start':
          c.push('aifs')
          break
        case 'flex-end':
          c.push('aife')
          break
        case 'center':
          c.push('aic')
          break
        case 'baseline':
          c.push('aib')
          break
        case 'stretch':
          c.push('ais')
          break
      }
      switch (this.self) {
        case 'flex-start':
          c.push('asfs')
          break
        case 'flex-end':
          c.push('asfe')
          break
        case 'center':
          c.push('asc')
          break
        case 'baseline':
          c.push('asb')
          break
        case 'stretch':
          c.push('ass')
          break
      }
      if (this.inline) c.push('if')
      return c
    }
  }
}
</script>

<style lang="scss">
.common-flex {
  display: flex;
  > a:not([class*=common-flex]) { display: block }
  &.if {
    display: inline-flex;
  }
  &.jc {
    &sb { justify-content: space-between }
    &sa { justify-content: space-around }
    &fs { justify-content: flex-start }
    &fe { justify-content: flex-end }
    &c { justify-content: center }
  }
  &.ai {
    &fs { align-items: flex-start }
    &fe { align-items: flex-end }
    &c { align-items: center }
    &b { align-items: baseline }
    &s { align-items: stretch }
  }
  &.as {
    &fs { align-self: flex-start }
    &fe { align-self: flex-end }
    &c { align-self: center }
    &b { align-self: baseline }
    &s { align-self: stretch }
  }
}
</style>
