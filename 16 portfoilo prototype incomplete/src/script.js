import * as THREE from 'three'
import GUI from 'lil-gui'
import { mx_bits_to_01 } from 'three/examples/jsm/nodes/materialx/lib/mx_noise.js'
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js'

/**
 * Debug
 */
// const gui = new GUI()

const parameters = {
    materialColor: '#ffeded'
}

// Texture
const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})


const objectsDistance = 4


// Meshes
const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material

)

const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)


const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    material
)

const mesh4 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    material
)

const mesh5 = new THREE.Mesh(
    new THREE.DodecahedronGeometry(1),
    material
)

const mesh6 = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1),
    material
)










mesh1.position.y = - objectsDistance *0
mesh2.position.y = - objectsDistance *1
mesh3.position.y = - objectsDistance *2
mesh4.position.y = - objectsDistance *3
mesh5.position.y = - objectsDistance *4
mesh6.position.y = - objectsDistance *5



mesh1.position.x = 2
mesh2.position.x = - 2
mesh3.position.x = 2
mesh4.position.x = -2
mesh5.position.x = 2
mesh6.position.x = -2

scene.add(mesh1, mesh2, mesh3, mesh4, mesh5,mesh6)


const sectionMeshes = [mesh1,mesh2,mesh3, mesh4,mesh5,mesh6]




//particles 
const particlesCount = 800
const positions = new Float32Array(particlesCount * 3)

for (let i = 0; i <  particlesCount ; i++){
positions[i * 3 + 0] = (Math.random() -0.5)* 10
positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random()* objectsDistance * sectionMeshes.length
positions[i * 3 + 2] = (Math.random() -0.5)*10
}

const particlegeometry = new THREE.BufferGeometry()
particlegeometry.setAttribute('position',new THREE.BufferAttribute(positions , 3))


const particlesmaterial =new THREE.PointsMaterial({
    color : parameters.materialColor,
    sizeAttenuation: true ,
    size : 0.03
})

const patricles = new THREE.Points(particlegeometry, particlesmaterial)
scene.add(patricles)




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

const cameraGroup = new THREE.Group
scene.add(cameraGroup)


// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

// Material


//lights 
const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha : true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


let scrollY = window.scrollY
window.addEventListener('scroll', () =>
    {
        scrollY = window.scrollY
    
        console.log(scrollY)
    })



    const cursor = {}
    cursor.x = 0 
    cursor.y = 0 

    window.addEventListener('mousemove', (event) =>
        {
            cursor.x = event.clientX / sizes.width -0.5
            cursor.y = event.clientY / sizes.height -0.5
        })



/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime  = 0 





const tick = () =>
{


        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime



        camera.position.y = - scrollY / sizes.height * objectsDistance


        const parallaxX = cursor.x *0.5
        const parallaxY = - cursor.y *0.5
        cameraGroup.position.x += (parallaxX - cameraGroup.position.x)*0.05
        cameraGroup.position.y += (parallaxY - cameraGroup.position.y)*0.05

        // Animate meshes
        for(const mesh of sectionMeshes)
        {
            mesh.rotation.x = elapsedTime * 0.1
            mesh.rotation.y = elapsedTime * 0.12
        }
    

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()