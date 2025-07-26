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
      
      // Bright visible stars
      for (let i = 0; i < 80; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.02,
          vy: (Math.random() - 0.5) * 0.02,
          size: Math.random() * 3 + 2,
          color: Math.random() > 0.6 ? '#FFD700' : '#FFFFFF',
          opacity: Math.random() * 0.6 + 0.4,
          type: 'star'
        });
      }

      // Purple energy orbs
      for (let i = 80; i < 100; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.03,
          vy: (Math.random() - 0.5) * 0.03,
          size: Math.random() * 6 + 4,
          color: Math.random() > 0.5 ? '#9333EA' : '#7C3AED',
          opacity: Math.random() * 0.4 + 0.3,
          type: 'orb'
        });
      }

      // Golden streaks
      for (let i = 100; i < 110; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: Math.random() * 0.1 + 0.05,
          vy: (Math.random() - 0.5) * 0.02,
          size: Math.random() * 40 + 20,
          color: '#FFD700',
          opacity: Math.random() * 0.3 + 0.2,
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
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-950">
      
      {/* Animated geometric grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#FFD700" strokeWidth="0.2" opacity="0.3"/>
            </pattern>
            <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#9333EA" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Pulsing energy lines */}
          <g className="animate-pulse" style={{ animationDuration: '4s' }}>
            <path d="M0,20 Q25,10 50,20 T100,20" stroke="url(#pulse-gradient)" strokeWidth="1" fill="none" opacity="0.4"/>
            <path d="M0,80 Q25,70 50,80 T100,80" stroke="url(#pulse-gradient)" strokeWidth="1" fill="none" opacity="0.3"/>
          </g>
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

      {/* Futuristic overlay effects */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 10% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 90% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 70%)
            `
          }}
        />
      </div>

      {/* Scanning lines effect */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent animate-pulse"
          style={{ 
            top: '20%',
            animationDuration: '3s'
          }}
        />
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
          style={{ 
            top: '60%',
            animationDuration: '4s',
            animationDelay: '1s'
          }}
        />
      </div>
    </div>
  );
}