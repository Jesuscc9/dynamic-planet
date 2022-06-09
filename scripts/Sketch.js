import TWEEN from '@tweenjs/tween.js'
import * as dat from 'dat.gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import map from '../assets/img/earth-texture.jpg'
import fragment from '../assets/shader/fragment.glsl?raw'
import vertex from '../assets/shader/vertex.glsl?raw'

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
    this.controls.enableDamping = true
    this.controls.enablePan = false
    this.controls.autoRotate = true
    this.controls.autoRotateSpeed = -0.5
    
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
    this.controls.reset()
    this.controls.autoRotate = false

    // Rotate earth to focus that country
    var d = (-lng * (Math.PI / 180)) % (2 * Math.PI)
    var e = (Math.PI / 2) * -1

    const initialCameraZoom = 3
    const endCameraZoom = 2

    const cameraZoom = {
      value: initialCameraZoom
    }

    const cameraEndZoom = {
      value: endCameraZoom
    }

    // Todo: fix this callback hell 😭

    new TWEEN.Tween(this.planet.rotation)
      .to(
        {
          x: (lat * (Math.PI / 180)) % Math.PI,
          y: d + e
        },
        1000
      )
      .easing(TWEEN.Easing.Cubic.InOut)
      .onStart(() => {
        cameraZoom.value = this.camera.position.z
        if (this.camera.position.z !== initialCameraZoom) {
          new TWEEN.Tween(cameraZoom)
            .to({ value: 3 }, 1000)
            .onUpdate(() => {
              this.camera.position.z = cameraZoom.value
              this.controls.saveState()
            })
            .easing(TWEEN.Easing.Cubic.InOut)
            .onComplete(() => {
              cameraZoom.value = this.camera.position.z
              new TWEEN.Tween(cameraZoom)
                .to({ value: 2 }, 1000)
                .onUpdate(() => {
                  this.camera.position.z = cameraZoom.value
                  this.controls.saveState()
                })
                .easing(TWEEN.Easing.Cubic.InOut)
                .start()
            })
            .start()
        } else {
          new TWEEN.Tween(cameraZoom)
            .to(cameraEndZoom, 1000)
            .onUpdate(() => {
              this.camera.position.z = cameraZoom.value
              this.controls.saveState()
            })
            .easing(TWEEN.Easing.Cubic.InOut)
            .start()
        }
      })
      .start()

    function convertCordsToCartesian([lat, lng]) {
      const phi = lat * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)

      let x = -(Math.cos(phi) * Math.cos(theta))
      let y = Math.sin(phi)
      let z = Math.cos(phi) * Math.sin(theta)

      return { x, y, z }
    }

    const { x, y, z } = convertCordsToCartesian([lat, lng])

    new TWEEN.Tween(this.pin.position)
      .to(
        {
          x,
          y,
          z
        },
        500
      )
      .easing(TWEEN.Easing.Cubic.InOut)
      .start()
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

    const pinSize = 0.01

    this.geometry = new THREE.SphereBufferGeometry(radius, 100, 100)
    this.planet = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.planet)

    this.pin = new THREE.Mesh(
      new THREE.SphereBufferGeometry(pinSize, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )

    this.planet.attach(this.pin)
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
    this.controls.update()
    TWEEN.update()
    requestAnimationFrame(this.render.bind(this))
    this.renderer.render(this.scene, this.camera)
  }
}