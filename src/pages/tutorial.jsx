import * as THREE from 'three';

const Tutorial = ()=>{
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);

    document.body.appendChild(renderer.domElement);
    
    return(
    <>
    
    </>
    );
}

export default Tutorial;