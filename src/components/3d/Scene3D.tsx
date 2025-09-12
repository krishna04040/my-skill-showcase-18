import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Torus, Float, Text3D, Environment } from '@react-three/drei'
import * as THREE from 'three'

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
  })
  
  return (
    <Box ref={meshRef} args={[1, 1, 1]} position={[-2, 0, 0]}>
      <meshStandardMaterial color="hsl(200, 100%, 50%)" />
    </Box>
  )
}

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5
  })
  
  return (
    <Sphere ref={meshRef} args={[0.7]} position={[2, 0, 0]}>
      <meshStandardMaterial color="hsl(160, 100%, 40%)" />
    </Sphere>
  )
}

const AnimatedTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.8
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3
  })
  
  return (
    <Torus ref={meshRef} args={[1, 0.3, 16, 32]} position={[0, 1.5, 0]}>
      <meshStandardMaterial color="hsl(280, 100%, 60%)" />
    </Torus>
  )
}

const Scene3D = () => {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <Environment preset="sunset" />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={0.5} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <AnimatedBox />
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
          <AnimatedSphere />
        </Float>
        
        <Float speed={3} rotationIntensity={2} floatIntensity={0.5}>
          <AnimatedTorus />
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

export default Scene3D