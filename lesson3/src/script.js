import * as THREE from 'three'
import { damp } from 'three/src/math/MathUtils.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


//clock
const clock = new THREE.Clock()


let time = Date.now ()

//animation

const loop = () =>
    {
        // //time delay
        // const currenTime  = Date.now()
        // const deltaTime = currenTime - time
        // time = currenTime

        const elapsedtime = clock.getElapsedTime()        

        //update obj
        mesh.rotation.y = elapsedtime
        mesh.position.y = Math.sin(elapsedtime)

        camera.lookAt(mesh.position)

        // mesh.rotation.x += 0.001 * deltaTime
        // mesh.rotation.y += 0.001 * deltaTime
        // mesh.rotation.z += 0.001 * deltaTime
        
        
        //renderer
        renderer.render(scene, camera)


        window.requestAnimationFrame(loop)
    }

    loop()