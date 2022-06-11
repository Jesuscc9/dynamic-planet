import TomSelect from 'tom-select'
import 'tom-select/dist/css/tom-select.bootstrap4.css'
import '../style.css'
import Sketch from './Sketch'
const countries = {}

var sketch = null

const select = new TomSelect(document.getElementById('countries'))

const fetchData = () => {
  const options = []

  fetch('../data/countries.json')
    .then((e) => e.json())
    .then((data) => {
      data.forEach((el) => {
        options.push({
          text: el.name.common,
          value: el.cca3
        })
        countries[el.cca3] = el.capitalInfo.latlng
      })

      select.addOptions(options)
    })
}

fetchData()

const form = document.getElementById('country-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)

  for (const [name, value] of data) {
    if (name === 'country') {
      sketch.focusCountry(countries[value])
    }
  }
})

function latlngToGlobalXY(lat, lng, p0, p1) {
  const radius = 1
  //Calculates x based on cos of average of the latitudes
  let x = radius * lng * Math.cos((p0.lat + p1.lat) / 2)
  //Calculates y based on latitude
  let y = radius * lat
  return { x, y }
}

let width = 0,
  height = 0,
  data = []

export const getImageData = () => {
  const img = new Image()
  img.src = '../assets/img/earth-map.jpg'
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  img.onload = function () {
    canvas.setAttribute('width', img.width)
    canvas.setAttribute('height', img.height)

    ctx.drawImage(img, 0, 0)
    img.style.display = 'none'
    canvas.style.display = 'none'

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    width = imageData.width
    height = imageData.height
    data = imageData.data

    sketch = new Sketch({
      dom: document.getElementById('app')
    })

    console.log({ sketch })
  }
}

getImageData()

export const visibilityForCoordinate = (lat, lang) => {
  const getColorIndicesForCoord = (x, y) => {
    const red = y * (width * 4) + x * 4
    return [red, red + 1, red + 2, red + 3]
  }

  const p0 = {
    scrX: 0, // Minimum X position on screen
    scrY: 0, // Minimum Y position on screen
    lat: 90, // Latitude
    lng: -180 // Longitude
  }

  //bottom-right reference point
  const p1 = {
    scrX: width, // Maximum X position on screen
    scrY: height, // Maximum Y position on screen
    lat: -90, // Latitude
    lng: 180 // Longitude
  }

  // Calculate global X and Y for top-left reference point
  p0.pos = latlngToGlobalXY(p0.lat, p0.lng, p0, p1)
  // Calculate global X and Y for bottom-right reference point
  p1.pos = latlngToGlobalXY(p1.lat, p1.lng, p0, p1)

  let pos = latlngToGlobalXY(lat, lang, p0, p1)
  //Calculate the percentage of Global X position in relation to total global width
  pos.perX = (pos.x - p0.pos.x) / (p1.pos.x - p0.pos.x)
  //Calculate the percentage of Global Y position in relation to total global height
  pos.perY = (pos.y - p0.pos.y) / (p1.pos.y - p0.pos.y)

  //Returns the screen position based on reference points

  const x = Math.round(p0.scrX + (p1.scrX - p0.scrX) * pos.perX)
  const y = Math.round(p0.scrY + (p1.scrY - p0.scrY) * pos.perY)

  const [r, g, b, a] = getColorIndicesForCoord(x, y)

  const red = data[r]
  const green = data[g]
  const blue = data[b]
  const alpha = data[a]

  if (red === 0 || green === 0 || blue === 0) return true

  return false
}
