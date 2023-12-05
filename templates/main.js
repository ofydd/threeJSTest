import * as THREE from "../node_modules/three/build/three.module"

console.log("This thing should be working");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 25;


const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xFA0000);
document.body.appendChild(renderer.domElement); // TODO: figure out what this thing does


import {GLTFLoader} from '../node_modules/three/examples/jsm/loaders/GLTFLoader'
const loader = new GLTFLoader();

loader.load('plant_model.glb', function(gltf){
    
    scene.add(gltf.scene);
    gltf.scene;
    gltf.asset;

    function animate(){
        requestAnimationFrame(animate);
        gltf.scene.rotation.x += 0.007;
        gltf.scene.rotation.y += 0.007;

        renderer.render(scene, camera);
    }
    animate();
}, 
function(progressEvent){
    console.log("Loading ... ", progressEvent, "%");
}
, function(error){
    console.log("Error");
});
