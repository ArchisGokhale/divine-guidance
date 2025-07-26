import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  length: number;
  delay: number;
}

export default function StarfieldBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate static twinkling stars
    const generateStars = () => {
      const starArray: Star[] = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 3
        });
      }
      setStars(starArray);
    };

    // Generate shooting stars
    const generateShootingStars = () => {
      const shootingStarArray: ShootingStar[] = [];
      for (let i = 0; i < 3; i++) {
        shootingStarArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 50 + 10,
          length: Math.random() * 80 + 60,
          delay: Math.random() * 8 + 2
        });
      }
      setShootingStars(shootingStarArray);
    };

    generateStars();
    generateShootingStars();
  }, []);

  return (
    <div className="starfield">
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.twinkleDelay}s`,
            background: `radial-gradient(circle, rgba(245, 158, 11, ${star.opacity}) 0%, rgba(255, 255, 255, ${star.opacity * 0.8}) 100%)`
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={`shooting-${shootingStar.id}`}
          className="shooting-star"
          style={{
            left: `${shootingStar.x}%`,
            top: `${shootingStar.y}%`,
            width: `${shootingStar.length}px`,
            animationDelay: `${shootingStar.delay}s`,
            background: 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.8), rgba(255, 255, 255, 0.6), transparent)'
          }}
        />
      ))}

      {/* Constellation Lines (subtle) */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="constellation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        {/* Big Dipper constellation */}
        <g stroke="url(#constellation-gradient)" strokeWidth="0.5" fill="none">
          <path d="M 20 30 L 25 25 L 35 28 L 45 30 L 50 40 L 45 50 L 35 45" opacity="0.3"/>
        </g>
        
        {/* Orion constellation */}
        <g stroke="url(#constellation-gradient)" strokeWidth="0.5" fill="none">
          <path d="M 70 60 L 75 50 L 80 45 L 85 55 L 80 65 L 75 70 L 70 75" opacity="0.2"/>
        </g>
      </svg>

      {/* Nebula effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(75, 0, 130, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 60%)
          `
        }}
      />
    </div>
  );
}