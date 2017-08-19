'use strict'

if (typeof exports !== 'undefined') {
  const pkg = require('./package.json')
  exports.version = pkg.version
  exports.create = create
} else if (typeof window !== 'undefined') {
  window.SvgViewerCreate = create
}

function create (svgElement) {
  if (svgElement == null) return null
  return new SvgViewer(svgElement)
}

class SvgViewer {
  constructor (svgElement) {
    this._scale = 1
    this._scaleIncr = 0.01
    this._xlateX = 0
    this._xlateY = 0
    this._lastX = 0
    this._lastY = 0

    this._svg = svgElement
    this._svg.addEventListener('mousedown', (event) => this._mouseDown(event), false)
    this._svg.addEventListener('mousemove', (event) => this._mouseMove(event), false)
    this._svg.addEventListener('wheel', (event) => this._wheel(event), false)
  }

  _wheel (event) {
    if (event == null) event = window.event
    if (!event.shiftKey) return

    const newScale = this._svg.currentScale + event.deltaY * this._scaleIncr
    if (newScale < 0.0001) return

    this._svg.currentScale = newScale

    // also translate around current point in image, hmmm

    event.stopPropagation()
    event.preventDefault()
    console.log(`wheel deltaY: ${event.deltaY}, deltaMode: ${event.deltaMode}`)
  }

  _mouseDown (event) {
    if (event == null) event = window.event

    this._lastX = event.clientX
    this._lastY = event.clientY
    console.log(`mouseDown`)
  }

  _mouseMove (event) {
    if (event == null) event = window.event
    if ((event.buttons & 1) === 0) return
    console.log(`mouseMove: buttons: ${event.buttons}`)

    const diffX = event.clientX - this._lastX
    const diffY = event.clientY - this._lastY
    this._lastX = event.clientX
    this._lastY = event.clientY

    this._svg.currentTranslate.x += diffX
    this._svg.currentTranslate.y += diffY
    console.log(`mouseMove: currentTranslate: {x: ${this._svg.currentTranslate.x}, y: ${this._svg.currentTranslate.y}}`)
  }
}
