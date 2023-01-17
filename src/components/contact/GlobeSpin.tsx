import React, {useCallback, useEffect, useRef, useState} from "react";
import Globe, {GlobeMethods} from "react-globe.gl";
import {useMedia} from "use-media";

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

  return (
    <Globe
      ref={globeEl}
      width={dimensions.width / 2}
      height={dimensions.height / 2}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundColor={"rgba(0,0,0,0)"}
      arcDashAnimateTime={1}
      arcColor={() => "rgba(255, 255, 255, 0.5)"}
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    />
  )
}

export default GlobeSpin;
