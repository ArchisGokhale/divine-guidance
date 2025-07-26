import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ZodiacSign {
  id: string;
  symbol: string;
  name: string;
  sanskrit: string;
  dateRange: string;
}

interface HoroscopeData {
  title: string;
  prediction: string;
  mantra: string;
  lucky: string;
}

export default function Horoscope() {
  const horoscopeRef = useScrollAnimation();
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const zodiacSigns: ZodiacSign[] = [
    { id: "aries", symbol: "♈", name: "Aries", sanskrit: "मेष", dateRange: "Mar 21 – Apr 19" },
    { id: "taurus", symbol: "♉", name: "Taurus", sanskrit: "वृषभ", dateRange: "Apr 20 – May 20" },
    { id: "gemini", symbol: "♊", name: "Gemini", sanskrit: "मिथुन", dateRange: "May 21 – Jun 20" },
    { id: "cancer", symbol: "♋", name: "Cancer", sanskrit: "कर्क", dateRange: "Jun 21 – Jul 22" },
    { id: "leo", symbol: "♌", name: "Leo", sanskrit: "सिंह", dateRange: "Jul 23 – Aug 22" },
    { id: "virgo", symbol: "♍", name: "Virgo", sanskrit: "कन्या", dateRange: "Aug 23 – Sep 22" },
    { id: "libra", symbol: "♎", name: "Libra", sanskrit: "तुला", dateRange: "Sep 23 – Oct 22" },
    { id: "scorpio", symbol: "♏", name: "Scorpio", sanskrit: "वृश्चिक", dateRange: "Oct 23 – Nov 21" },
    { id: "sagittarius", symbol: "♐", name: "Sagittarius", sanskrit: "धनु", dateRange: "Nov 22 – Dec 21" },
    { id: "capricorn", symbol: "♑", name: "Capricorn", sanskrit: "मकर", dateRange: "Dec 22 – Jan 19" },
    { id: "aquarius", symbol: "♒", name: "Aquarius", sanskrit: "कुम्भ", dateRange: "Jan 20 – Feb 18" },
    { id: "pisces", symbol: "♓", name: "Pisces", sanskrit: "मीन", dateRange: "Feb 19 – Mar 20" }
  ];

  const horoscopeData: Record<string, HoroscopeData> = {
    aries: {
      title: "Aries - मेष",
      prediction: "Today brings fiery energy and new opportunities. Mars energizes your path forward. Trust your instincts and take bold action. A chance encounter may lead to unexpected blessings.",
      mantra: "ॐ अं अंगारकाय नमः",
      lucky: "Number: 7, Color: Red, Time: Morning"
    },
    taurus: {
      title: "Taurus - वृषभ", 
      prediction: "Venus blesses you with harmony and abundance today. Focus on relationships and creative pursuits. Financial matters show positive momentum. Patience will be rewarded.",
      mantra: "ॐ शं शुक्राय नमः",
      lucky: "Number: 6, Color: Green, Time: Evening"
    },
    gemini: {
      title: "Gemini - मिथुन",
      prediction: "Mercury enhances communication and learning. A day for networking and sharing ideas. Travel or short journeys prove beneficial. Keep an open mind to new perspectives.",
      mantra: "ॐ बुं बुधाय नमः", 
      lucky: "Number: 5, Color: Yellow, Time: Afternoon"
    },
    cancer: {
      title: "Cancer - कर्क",
      prediction: "The Moon illuminates your emotional depths today. Family connections grow stronger. Trust your intuition in decision-making. Home and nurturing bring special joy.",
      mantra: "ॐ सों सोमाय नमः",
      lucky: "Number: 2, Color: Silver, Time: Night"
    },
    leo: {
      title: "Leo - सिंह",
      prediction: "The Sun radiates confidence and leadership energy. Your charisma attracts recognition and opportunities. Creative projects flourish. Share your light with others generously.",
      mantra: "ॐ ह्रां ह्रीं सूर्याय नमः",
      lucky: "Number: 1, Color: Gold, Time: Noon"
    },
    virgo: {
      title: "Virgo - कन्या",
      prediction: "Mercury guides you toward practical solutions and healing. Focus on health and service to others. Attention to detail brings success. Organization leads to clarity.",
      mantra: "ॐ बुं बुधाय नमः",
      lucky: "Number: 6, Color: Navy Blue, Time: Morning"
    },
    libra: {
      title: "Libra - तुला",
      prediction: "Venus brings balance and beauty to your day. Partnerships and artistic endeavors are favored. Seek harmony in all interactions. Justice and fairness guide your choices.",
      mantra: "ॐ शुं शुक्राय नमः",
      lucky: "Number: 7, Color: Pink, Time: Evening"
    },
    scorpio: {
      title: "Scorpio - वृश्चिक",
      prediction: "Mars empowers transformation and deep insights. Uncover hidden truths and embrace change. Your magnetic presence attracts the right people. Trust the process of renewal.",
      mantra: "ॐ अं अंगारकाय नमः",
      lucky: "Number: 9, Color: Maroon, Time: Late Night"
    },
    sagittarius: {
      title: "Sagittarius - धनु",
      prediction: "Jupiter expands your horizons and wisdom today. Adventure and learning call to you. Share your knowledge and inspire others. Long-distance connections prove meaningful.",
      mantra: "ॐ गुं गुरवे नमः",
      lucky: "Number: 3, Color: Orange, Time: Morning"
    },
    capricorn: {
      title: "Capricorn - मकर",
      prediction: "Saturn rewards your discipline and hard work. Career matters progress steadily. Structure and responsibility lead to achievement. Your patience builds lasting success.",
      mantra: "ॐ शं शनैश्चराय नमः",
      lucky: "Number: 8, Color: Black, Time: Evening"
    },
    aquarius: {
      title: "Aquarius - कुम्भ",
      prediction: "Saturn and Uranus inspire innovation and humanitarian efforts. Group activities and friendships flourish. Your unique vision gains recognition. Technology aids your goals.",
      mantra: "ॐ शं शनैश्चराय नमः",
      lucky: "Number: 11, Color: Electric Blue, Time: Afternoon"
    },
    pisces: {
      title: "Pisces - मीन",
      prediction: "Jupiter enhances your spiritual connection and intuition. Dreams carry important messages. Compassion and creativity flow naturally. Water-related activities bring peace.",
      mantra: "ॐ गुं गुरवे नमः",
      lucky: "Number: 12, Color: Sea Green, Time: Dawn"
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-royal-purple/20 to-deep-indigo relative overflow-hidden">
        {/* Celestial background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-16 text-warm-gold/10 text-6xl animate-float-slow">♈</div>
          <div className="absolute bottom-32 left-16 text-warm-gold/10 text-6xl animate-float-medium">♌</div>
          <div className="absolute top-1/3 left-20 text-warm-gold/10 text-5xl animate-float" style={{animationDelay: '1s'}}>♐</div>
          <div className="absolute bottom-1/4 right-1/4 text-warm-gold/10 text-4xl animate-float-slow" style={{animationDelay: '0.5s'}}>🌙</div>
          <div className="absolute top-2/3 right-12 text-warm-gold/10 text-3xl animate-float" style={{animationDelay: '2s'}}>⭐</div>
          <div className="absolute top-1/4 left-1/2 text-warm-gold/10 text-4xl animate-float-medium" style={{animationDelay: '1.5s'}}>🕉</div>
        </div>
        <div ref={horoscopeRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-cream mb-4">Daily Horoscope</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-warm-gold to-copper mx-auto mb-6"></div>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto">
              Discover what the stars have aligned for you today. Select your zodiac sign for personalized cosmic guidance.
            </p>
          </div>
          
          {/* Zodiac Sign Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {zodiacSigns.map((sign) => (
              <div
                key={sign.id}
                onClick={() => setSelectedSign(sign.id)}
                className={`backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 cursor-pointer text-center ${
                  selectedSign === sign.id
                    ? "border-warm-gold bg-cream/20"
                    : "border-warm-gold/30 bg-cream/10 hover:border-warm-gold hover:bg-cream/20"
                }`}
              >
                <div className="text-3xl mb-2">{sign.symbol}</div>
                <div className="font-semibold text-cream">{sign.name}</div>
                <div className="text-sm font-devanagari text-warm-gold">{sign.sanskrit}</div>
                <div className="text-xs text-cream/70 mt-1">{sign.dateRange}</div>
              </div>
            ))}
          </div>
          
          {/* Horoscope Display */}
          <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/30 max-w-4xl mx-auto">
            {selectedSign && horoscopeData[selectedSign] ? (
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-semibold text-warm-gold mb-4">
                  {horoscopeData[selectedSign].title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-warm-gold to-copper mx-auto mb-6"></div>
                <p className="text-lg text-cream/90 leading-relaxed mb-6">
                  {horoscopeData[selectedSign].prediction}
                </p>
                <div className="bg-deep-indigo/30 rounded-xl p-6 mb-6">
                  <h4 className="text-xl font-semibold text-warm-gold mb-2">Today's Mantra</h4>
                  <p className="text-lg font-devanagari text-cream">{horoscopeData[selectedSign].mantra}</p>
                </div>
                <div className="text-sm text-cream/70">
                  <p><strong>Lucky Elements:</strong> {horoscopeData[selectedSign].lucky}</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-semibold text-warm-gold mb-4">Select your zodiac sign above</h3>
                <p className="text-cream/80">Click on your zodiac sign to reveal today's cosmic guidance and spiritual insights.</p>
              </div>
            )}
          </div>
          
          {/* Mantra of the Day */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-warm-gold/20 to-copper/20 rounded-2xl p-8 border border-warm-gold/30 max-w-3xl mx-auto">
              <h3 className="text-2xl font-playfair font-semibold text-warm-gold mb-4">Mantra of the Day</h3>
              <p className="text-xl font-devanagari text-cream mb-2">ॐ गं गणपतये नमः</p>
              <p className="text-cream/80 italic">Om Gam Ganapataye Namaha - Invoke wisdom and remove obstacles from your path</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
