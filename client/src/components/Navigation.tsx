import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/horoscope", label: "Horoscope" },
    { href: "/contact", label: "Book Now" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full bg-purple-900/95 backdrop-blur-sm z-50 border-b border-yellow-400/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-purple-900 font-bold text-lg">✨</span>
              </div>
              <div>
                <h1 className="text-xl font-playfair font-bold text-white">Sheetal Ghate</h1>
                <p className="text-xs text-yellow-300 font-medium">Divine Spiritual Guidance</p>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isActive(item.href) 
                      ? "text-yellow-300 border-b-2 border-yellow-400" 
                      : "text-gray-200 hover:text-yellow-300"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link href="/contact">
                <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-yellow-300">
                  Book Reading
                </button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-300"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-900/95 border-t border-yellow-400/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-yellow-300 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
