import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-deep-indigo/90 border-t border-warm-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-playfair font-semibold text-warm-gold mb-2">Sheetal Ghate</h3>
            <p className="text-cream/80 font-devanagari">ज्योतिर्विद्या और हस्तरेखा विशेषज्ञ</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-6">
            <Link href="/" className="text-cream/80 hover:text-warm-gold transition-all">Home</Link>
            <Link href="/about" className="text-cream/80 hover:text-warm-gold transition-all">About</Link>
            <Link href="/services" className="text-cream/80 hover:text-warm-gold transition-all">Services</Link>
            <Link href="/horoscope" className="text-cream/80 hover:text-warm-gold transition-all">Horoscope</Link>
            <Link href="/contact" className="text-cream/80 hover:text-warm-gold transition-all">Contact</Link>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="w-10 h-10 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
              <i className="fab fa-instagram text-deep-indigo"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
              <i className="fab fa-whatsapp text-deep-indigo"></i>
            </a>
            <a href="mailto:sheetalghate.astrology@gmail.com" className="w-10 h-10 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
              <i className="fas fa-envelope text-deep-indigo"></i>
            </a>
          </div>
          
          <div className="border-t border-warm-gold/20 pt-6">
            <p className="text-cream/60 text-sm">© 2024 Sheetal Ghate. All rights reserved. | Divine guidance through ancient wisdom</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
