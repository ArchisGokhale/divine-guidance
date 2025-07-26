import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  type: 'star' | 'orb' | 'streak';
}

export default function StarfieldBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleArray: Particle[] = [];
      
      // Subtle twinkling stars
      for (let i = 0; i < 40; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.01,
          vy: (Math.random() - 0.5) * 0.01,
          size: Math.random() * 2 + 1,
          color: Math.random() > 0.7 ? '#FFD700' : '#FFFFFF',
          opacity: Math.random() * 0.3 + 0.2,
          type: 'star'
        });
      }

      // Subtle purple energy orbs
      for (let i = 40; i < 50; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.015,
          vy: (Math.random() - 0.5) * 0.015,
          size: Math.random() * 4 + 2,
          color: Math.random() > 0.5 ? '#9333EA' : '#7C3AED',
          opacity: Math.random() * 0.15 + 0.1,
          type: 'orb'
        });
      }

      // Subtle golden streaks
      for (let i = 50; i < 55; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: Math.random() * 0.05 + 0.02,
          vy: (Math.random() - 0.5) * 0.01,
          size: Math.random() * 20 + 10,
          color: '#FFD700',
          opacity: Math.random() * 0.15 + 0.05,
          type: 'streak'
        });
      }

      setParticles(particleArray);
    };

    generateParticles();

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.vx + 100) % 100,
        y: (particle.y + particle.vy + 100) % 100,
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900/50">
      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="150" height="150" patternUnits="userSpaceOnUse">
              <path d="M 150 0 L 0 0 0 150" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Particles */}
      {particles.map((particle) => {
        if (particle.type === 'star') {
          return (
            <div
              key={particle.id}
              className="absolute animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
                opacity: particle.opacity,
                borderRadius: '50%',
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          );
        }

        if (particle.type === 'orb') {
          return (
            <div
              key={particle.id}
              className="absolute animate-ping"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: `radial-gradient(circle, ${particle.color} 0%, transparent 60%)`,
                opacity: particle.opacity,
                borderRadius: '50%',
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          );
        }

        if (particle.type === 'streak') {
          return (
            <div
              key={particle.id}
              className="absolute"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${particle.color}, transparent)`,
                opacity: particle.opacity,
                borderRadius: '1px'
              }}
            />
          );
        }

        return null;
      })}

      {/* Very subtle overlay effects */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(147, 51, 234, 0.05) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 60%)
            `
          }}
        />
      </div>
    </div>
  );
}