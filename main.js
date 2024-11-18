import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild(renderer.domElement);


        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true



        // Group
        const group = new THREE.Group()
        group.scale.y = 2
        group.rotation.y = 0.2
        scene.add(group)
        
        const Geo1 = new THREE.Mesh(
          new THREE.ConeGeometry( 1, 1, 31),
          new THREE.MeshBasicMaterial( { color: 'pink', wireframe: true } )
        )
        Geo1.position.x = -2.5
        group.add(Geo1)



        const Geo2 = new THREE.Mesh(
          new THREE.ConeGeometry( 1, 1, 31),
          new THREE.MeshBasicMaterial( { color: 'green', wireframe: true } )
        )
        Geo2.position.x = 0
        group.add(Geo2)



        const Geo3 = new THREE.Mesh(
          new THREE.ConeGeometry(1, 1, 31),
          new THREE.MeshBasicMaterial( { color: 'red', wireframe: true } )
        )
        Geo3.position.x = 2.5
        group.add(Geo3)

        
        
        // const geometry = new THREE.IcosahedronGeometry( 2, 0,); 
        // const material = new THREE.MeshBasicMaterial( { color: 'green', wireframe: true } ); 
        // const knot = new THREE.Mesh( geometry, material ); 
        // scene.add(knot);
        
        camera.position.z = 5;
        // camera.lookAt(mesh.position)
        // scene.add(camera)
        
        
        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          render();
        }, false);
        
        var animate = function() {
          requestAnimationFrame(animate);
          render();
        };
        
        function render() {
          Geo1.rotation.x += 0.02;
          Geo1.rotation.y += 0.02;
          Geo1.rotation.z += 0.02;

          Geo2.rotation.x += 0.02;
          Geo2.rotation.y += 0.02;
          Geo2.rotation.z += 0.02;

          Geo3.rotation.x += 0.02;
          Geo3.rotation.y += 0.02;
          Geo3.rotation.z += 0.02;
          renderer.render(scene, camera);
        }
        
        animate();