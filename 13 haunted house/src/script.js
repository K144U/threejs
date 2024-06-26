import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Timer } from 'three/addons/misc/Timer.js'
import GUI from 'lil-gui'
import { color, textureBicubic, threshold } from 'three/examples/jsm/nodes/Nodes.js'
import {Sky} from 'three/addons/objects/Sky.js'


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

// Wall
const wallColorTexture = textureLoader.load('./wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.jpg')
const wallARMTexture = textureLoader.load('./wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.jpg')
const wallNormalTexture = textureLoader.load('./wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.jpg')

wallColorTexture.colorSpace = THREE.SRGBColorSpace


// wallColorTexture.repeat.set(8.8)
// wallARMTexture.repeat.set(8.8)
// wallNormalTexture.repeat.set(8.8)

// wallColorTexture.wrapS = THREE.RepeatWrapping
// wallARMTexture.wrapS = THREE.RepeatWrapping
// wallNormalTexture.wrapS = THREE.RepeatWrapping

// wallColorTexture.wrapT = THREE.RepeatWrapping
// wallARMTexture.wrapT = THREE.RepeatWrapping
// wallNormalTexture.wrapT = THREE.RepeatWrapping



//roof 
const roofColorTexture = textureLoader.load('./roof/roof_slates_02_1k/roof_slates_02_diff_1k.jpg')
const roofARMTexture = textureLoader.load('./roof/roof_slates_02_1k/roof_slates_02_arm_1k.jpg')
const roofNormalTexture = textureLoader.load('./roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.jpg')

roofColorTexture.colorSpace = THREE.SRGBColorSpace

roofColorTexture.repeat.set(3, 1)
roofARMTexture.repeat.set(3, 1)
roofNormalTexture.repeat.set(3, 1)

roofColorTexture.wrapS = THREE.RepeatWrapping
roofARMTexture.wrapS = THREE.RepeatWrapping
roofNormalTexture.wrapS = THREE.RepeatWrapping


// Grave
const graveColorTexture = textureLoader.load('./grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.jpg')
const graveARMTexture = textureLoader.load('./grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.jpg')
const graveNormalTexture = textureLoader.load('./grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.jpg')

graveColorTexture.colorSpace = THREE.SRGBColorSpace

graveColorTexture.repeat.set(0.3, 0.4)
graveARMTexture.repeat.set(0.3, 0.4)
graveNormalTexture.repeat.set(0.3, 0.4)


// Door
const doorColorTexture = textureLoader.load('./door/color.jpg')
const doorAlphaTexture = textureLoader.load('./door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('./door/height.jpg')
const doorNormalTexture = textureLoader.load('./door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./door/roughness.jpg')

doorColorTexture.colorSpace = THREE.SRGBColorSpace





/**
 * Base
 */
// Debug
// const gui = new GUI()

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
        displacementMap : floorDisplacementTexture,
        displacementScale :0.3,
        displacementBias:-0.23
    })
    
)
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)


// gui.add(floor.material, 'displacementScale').min(0).max(1).step(0.01).name('floorDisplacementscale')
// gui.add(floor.material, 'displacementBias').min(-1).max(1).step(0.01).name('floorDisplacementBias')




 const house = new THREE.Group()
 scene.add(house)

 //walls 
 const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5 , 4),
    new THREE.MeshStandardMaterial({
        map: wallColorTexture,
        aoMap: wallARMTexture,
        roughnessMap: wallARMTexture,
        metalnessMap: wallARMTexture,
        normalMap: wallNormalTexture
    })
    
 )
 walls.position.y += 1.25
 house.add(walls)

 const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5,1.5,4,),
    new THREE.MeshStandardMaterial({
        map: roofColorTexture,
        aoMap: roofARMTexture,
        roughnessMap: roofARMTexture,
        metalnessMap: roofARMTexture,
        normalMap: roofNormalTexture
    })
 )
 roof.rotation.y = Math.PI * 0.25
 roof.position.y += 3.25
 house.add(roof)

 const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2,2.2),
    new THREE.MeshStandardMaterial({
        map: doorColorTexture,
        transparent: true,
        alphaMap: doorAlphaTexture,
        aoMap: doorAmbientOcclusionTexture,
        displacementMap: doorHeightTexture,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture
    })
)
door.position.y = 1
door.position.z = 2.01
house.add(door)


