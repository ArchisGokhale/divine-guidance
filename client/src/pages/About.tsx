import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
                {/* Placeholder for Sheetal's image */}
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-warm-gold/20 to-copper/20 border-4 border-warm-gold/50 flex items-center justify-center">
                  <i className="fas fa-user text-6xl text-warm-gold"></i>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center animate-glow">
                  <i className="fas fa-om text-xl text-deep-indigo"></i>
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
      </section>
    </div>
  );
}
