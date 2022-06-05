import * as dat from 'dat.gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import TomSelect from 'tom-select'
import 'tom-select/dist/css/tom-select.bootstrap4.css'
import map from '../assets/img/earth-texture.jpg'
import fragment from '../assets/shader/fragment.glsl?raw'
import vertex from '../assets/shader/vertex.glsl?raw'
import '../style.css'

const angleToRadians = (n) => (n * Math.PI) / 180

const countries = { }

export default class Sketch {
  constructor(options) {
    this.scene = new THREE.Scene()
    this.container = options.dom

    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(0xeeeeee, 1)

    this.container.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    )

    this.camera.position.set(0, 0, 3)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.time = 0

    this.isPlaying = true

    this.country = {
      targetAngle: {
        x: 0,
        y: 0,
        z: 0
      },
      coords: [0, 0]
    }

    this.addObjects()
    this.resize()
    this.render()
    this.setupResize()
  }

  settings() {
    this.settings = {
      progress: 0
    }

    this.gui = new dat.GUI()
    this.gui.add(this.settings, 'progress', 0, 1, 0.01)
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize() {
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight
    this.renderer.setSize(this.width, this.height)
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  focusCountry(country) {
    const [lat, lng] = country

    function convertCordsToCartesian([lat, lng]) {
      const phi = lat * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)

      let x = -(Math.cos(phi) * Math.cos(theta))
      let y = Math.sin(phi)
      let z = Math.cos(phi) * Math.sin(theta)

      return { x, y, z }
    }

    const { x, y, z } = convertCordsToCartesian([lat, lng])

    console.log({ x, y, z })

    this.controls.autoRotate = true
    this.controls.enableDamping = true

    const max = Math.PI / 2 /* maximum rotation in each quadrant */

    let targetAngle = max * Math.abs(z)

    if (x > 0 && z > 0) {
      // Case of first quadrant
      targetAngle = max - targetAngle
    } else if (x > 0 && z < 0) {
      targetAngle = targetAngle + max
    } else if (x < 0 && z < 0) {
      targetAngle = targetAngle + max * 2
    } else {
      targetAngle = targetAngle + max * 3
    }

    const currentAngle = this.controls.getAzimuthalAngle()
    const maxAngle = Math.PI * 2

    const rest = maxAngle - currentAngle - (targetAngle - currentAngle)

    const speed = 20

    this.controls.autoRotateSpeed = -4

    // if (rest < maxAngle / 2) {
    //   this.controls.autoRotateSpeed = speed
    // } else {
    //   this.controls.autoRotateSpeed = speed * -1
    // }

    this.controls.minAzimuthAngle = currentAngle
    this.controls.maxAzimuthAngle = targetAngle

    this.pin.position.set(x, y, z)

    // this.camera.position
  }

  addObjects() {
    // let that = this
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: '#extension GL_OES_standard_derivatives : enable'
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() }
      },
      vertexShader: vertex,
      fragmentShader: fragment
    })

    this.material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(map)
    })

    const radius = 1

    this.geometry = new THREE.SphereBufferGeometry(radius, 100, 100)
    this.planet = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.planet)

    this.pin = new THREE.Mesh(
      new THREE.SphereBufferGeometry(0.01, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )


    this.pin.position.set(0, 0, 0)

    this.scene.add(this.pin)
  }

  stop() {
    this.isPlaying = false
  }

  play() {
    if (!this.isPlaying) {
      this.render()
      this.isPlaying = true
    }
  }

  render() {
    if (!this.isPlaying) return
    this.time += 0.5
    // console.log({country: this.country})
    this.controls.update()
    requestAnimationFrame(this.render.bind(this))
    this.renderer.render(this.scene, this.camera)
  }
}

const sketch = new Sketch({
  dom: document.getElementById('app')
})

const select = new TomSelect(document.getElementById('countries'))

const fetchData = () => {

  const options = []

  fetch('https://restcountries.com/v3.1/all')
    .then((e) => e.json())
    .then((data) => {
      data.forEach(el => {
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
    console.log({ name, value })
    if (name === 'country') {
      sketch.focusCountry(countries[value])
    }
  }

  console.log({ data })

  // sketch.focusCountry()
})
