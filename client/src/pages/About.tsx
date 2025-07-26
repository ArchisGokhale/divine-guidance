import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function About() {
  const aboutRef = useScrollAnimation();

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-royal-purple/20 to-deep-indigo relative">
        {/* Lotus decoration */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
            alt="Spiritual lotus flower" 
            className="w-full h-full object-contain" 
          />
        </div>
        
        <div ref={aboutRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                {/* Sheetal's image */}
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-warm-gold/50 shadow-2xl">
                  <img 
                    src="/sheetal-profile.jpg" 
                    alt="Sheetal Ghate - Spiritual Guide and Astrologer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center animate-glow">
                  <i className="fas fa-om text-xl text-deep-indigo"></i>
                </div>
              </div>
              
              {/* Interactive Chakra Visualization */}
              <div className="mt-8">
                <h3 className="text-xl font-playfair font-semibold text-warm-gold mb-4">Spiritual Energy Centers</h3>
                <div className="flex justify-center space-x-2">
                  {[
                    { name: "Crown", color: "bg-purple-500", tooltip: "Connection to Divine" },
                    { name: "Third Eye", color: "bg-indigo-500", tooltip: "Intuition & Wisdom" },
                    { name: "Throat", color: "bg-blue-500", tooltip: "Communication & Truth" },
                    { name: "Heart", color: "bg-green-500", tooltip: "Love & Compassion" },
                    { name: "Solar", color: "bg-yellow-500", tooltip: "Personal Power" },
                    { name: "Sacral", color: "bg-orange-500", tooltip: "Creativity & Emotion" },
                    { name: "Root", color: "bg-red-500", tooltip: "Grounding & Stability" }
                  ].map((chakra, index) => (
                    <div key={index} className="group relative">
                      <div className={`w-8 h-8 rounded-full ${chakra.color} animate-pulse hover:scale-125 transition-all duration-300 cursor-pointer`}></div>
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-deep-indigo/90 text-cream text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                        {chakra.tooltip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-xl font-playfair italic text-warm-gold">"My goal is to align your inner soul with the cosmic rhythm."</p>
              </div>
            </div>
            
            {/* Bio Section */}
            <div>
              <h2 className="text-4xl font-playfair font-bold text-cream mb-6">About Sheetal Ghate</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-warm-gold to-copper mb-8"></div>
              
              <div className="space-y-6 text-cream/90 text-lg leading-relaxed">
                <p>
                  With over 15 years of dedicated practice in the ancient sciences of Vedic astrology and palmistry, Sheetal Ghate has become a trusted spiritual guide for thousands seeking divine clarity and cosmic alignment.
                </p>
                <p>
                  Rooted in authentic Vedic lineage and blessed with spiritual training from renowned gurukuls, Sheetal has touched the lives of 10,000+ clients across India and abroad, offering personalized readings that bridge ancient wisdom with modern understanding.
                </p>
                <p>
                  Fluent in Hindi, Marathi, and English, Sheetal ensures that spiritual guidance transcends language barriers, making divine wisdom accessible to seekers from all walks of life.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="mt-12">
                <h3 className="text-2xl font-playfair font-semibold text-warm-gold mb-6">Spiritual Credentials</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-cream/10 rounded-lg border border-warm-gold/30">
                    <div className="text-2xl text-warm-gold mr-4">🔱</div>
                    <span className="text-cream/90">Certified in KP & Nadi Astrology</span>
                  </div>
                  <div className="flex items-center p-4 bg-cream/10 rounded-lg border border-warm-gold/30">
                    <div className="text-2xl text-warm-gold mr-4">🌺</div>
                    <span className="text-cream/90">Trained in Palmistry from Kashi Gurukul</span>
                  </div>
                  <div className="flex items-center p-4 bg-cream/10 rounded-lg border border-warm-gold/30">
                    <div className="text-2xl text-warm-gold mr-4">🔯</div>
                    <span className="text-cream/90">Member – Indian Council of Occult Studies</span>
                  </div>
                  <div className="flex items-center p-4 bg-cream/10 rounded-lg border border-warm-gold/30">
                    <div className="text-2xl text-warm-gold mr-4">📿</div>
                    <span className="text-cream/90">Personalized readings with Vedic remedies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="py-20 bg-gradient-to-r from-deep-indigo to-royal-purple/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}
