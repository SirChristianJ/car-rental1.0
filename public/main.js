import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

/* const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
const cube = new THREE.Mesh(geometry, material); */ 


//scene.add(cube);

const gltfLoader = new GLTFLoader();
gltfLoader.load('assets/scene.gltf', (gltfScene ) => {
	scene.add(gltfScene.scene);

	mixer = new THREE.AnimationMixer(gltfScene);
});

const light1 = new THREE.PointLight( 0xffffff, 1, 10000 );
const light2 = new THREE.PointLight( 0xffffff, 1, 10000 );

light1.position.set( 50, 50, 100 );
light2.position.set(50, 50, -100);
scene.add( light1 );
scene.add(light2);

//custom logic for changing models
/* const btnChange = document.getElementById('pick1').addEventListener('click',() => {
	gltfLoader.load('assets/scene.gltf', (gltfScene) => {
		scene.add(gltfScene.scene);
	})
}) */
//
const control = new OrbitControls(camera, renderer.domElement);


camera.position.z = 5;
control.update();

const gui  =  new GUI();
const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'x', -5, 5);
cameraFolder.add(camera.position, 'y', -5, 5);
cameraFolder.add(camera.position, 'z', -5, 5);
cameraFolder.open();

const lightFolder = gui.addFolder('Light');
lightFolder.add(light1.position, 'x', -100, 100);
lightFolder.add(light1.position, 'y', -100, 100);
lightFolder.add(light1.position, 'z', -100, 100);
lightFolder.add(light2.position, 'x', -100, 100);
lightFolder.add(light2.position, 'y', -100, 100);
lightFolder.add(light2.position, 'z', -100, 100);
lightFolder.open();

const intensityFolder = gui.addFolder('Intensity');
intensityFolder.add(light1,'intensity',0.01, 1);
intensityFolder.add(light2,'intensity',0.01, 1);
intensityFolder.open();

function animate() {
	requestAnimationFrame(animate);
	control.update();
	renderer.setClearColor(0x000000, 0);
	renderer.render( scene, camera );
}

animate();
