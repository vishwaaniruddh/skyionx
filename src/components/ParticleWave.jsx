import { useRef, useEffect } from 'react'
import * as THREE from 'three'

// SimplexNoise
class SimplexNoise {
  constructor() {
    this.grad3 = [
      [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
      [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
      [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
    ]
    this.p = []
    for (let i = 0; i < 256; i++) this.p[i] = Math.floor(Math.random() * 256)
    this.perm = []
    for (let i = 0; i < 512; i++) this.perm[i] = this.p[i & 255]
  }
  dot3(g, x, y, z) { return g[0]*x + g[1]*y + g[2]*z }
  noise3d(xin, yin, zin) {
    const F3 = 1/3, G3 = 1/6
    let s = (xin+yin+zin)*F3
    let i = Math.floor(xin+s), j = Math.floor(yin+s), k = Math.floor(zin+s)
    let t = (i+j+k)*G3
    let x0 = xin-(i-t), y0 = yin-(j-t), z0 = zin-(k-t)
    let i1,j1,k1,i2,j2,k2
    if(x0>=y0){if(y0>=z0){i1=1;j1=0;k1=0;i2=1;j2=1;k2=0}else if(x0>=z0){i1=1;j1=0;k1=0;i2=1;j2=0;k2=1}else{i1=0;j1=0;k1=1;i2=1;j2=0;k2=1}}
    else{if(y0<z0){i1=0;j1=0;k1=1;i2=0;j2=1;k2=1}else if(x0<z0){i1=0;j1=1;k1=0;i2=0;j2=1;k2=1}else{i1=0;j1=1;k1=0;i2=1;j2=1;k2=0}}
    let x1=x0-i1+G3,y1=y0-j1+G3,z1=z0-k1+G3
    let x2=x0-i2+2*G3,y2=y0-j2+2*G3,z2=z0-k2+2*G3
    let x3=x0-1+3*G3,y3=y0-1+3*G3,z3=z0-1+3*G3
    let ii=i&255,jj=j&255,kk=k&255
    let gi0=this.perm[ii+this.perm[jj+this.perm[kk]]]%12
    let gi1=this.perm[ii+i1+this.perm[jj+j1+this.perm[kk+k1]]]%12
    let gi2=this.perm[ii+i2+this.perm[jj+j2+this.perm[kk+k2]]]%12
    let gi3=this.perm[ii+1+this.perm[jj+1+this.perm[kk+1]]]%12
    let n0,n1,n2,n3
    let t0=.6-x0*x0-y0*y0-z0*z0;if(t0<0)n0=0;else{t0*=t0;n0=t0*t0*this.dot3(this.grad3[gi0],x0,y0,z0)}
    let t1=.6-x1*x1-y1*y1-z1*z1;if(t1<0)n1=0;else{t1*=t1;n1=t1*t1*this.dot3(this.grad3[gi1],x1,y1,z1)}
    let t2=.6-x2*x2-y2*y2-z2*z2;if(t2<0)n2=0;else{t2*=t2;n2=t2*t2*this.dot3(this.grad3[gi2],x2,y2,z2)}
    let t3=.6-x3*x3-y3*y3-z3*z3;if(t3<0)n3=0;else{t3*=t3;n3=t3*t3*this.dot3(this.grad3[gi3],x3,y3,z3)}
    return 32*(n0+n1+n2+n3)
  }
}

export default function ParticleWave() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const scene = new THREE.Scene()

    // Very low camera — almost at surface level, looking across
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    )
    camera.position.set(0, 0.35, 2.8)
    camera.lookAt(0, 0.0, -2)

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(1) // keep 1 for perf
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const simplex = new SimplexNoise()

    // ── Dense dot grid: 200 x 120 = 24,000 particles ──
    const gridW = 200
    const gridH = 120
    const spacingX = 0.065
    const spacingY = 0.065
    const totalParticles = gridW * gridH

    const positions = new Float32Array(totalParticles * 3)
    const baseX = new Float32Array(totalParticles)
    const baseY = new Float32Array(totalParticles)

    for (let iy = 0; iy < gridH; iy++) {
      for (let ix = 0; ix < gridW; ix++) {
        const idx = iy * gridW + ix
        const x = (ix - gridW / 2) * spacingX
        const y = (iy - gridH / 2) * spacingY
        baseX[idx] = x
        baseY[idx] = y
        positions[idx * 3] = x
        positions[idx * 3 + 1] = 0
        positions[idx * 3 + 2] = y
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Shader: cyan/blue dots with screen-space fade to avoid text overlap
    const vertexShader = `
      varying float vDepth;
      varying float vElevation;
      varying float vScreenY;

      void main() {
        vElevation = position.y;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDepth = -mvPosition.z;

        vec4 clipPos = projectionMatrix * mvPosition;
        // Screen-space Y: 0 = bottom, 1 = top
        vScreenY = (clipPos.y / clipPos.w) * 0.5 + 0.5;

        gl_PointSize = 2.5 * (120.0 / vDepth);
        gl_PointSize = clamp(gl_PointSize, 0.3, 5.0);

        gl_Position = clipPos;
      }
    `

    const fragmentShader = `
      varying float vDepth;
      varying float vElevation;
      varying float vScreenY;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;

        float brightness = 1.0 - smoothstep(0.0, 0.5, dist);

        float elevBoost = smoothstep(-0.2, 0.8, vElevation);

        float depthFade = smoothstep(18.0, 2.0, vDepth);

        // Fade out particles that are in the upper part of the screen (text zone)
        float topFade = smoothstep(0.75, 0.5, vScreenY);

        // Colors: deep cyan for valleys, brighter cyan-blue for peaks (no white)
        vec3 valleyColor = vec3(0.0, 0.25, 0.45);     // dark teal
        vec3 baseColor   = vec3(0.0, 0.55, 0.80);     // ocean cyan
        vec3 peakColor   = vec3(0.1, 0.75, 0.95);     // bright cyan
        vec3 color = mix(valleyColor, baseColor, elevBoost);
        color = mix(color, peakColor, pow(elevBoost, 2.0));

        float alpha = brightness * depthFade * topFade * (0.4 + 0.6 * elevBoost);

        gl_FragColor = vec4(color * brightness, alpha);
      }
    `

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const posAttr = geometry.getAttribute('position')
    const posArr = posAttr.array

    let animationId = null

    function animationLoop(t) {
      animationId = requestAnimationFrame(animationLoop)

      const time = t / 3000
      for (let i = 0; i < totalParticles; i++) {
        const x = baseX[i]
        const y = baseY[i]
        // Rich multi-octave noise for dramatic wave peaks
        const elev =
          0.6 * simplex.noise3d(x * 0.35, y * 0.35, time) +
          0.3 * simplex.noise3d(x * 0.7, y * 0.7, time * 1.2) +
          0.15 * simplex.noise3d(x * 1.5, y * 1.5, time * 1.6)
        posArr[i * 3 + 1] = elev
      }
      posAttr.needsUpdate = true

      renderer.render(scene, camera)
    }

    animationLoop(0)

    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationId) cancelAnimationFrame(animationId)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none translate-y-[25%]"
      style={{ zIndex: 0 }}
    />
  )
}
