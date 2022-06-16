import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const $ = (el) => document.querySelector(el)

export const $$ = (el) => document.querySelectorAll(el)

export const convertCordsToCartesian = ([lat, lng]) => {
  const phi = lat * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)

  let x = -(Math.cos(phi) * Math.cos(theta))
  let y = Math.sin(phi)
  let z = Math.cos(phi) * Math.sin(theta)

  return { x, y, z }
}

export const importModel = async (path) => {
  const loader = new GLTFLoader()
  return new Promise((resolve, reject) => {
    loader.load(
      path,
      function (gltf) {
        resolve(gltf)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}

let earthData = null

function latlngToGlobalXY(lat, lng, p0, p1) {
  const radius = 1
  //Calculates x based on cos of average of the latitudes
  let x = radius * lng * Math.cos((p0.lat + p1.lat) / 2)
  //Calculates y based on latitude
  let y = radius * lat
  return { x, y }
}

let width = 1000, height = 500, data = null

const getImageData = () => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = '../img/earth-map.jpg'
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
      resolve(data)
    }
  })

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
    earthData = await getImageData()
  }

  const red = earthData[redIndex]
  const green = earthData[greenIndex]
  const blue = earthData[blueIndex]

  if (red === 0 || green === 0 || blue === 0) return true

  return false
}

export function debounce(callback, wait) {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}
