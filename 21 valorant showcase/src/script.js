import * as THREE from 'three';
import GUI from 'lil-gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Debug
const gui = new GUI();
const parameters = {
    materialColor: '#ffeded'
};
gui.addColor(parameters, 'materialColor');

// Loader
const gltfLoader = new GLTFLoader();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();










// Models data
const models = [
    { name: 'yoru', path: '/models/yoru.glb', scale: 70, position: new THREE.Vector3(-1, -1, -1) },
    { name: 'jett', path: '/models/jett.glb', scale: 70, position: new THREE.Vector3(1, -2, -1) },
    { name: 'sage', path: '/models/sage.glb', scale: 70, position: new THREE.Vector3(1, 1, -1) }
];

// Loaded models object
const loadedModels = {};

// Load all models
models.forEach(modelData => {
    gltfLoader.load(
        modelData.path,
        (gltf) => {
            const model = gltf.scene;
            model.scale.set(modelData.scale, modelData.scale, modelData.scale);
            model.position.copy(modelData.position);
            scene.add(model);
            loadedModels[modelData.name] = model;
        }
    );
});










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

    // Rotate Yoru model
    const yoruModel = loadedModels['yoru'];
    if (yoruModel) {
        yoruModel.rotation.y =  elapsedTime * 0.2; // Adjust rotation speed as needed
        
    }

    // Render scene
    renderer.render(scene, camera);

    // Call animate again on the next frame
    requestAnimationFrame(animate);
};
// Start animation loop
animate();