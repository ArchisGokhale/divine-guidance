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
        {/* Traditional Indian celestial artwork background */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-royal-purple to-deep-indigo">
          {/* Decorative mandala background */}
          <div className="absolute top-20 right-10 w-96 h-96 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
              alt="Spiritual mandala design" 
              className="w-full h-full object-contain animate-float" 
            />
          </div>
          {/* Celestial elements */}
          <div className="absolute bottom-20 left-10 w-64 h-64 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Celestial moon and stars" 
              className="w-full h-full object-contain" 
            />
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
                <button className="px-8 py-4 bg-gradient-to-r from-warm-gold to-copper text-deep-indigo font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg shadow-lg border-2 border-transparent hover:from-copper hover:to-warm-gold">
                  <i className="fas fa-compass mr-2 text-deep-indigo"></i>
                  <span className="text-deep-indigo">Discover Your Spiritual Path</span>
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
        <div ref={calculatorRef} className="relative py-20 bg-gradient-to-r from-royal-purple/30 to-deep-indigo/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-cream mb-4">Discover Your Spiritual Number</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-warm-gold to-copper mx-auto mb-6"></div>
              <p className="text-lg text-cream/80">Enter your birth date to reveal your cosmic influence and spiritual path</p>
            </div>
            
            <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Label htmlFor="birthDate" className="text-cream font-medium mb-2 block text-lg">Your Birth Date</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="mb-4 bg-deep-indigo/50 border-warm-gold/30 text-cream focus:border-warm-gold"
                  />
                  <Button
                    onClick={calculateSpiritualNumber}
                    className="w-full px-6 py-3 bg-gradient-to-r from-warm-gold to-copper text-deep-indigo font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-lg border-2 border-transparent"
                  >
                    <i className="fas fa-calculator mr-2 text-deep-indigo"></i>
                    <span className="text-deep-indigo">Calculate My Spiritual Number</span>
                  </Button>
                </div>
                
                <div className="text-center">
                  {spiritualInsight ? (
                    <div className="space-y-4">
                      <div className="text-6xl font-bold text-warm-gold animate-glow">{spiritualInsight.number}</div>
                      <div className="space-y-2">
                        <p className="text-xl font-playfair text-cream">Ruling Planet: <span className="text-warm-gold">{spiritualInsight.planet}</span></p>
                        <p className="text-lg text-cream/90">Lucky Color: <span className="text-warm-gold">{spiritualInsight.color}</span></p>
                        <p className="text-lg text-cream/90">Soul Trait: <span className="text-warm-gold">{spiritualInsight.trait}</span></p>
                        <div className="mt-4 p-4 bg-deep-indigo/30 rounded-lg">
                          <p className="text-sm text-cream/70 mb-1">Your Personal Mantra</p>
                          <p className="text-lg font-devanagari text-warm-gold">{spiritualInsight.mantra}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-6xl text-warm-gold/50">?</div>
                      <p className="text-cream/70">Enter your birth date to discover your spiritual essence</p>
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
