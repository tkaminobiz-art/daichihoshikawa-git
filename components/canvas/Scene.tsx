'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense } from 'react'

export default function Scene({ children }: { children: React.ReactNode }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full -z-10 bg-slate-900'>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {children}
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}
