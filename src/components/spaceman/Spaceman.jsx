/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../../assets/3d/spaceman.glb";
import CanvasLoader from "../Loader/Loader";
import './spaceman.scss';

const Spaceman = ({ scale, position, rotationY }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    if (actions["Idle"]) {
      actions["Idle"].play();
    }
  }, [actions]);

  return (
    <primitive
      ref={spacemanRef}
      object={scene}
      position={position}
      scale={scale}
      rotation={[0, rotationY, 0]}
    />
  );
};

const InteractiveSpaceman = ({  scale, position }) => {
  const [rotationY, setRotationY] = useState(-Math.PI / 4);
  const { size } = useThree();
  const isDraggingRef = useRef(false);
  const previousMouseXRef = useRef(0);
  const isTouchingRef = useRef(false);
  const previousTouchXRef = useRef(0);

  useEffect(() => {
    const handleMouseDown = (event) => {
      isDraggingRef.current = true;
      previousMouseXRef.current = event.clientX;
    };

    const handleMouseMove = (event) => {
      if (isDraggingRef.current) {
        const deltaX = event.clientX - previousMouseXRef.current;
        setRotationY((prevRotationY) => prevRotationY + deltaX * 0.01);
        previousMouseXRef.current = event.clientX;
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleTouchStart = (event) => {
      isTouchingRef.current = true;
      previousTouchXRef.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      if (isTouchingRef.current) {
        const deltaX = event.touches[0].clientX - previousTouchXRef.current;
        setRotationY((prevRotationY) => prevRotationY + deltaX * 0.01);
        previousTouchXRef.current = event.touches[0].clientX;
      }
    };

    const handleTouchEnd = () => {
      isTouchingRef.current = false;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [size.width, size.height]);

  return <Spaceman rotationY={rotationY + Math.PI} scale={scale} position={position} />;
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [scale, setScale] = useState([3.5, 3.5, 3.5]);
  const [position, setPosition] = useState([0.2, -0.7, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1.2, 1.2, 1.2]);
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.2, -0.3, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([2, 2, 2]);
        setPosition([0.2, -0.4, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([2.2,2.2,2.2]);
        setPosition([0.2, -0.5, 0]);
      } else {
        setScale([2.5,2.5,2]);
        setPosition([0.2, -0.7, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas className="canva" camera={{ near: 0.1, far: 2000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <InteractiveSpaceman scrollContainer={scrollContainer} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
