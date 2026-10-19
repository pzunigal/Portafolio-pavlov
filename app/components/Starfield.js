"use client";

import { useEffect, useRef, useCallback } from "react";

const STAR_COUNT_DESKTOP = 220;
const STAR_COUNT_MOBILE = 80;

export default function Starfield() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  const initStars = useCallback((width, height, count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.15 + 0.02,
        twinkleSpeed: Math.random() * 0.008 + 0.002,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }
    return stars;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const count = width < 768 ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP;
      starsRef.current = initStars(width, height, count);
    };

    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const star of starsRef.current) {
        let alpha = star.alpha;
        if (!prefersReduced) {
          alpha =
            star.alpha *
            (0.5 +
              0.5 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset));
          star.y -= star.speed;
          if (star.y < -5) {
            star.y = height + 5;
            star.x = Math.random() * width;
          }
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 225, 255, ${alpha})`;
        ctx.fill();

        // Tiny glow for larger stars
        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 200, 255, ${alpha * 0.08})`;
          ctx.fill();
        }
      }

      time++;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [initStars]);

  return <canvas ref={canvasRef} id="starfield-canvas" aria-hidden="true" />;
}
