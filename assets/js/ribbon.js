document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.createElement("canvas");
    canvas.id = "ribbon-canvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", function() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const pointer = { x: width / 2, y: height / 2 };
    let hasMoved = false;

    window.addEventListener("mousemove", function(e) {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        hasMoved = true;
    });

    window.addEventListener("touchmove", function(e) {
        if (e.touches.length > 0) {
            pointer.x = e.touches[0].clientX;
            pointer.y = e.touches[0].clientY;
            hasMoved = true;
        }
    });

    // Define ribbon parameters
    const ribbonColors = [
        { r: 59,  g: 130, b: 246, a: 0.4 },  // Blue
        { r: 99,  g: 102, b: 241, a: 0.45 }, // Indigo
        { r: 168, g: 85,  b: 247, a: 0.35 }  // Purple
    ];

    const ribbons = ribbonColors.map((color, index) => {
        const pointCount = 35;
        const points = [];
        // Add random offsets for organic spring movement
        const offset = {
            x: (index - 1) * 8 + (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 6
        };

        for (let i = 0; i < pointCount; i++) {
            points.push({ x: pointer.x, y: pointer.y, vx: 0, vy: 0 });
        }

        return {
            points,
            color,
            offset,
            spring: 0.025 + index * 0.005,
            friction: 0.85 + (Math.random() - 0.5) * 0.02,
            thickness: 18 + index * 3
        };
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        if (hasMoved) {
            ribbons.forEach(ribbon => {
                const points = ribbon.points;
                
                // Head point follows pointer with spring
                const targetX = pointer.x + ribbon.offset.x;
                const targetY = pointer.y + ribbon.offset.y;
                
                const dx = targetX - points[0].x;
                const dy = targetY - points[0].y;
                
                points[0].vx += dx * ribbon.spring;
                points[0].vy += dy * ribbon.spring;
                points[0].vx *= ribbon.friction;
                points[0].vy *= ribbon.friction;
                points[0].x += points[0].vx;
                points[0].y += points[0].vy;

                // Subsequent points follow ahead
                for (let i = 1; i < points.length; i++) {
                    const curr = points[i];
                    const prev = points[i - 1];
                    
                    const sdx = prev.x - curr.x;
                    const sdy = prev.y - curr.y;
                    
                    curr.vx += sdx * ribbon.spring * 1.5;
                    curr.vy += sdy * ribbon.spring * 1.5;
                    curr.vx *= ribbon.friction;
                    curr.vy *= ribbon.friction;
                    curr.x += curr.vx;
                    curr.y += curr.vy;
                }

                // Render ribbon using thin overlaying segments for smooth tapering opacity
                ctx.lineJoin = "round";
                ctx.lineCap = "round";

                for (let i = 0; i < points.length - 1; i++) {
                    const p1 = points[i];
                    const p2 = points[i + 1];

                    // Check if points are valid numbers
                    if (isNaN(p1.x) || isNaN(p1.y) || isNaN(p2.x) || isNaN(p2.y)) continue;

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    const ratio = 1 - (i / points.length);
                    ctx.lineWidth = ribbon.thickness * ratio;
                    
                    const col = ribbon.color;
                    ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${ratio * col.a})`;
                    ctx.stroke();
                }
            });
        }

        requestAnimationFrame(animate);
    }

    animate();
});
