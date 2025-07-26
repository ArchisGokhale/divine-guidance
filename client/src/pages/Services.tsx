import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SpiritualProgressTracker from "@/components/SpiritualProgressTracker";

export default function Services() {
  const servicesRef = useScrollAnimation();

  const services = [
    {
      emoji: "🪷",
      title: "Palm Reading",
      price: "₹1,200",
      description: "Unlock the secrets in your life, love line, and destiny through ancient palm analysis. Discover your true potential and karmic path."
    },
    {
      emoji: "🌙",
      title: "Kundali & Birth Chart",
      price: "₹1,800",
      description: "Personalized Lagna chart based on birth date/time/place using authentic Vedic astrology principles and cosmic calculations."
    },
    {
      emoji: "🔮",
      title: "Horoscope & Remedies",
      price: "From ₹500",
      description: "Daily/Weekly predictions with Graha shanti and gemstone suggestions. Spiritual remedies for planetary healing."
    },
    {
      emoji: "💞",
      title: "Marriage & Compatibility",
      price: "₹1,500",
      description: "Matchmaking with Mangal dosha analysis and karmic insights. Discover your soul mate through cosmic compatibility."
    },
    {
      emoji: "🔢",
      title: "Numerology & Name Correction",
      price: "₹700",
      description: "Spiritual vibrations based on numbers, name compatibility analysis, and cosmic number alignment for prosperity."
    },
    {
      emoji: "⭐",
      title: "Complete Spiritual Consultation",
      price: "₹2,500",
      description: "Comprehensive session combining palmistry, astrology, and numerology with personalized spiritual remedies and guidance.",
      featured: true
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-purple-900/95 backdrop-blur-sm relative overflow-hidden">
        {/* Spiritual background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 text-warm-gold/10 text-7xl animate-float-slow">🕉</div>
          <div className="absolute bottom-32 left-20 text-warm-gold/10 text-6xl animate-float-medium">🪷</div>
          <div className="absolute top-1/3 left-10 text-warm-gold/10 text-5xl animate-float" style={{animationDelay: '1s'}}>🌙</div>
          <div className="absolute bottom-1/4 right-1/3 text-warm-gold/10 text-4xl animate-float-slow" style={{animationDelay: '0.5s'}}>⭐</div>
          <div className="absolute top-2/3 right-10 text-warm-gold/10 text-3xl animate-float" style={{animationDelay: '2s'}}>✨</div>
        </div>
        
        <div ref={servicesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-4">Sacred Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose from our comprehensive range of spiritual guidance services, each designed to illuminate your path and align you with cosmic energies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`backdrop-blur-sm rounded-2xl p-8 border hover:shadow-2xl transition-all duration-500 hover:scale-105 group ${
                  service.featured 
                    ? "bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 border-2 border-yellow-400 shadow-xl" 
                    : "bg-gradient-to-br from-purple-800 to-purple-700 border-2 border-yellow-400/50 hover:border-yellow-400 shadow-lg"
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <h3 className="text-2xl font-playfair font-semibold text-white mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-yellow-300 mb-4">{service.price}</div>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href="/contact">
                    <button className={`w-full px-6 py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 ${
                      service.featured 
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 animate-pulse" 
                        : "bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900"
                    }`}>
                      {service.featured ? "Book Premium Session" : "Book Session"}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Spiritual Progress Tracker Section - LAST PANEL */}
        <div className="py-20 bg-gradient-to-br from-purple-900 to-purple-800 shadow-2xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SpiritualProgressTracker />
          </div>
        </div>
      </section>
    </div>
  );
}
