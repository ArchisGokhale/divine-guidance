import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface MeditationSession {
  duration: number;
  type: string;
  mantra: string;
}

export default function SpiritualProgressTracker() {
  const [selectedSession, setSelectedSession] = useState<MeditationSession | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [totalSessions, setTotalSessions] = useState(0);
  const [currentWeekSessions, setCurrentWeekSessions] = useState(0);

  const meditationTypes: MeditationSession[] = [
    { duration: 300, type: "Om Meditation", mantra: "ॐ" },
    { duration: 600, type: "Chakra Balancing", mantra: "ॐ गं गणपतये नमः" },
    { duration: 900, type: "Deep Spiritual", mantra: "सो हं" },
    { duration: 1200, type: "Vedic Chanting", mantra: "गायत्री मंत्र" }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => {
          if (time <= 1) {
            setIsActive(false);
            setTotalSessions(prev => prev + 1);
            setCurrentWeekSessions(prev => prev + 1);
            // Play completion sound or show notification
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else if (!isActive && timeRemaining !== 0) {
      if (interval) clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeRemaining]);

  const startMeditation = (session: MeditationSession) => {
    setSelectedSession(session);
    setTimeRemaining(session.duration);
    setIsActive(true);
  };

  const pauseMeditation = () => {
    setIsActive(!isActive);
  };

  const stopMeditation = () => {
    setIsActive(false);
    setTimeRemaining(0);
    setSelectedSession(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    if (!selectedSession) return 0;
    return ((selectedSession.duration - timeRemaining) / selectedSession.duration) * 100;
  };

  return (
    <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/30">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-playfair font-semibold text-warm-gold mb-2">Spiritual Progress Tracker</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-warm-gold to-copper mx-auto mb-4"></div>
        <p className="text-cream/80">Track your meditation journey and spiritual growth</p>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-deep-indigo/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-warm-gold">{totalSessions}</div>
          <div className="text-sm text-cream/70">Total Sessions</div>
        </div>
        <div className="bg-deep-indigo/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-warm-gold">{currentWeekSessions}</div>
          <div className="text-sm text-cream/70">This Week</div>
        </div>
      </div>

      {/* Meditation Timer */}
      {selectedSession ? (
        <div className="text-center mb-8">
          <div className="mb-4">
            <div className="text-xl font-playfair text-cream mb-2">{selectedSession.type}</div>
            <div className="text-3xl font-devanagari text-warm-gold mb-4">{selectedSession.mantra}</div>
          </div>
          
          {/* Circular Progress */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(245, 158, 11, 0.2)"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgb(245, 158, 11)"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - getProgressPercentage() / 100)}`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl font-bold text-warm-gold">{formatTime(timeRemaining)}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={pauseMeditation}
              className="px-6 py-2 bg-gradient-to-r from-warm-gold to-copper text-deep-indigo font-semibold rounded-full"
            >
              <i className={`fas ${isActive ? 'fa-pause' : 'fa-play'} mr-2`}></i>
              {isActive ? 'Pause' : 'Resume'}
            </Button>
            <Button
              onClick={stopMeditation}
              className="px-6 py-2 bg-gradient-to-r from-warm-gold to-copper text-deep-indigo font-semibold rounded-full hover:from-copper hover:to-warm-gold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <i className="fas fa-stop mr-2"></i>
              Stop
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {meditationTypes.map((session, index) => (
            <div
              key={index}
              onClick={() => startMeditation(session)}
              className="bg-deep-indigo/30 rounded-lg p-4 cursor-pointer hover:bg-warm-gold/20 transition-all duration-300 border border-warm-gold/30 hover:border-warm-gold"
            >
              <div className="text-center">
                <div className="text-lg font-playfair text-cream mb-2">{session.type}</div>
                <div className="text-sm text-cream/70 mb-2">{Math.floor(session.duration / 60)} minutes</div>
                <div className="text-warm-gold font-devanagari">{session.mantra}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Spiritual Quote */}
      <div className="mt-8 text-center p-4 bg-gradient-to-r from-warm-gold/20 to-copper/20 rounded-lg">
        <p className="text-cream/80 italic">"Meditation is the journey from sound to silence, from movement to stillness."</p>
      </div>
    </div>
  );
}