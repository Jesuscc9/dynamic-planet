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
