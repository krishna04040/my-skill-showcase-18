import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls, Sphere, Box } from '@react-three/drei'
import * as THREE from 'three'

interface SkillNodeProps {
  position: [number, number, number]
  skill: string
  level: number
  color: string
}

const SkillNode = ({ position, skill, level, color }: SkillNodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      const scale = hovered ? 1.2 : level / 100
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, scale, 0.1))
    }
  })
  
  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.5]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </Sphere>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
      <Text
        position={[0, -1.1, 0]}
        fontSize={0.15}
        color="#cccccc"
        anchorX="center"
        anchorY="middle"
      >
        {level}%
      </Text>
    </group>
  )
}

const SkillsVisualization = () => {
  const skills = [
    { name: 'SAP HANA', level: 95, position: [0, 0, 0] as [number, number, number], color: 'hsl(200, 100%, 50%)' },
    { name: 'SAP BW', level: 90, position: [2, 1, 0] as [number, number, number], color: 'hsl(160, 100%, 40%)' },
    { name: 'ABAP', level: 85, position: [-2, 0.5, 0] as [number, number, number], color: 'hsl(280, 100%, 60%)' },
    { name: 'SQL', level: 88, position: [1, -1, 1] as [number, number, number], color: 'hsl(320, 100%, 50%)' },
    { name: 'Python', level: 75, position: [-1.5, -0.5, -1] as [number, number, number], color: 'hsl(40, 100%, 50%)' },
    { name: 'Data Modeling', level: 92, position: [0, 1.5, -0.5] as [number, number, number], color: 'hsl(120, 100%, 40%)' }
  ]

  return (
    <div className="h-[500px] w-full bg-gradient-to-b from-background to-muted rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={0.5} />
        
        {skills.map((skill, index) => (
          <SkillNode
            key={skill.name}
            position={skill.position}
            skill={skill.name}
            level={skill.level}
            color={skill.color}
          />
        ))}
        
        <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  )
}

export default SkillsVisualization