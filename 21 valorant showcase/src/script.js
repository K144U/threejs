import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



// Loader
const gltfLoader = new GLTFLoader();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();








const loader = new GLTFLoader()
loader.load(
    '/models/jett.glb',
    (gltf) => {
        gltf.scene.scale.set(50,50,50)
        gltf.scene.position.set(1,-1,1)
        scene.add(gltf.scene)
    }
)



// loader.load(
//     '/models/killjoy.glb',
//     (gltf) =>
//     {
//         gltf.scene.rotation.set(0,Math.PI*0.3,0)
//         scene.add(gltf.scene)
//     }
// )


// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Ambient light
const light = new THREE.AmbientLight(0x404040, 50); // soft white light
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 6;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animation
const clock = new THREE.Clock();

const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    // Render scene
    renderer.render(scene, camera);

    // Call animate again on the next frame
    requestAnimationFrame(animate);
};
// Start animation loop
animate();