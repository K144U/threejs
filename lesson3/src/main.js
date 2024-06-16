// just waiting for your beautiful creations!
import {
    BoxBufferGeometry,
    Color,
    Camera,
    Group,
    Scene,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    WEBGLRenderer,
} from "https://cdn.skypack.dev/three@0.132.2";

import {
    OrbitControls
} from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module";

import {
    GLTFLoader
} from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js?module";


const container = document.querySelector('#scene-container');

const scene = new Scene();

scene.background = new Color('skyblue');

const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov , aspect, near, far);

camera.position.set(0,0,10);

const geometry = new BoxBufferGeometry(2,2,2);

const material = new MeshBasicMaterial();

const cube = new Mesh(geometry , material);

scene.add(cube);

const renderer = new WEBGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);

renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

