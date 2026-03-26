import { useEffect, useRef } from 'react';

const STAR_COUNT = 280;
const STRETCH_RADIUS = 180;
const STRETCH_STRENGTH = 2.5;

export default function StarField() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate stars
    starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseSize: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    let animId;
    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const star of starsRef.current) {
        const dx = star.x - mx;
        const dy = star.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Twinkle
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.opacity + twinkle * 0.15;

        let drawX = star.x;
        let drawY = star.y;
        let stretchX = 1;
        let stretchY = 1;
        let angle = 0;
        let glow = 0;

        if (dist < STRETCH_RADIUS && dist > 1) {
          const factor = 1 - dist / STRETCH_RADIUS;
          const easedFactor = factor * factor;

          // Push away from cursor slightly
          const pushStrength = easedFactor * 12;
          drawX += (dx / dist) * pushStrength;
          drawY += (dy / dist) * pushStrength;

          // Stretch along the radial direction
          angle = Math.atan2(dy, dx);
          stretchX = 1 + easedFactor * STRETCH_STRENGTH;
          stretchY = 1 - easedFactor * 0.3;

          // Glow boost
          glow = easedFactor;
        }

        const size = star.baseSize * (1 + glow * 1.5);

        ctx.save();
        ctx.translate(drawX, drawY);
        ctx.rotate(angle);
        ctx.scale(stretchX, stretchY);
        ctx.globalAlpha = Math.max(0, Math.min(1, currentOpacity + glow * 0.4));

        // Draw star
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);

        if (glow > 0.1) {
          // Bright stretched star gets a blue-white glow
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 3);
          gradient.addColorStop(0, `rgba(200, 220, 255, ${0.9 + glow * 0.1})`);
          gradient.addColorStop(0.4, `rgba(140, 170, 255, ${0.4 * glow})`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fill();

          // Sharp core
          ctx.beginPath();
          ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = '#fff';
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(220, 225, 240, ${ctx.globalAlpha})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
