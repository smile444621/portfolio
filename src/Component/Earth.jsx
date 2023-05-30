import React from 'react';
import StarField from './Sky';
import Main from './Main'
import localImage from "../assets/earth.glb";
const Earth = () => {
    const modelRef = React.useRef();
  return (
    <div className="relative z-0 bg-primary">
      <model-viewer
        style={{ height: "160vh", width: "100vw" }}
        src={localImage}
        alt="global"
        allow="*"
        auto-rotate
        delay={50}
        duration={5}
        axis="x"
        ar-modes="webxr scene-viewer quick-look"
        camera-orbit="10deg 45deg 100%"
        // poster={loading3d}
        near="0.01"
        far="1000"
        shadow-intensity="0.5"
        ref={(ref) => {
          modelRef.current = ref;
        }}
      >
      <StarField width={500} height={500} numStars={100} />
      <Main/>
      </model-viewer>
      
    </div>
  );
}

export default Earth