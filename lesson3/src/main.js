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

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

// create a scene 

const scene = new Scene();

//get the background color 
scene.background = new Color('skyblue');

//create a camera 

const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov , aspect, near, far);

//default obj position is at 0,0,0
// move camera back so we can see the scene 
camera.position.set(0,0,10);

//create a geometry 
const geometry = new BoxBufferGeometry(2,2,2);

// creating a default material 
const material = new MeshBasicMaterial();

// creating a  mesh and putting material and geometry in it 
const cube = new Mesh(geometry , material);

//add mest to scene 
scene.add(cube);

//create  a renderer 
const renderer = new WEBGLRenderer();

//