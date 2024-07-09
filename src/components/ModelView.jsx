import React, { useState, useEffect, useRef, Suspense } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { View, PerspectiveCamera } from "@react-three/drei";
import Lights from "./Lights";
import IPhone from "./IPhone";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2
      }?'right-[-100%]:''`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <Suspense fallback={<div>Loading</div>}>
        {/* <IPhone
          scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
          item={item}
          size={size}
        /> */}
      </Suspense>
    </View>
  );
};

export default ModelView;
