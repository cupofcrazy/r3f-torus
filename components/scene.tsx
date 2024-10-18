'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { TorusMesh } from './torus'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'

export function Scene() {
  return (
    <Canvas>
      <OrthographicCamera position={[0, 0, 10]} />
      <color attach="background" args={['#dcdcdc']} />
      <TorusMesh />
      <Environment preset="park" environmentIntensity={3}>
        <Lightformer intensity={1} position={[2, 3, 3]} scale={5} />
        <Lightformer intensity={2} position={[-2, 2, -4]} scale={5} />
      </Environment>
      <EffectComposer>
        <Bloom mipmapBlur intensity={0.5} levels={9} luminanceSmoothing={1.9} luminanceThreshold={1} opacity={0.4} />
        <DepthOfField focusDistance={0.01} focalLength={0.1} bokehScale={2} />
      </EffectComposer>
      <OrbitControls />
    </Canvas>
  )
}
