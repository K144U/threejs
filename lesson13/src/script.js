import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Timer } from 'three/addons/misc/Timer.js'
import GUI from 'lil-gui'
import { color, threshold } from 'three/examples/jsm/nodes/Nodes.js'


const textureLoader = new THREE.TextureLoader()



//floor
const floorAlphaTexture = textureLoader.load('./floor/alpha.jpg')
const floorColorTexture = textureLoader.load('./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.jpg')
const floorARMTexture = textureLoader.load('./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.jpg')
const floorNormalTexture = textureLoader.load('./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.jpg')
const floorDisplacementTexture = textureLoader.load('./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.jpg')

floorColorTexture.colorSpace = THREE.SRGBColorSpace

floorColorTexture.repeat.set(8,8)
floorARMTexture.repeat.set(8,8)
floorNormalTexture.repeat.set(8,8)
floorDisplacementTexture.repeat.set(8,8)

floorColorTexture.wrapS = THREE.RepeatWrapping
floorARMTexture.wrapS = THREE.RepeatWrapping
floorNormalTexture.wrapS = THREE.RepeatWrapping
floorDisplacementTexture.wrapS = THREE.RepeatWrapping


floorColorTexture.wrapT = THREE.RepeatWrapping
floorARMTexture.wrapT = THREE.RepeatWrapping
floorNormalTexture.wrapT = THREE.RepeatWrapping
floorDisplacementTexture.wrapT = THREE.RepeatWrapping



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
 * House
 */
// Temporary sphere
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(1, 32, 32),
//     new THREE.MeshStandardMaterial({ roughness: 0.7 })
// )
// scene.add(sphere)

//floor

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry (20,20,80,80),
    new THREE.MeshStandardMaterial({
        alphaMap: floorAlphaTexture,
        transparent:true,
        map: floorColorTexture,
        aoMap: floorARMTexture,
        roughnessMap: floorARMTexture,
        metalnessMap: floorARMTexture,
        normalMap: floorNormalTexture,
        displacementMap : floorDisplacementTexture
    })
    
)
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)

 const house = new THREE.Group()
 scene.add(house)

 //walls 
 const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5 , 4),
    new THREE.MeshStandardMaterial()
    
 )
 walls.position.y += 1.25
 house.add(walls)

 const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5,1.5,4,),
    new THREE.MeshStandardMaterial()
 )
 roof.rotation.y = Math.PI * 0.25
 roof.position.y += 3.25
 house.add(roof)

 const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2,2.2),
    new THREE.MeshStandardMaterial()
)
door.position.y = 1
door.position.z = 2.01
house.add(door)


const bushgeometry = new THREE.SphereGeometry(1,16,16)
const bushmaterial = new THREE.MeshStandardMaterial()

const bush1 = new THREE.Mesh(
    bushgeometry,
    bushmaterial
)

bush1.position.set(0.8,0.2,2.5)
bush1.scale.set(0.5,0.5,0.5)
house.add(bush1)


const bush2 = new THREE.Mesh(
    bushgeometry,
    bushmaterial
)

bush2.position.set(1.5,0.2,2.3)
bush2.scale.set(0.3,0.3,0.3)
house.add(bush2)


const bush3 = new THREE.Mesh(
    bushgeometry,
    bushmaterial
)

bush3.position.set(-0.8,0.1,2.2)
bush3.scale.set(0.4,0.4,0.4)
house.add(bush3)

const bush4 = new THREE.Mesh(
    bushgeometry,
    bushmaterial
)

bush4.position.set(-1,0.05,2.6)
bush4.scale.set(0.15,0.15,0.15)
house.add(bush4)


 
//graves

const graveGeometry = new THREE.BoxGeometry(0.6,0.8,0.2)
const gravematerial= new THREE.MeshStandardMaterial()

const graves = new THREE.Group()
scene.add (graves)


for (let i = 0 ; i < 30 ;i++){
    const grave = new THREE.Mesh(graveGeometry, gravematerial)

    const angle = Math.random() * Math.PI * 2
    const radius = 3 + Math.random() * 4
    const x  = Math.sin(angle)
    const z  = Math.cos(angle)

    grave.position.x = x * radius
    grave.position.z = z * radius

    grave.position.y = Math.random()* 0.4
    grave.rotation.x = (Math.random() -0.5) * 0.4
    grave.rotation.y = (Math.random() -0.5) * 0.4
    grave.rotation.z = (Math.random() -0.5) * 0.4

    graves.add(grave)

}






/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight('#ffffff', 1.5)
directionalLight.position.set(3, 2, -8)
scene.add(directionalLight)

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
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
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
const timer = new Timer()

const tick = () =>
{
    // Timer
    timer.update()
    const elapsedTime = timer.getElapsed()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()