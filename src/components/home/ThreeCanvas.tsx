"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// 1. 3D Low-Poly Faceted Cyber Head (Left Hero Visual)
function HeadScene({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const speed = hovered ? 0.9 : 0.3;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed * 0.4;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * speed * 1.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * speed * 1.5;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, -0.3, 0]}>
      {/* Faceted Low-Poly Head with Cyber Glow Material */}
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshStandardMaterial
          color="#00f2fe"
          emissive="#0077b6"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.4}
          flatShading={true}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Glowing Outer Wireframe Mesh */}
      <mesh scale={1.03}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshBasicMaterial color="#ff007f" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Orbit Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.03, 8, 36]} />
        <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={0.8} />
      </mesh>

      {/* Orbit Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.9, 0.02, 8, 36]} />
        <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={0.8} />
      </mesh>

      <Sparkles count={60} scale={2.2} size={4} color="#00f2fe" speed={1.5} />
    </group>
  );
}

// 2. 3D Glowing AI Brain (Intelligent Creativity & Branding)
function BrainScene({ hovered }: { hovered: boolean }) {
  const brainRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const speed = hovered ? 0.9 : 0.35;
    if (brainRef.current) {
      brainRef.current.rotation.y += delta * speed;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * speed * 0.8;
      coreRef.current.rotation.z -= delta * speed * 0.6;
    }
  });

  return (
    <group ref={brainRef}>
      {/* High density pink and cyan sparkles */}
      <Sparkles count={90} scale={1.8} size={4} color="#ff007f" speed={hovered ? 2.5 : 1.0} />
      <Sparkles count={50} scale={1.4} size={3} color="#00f2fe" speed={hovered ? 2.0 : 0.8} />
      
      {/* Intersecting central rings representing AI brain lobes */}
      <mesh ref={coreRef}>
        <torusGeometry args={[0.75, 0.14, 8, 24]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7000ff"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.5}
          flatShading
        />
      </mesh>

      {/* Central Glowing AI Chip */}
      <mesh>
        <boxGeometry args={[0.45, 0.45, 0.45]} />
        <meshStandardMaterial
          color="#00f2fe"
          emissive="#00f2fe"
          emissiveIntensity={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

// 3. 3D Cyber System & Phone (Web & Mobile Development)
function SystemScene({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const speed = hovered ? 0.7 : 0.25;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* 3D Monitor Panel */}
      <mesh position={[-0.3, 0.3, -0.4]}>
        <boxGeometry args={[1.9, 1.2, 0.1]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* Monitor Screen Glowing Cyan Face */}
      <mesh position={[-0.3, 0.3, -0.34]}>
        <planeGeometry args={[1.8, 1.1]} />
        <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={0.6} transparent opacity={0.85} />
      </mesh>

      {/* 3D Smartphone standing in front */}
      <mesh position={[0.6, -0.3, 0.3]} rotation={[0, -0.3, 0.08]}>
        <boxGeometry args={[0.7, 1.4, 0.08]} />
        <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Phone screen glowing pink face */}
      <mesh position={[0.6, -0.3, 0.345]} rotation={[0, -0.3, 0.08]}>
        <planeGeometry args={[0.64, 1.34]} />
        <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={0.7} transparent opacity={0.85} />
      </mesh>

      <Sparkles count={40} scale={2.0} size={3} color="#00f2fe" speed={1.2} />
    </group>
  );
}

// 4. 3D Neon Hologram Globe (Digital Marketing & Strategy)
function GlobeScene({ hovered }: { hovered: boolean }) {
  const globeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const speed = hovered ? 0.8 : 0.3;
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * speed;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z -= delta * speed * 1.4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * speed * 1.6;
    }
  });

  return (
    <group>
      {/* Cyan Wireframe Globe Sphere */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial
          color="#00f2fe"
          emissive="#00f2fe"
          emissiveIntensity={0.6}
          wireframe
          roughness={0.1}
        />
      </mesh>

      {/* Orbiting Ring Path 1 (Magenta Glow) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.6, 0.04, 8, 36]} />
        <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={0.9} />
      </mesh>

      {/* Orbiting Ring Path 2 (Purple Glow) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[1.7, 0.03, 8, 36]} />
        <meshStandardMaterial color="#7000ff" emissive="#7000ff" emissiveIntensity={0.9} />
      </mesh>

      <Sparkles count={50} scale={2.2} size={3.5} color="#00f2fe" speed={1.5} />
    </group>
  );
}

// 5. 3D Neon DSLR Cinema Camera (Content & Video Production)
function CameraScene({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const reel1Ref = useRef<THREE.Mesh>(null);
  const reel2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const speed = hovered ? 0.8 : 0.25;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed * 0.5;
    }
    if (reel1Ref.current) {
      reel1Ref.current.rotation.z += delta * speed * 1.8;
    }
    if (reel2Ref.current) {
      reel2Ref.current.rotation.z += delta * speed * 1.8;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Main Camera Body */}
      <mesh>
        <boxGeometry args={[1.5, 0.9, 0.8]} />
        <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Lens Barrel */}
      <mesh position={[0.7, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.35, 0.4, 0.6, 16]} />
        <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Glowing Lens Glass Front (Cyan Glow) */}
      <mesh position={[1.01, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.02, 16]} />
        <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={0.8} transparent opacity={0.9} />
      </mesh>

      {/* Film Reel 1 (Left - Pink Glow) */}
      <mesh ref={reel1Ref} position={[-0.4, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.1, 12]} />
        <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={0.6} />
      </mesh>

      {/* Film Reel 2 (Right - Purple Glow) */}
      <mesh ref={reel2Ref} position={[0.4, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.1, 12]} />
        <meshStandardMaterial color="#7000ff" emissive="#7000ff" emissiveIntensity={0.6} />
      </mesh>

      <Sparkles count={45} scale={2.0} size={3} color="#ff007f" speed={1.5} />
    </group>
  );
}

interface ThreeCanvasProps {
  type: "head" | "brain" | "phone" | "globe" | "camera";
  hovered: boolean;
}

export default function ThreeCanvas({ type, hovered }: ThreeCanvasProps) {
  return (
    <div className="w-full h-full relative pointer-events-none" style={{ minHeight: "150px" }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
        {/* Base Ambient Light */}
        <ambientLight intensity={1.2} />

        {/* Dynamic Vibrant Cyber Lights */}
        <pointLight position={[6, 6, 6]} intensity={3.5} color="#00f2fe" />
        <pointLight position={[-6, -6, 6]} intensity={3.5} color="#ff007f" />
        <pointLight position={[0, 8, -5]} intensity={2.5} color="#7000ff" />

        {/* Floating Motion Container */}
        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
          {type === "head" && <HeadScene hovered={hovered} />}
          {type === "brain" && <BrainScene hovered={hovered} />}
          {type === "phone" && <SystemScene hovered={hovered} />}
          {type === "globe" && <GlobeScene hovered={hovered} />}
          {type === "camera" && <CameraScene hovered={hovered} />}
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
