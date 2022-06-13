import TomSelect from 'tom-select'
import 'tom-select/dist/css/tom-select.bootstrap4.css'
// import earthData from '../data/earth.json'
import '../style.css'
import Sketch from './Sketch'

const countries = {}

const width = 1000,
  height = 500

let sketch = null

const select = new TomSelect(document.getElementById('countries'), {
  plugins: ['dropdown_input'],
  placeholder: 'Select a country...',
  onChange: (e) => {
    sketch.focusCountry(countries[e])
  }
})

const init = async () => {
  const options = []

  const countriesData = (await import('../assets/data/countries.json')).default

  countriesData.forEach((el) => {
    options.push({
      text: el.name.common,
      value: el.cca3
    })
    countries[el.cca3] = el.capitalInfo.latlng
  })

  select.addOptions(options)

  sketch = new Sketch({
    dom: document.getElementById('sketch')
  })
}

init()

let earthData = null

function latlngToGlobalXY(lat, lng, p0, p1) {
  const radius = 1
  //Calculates x based on cos of average of the latitudes
  let x = radius * lng * Math.cos((p0.lat + p1.lat) / 2)
  //Calculates y based on latitude
  let y = radius * lat
  return { x, y }
}

export const visibilityForCoordinate = async (lat, lang) => {
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

  const [redIndex, greenIndex, blueIndex] = getColorIndicesForCoord(x, y)

  if (earthData === null) {
    earthData = (await import('../assets/data/earth.json')).default
  }

  const red = earthData[redIndex]
  const green = earthData[greenIndex]
  const blue = earthData[blueIndex]

  if (red === 0 || green === 0 || blue === 0) return true

  return false
}