//graves

const graveGeometry = new THREE.BoxGeometry(0.6,0.8,0.2)
const gravematerial = new THREE.MeshStandardMaterial({
    map: graveColorTexture,
    aoMap: graveARMTexture,
    roughnessMap: graveARMTexture,
    metalnessMap: graveARMTexture,
    normalMap: graveNormalTexture
})

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
const ambientLight = new THREE.AmbientLight('#86cdff', 0.275)
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight('#86cdff', 1)
directionalLight.position.set(3, 2, -8)
scene.add(directionalLight)


//doorlight

const doorLight = new THREE.PointLight('#ff7d46')
doorLight.position.set(0,2.2,2.5)
house.add(doorLight)






//ghost

const ghost1 = new THREE.PointLight('#8800ff',6)
const ghost2 = new THREE.PointLight('#ff0088',6)
const ghost3 = new THREE.PointLight('#ff0000',6)
scene.add(ghost1,ghost2,ghost3)








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


renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap



directionalLight.castShadow = true
ghost1.castShadow = true
ghost2.castShadow = true
ghost3.castShadow = true

walls.castShadow = true
walls.receiveShadow = true
roof.castShadow = true 
floor.receiveShadow = true

for (const grave of graves.children){
    grave.castShadow = true
    grave.receiveShadow= true
}

// mapping
directionalLight.shadow.mapSize.width = 256
directionalLight.shadow.mapSize.height = 256
directionalLight.shadow.camera.top = 8
directionalLight.shadow.camera.right = 8
directionalLight.shadow.camera.left = -8
directionalLight.shadow.camera.bottom = -8
directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 30

ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 10

ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 10

ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 10




// sky

const sky = new Sky()
sky.scale.set(100,100,100)
scene.add(sky)


sky.material.uniforms['turbidity'].value = 10
sky.material.uniforms['rayleigh'].value = 3
sky.material.uniforms['mieCoefficient'].value = 0.1
sky.material.uniforms['mieDirectionalG'].value = 0.95
sky.material.uniforms['sunPosition'].value.set(0.3, -0.038, -0.95)


//fog
scene.fog = new THREE.FogExp2 ('#04343f', 0.1)

/**
 * Animate
 */
const timer = new Timer()

const tick = () =>
{
    // Timer
    timer.update()
    const elapsedTime = timer.getElapsed()

    //ghost animation
    const ghost1Angle = elapsedTime * 0.5
    ghost1.position.x = Math.cos(ghost1Angle) * 4
    ghost1.position.z = Math.sin(ghost1Angle) * 4
    ghost1.position.y = Math.sin(ghost1Angle) * Math.sin(ghost1Angle*2.34)*Math.sin(ghost1Angle*2.45)

    const ghost2Angle = -elapsedTime * 0.38
    ghost2.position.x = Math.cos(ghost2Angle) * 5
    ghost2.position.z = Math.sin(ghost2Angle) * 5
    ghost2.position.y = Math.sin(ghost2Angle) * Math.sin(ghost2Angle*2.34)*Math.sin(ghost2Angle*2.45)

    const ghost3Angle = elapsedTime * 0.23
    ghost3.position.x = Math.cos(ghost3Angle) * 6.5
    ghost3.position.z = Math.sin(ghost3Angle) * 6.5
    ghost3.position.y = Math.sin(ghost3Angle) * Math.sin(ghost3Angle*2.34)*Math.sin(ghost3Angle*2.45)


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()