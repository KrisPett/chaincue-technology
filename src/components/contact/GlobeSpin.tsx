import React, {useEffect, useRef} from "react";
import Globe from "react-globe.gl";

const GlobeSpin = () => {
  const globeEl = useRef();

  useEffect(() => {
    // if (globeEl.current){
    // @ts-ignore
    globeEl.current.controls().autoRotate = true
    // @ts-ignore
    globeEl.current.controls().autoRotateSpeed = 0.3
    // @ts-ignore
    globeEl.current.pointOfView({altitude: 4}, 5000)
    // }

  }, []);

  let w = window.innerWidth;
  let h = window.innerHeight;

  return (
    <Globe
      ref={globeEl}
      width={w / 2}
      height={h / 2}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundColor={"rgba(0,0,0,0)"}
      arcDashAnimateTime={1}
      arcColor={() => "rgba(255, 255, 255, 0.5)"}
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    />
  )
}

export default GlobeSpin;
