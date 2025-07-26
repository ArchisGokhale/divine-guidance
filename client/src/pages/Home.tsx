import { useState } from "react";
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const calculatorRef = useScrollAnimation();
  
  const [birthDate, setBirthDate] = useState("");
  const [spiritualInsight, setSpiritualInsight] = useState<any>(null);

  const calculateSpiritualNumber = () => {
    if (!birthDate) return;
    
    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    // Calculate life path number
    const sum = day + month + year.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    const lifePathNumber = sum.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    const finalNumber = lifePathNumber > 9 ? lifePathNumber.toString().split('').reduce((a, b) => a + parseInt(b), 0) : lifePathNumber;
    
    const insights = {
      1: { planet: "Sun", color: "Gold", trait: "Natural Leader", mantra: "ॐ सूर्याय नमः" },
      2: { planet: "Moon", color: "Silver", trait: "Intuitive Healer", mantra: "ॐ सोमाय नमः" },
      3: { planet: "Jupiter", color: "Yellow", trait: "Creative Communicator", mantra: "ॐ गुरवे नमः" },
      4: { planet: "Uranus", color: "Blue", trait: "Practical Builder", mantra: "ॐ राहवे नमः" },
      5: { planet: "Mercury", color: "Green", trait: "Free Spirit", mantra: "ॐ बुधाय नमः" },
      6: { planet: "Venus", color: "Pink", trait: "Nurturing Soul", mantra: "ॐ शुक्राय नमः" },
      7: { planet: "Neptune", color: "Purple", trait: "Mystic Seeker", mantra: "ॐ केतवे नमः" },
      8: { planet: "Saturn", color: "Black", trait: "Karmic Teacher", mantra: "ॐ शनैश्चराय नमः" },
      9: { planet: "Mars", color: "Red", trait: "Spiritual Warrior", mantra: "ॐ मंगलाय नमः" }
    };
    
    setSpiritualInsight({
      number: finalNumber,
      ...insights[finalNumber as keyof typeof insights]
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Elegant background with proper contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/70 via-purple-900/50 to-slate-900/70 backdrop-blur-sm">
          {/* Sacred geometry patterns */}
          <div className="absolute top-20 right-10 w-96 h-96 opacity-15">
            <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
              <defs>
                <radialGradient id="mandala-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1"/>
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="100" cy="100" r="70" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.4"/>
              <circle cx="100" cy="100" r="50" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.5"/>
              <circle cx="100" cy="100" r="30" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.6"/>
              <circle cx="100" cy="100" r="10" fill="#F59E0B" opacity="0.3"/>
              {/* Petal patterns */}
              {Array.from({length: 8}).map((_, i) => (
                <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                  <ellipse cx="100" cy="60" rx="8" ry="20" fill="#F59E0B" opacity="0.2"/>
                </g>
              ))}
            </svg>
          </div>
          {/* Celestial elements */}
          <div className="absolute bottom-20 left-10 w-64 h-64 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="80" cy="80" r="25" fill="#F59E0B" opacity="0.2"/>
              <circle cx="80" cy="80" r="20" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.3"/>
              <path d="M 55 80 L 75 70 L 85 50 L 95 70 L 115 80 L 95 90 L 85 110 L 75 90 Z" fill="#F59E0B" opacity="0.3"/>
              {/* Stars */}
              <circle cx="150" cy="50" r="2" fill="#F59E0B" opacity="0.6"/>
              <circle cx="170" cy="90" r="1.5" fill="#F59E0B" opacity="0.5"/>
              <circle cx="40" cy="150" r="1" fill="#F59E0B" opacity="0.4"/>
              <circle cx="180" cy="160" r="2.5" fill="#F59E0B" opacity="0.7"/>
            </svg>
          </div>
        </div>
        
        <div ref={heroRef} className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Sanskrit Quote */}
            <div className="mb-8">
              <p className="text-2xl sm:text-3xl font-devanagari text-warm-gold mb-2">"तत् त्वम् असि"</p>
              <p className="text-lg sm:text-xl font-playfair italic text-cream/90">You are that divine self</p>
            </div>
            
            {/* Hero Content */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold text-cream mb-6">
                Divine Guidance
                <span className="block text-warm-gold">Awaits You</span>
              </h1>
              <p className="text-xl sm:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
                Discover your spiritual path through ancient wisdom of Palmistry, Vedic Astrology, and Horoscope readings
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/services">
                <button className="px-8 py-4 border-2 border-warm-gold text-warm-gold font-bold rounded-full hover:bg-warm-gold hover:text-deep-indigo transition-all duration-300 text-lg shadow-lg bg-deep-indigo/50 backdrop-blur-sm">
                  <i className="fas fa-compass mr-2"></i>
                  Discover Your Spiritual Path
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-warm-gold text-warm-gold font-bold rounded-full hover:bg-warm-gold hover:text-deep-indigo transition-all duration-300 text-lg shadow-lg bg-deep-indigo/50 backdrop-blur-sm">
                  <i className="fas fa-calendar-plus mr-2"></i>
                  Schedule a Reading
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Spiritual Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 text-warm-gold/20 text-4xl animate-float" style={{animationDelay: '0s'}}>🕉</div>
          <div className="absolute top-1/3 right-20 text-warm-gold/20 text-3xl animate-float" style={{animationDelay: '1s'}}>🪷</div>
          <div className="absolute bottom-1/4 left-1/4 text-warm-gold/20 text-2xl animate-float" style={{animationDelay: '2s'}}>⭐</div>
          <div className="absolute bottom-1/3 right-1/3 text-warm-gold/20 text-3xl animate-float" style={{animationDelay: '3s'}}>🌙</div>
          <div className="absolute top-1/2 left-1/2 text-warm-gold/20 text-2xl animate-float" style={{animationDelay: '4s'}}>✨</div>
        </div>

        {/* Service Cards Section */}
        <div ref={servicesRef} className="relative pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-center text-cream mb-4">What Sheetal Offers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-warm-gold to-copper mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Palmistry Card */}
              <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/30 hover:border-warm-gold hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center group-hover:animate-glow">
                    <i className="fas fa-hand-paper text-2xl text-deep-indigo"></i>
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-cream mb-3">Palmistry</h3>
                  <p className="text-sm font-devanagari text-warm-gold mb-4">हस्त रेखा</p>
                  <p className="text-cream/80 leading-relaxed">
                    Unlock the secrets written in your palms. Ancient palm analysis reveals your life path, love destiny, and spiritual journey through sacred hand reading techniques.
                  </p>
                </div>
              </div>
              
              {/* Vedic Astrology Card */}
              <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/30 hover:border-warm-gold hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center group-hover:animate-glow">
                    <i className="fas fa-dharmachakra text-2xl text-deep-indigo"></i>
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-cream mb-3">Vedic Astrology</h3>
                  <p className="text-sm font-devanagari text-warm-gold mb-4">ज्योतिष शास्त्र</p>
                  <p className="text-cream/80 leading-relaxed">
                    Connect with cosmic energies through authentic Vedic astrology. Birth chart analysis, planetary positions, and karmic insights guide your spiritual evolution.
                  </p>
                </div>
              </div>
              
              {/* Horoscope Card */}
              <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/30 hover:border-warm-gold hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center group-hover:animate-glow">
                    <i className="fas fa-moon text-2xl text-deep-indigo"></i>
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-cream mb-3">Personal Horoscopes</h3>
                  <p className="text-sm font-devanagari text-warm-gold mb-4">राशिफल</p>
                  <p className="text-cream/80 leading-relaxed">
                    Receive personalized cosmic guidance tailored to your unique energy. Daily predictions, spiritual remedies, and celestial timing for important decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cosmic Birthday Calculator */}
        <div ref={calculatorRef} className="relative py-20 bg-white/95 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-slate-800 mb-4">Discover Your Spiritual Number</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-warm-gold to-purple-600 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">Enter your birth date to reveal your cosmic influence and spiritual path</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Label htmlFor="birthDate" className="text-slate-700 font-semibold mb-3 block text-lg">Your Birth Date</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="mb-6 bg-white border-2 border-purple-300 text-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium text-lg p-4 rounded-lg"
                  />
                  <Button
                    onClick={calculateSpiritualNumber}
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-lg text-lg"
                  >
                    <i className="fas fa-calculator mr-2"></i>
                    Calculate My Spiritual Number
                  </Button>
                </div>
                
                <div className="text-center">
                  {spiritualInsight ? (
                    <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-xl p-6 border border-purple-200">
                      <div className="text-6xl font-bold text-purple-600 animate-pulse mb-4">{spiritualInsight.number}</div>
                      <div className="space-y-3">
                        <p className="text-lg font-semibold text-slate-700">Ruling Planet: <span className="text-purple-600">{spiritualInsight.planet}</span></p>
                        <p className="text-base text-slate-600">Lucky Color: <span className="text-purple-600 font-medium">{spiritualInsight.color}</span></p>
                        <p className="text-base text-slate-600">Soul Trait: <span className="text-purple-600 font-medium">{spiritualInsight.trait}</span></p>
                        <div className="mt-4 p-4 bg-purple-100 rounded-lg border border-purple-200">
                          <p className="text-sm text-slate-600 mb-2 font-medium">Your Personal Mantra</p>
                          <p className="text-lg font-devanagari text-purple-700 font-semibold">{spiritualInsight.mantra}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="text-6xl text-slate-400 mb-4">?</div>
                      <p className="text-slate-500">Enter your birth date to discover your spiritual essence</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
