import $ from 'jquery'

class BlockHomepage extends window.HTMLElement {
  constructor (...args) {
    const self = super(...args)
    self.init()
    return self
  }

  init () {
    this.$ = $(this)
    this.resolveElements()
    this.bindFunctions()
    this.bindEvents()
  }

  resolveElements () {
    this.$button = $('.toggle', this)
    this.$info = $('.info', this)
  }

  bindFunctions () {
    this.showInfo = this.showInfo.bind(this)
  }

  bindEvents () {
    this.$button.on('click', this.showInfo)
  }

  showInfo (e) {
    this.$info.fadeToggle()
  }
}

window.customElements.define('flynt-block-homepage', BlockHomepage, { extends: 'div' })
