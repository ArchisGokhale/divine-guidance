import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const contactRef = useScrollAnimation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.whatsapp || !formData.service) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would submit to a backend
    toast({
      title: "Divine Session Requested! 🔮",
      description: "Thank you for your interest! We will contact you soon to schedule your spiritual consultation.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      whatsapp: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-slate-800/60 backdrop-blur-sm relative">
        {/* Spiritual background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-warm-gold/10 text-6xl animate-float-slow">🕉</div>
          <div className="absolute bottom-20 right-20 text-warm-gold/10 text-8xl animate-float-medium">🪷</div>
          <div className="absolute top-1/2 right-10 text-warm-gold/10 text-4xl animate-float">🌙</div>
          <div className="absolute bottom-1/3 left-1/4 text-warm-gold/10 text-3xl animate-float" style={{animationDelay: '1.5s'}}>⭐</div>
          <div className="absolute top-1/4 left-1/2 text-warm-gold/10 text-2xl animate-float-slow" style={{animationDelay: '2s'}}>✨</div>
        </div>
        
        <div ref={contactRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-cream mb-4">Book Your Divine Session</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-warm-gold to-copper mx-auto mb-6"></div>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto">
              Ready to embark on your spiritual journey? Connect with Sheetal for personalized cosmic guidance and divine insights.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="text-slate-700 font-semibold">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-2 bg-white border-2 border-purple-300 text-slate-800 placeholder:text-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium"
                    placeholder="Enter your full name"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-white border-2 border-purple-300 text-slate-800 placeholder:text-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                {/* WhatsApp Number */}
                <div>
                  <Label htmlFor="whatsapp" className="text-slate-700 font-semibold">WhatsApp Number *</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="mt-2 bg-white border-2 border-purple-300 text-slate-800 placeholder:text-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                {/* Preferred Reading */}
                <div>
                  <Label className="text-slate-700 font-semibold">Preferred Reading *</Label>
                  <Select value={formData.service} onValueChange={handleSelectChange}>
                    <SelectTrigger className="mt-2 bg-white border-2 border-purple-300 text-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-purple-300">
                      <SelectItem value="palmistry">Palm Reading (₹1,200)</SelectItem>
                      <SelectItem value="kundali">Kundali & Birth Chart (₹1,800)</SelectItem>
                      <SelectItem value="horoscope">Horoscope & Remedies (From ₹500)</SelectItem>
                      <SelectItem value="marriage">Marriage & Compatibility (₹1,500)</SelectItem>
                      <SelectItem value="numerology">Numerology & Name Correction (₹700)</SelectItem>
                      <SelectItem value="complete">Complete Spiritual Consultation (₹2,500)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Preferred Date/Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-slate-700 font-semibold">Preferred Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="mt-2 bg-white border-2 border-purple-300 text-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-slate-700 font-semibold">Preferred Time</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="mt-2 bg-white border-2 border-purple-300 text-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-slate-700 font-semibold">Message / Questions</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 bg-white border-2 border-purple-300 text-slate-800 placeholder:text-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none font-medium"
                    placeholder="Share any specific questions or areas you'd like guidance on..."
                  />
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
                >
                  <i className="fas fa-crystal-ball mr-2"></i>
                  Request My Divine Session
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/30">
                <h3 className="text-2xl font-playfair font-semibold text-warm-gold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-deep-indigo"></i>
                    </div>
                    <div>
                      <div className="text-cream font-medium">Email</div>
                      <div className="text-cream/80">sheetalghate.astrology@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-deep-indigo"></i>
                    </div>
                    <div>
                      <div className="text-cream font-medium">Phone</div>
                      <div className="text-cream/80">+91 XXXXXXXXXX</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center mr-4">
                      <i className="fab fa-whatsapp text-deep-indigo"></i>
                    </div>
                    <div>
                      <div className="text-cream font-medium">WhatsApp</div>
                      <div className="text-cream/80">Available for consultations</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-warm-gold to-copper rounded-full flex items-center justify-center mr-4">
                      <i className="fab fa-instagram text-deep-indigo"></i>
                    </div>
                    <div>
                      <div className="text-cream font-medium">Instagram</div>
                      <div className="text-cream/80">@sheetalghate_astrology</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Spiritual Quote */}
              <div className="bg-gradient-to-r from-warm-gold/20 to-copper/20 rounded-2xl p-8 border border-warm-gold/30 text-center">
                <div className="text-6xl text-warm-gold mb-4">🕉</div>
                <p className="text-lg font-devanagari text-cream mb-2">सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः</p>
                <p className="text-cream/80 italic">May all beings be happy, may all beings be healthy</p>
                <div className="mt-6">
                  <p className="text-warm-gold font-playfair">Your spiritual journey begins with a single step</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
