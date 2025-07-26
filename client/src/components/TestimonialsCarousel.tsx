import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
  spiritualNote: string;
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      service: "Palm Reading & Kundali",
      rating: 5,
      quote: "Sheetal ji's reading was incredibly accurate. She predicted my career change and marriage timeline perfectly. Her spiritual guidance helped me make confident decisions.",
      spiritualNote: "Found my dharmic path through her wisdom"
    },
    {
      name: "Rajesh Patel",
      location: "Ahmedabad, Gujarat", 
      service: "Numerology & Name Correction",
      rating: 5,
      quote: "After changing my business name as per Sheetal ji's numerology guidance, my revenue increased by 300%. Her spiritual remedies truly work wonders.",
      spiritualNote: "Prosperity through cosmic alignment"
    },
    {
      name: "Anita Desai",
      location: "Delhi",
      service: "Marriage Compatibility",
      rating: 5,
      quote: "Sheetal ji's compatibility analysis saved my marriage. Her remedies for mangal dosha brought peace and harmony to our relationship. Truly blessed to find her.",
      spiritualNote: "Relationship harmony through Vedic wisdom"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      service: "Complete Spiritual Consultation",
      rating: 5,
      quote: "15 years of confusion cleared in one session! Sheetal ji's comprehensive reading gave me clarity about my life purpose and spiritual journey.",
      spiritualNote: "Soul awakening through divine guidance"
    },
    {
      name: "Meera Agarwal",
      location: "Pune, Maharashtra",
      service: "Horoscope & Remedies",
      rating: 5,
      quote: "Her daily predictions are amazingly accurate. The gemstone recommendations and mantras have brought positive energy into my life.",
      spiritualNote: "Daily blessings through cosmic insights"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-4 right-4 text-6xl text-warm-gold/10">💫</div>
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-playfair font-semibold text-warm-gold mb-2">Divine Testimonials</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-warm-gold to-copper mx-auto"></div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Stars Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(currentTestimonial.rating)].map((_, i) => (
            <i key={i} className="fas fa-star text-warm-gold text-xl mr-1"></i>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg text-cream/90 italic leading-relaxed mb-6 text-center">
          "{currentTestimonial.quote}"
        </blockquote>

        {/* Spiritual Note */}
        <div className="bg-deep-indigo/30 rounded-lg p-4 mb-6">
          <p className="text-warm-gold font-playfair text-center italic">
            {currentTestimonial.spiritualNote}
          </p>
        </div>

        {/* Client Info */}
        <div className="text-center">
          <div className="text-xl font-semibold text-cream">{currentTestimonial.name}</div>
          <div className="text-cream/70">{currentTestimonial.location}</div>
          <div className="text-warm-gold text-sm">{currentTestimonial.service}</div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 bg-gradient-to-r from-warm-gold to-copper rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <i className="fas fa-chevron-left text-deep-indigo"></i>
          </button>
          
          {/* Dots indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-warm-gold' : 'bg-cream/30'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 bg-gradient-to-r from-warm-gold to-copper rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <i className="fas fa-chevron-right text-deep-indigo"></i>
          </button>
        </div>
      </div>
    </div>
  );
}