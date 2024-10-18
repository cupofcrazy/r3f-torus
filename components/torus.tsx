import { MeshDistortMaterial, MeshTransmissionMaterial, Capsule, Torus, Box, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export function TorusMesh() {

  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Torus ref={meshRef} args={[2, 0.35, 64, 100]} material-color="blue">
      <MeshDistortMaterial distort={0.4} speed={2} />
    </Torus>
  )
}