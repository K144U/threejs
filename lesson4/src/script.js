import * as THREE from 'three'
import { update } from 'three/examples/jsm/libs/tween.module.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


console.log(OrbitControls)


//cursor 

const cursor = {
    x: 0,
    Y: 0
}
window.addEventListener('mousemove', (kuchbhi) => {
    cursor.x = kuchbhi.clientX /sizes.width -0.5
    cursor.y = kuchbhi.clientY /sizes.height -0.5

})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera

// const aspectratio = sizes.width/sizes.height
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height ,0.1 , 100);
// const camera = new THREE.OrthographicCamera(-1* aspectratio, 1* aspectratio,1,-1,0.1,100)

// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3


console.log(camera.position.length())
camera.lookAt(mesh.position)
scene.add(camera)

//controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.target.y = 2
// controls.update()

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // // update camera 
    // camera.position.x = cursor.x*-5
    // camera.position.y = cursor.y*5

    // camera.lookAt(mesh.position)

    //orbit control

    // Update objects
    // mesh.rotation.y = elapsedTime;

    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()