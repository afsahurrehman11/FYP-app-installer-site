import React from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles = () => {
  // Generate random orbs
  const orbs = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 300 + 100;
    const isMint = Math.random() > 0.5;
    return {
      id: i,
      size,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      duration: Math.random() * 20 + 20, // 20-40s
      delay: Math.random() * 10,
      color: isMint ? 'rgba(0, 245, 160, 0.05)' : 'rgba(212, 175, 55, 0.03)',
    };
  });

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'var(--bg-gradient)',
          zIndex: 1
        }}
      />
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
            zIndex: 2,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
