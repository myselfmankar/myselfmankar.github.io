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
    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    container.appendChild(gl.canvas);

    const scene = new Transform();
    const lines = [];

    // Vertex shader — standard Polyline with optional sine wave distortion
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
          return current;
      }
      
      void main() {
          vUV = uv;
          gl_Position = getPosition();
      }
    `;

    // Fragment shader — fades along the ribbon's length for a natural trail
    const fragment = `
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      varying vec2 vUV;
      void main() {
          float fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `;

    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height);
      lines.forEach(line => line.polyline.resize());
    }
    window.addEventListener('resize', resize);

    // Subtle, elegant colors that complement the white glassmorphic theme
    const colors = ['#3b82f6', '#6366f1', '#a855f7'];
    
    // Parameters tuned for a smooth, trailing ribbon feel
    const baseSpring = 0.03;
    const baseFriction = 0.85;
    const baseThickness = 18;
    const offsetFactor = 0.02;
    const pointCount = 50;

    const center = (colors.length - 1) / 2;
    colors.forEach((color, index) => {
      const spring = baseSpring + (Math.random() - 0.5) * 0.005;
      const friction = baseFriction + (Math.random() - 0.5) * 0.01;
      const thickness = baseThickness + (Math.random() - 0.5) * 4;
      const mouseOffset = new Vec3(
        (index - center) * offsetFactor,
        0,
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
          uOpacity: { value: 0.5 }
        }
      });
      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    const mouse = new Vec3();
    let hasMoved = false;
    let lastMouseTime = 0;
    let idleFadeOpacity = 0.5;
    const maxOpacity = 0.5;

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
      if (width === 0 || height === 0) return;

      mouse.set((x / width) * 2 - 1, (y / height) * -2 + 1, 0);
      lastMouseTime = performance.now();

      // Initialize all ribbon points to cursor position on first interaction
      if (!hasMoved) {
        hasMoved = true;
        lines.forEach(line => {
          line.points.forEach(p => p.copy(mouse).add(line.mouseOffset));
        });
      }
    }
    
    window.addEventListener('mousemove', updateMouse, { passive: true });
    window.addEventListener('touchstart', updateMouse, { passive: true });
    window.addEventListener('touchmove', updateMouse, { passive: true });

    const tmp = new Vec3();

    function update() {
      requestAnimationFrame(update);

      if (!hasMoved) return;

      const now = performance.now();
      const timeSinceMove = now - lastMouseTime;

      // Gradually fade ribbons out when mouse is idle (after 800ms)
      if (timeSinceMove > 800) {
        idleFadeOpacity = Math.max(0, idleFadeOpacity - 0.012);
      } else {
        // Quickly restore opacity when cursor is actively moving
        idleFadeOpacity = Math.min(maxOpacity, idleFadeOpacity + 0.05);
      }

      lines.forEach(line => {
        // Spring physics: the head of the ribbon chases the mouse
        tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
        line.mouseVelocity.add(tmp).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);

        // Each subsequent point follows the previous one with easing
        for (let i = 1; i < line.points.length; i++) {
          const t = 0.2 + (0.6 * i) / line.points.length; // Slower towards the tail
          line.points[i].lerp(line.points[i - 1], 1 - t);
        }

        // Update opacity for idle fade
        if (line.polyline.mesh.program.uniforms.uOpacity) {
          line.polyline.mesh.program.uniforms.uOpacity.value = idleFadeOpacity;
        }

        line.polyline.updateGeometry();
      });

      // Only render if ribbons are visible
      if (idleFadeOpacity > 0.001) {
        renderer.render({ scene });
      } else {
        // Clear the canvas when fully faded to avoid ghost frames
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    }
    
    update();
});
