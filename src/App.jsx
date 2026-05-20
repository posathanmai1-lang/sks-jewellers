import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Diamond, MapPin, Phone, Award, Star, ArrowRight, Menu, X, MessageCircle, ShieldCheck, Clock } from 'lucide-react';

// --- CUSTOM BRAND ICONS ---
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const BUSINESS_DETAILS = {
  phone: "+919876543210",
  whatsapp: "919876543210",
  address: "Main Bazar Rd, Tadpatri, Andhra Pradesh 515411",
  gmaps: "https://www.google.com/maps/search/Sri+Kambagiri+Swamy+Jewellers+Tadpatri"
};

// --- REUSABLE COLLECTION CARD ---
const CollectionCard = ({ title, sub, img }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative cursor-pointer overflow-hidden rounded-sm"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    </div>
    <div className="absolute bottom-0 p-8 w-full">
      <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] mb-2">{sub}</p>
      <h3 className="text-champagne font-serif text-3xl mb-4">{title}</h3>
      <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-widest group-hover:text-luxury-gold transition-colors">
        Discover <ArrowRight size={14} />
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-obsidian text-white min-h-screen selection:bg-luxury-gold selection:text-black">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-luxury-gold/10">
        <div className="flex flex-col">
          <span className="text-luxury-gold font-serif text-xl md:text-2xl tracking-tighter uppercase leading-none">Sri Kambagiri Swamy</span>
          <span className="text-champagne text-[8px] tracking-[0.4em] uppercase font-sans mt-1 tracking-[0.5em]">Jewellers · Tadpatri</span>
        </div>
        <div className="hidden md:flex gap-10 text-champagne text-[10px] uppercase tracking-[0.2em] font-light">
          <a href="#home" className="hover:text-luxury-gold transition-all">Home</a>
          <a href="#collections" className="hover:text-luxury-gold transition-all">Collections</a>
          <a href="#heritage" className="hover:text-luxury-gold transition-all">Heritage</a>
          <a href="#contact" className="hover:text-luxury-gold transition-all">Contact</a>
        </div>
        <button onClick={() => window.open(`https://wa.me/${BUSINESS_DETAILS.whatsapp}`)} className="hidden md:block border border-luxury-gold text-luxury-gold px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-luxury-gold hover:text-black transition-all">
          Book Appointment
        </button>
        <button className="md:hidden text-luxury-gold" onClick={() => setIsOpen(!isOpen)}><Menu /></button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-obsidian z-[60] flex flex-col items-center justify-center gap-8">
            <button className="absolute top-6 right-6 text-luxury-gold" onClick={() => setIsOpen(false)}><X size={32}/></button>
            {['Home', 'Collections', 'Heritage', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-luxury-gold font-serif text-4xl">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1630139202132-224424f1bd02?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
        </div>
        
        <div className="text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
            <span className="text-luxury-gold tracking-[0.8em] uppercase text-[10px] mb-6 block font-medium">Est. 1984 · Tadpatri</span>
            <h1 className="text-5xl md:text-9xl font-serif mb-10 leading-[0.85]">
              <span className="text-champagne font-light">The Gold</span> <br />
              <span className="gold-gradient-text italic font-normal">Standard</span>
            </h1>
            <button onClick={() => document.getElementById('collections').scrollIntoView({behavior:'smooth'})} className="bg-luxury-gold text-black px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl shadow-luxury-gold/20">
              Explore Collections
            </button>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-16 bg-black/80 border-y border-luxury-gold/10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[
            { icon: <ShieldCheck size={24}/>, val: "BIS Hallmarked", sub: "Purity Guaranteed" },
            { icon: <Diamond size={24}/>, val: "IGI Certified", sub: "Natural Diamonds" },
            { icon: <Clock size={24}/>, val: "40+ Years", sub: "Generations of Trust" },
            { icon: <Award size={24}/>, val: "Handcrafted", sub: "Temple Artisans" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-luxury-gold mb-3 opacity-80">{item.icon}</div>
              <div className="text-champagne font-serif text-lg leading-none mb-1">{item.val}</div>
              <div className="text-[8px] uppercase tracking-widest text-white/30">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS GRID */}
      <section id="collections" className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <h2 className="text-luxury-gold font-serif text-5xl md:text-6xl mb-4">Curated Masterpieces</h2>
            <div className="w-24 h-[1px] bg-luxury-gold" />
          </div>
          <p className="text-white/40 text-sm max-w-sm font-light leading-relaxed">
            From the heavy gold of Temple jewellery to the subtle sparkle of diamonds, every piece is handpicked for perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CollectionCard title="Bridal Haram" sub="Wedding Essentials" img="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800" />
          <CollectionCard title="Diamond Sets" sub="Modern Luxury" img="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800" />
          <CollectionCard title="Antique Gold" sub="Traditional Heritage" img="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800" />
        </div>
      </section>

      {/* FOOTER & STORE */}
      <footer id="contact" className="py-32 border-t border-luxury-gold/10 bg-black px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-20 mb-20">
            <div>
              <h3 className="text-luxury-gold font-serif text-3xl mb-6 uppercase tracking-tighter">Sri Kambagiri Swamy</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                The most trusted name in Tadpatri for 22K Gold and IGI Certified Diamonds. Celebrating your special moments since 1984.
              </p>
              <div className="flex gap-6">
                <div className="text-white/40 hover:text-luxury-gold transition-colors cursor-pointer"><InstagramIcon /></div>
                <div className="text-white/40 hover:text-luxury-gold transition-colors cursor-pointer"><FacebookIcon /></div>
                <div className="text-white/40 hover:text-luxury-gold transition-colors cursor-pointer" onClick={() => window.open(`https://wa.me/${BUSINESS_DETAILS.whatsapp}`)}><MessageCircle size={20}/></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-champagne text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">Visit the Store</h4>
              <p className="text-white/60 text-sm mb-6 leading-loose">
                Main Bazar Road,<br />
                Tadpatri, Anantapur Dist,<br />
                Andhra Pradesh 515411
              </p>
              <button onClick={() => window.open(BUSINESS_DETAILS.gmaps)} className="flex items-center gap-3 text-luxury-gold text-[10px] uppercase tracking-widest border-b border-luxury-gold/30 pb-2 hover:border-luxury-gold transition-all">
                <MapPin size={14}/> Get Directions
              </button>
            </div>

            <div>
              <h4 className="text-champagne text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">Inquiries</h4>
              <p className="text-white/60 text-sm mb-2 font-light tracking-wide">Call us at:</p>
              <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-luxury-gold text-2xl font-serif">{BUSINESS_DETAILS.phone}</a>
              <p className="text-white/30 text-[10px] uppercase mt-8 tracking-widest">Store Hours: 10:00 AM - 9:00 PM</p>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 text-center">
            <p className="text-[9px] text-white/10 uppercase tracking-[0.5em]">
              © 2024 SKS Jewellers Tadpatri. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}