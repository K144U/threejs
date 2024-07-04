import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { GLTFLoader, RGBELoader,EXRLoader } from 'three/examples/jsm/Addons.js'
import { GroundedSkybox } from 'three/examples/jsm/Addons.js'
import { texture } from 'three/examples/jsm/nodes/Nodes.js'

 const gltfLoader = new GLTFLoader()

const cubeTextureLoader = new THREE.CubeTextureLoader()
const rgbeLoader = new RGBELoader()
const exrLoader = new EXRLoader()
const textureLoader = new THREE.TextureLoader

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

scene.environmentIntensity = 1
scene.backgroundBlurriness = 0.001
// scene.backgroundRotation.x = 0




gui.add(scene , 'environmentIntensity').min(0).max(10).step(1)
gui.add(scene , 'backgroundBlurriness').min(0).max(1).step(0.001)
gui.add(scene.backgroundRotation , 'y').min(0).max(Math.PI * 2).step(0.001).name('bgrotation')
gui.add(scene.environmentRotation , 'y').min(0).max(Math.PI * 2).step(0.001).name('envrotation')


// const environmentMap = cubeTextureLoader.load([
//     '/environmentMaps/0/px.png',
//     '/environmentMaps/0/nx.png',
//     '/environmentMaps/0/py.png',
//     '/environmentMaps/0/ny.png',
//     '/environmentMaps/0/pz.png',
//     '/environmentMaps/0/nz.png'
// ])


// scene.environment = environmentMap
// scene.background = environmentMap


//hdr 
// exrLoader.load('/environmentMaps/nvediaCanvas4knayi.exr' , (environmentMap) => 
// {
//     environmentMap.mapping = THREE.EquirectangularReflectionMapping
//     scene.background = environmentMap
//     scene.environment = environmentMap
// })




// rgbeLoader.load('/environmentMaps/2/2k.hdr' , (environmentMap) => 
//     {
//         environmentMap.mapping = THREE.EquirectangularReflectionMapping
//         // scene.background = environmentMap
        
//         scene.environment = environmentMap

//         const skybox = new GroundedSkybox(environmentMap, 15 , 70)
//         skybox.position.y = 15
//         scene.add(skybox)
//     })
    

const environmentMap = textureLoader.load('/environmentMaps/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg')
environmentMap.mapping = THREE.EquirectangularReflectionMapping
environmentMap.colorSpace = THREE.SRGBColorSpace

scene.background = environmentMap







/**
 * Torus Knot
 */
const torusKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1, 0.4, 100, 16),

    new THREE.MeshStandardMaterial({
        roughness: 0.3,
        metalness : 1,
        color: 0xaaaaaa
    })
)

torusKnot.position.x = -4
torusKnot.position.y = 4
scene.add(torusKnot)



gltfLoader.load(
    '/models/FlightHelmet/glTF/FlightHelmet.gltf',
    (gltf) =>
    {
        console.log('success')
        console.log(gltf)
        gltf.scene.scale.set(10,10,10)
        scene.add(gltf.scene)
    }
)









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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 500)
camera.position.set(4, 5, 4)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.y = 3.5
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
    // Time
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()