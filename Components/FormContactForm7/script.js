import $ from 'jquery'

class FormContactForm7 extends window.HTMLElement {
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
    this.$buttonReserve = $('.button-reserve', this)
    this.$buttonClose = $('.button-close', this)
    this.$form = $('.container-form', this)
  }

  bindFunctions () {
    this.showForm = this.showForm.bind(this)
    this.hideForm = this.hideForm.bind(this)
  }

  bindEvents () {
    this.$buttonReserve.on('click', this.showForm)
    this.$buttonClose.on('click', this.hideForm)
  }

  showForm (e) {
    this.$form.fadeToggle()
  }

  hideForm (e) {
    this.$form.fadeToggle()
  }
}

window.customElements.define('flynt-form-contact-form-7', FormContactForm7, { extends: 'div' })
