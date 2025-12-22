"use client";
import React from "react";
import { motion } from "framer-motion";

const ParticlesBackground = () => {
  const particles = [
    { size: 6, x: "10%", y: "20%", delay: 0, duration: 8 },
    { size: 4, x: "20%", y: "80%", delay: 1, duration: 10 },
    { size: 8, x: "80%", y: "30%", delay: 2, duration: 12 },
    { size: 5, x: "70%", y: "70%", delay: 0.5, duration: 9 },
    { size: 3, x: "40%", y: "60%", delay: 1.5, duration: 11 },
    { size: 7, x: "90%", y: "50%", delay: 2.5, duration: 8 },
    { size: 4, x: "30%", y: "40%", delay: 3, duration: 10 },
    { size: 6, x: "60%", y: "25%", delay: 0.8, duration: 9 },
    { size: 5, x: "15%", y: "55%", delay: 1.2, duration: 11 },
    { size: 3, x: "85%", y: "85%", delay: 2, duration: 12 },
  ];

  const getGradientColor = (index: number) => {
    const colors = [
      "rgba(99, 102, 241, 0.6)",   // indigo
      "rgba(139, 92, 246, 0.6)",   // purple
      "rgba(217, 70, 239, 0.5)",   // fuchsia
      "rgba(59, 130, 246, 0.5)",   // blue
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            background: getGradientColor(index),
            boxShadow: `0 0 ${particle.size * 2}px ${getGradientColor(index)}`,
          }}
          animate={{
            y: [0, -20, -10, -30, 0],
            x: [0, 10, -5, 8, 0],
            opacity: [0.4, 0.8, 0.6, 0.9, 0.4],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
