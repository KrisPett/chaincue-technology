import React, {useCallback, useEffect, useRef, useState} from "react";
import Globe, {GlobeMethods} from "react-globe.gl";
import {useMedia} from "use-media";
import * as THREE from 'three';

const globeMaterial = new THREE.MeshPhongMaterial();
globeMaterial.bumpScale = 20;
new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
  globeMaterial.specularMap = texture;
  globeMaterial.specular = new THREE.Color('grey');
  globeMaterial.shininess = 50;
});

const GlobeSpin = () => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [dimensions, setDimensions] = useState({width: 0, height: 0})
  const handleResize = useCallback(() => setDimensions({width: window.innerWidth, height: window.innerHeight}), [])
  const isMobile = useMedia({maxWidth: "1024px"});

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize])

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 0.3
      globeEl.current.pointOfView({altitude: isMobile ? 4 : 1.9}, 2000)
    }
  }, [isMobile])

  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      const directionalLight = globeEl.current.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
      directionalLight && directionalLight.position.set(1, 1, 1);
    });
  }, []);

  return (
    <Globe
      globeMaterial={globeMaterial}
      ref={globeEl}
      width={dimensions.width / 2}
      height={dimensions.height / 2}
      backgroundColor={"rgba(0,0,0,0)"}
      arcDashAnimateTime={1}
      arcColor={() => "rgba(255, 255, 255, 0.5)"}
      // globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    />
  )
}

export default GlobeSpin;
