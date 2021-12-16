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
    this.$buttonInfo = $('.toggle-info', this)
    this.$buttonAbout = $('.toggle-about', this)
    this.$info = $('.info', this)
    this.$about = $('.about', this)
  }

  bindFunctions () {
    this.showInfo = this.showInfo.bind(this)
    this.showAbout = this.showAbout.bind(this)
  }

  bindEvents () {
    this.$buttonInfo.on('click', this.showInfo)
    this.$buttonAbout.on('click', this.showAbout)
  }

  showInfo (e) {
    this.$info.fadeToggle()
    this.$about.fadeOut()
  }

  showAbout (e) {
    this.$about.fadeToggle()
    this.$info.fadeOut()
  }
}

window.customElements.define('flynt-block-homepage', BlockHomepage, { extends: 'div' })
