import React, { useEffect, useRef } from "react";

/**
 * BlinkingSquares — Ambient Technical Background Effect
 * Renders subtle, breathing grid squares aligned with SIVA.dev's 40px technical coordinate grid.
 * Respects prefers-reduced-motion, pauses when inactive, and stays strictly behind content.
 */
const BlinkingSquares = ({ 
  gridSize = 40, 
  maxBlinkingSquares = 12, 
  className = "absolute inset-0 pointer-events-none z-0" 
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionPreferenceChange = (e) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        drawStaticFaintSquares();
      } else {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    mediaQuery.addEventListener("change", handleMotionPreferenceChange);

    // Adapt to parent dimensions & device pixel ratio
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset scale before re-applying
      ctx.scale(dpr, dpr);
      cols = Math.ceil(width / gridSize);
      rows = Math.ceil(height / gridSize);
    };

    resize();
    window.addEventListener("resize", resize);

    // Active blinking squares pool
    const activeSquares = [];

    const drawStaticFaintSquares = () => {
      ctx.clearRect(0, 0, width, height);
      if (cols <= 0 || rows <= 0) return;
      // Draw 6 subtle, static accent cells with no motion
      for (let i = 0; i < 6; i++) {
        const col = (i * 7 + 3) % cols;
        const row = (i * 5 + 2) % rows;
        ctx.fillStyle = "rgba(0, 245, 160, 0.05)";
        ctx.strokeStyle = "rgba(0, 245, 160, 0.15)";
        ctx.lineWidth = 1;
        ctx.fillRect(col * gridSize, row * gridSize, gridSize, gridSize);
        ctx.strokeRect(col * gridSize + 0.5, row * gridSize + 0.5, gridSize - 1, gridSize - 1);
      }
    };

    // If user prefers reduced motion, draw static squares once and avoid animation loop
    if (prefersReducedMotion) {
      drawStaticFaintSquares();
      return () => {
        window.removeEventListener("resize", resize);
        mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      };
    }

    const spawnSquare = () => {
      if (cols <= 0 || rows <= 0) return;
      const col = Math.floor(Math.random() * cols);
      const row = Math.floor(Math.random() * rows);

      // Prevent duplicate overlapping squares
      const exists = activeSquares.some((s) => s.col === col && s.row === row);
      if (exists) return;

      // Color variation: 65% electric mint (#00F5A0), 35% deep emerald (#00D285)
      const isEmerald = Math.random() > 0.65;
      const color = isEmerald ? "0, 210, 133" : "0, 245, 160";

      activeSquares.push({
        col,
        row,
        progress: 0,
        speed: 0.007 + Math.random() * 0.010, // ~1.8s - 3.2s smooth fade cycle
        color,
        maxFillOpacity: 0.08 + Math.random() * 0.08, // Very subtle: 8% to 16% max
        maxBorderOpacity: 0.20 + Math.random() * 0.18, // Crisp border: 20% to 38% max
      });
    };

    let lastTime = performance.now();

    const render = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Randomly spawn squares up to maximum density
      if (activeSquares.length < maxBlinkingSquares && Math.random() < 0.07) {
        spawnSquare();
      }

      // Update and render active squares
      for (let i = activeSquares.length - 1; i >= 0; i--) {
        const sq = activeSquares[i];
        sq.progress += sq.speed * (delta / 16.67);

        if (sq.progress >= 1) {
          activeSquares.splice(i, 1);
          continue;
        }

        // Smooth sine breathing curve: 0 -> 1 -> 0
        const factor = Math.sin(sq.progress * Math.PI);
        const fillAlpha = factor * sq.maxFillOpacity;
        const borderAlpha = factor * sq.maxBorderOpacity;

        const x = sq.col * gridSize;
        const y = sq.row * gridSize;

        // Subtle glowing cell body
        ctx.fillStyle = `rgba(${sq.color}, ${fillAlpha.toFixed(3)})`;
        ctx.fillRect(x, y, gridSize, gridSize);

        // Crisp pixel border aligned to grid lines
        ctx.strokeStyle = `rgba(${sq.color}, ${borderAlpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, gridSize - 1, gridSize - 1);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Pause animation when tab is not visible to preserve battery & CPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (!prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridSize, maxBlinkingSquares]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        maskImage: "radial-gradient(ellipse 75% 75% at 50% 45%, black 35%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 45%, black 35%, transparent 90%)",
      }}
    />
  );
};

export default BlinkingSquares;
