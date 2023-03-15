import * as THREE from "./build/three.module.js";
import { OrbitControls } from "./build/OrbitControls.js";
import { GLTFLoader } from "./build/GLTFLoader.js";
import { RGBELoader } from "./build/RGBELoader.js";

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth/window.innerHeight,
  0.01,
  1000
);
var renderer = new THREE.WebGLRenderer();
var mainBg = document.querySelector(".mainBg")
const parent = mainBg.parentElement;
const width = parent.offsetWidth; // 50% of parent width
const height = parent.offsetHeight; // 100% of parent height

mainBg.width = width;
mainBg.height = height;

renderer.setSize(width, height);
mainBg.appendChild(renderer.domElement);
var gltf_loader = new GLTFLoader();
var obj;
gltf_loader.load("scene.gltf", function(gltf){
  obj = gltf.scene
  const model = gltf.scene;
  
  gltf.scene.rotation.x =  0.3;
  gltf.scene.rotation.y =  -0.3;
 model.scale.set(0.5, 0.6, 0.5); // set the scale
 scene.add(model);
})
var light = new THREE.HemisphereLight(0xffffff, 0x000000, 12);
// scene.background = new THREE.Color(0x000)
scene.background = new THREE.Color(0x4e3d2c)
scene.add(light)
camera.position.set(0, 0, 5);

function animate() {
  requestAnimationFrame(animate);     
  renderer.render(scene, camera);
}
animate()