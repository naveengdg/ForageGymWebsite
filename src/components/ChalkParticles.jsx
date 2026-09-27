import React, { useEffect, useRef } from 'react';

export default function ChalkParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = 0;
    let height = 0;

    const setSize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = canvas.width = rect?.width || window.innerWidth;
      height = canvas.height = rect?.height || window.innerHeight;
    };

    setSize();
    window.addEventListener('resize', setSize);

    // Subtle atmospheric floating chalk & lime ember bubbles (Hero Only)
    const baseCount = window.innerWidth < 768 ? 26 : 50;
    const particles = Array.from({ length: baseCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.4 + 0.8,
      vy: Math.random() * 0.45 + 0.18,
      vx: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.45 + 0.2,
      baseAlpha: Math.random() * 0.45 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      angle: Math.random() * Math.PI * 2,
      isLime: Math.random() > 0.4,
    }));

    // Dynamic click/tap burst particles array (Hero Only)
    const clickParticles = [];

    const handlePointerDown = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      // Only trigger if click/tap is inside the hero area
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        const burstCount = window.innerWidth < 768 ? 8 : 12;

        for (let i = 0; i < burstCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2.8 + 1.2;
          clickParticles.push({
            x: clickX,
            y: clickY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1.2,
            radius: Math.random() * 3.5 + 1.2,
            alpha: 0.9,
            decay: Math.random() * 0.025 + 0.015,
            isLime: Math.random() > 0.3,
          });
        }
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw ambient floating particles
      particles.forEach((p) => {
        p.y -= p.vy;
        p.angle += p.pulseSpeed;
        p.x += Math.sin(p.angle) * 0.35 + p.vx;

        // Reset to bottom when moving off top
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.baseAlpha + Math.sin(p.angle) * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.isLime) {
          ctx.fillStyle = `rgba(204, 255, 0, ${Math.max(0.1, currentAlpha)})`;
          ctx.shadowBlur = p.radius > 1.8 ? 8 : 3;
          ctx.shadowColor = 'rgba(204, 255, 0, 0.5)';
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, currentAlpha * 0.85)})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.35)';
        }
        ctx.fill();
      });

      // 2. Draw interactive click burst particles
      for (let i = clickParticles.length - 1; i >= 0; i--) {
        const cp = clickParticles[i];
        cp.x += cp.vx;
        cp.y += cp.vy;
        cp.vy -= 0.03;
        cp.vx *= 0.96;
        cp.alpha -= cp.decay;

        if (cp.alpha <= 0) {
          clickParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(cp.x, cp.y, cp.radius, 0, Math.PI * 2);

        if (cp.isLime) {
          ctx.fillStyle = `rgba(204, 255, 0, ${cp.alpha})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(204, 255, 0, 0.8)';
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${cp.alpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('pointerdown', handlePointerDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75"
    />
  );
}
