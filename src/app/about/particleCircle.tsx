"use client";

import React, { useRef, useEffect } from "react";

interface Particle {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  factor: number;
}

const ParticleCircle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const mousePrevRef = useRef<{ x: number; y: number } | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 500;
    const height = 500;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, width / 2, 0, 2 * Math.PI);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, width, height);
    const { data } = imageData;

    particlesRef.current = [];
    const step = 4;
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 0) {
          particlesRef.current.push({
            ox: x,
            oy: y,
            x,
            y,
            vx: 0,
            vy: 0,
            factor: 0.8 + Math.random() * 0.4,
          });
        }
      }
    }
    ctx.clearRect(0, 0, width, height);

    let animationFrameId: number;
    const repulsionRadius = 30;
    const repulsionStrength = 1.0;
    const springFactor = 0.05;
    const friction = 0.9;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      let cursorVX = 0,
        cursorVY = 0,
        cursorSpeed = 0;
      if (mousePosRef.current) {
        if (mousePrevRef.current) {
          cursorVX = mousePosRef.current.x - mousePrevRef.current.x;
          cursorVY = mousePosRef.current.y - mousePrevRef.current.y;
          cursorSpeed = Math.sqrt(cursorVX * cursorVX + cursorVY * cursorVY);
        }
        mousePrevRef.current = { ...mousePosRef.current };
      } else {
        mousePrevRef.current = null;
      }

      particlesRef.current.forEach((particle) => {
        if (mousePosRef.current) {
          const dx = particle.x - mousePosRef.current.x;
          const dy = particle.y - mousePosRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < repulsionRadius && distance > 0) {
            const force =
              ((repulsionRadius - distance) / repulsionRadius) *
              repulsionStrength;
            const scaledForce = force * cursorSpeed * particle.factor;
            particle.vx += (dx / distance) * scaledForce;
            particle.vy += (dy / distance) * scaledForce;
          }
        }

        particle.vx += (particle.ox - particle.x) * springFactor;
        particle.vy += (particle.oy - particle.y) * springFactor;
        particle.vx *= friction;
        particle.vy *= friction;
        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.fillStyle = "black";
        ctx.fillRect(particle.x, particle.y, step, step);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mousePosRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{ width: "500px", height: "500px", cursor: "pointer" }}
    />
  );
};

export default ParticleCircle;
