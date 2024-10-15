import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js'
import testVertexShader from './shaders/test/vertex.glsl'
import testFragmentShader from './shaders/test/fragment.glsl'
import { uniforms } from 'three/examples/jsm/nodes/Nodes.js'


/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const flagTexture = textureLoader.load('./textures/one-piece-mugiwara-flag-logo-08F872AFB6-seeklogo.com.png')

/**
 * Test mesh
 */
// Geometry
const geometry = new THREE.PlaneGeometry(1, 1, 32, 32)

const count = geometry.attributes.position.count
const randoms = new Float32Array(count)

for (let i = 0 ; i < count ; i++){
    randoms[i] = Math.random()
}

geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))

console.log(geometry)

//raw shader material 
const material = new THREE.RawShaderMaterial({
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
    uniforms:
    {
        uFrequency: 
        {
            value: new THREE.Vector2(5 , 5),
            
        },
        uTime: 
        { 
            value: 0 
        },
        uColor: {
            value: new THREE.Color('orange')
        },
        uTexture:
        {
            value: flagTexture
        }
    }
})

gui.add(material.uniforms.uFrequency.value, 'x').min(0).max(20).step(0.01).name('frequencyx')
gui.add(material.uniforms.uFrequency.value, 'y').min(0).max(20).step(0.01).name('frequencyy')



// Mesh
const mesh = new THREE.Mesh(geometry, material)
mesh.scale.y = 2/3
scene.add(mesh)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0.25, - 0.25, 1)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //update materials 
    //material.uniforms.uTime.value = elapsedTime
    material.uniforms.uTime.value = elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()