'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uMouse;
uniform float uHover;
varying vec2 vUv;

// Simplex noise or simple hash function could be added here for more grain
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = vUv;
  
  // Mouse interaction displacement
  float dist = distance(uv, uMouse);
  float decay = smoothstep(0.5, 0.0, dist);
  
  // Wave effect
  float wave = sin(uv.y * 10.0 + uTime) * 0.005 + sin(uv.x * 10.0 + uTime * 0.5) * 0.005;
  
  // Distortion combines wave and mouse influence
  vec2 distortedUv = uv + vec2(wave) + (uMouse - uv) * decay * 0.05 * uHover;

  // RGB Shift (Chromatic Aberration)
  float shift = 0.01 + decay * 0.05 * uHover;
  float r = texture2D(uTexture, distortedUv + vec2(shift, 0.0)).r;
  float g = texture2D(uTexture, distortedUv).g;
  float b = texture2D(uTexture, distortedUv - vec2(shift, 0.0)).b;

  vec3 color = vec3(r, g, b);
  
  // Scanline/Grid effect (optional, adding subtle tech feel)
  // float scan = sin(uv.y * 800.0) * 0.02;
  // color -= scan;

  gl_FragColor = vec4(color, 1.0);
}
`

export default function DistortionImage() {
    const mesh = useRef<THREE.Mesh>(null)
    const texture = useTexture('/assets/images/hero.jpg') as THREE.Texture
    const { viewport } = useThree()

    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uHover: { value: 0 }
        }),
        [texture]
    )

    useFrame((state) => {
        if (mesh.current) {
            const material = mesh.current.material as THREE.ShaderMaterial
            material.uniforms.uTime.value = state.clock.getElapsedTime()

            // Lerp mouse interaction
            material.uniforms.uMouse.value.lerp(
                new THREE.Vector2(
                    (state.pointer.x + 1) / 2,
                    (state.pointer.y + 1) / 2
                ),
                0.1
            )

            // Interactive hover state could be driven by props, here it's constant for ambient effect
            // Or we can drive uHover based on mouse movement speed or distance from center
            material.uniforms.uHover.value = THREE.MathUtils.lerp(material.uniforms.uHover.value, 1.0, 0.05)
        }
    })

    // Cover logic to maintain aspect ratio
    const scale = useMemo(() => {
        const image = texture.image as HTMLImageElement
        const imageAspect = image.width / image.height
        const viewportAspect = viewport.width / viewport.height

        if (imageAspect > viewportAspect) {
            return [viewport.height * imageAspect, viewport.height, 1]
        } else {
            return [viewport.width, viewport.width / imageAspect, 1]
        }
    }, [texture, viewport])

    return (
        <mesh ref={mesh} scale={scale as [number, number, number]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                transparent
            />
        </mesh>
    )
}
