import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Models
const loader = new GLTFLoader();

const models = {
    jett: null,
    sage: null,
    yoru: null
};

loader.load('/models/jett.glb', (gltf) => {
    models.jett = gltf.scene;
    gltf.scene.scale.set(30,30,30)
    scene.add(models.jett);
});

loader.load('/models/sage.glb', (gltf) => {
    models.sage = gltf.scene;
    gltf.scene.scale.set(30,30,30)
    gltf.scene.position.set(1,0,0)
    scene.add(models.sage);
});

loader.load('/models/yoru.glb', (gltf) => {
    models.yoru = gltf.scene;
    gltf.scene.scale.set(30,30,30)
    gltf.scene.position.set(-1,0,0)
    scene.add(models.yoru);
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

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Convert object to points
const convertToPoints = (object) => {
    if (object) {
        const geometry = new THREE.BufferGeometry().setFromPoints(object.children[0].geometry.attributes.position.array);
        const material = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff });
        const points = new THREE.Points(geometry, material);
        scene.add(points);
        scene.remove(object);
        return points;
    }
    return object;
};

// Mouse move event
const onMouseMove = (event) => {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
};

window.addEventListener('mousemove', onMouseMove);

// Animation
const clock = new THREE.Clock();

const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update();

    // Raycasting
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(Object.values(models).filter(model => model !== null));

    if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        convertToPoints(intersectedObject);
    }

    // Render scene
    renderer.render(scene, camera);

    // Call animate again on the next frame
    requestAnimationFrame(animate);
};

// Start animation loop
animate();
