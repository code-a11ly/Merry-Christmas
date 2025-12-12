"use client";

import { useEffect } from "react";

export default function Snow() {
  useEffect(() => {
    // JavaScript Snow (paste into a <script> tag)
    const NUMBER_OF_SNOWFLAKES = 300;
    const MAX_SNOWFLAKE_SIZE = 5;
    const MAX_SNOWFLAKE_SPEED = 2;
    const SNOWFLAKE_COLOUR = '#ddd';

    const snowflakes = [];

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.pointerEvents = 'none';
    canvas.style.top = '0px';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Create a snowflake
    const createSnowflake = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
      color: SNOWFLAKE_COLOUR,
      speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
      sway: Math.random() - 0.5
    });

    // Draw a snowflake
    const drawSnowflake = snowflake => {
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
      ctx.fillStyle = snowflake.color;
      ctx.fill();
      ctx.closePath();
    };

    // Update a snowflake's position
    const updateSnowflake = snowflake => {
      snowflake.y += snowflake.speed;
      snowflake.x += snowflake.sway;
      if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
      });

      requestAnimationFrame(animate);
    };

    // Populate & start
    for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
      snowflakes.push(createSnowflake());
    }

    animate();

    // Handle resize & scroll so the effect stays in place
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    window.addEventListener('scroll', () => {
      canvas.style.top = `${window.scrollY}px`;
    });
    
    return () => {
      canvas.remove();
    };
  }, []);

  return null; // Component renders nothing, but attaches the canvas
}
