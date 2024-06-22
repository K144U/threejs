import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

/**
 * Base
 */

const gui = new GUI()


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const textureLoader = new THREE.TextureLoader()

const doorColorTexture = textureLoader.load('./textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('./textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('./textures/matcaps/8.png')
const gradientTexture = textureLoader.load('./textures/gradients/3.jpg')

doorColorTexture.colorSpace = THREE.SRGBColorSpace
matcapTexture.colorSpace = THREE.SRGBColorSpace







/**
 * Objects
 */
MeshBasicMaterial
const material = new THREE.MeshBasicMaterial({map : doorColorTexture})

const material = new THREE.MeshBasicMaterial()
material.map = doorColorTexture
material.wireframe = true
material.transparent= true
material.opacity = 0.5
material.alphaMap = doorAlphaTexture
material.side = THREE.DoubleSide
material.color = new THREE.color(0x00ff00)

const material = new THREE.MeshNormalMaterial()
material.flatShading = true
material.wireframe = true




const material = new THREE.MeshMatcapMaterial()
material.matcap = matcapTexture
const material = new THREE.MeshLambertMaterial()



const material = new THREE.MeshPhongMaterial()
material.shininess= 100
material.specular = new THREE.Color(0x1188ff)

const material = new THREE.MeshToonMaterial()
gradientTexture.minFilter = THREE.NearestFilter
gradientTexture.magFilter = THREE.NearestFilter
gradientTexture.generateMipmaps = false 
material.gradientMap = gradientTexture

const material = new THREE.MeshStandardMaterial()
material.metalness = 0
material.roughness = 0

material.map = doorColorTexture
material.aoMap = doorAmbientOcclusionTexture
material.displacementMap = doorHeightTexture
material.displacementScale = 0.05
material.metalnessMap =doorMetalnessTexture
material.roughnessMap= doorRoughnessTexture
material.normalMap = doorNormalTexture
material.normalScale.set(1,1)
material.transparent = true
material.alphaMap = doorAlphaTexture

material.clearcoatroughness = 0
material.clearcoat = 1
gui.add(material, 'clearcoat').min(0).max(1).step(0.001)
gui.add(material, 'clearcoatroughness').min(0).max(1).step(0.001)

Sheen
material.sheen = 1
material.sheenRoughness = 0.25
material.sheenColor.set(1, 1, 1)

gui.add(material, 'sheen').min(0).max(1).step(0.0001)
gui.add(material, 'sheenRoughness').min(0).max(1).step(0.0001)
gui.addColor(material, 'sheenColor')

Iridescence
material.iridescence = 1
material.iridescenceIOR = 1
material.iridescenceThicknessRange = [ 100, 800 ]

gui.add(material, 'iridescence').min(0).max(1).step(0.0001)
gui.add(material, 'iridescenceIOR').min(1).max(2.333).step(0.0001)
gui.add(material.iridescenceThicknessRange, '0').min(1).max(1000).step(1)
gui.add(material.iridescenceThicknessRange, '1').min(1).max(1000).step(1)



material.transmission = 1
material.ior = 1.5
material.thickness = 0.5


gui.add(material, 'transmission').min(0).max(1).step(0.0001)
gui.add(material, 'ior').min(0).max(10).step(0.0001)
gui.add(material, 'thickness').min(0).max(1).step(0.0001)



gui.add(material, 'metalness').min(0).max(1).step(0.001)
gui.add(material, 'roughness').min(0).max(1).step(0.001)






const ambieneLight = new THREE.AmbientLight(0xffffff , 1)
scene.add(ambieneLight)


const pointlight = new THREE.PointLight(0xffffff, 40)
pointlight.position.set (2,3,4) 
scene.add(pointlight)


const rgbeLoader = new RGBELoader()
rgbeLoader.load('./textures/environmentMap/2k.hdr', (environmentMap) =>
    {
        environmentMap.mapping = THREE.EquirectangularReflectionMapping
        scene.background = environmentMap
        scene.environment = environmentMap
        console.log(environmentMap)
    })


const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64, 64),
    material
)
sphere.position.x = - 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1 ,30,30),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 128, 128),
    material
)
torus.position.x = 1.5
scene.add(sphere,plane,torus)


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
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
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

    sphere.rotation.y = 0.1 * elapsedTime
    plane.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime


    sphere.rotation.x = - 0.15 * elapsedTime
    plane.rotation.x = - 0.15 * elapsedTime
    torus.rotation.x = - 0.15 * elapsedTime


    // Update cont -rols5
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()