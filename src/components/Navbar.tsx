import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Phone, Menu, X, Globe, Instagram, Send, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useLanguage, LanguageCode } from "../contexts/LanguageContext";

const languages: { code: LanguageCode; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "uz", name: "O'zbek", flag: "🇺🇿" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav_courses"), href: "#courses" },
    { name: t("nav_teachers"), href: "#teachers" },
    { name: t("nav_roadmap"), href: "#roadmap" },
    { name: t("nav_faq"), href: "#faq" },
  ];

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-3rem)] max-w-7xl px-8 py-3 rounded-3xl border transition-all",
      isScrolled 
        ? "bg-brand-navy/60 backdrop-blur-2xl border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
        : "bg-white/[0.03] backdrop-blur-md border-white/10"
    )}>
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center p-0.5 overflow-hidden group-hover:scale-110 transition-transform">
            <img 
              src="/src/assets/images/regenerated_image_1778328522015.jpg" 
              alt="Core Academy Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-display font-black text-white/90 tracking-tighter leading-none italic uppercase">CORE</span>
            <span className="text-[10px] text-brand-orange uppercase tracking-[0.3em] font-black italic">Academy</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4 text-brand-cyan" />
              {currentLang.flag} {currentLang.name}
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-32 glass border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                >
                  {languages.map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                      className="w-full px-4 py-2.5 text-left text-xs font-medium text-white/70 hover:text-white hover:bg-brand-blue transition-colors flex items-center gap-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button 
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-2xl bg-gradient-to-tr from-brand-orange to-red-500 text-xs font-black uppercase tracking-widest text-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-orange/20"
          >
            {t("apply_now")}
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-white relative z-50 rounded-full bg-white/5 border border-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6 text-brand-cyan" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-brand-navy z-[45] md:hidden flex flex-col p-8 pt-32 overflow-hidden"
            >
              {/* Animated Background Element */}
              <div className="absolute top-[-10%] right-[-10%] w-[100%] h-[100%] bg-brand-blue/5 rounded-full blur-[120px] -z-10 animate-pulse" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[100%] h-[100%] bg-brand-cyan/5 rounded-full blur-[120px] -z-10" />

              <div className="flex flex-col gap-6 mb-16">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.1 + i * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="text-5xl font-display font-black text-white group flex items-center gap-4 active:text-brand-cyan transition-colors italic tracking-tighter uppercase leading-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-brand-cyan/20 text-2xl font-mono not-italic mr-2">0{i+1}</span>
                    {link.name}
                    <motion.div 
                      whileTap={{ scale: 0.8 }}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="w-5 h-5 text-brand-cyan" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button 
                    onClick={() => { document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}
                    className="w-full py-6 rounded-2xl bg-gradient-to-tr from-brand-orange to-red-500 text-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-brand-orange/30 text-lg sm:text-xl active:scale-95 transition-transform"
                  >
                    {t("apply_now")}
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {languages.map((lang, i) => (
                    <button 
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsMenuOpen(false); }}
                      className={cn(
                        "flex items-center justify-center gap-3 px-4 py-4 rounded-xl border text-sm font-black transition-all uppercase tracking-tighter",
                        language === lang.code 
                          ? "bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                          : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10"
                      )}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      {lang.code}
                    </button>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-center gap-4 pt-4 border-t border-white/5"
                >
                  <a href="https://www.instagram.com/core_academy_edu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-white/40 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://t.me/core_academy_edu" target="_blank" className="text-white/40 hover:text-white transition-colors">
                    <Send className="w-5 h-5" />
                  </a>
                  <p className="text-[10px] text-white/20 font-black uppercase tracking-widest italic">Core Academy Education System</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
