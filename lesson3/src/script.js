import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

console.log (gsap)


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0,0,0)
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


//gsap
// gsap.to(mesh.position,{duration :1, delay: 1 , y:-1})
// gsap.to(mesh.position,{duration :1, delay: 2, x:-2})
// gsap.to(mesh.position,{duration :1, delay: 3 , y:1})
// gsap.to(mesh.position,{duration :1, delay: 4, x:2})

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

        // camera.lookAt(mesh.position)

        // mesh.rotation.x += 0.001 * deltaTime
        // mesh.rotation.y += 0.001 * deltaTime
        // mesh.rotation.z += 0.001 * deltaTime
        
        
        //renderer
        renderer.render(scene, camera)


        window.requestAnimationFrame(loop)
    }

    loop()