import { Renderer, Transform, Vec3, Color, Polyline } from 'https://cdn.jsdelivr.net/npm/ogl@0.0.116/dist/index.mjs';

document.addEventListener("DOMContentLoaded", function() {
    const container = document.createElement("div");
    container.id = "ribbon-container";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    // Initialize OGL Renderer
    const renderer = new Renderer({ dpr: window.devicePixelRatio || 2, alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0); // transparent background

    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    container.appendChild(gl.canvas);

    const scene = new Transform();
    const lines = [];

    // GLSL Shaders from ReactBits
    const vertex = `
      precision highp float;
      
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;
      
      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;
      
      varying vec2 vUV;
      
      vec4 getPosition() {
          vec4 current = vec4(position, 1.0);
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;
          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
          float dist = length(nextScreen - prevScreen);
          normal *= smoothstep(0.0, 0.02, dist);
          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
          float pixelWidth = current.w * pixelWidthRatio;
          normal *= pixelWidth * uThickness;
          current.xy -= normal * side;
          if(uEnableShaderEffect > 0.5) {
            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
          }
          return current;
      }
      
      void main() {
          vUV = uv;
          gl_Position = getPosition();
      }
    `;

    const fragment = `
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;
      varying vec2 vUV;
      void main() {
          float fadeFactor = 1.0;
          if(uEnableFade > 0.5) {
              fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
          }
          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `;

    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      lines.forEach(line => line.polyline.resize());
    }
    window.addEventListener('resize', resize);

    // Colors: Pastel/Light palette for white theme
    const colors = ['#3b82f6', '#6366f1', '#a855f7'];
    
    // Core parameters
    const baseSpring = 0.04;
    const baseFriction = 0.88;
    const baseThickness = 22;
    const offsetFactor = 0.04;
    const maxAge = 400;
    const pointCount = 45;
    const speedMultiplier = 0.7;
    const enableFade = true;
    const enableShaderEffect = true;
    const effectAmplitude = 1.5;

    const center = (colors.length - 1) / 2;
    colors.forEach((color, index) => {
      const spring = baseSpring + (Math.random() - 0.5) * 0.01;
      const friction = baseFriction + (Math.random() - 0.5) * 0.02;
      const thickness = baseThickness + (Math.random() - 0.5) * 2;
      const mouseOffset = new Vec3(
        (index - center) * offsetFactor + (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.05,
        0
      );

      const line = {
        spring,
        friction,
        mouseVelocity: new Vec3(),
        mouseOffset
      };

      const points = [];
      for (let i = 0; i < pointCount; i++) {
        points.push(new Vec3());
      }
      line.points = points;

      line.polyline = new Polyline(gl, {
        points,
        vertex,
        fragment,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: thickness },
          uOpacity: { value: 0.55 }, // Translucent overlay
          uTime: { value: 0.0 },
          uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
          uEffectAmplitude: { value: effectAmplitude },
          uEnableFade: { value: enableFade ? 1.0 : 0.0 }
        }
      });
      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    const mouse = new Vec3();
    let hasMoved = false;

    function updateMouse(e) {
      let x, y;
      const rect = container.getBoundingClientRect();
      if (e.changedTouches && e.changedTouches.length) {
        x = e.changedTouches[0].clientX - rect.left;
        y = e.changedTouches[0].clientY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      const width = container.clientWidth;
      const height = container.clientHeight;
      mouse.set((x / width) * 2 - 1, (y / height) * -2 + 1, 0);

      // Initialize points on first movement
      if (!hasMoved) {
        hasMoved = true;
        lines.forEach(line => {
          line.points.forEach(p => p.copy(mouse).add(line.mouseOffset));
        });
      }
    }
    
    window.addEventListener('mousemove', updateMouse);
    window.addEventListener('touchstart', updateMouse);
    window.addEventListener('touchmove', updateMouse);

    const tmp = new Vec3();
    let frameId;
    let lastTime = performance.now();

    function update() {
      frameId = requestAnimationFrame(update);
      const currentTime = performance.now();
      const dt = currentTime - lastTime;
      lastTime = currentTime;

      if (hasMoved) {
        lines.forEach(line => {
          tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
          line.mouseVelocity.add(tmp).multiply(line.friction);
          line.points[0].add(line.mouseVelocity);

          for (let i = 1; i < line.points.length; i++) {
            if (isFinite(maxAge) && maxAge > 0) {
              const segmentDelay = maxAge / (line.points.length - 1);
              const alpha = Math.min(1, (dt * speedMultiplier) / segmentDelay);
              line.points[i].lerp(line.points[i - 1], alpha);
            } else {
              line.points[i].lerp(line.points[i - 1], 0.95);
            }
          }
          if (line.polyline.mesh.program.uniforms.uTime) {
            line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
          }
          line.polyline.updateGeometry();
        });

        renderer.render({ scene });
      }
    }
    
    update();
});
