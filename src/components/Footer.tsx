import { motion } from "motion/react";
import { Search, MapPin, Mail, Instagram, Send, GraduationCap, Twitter, Linkedin, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy pt-32 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Cinematic End-Cap Background */}
      <div className="absolute top-0 inset-0 pointer-events-none select-none overflow-hidden h-full flex flex-col justify-center gap-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent blur-[120px]"
        />
        <h2 className="text-[32vw] font-black font-display leading-[0.75] whitespace-nowrap opacity-[0.02] text-white italic tracking-tighter text-center">CORE</h2>
        <h2 className="text-[32vw] font-black font-display leading-[0.75] whitespace-nowrap opacity-[0.02] text-brand-cyan italic tracking-tighter text-center">ACADEMY</h2>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-4 mb-10 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center p-0.5 overflow-hidden group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                <img 
                  src="./logo.jpg" 
                  alt="Core Academy" 
                  className="w-full h-full object-cover rounded-2xl grayscale brightness-125" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-black text-white/90 tracking-tighter leading-none italic uppercase">CORE</span>
                <span className="text-xs text-brand-orange uppercase tracking-[0.4em] font-black italic">Academy</span>
              </div>
            </a>
            <p className="text-white/30 max-w-md leading-relaxed mb-12 font-medium text-lg italic pr-12">
              The Journey to Excellence <br />
              <span className="text-white/60">Starts and Ends with Discipline.</span>
            </p>
            <div className="flex items-center gap-6">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/core_academy_edu" },
                { Icon: Send, href: "https://t.me/core_academy_edu" },
                { Icon: Phone, href: "tel:+998915730434" }
              ].map((item, i) => (
                <a key={i} href={item.href} className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/40 transition-all duration-500">
                  <item.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/20 font-black mb-10 text-[10px] uppercase tracking-[0.4em] italic">Navigation</h4>
            <ul className="space-y-6">
              {[
                { name: t("nav_courses"), href: "#courses" },
                { name: t("nav_teachers"), href: "#teachers" },
                { name: t("nav_roadmap"), href: "#roadmap" }
              ].map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/40 hover:text-white transition-all text-sm flex items-center gap-4 group font-black uppercase tracking-widest italic">
                    <span className="h-1 w-1 rounded-full bg-brand-cyan/20 group-hover:bg-brand-cyan transition-colors" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/20 font-black mb-10 text-[10px] uppercase tracking-[0.4em] italic">Headquarters</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-cyan/40 w-5 h-5 shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed font-bold italic">{t("footer_address")}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-brand-cyan/40 w-5 h-5 shrink-0" />
                <a href="mailto:coreacademy77@gmail.com" className="text-white/40 hover:text-white transition-colors text-sm font-bold italic">coreacademy77@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-black italic">
              © {currentYear} CORE ACADEMY EDUCATION SYSTEM
            </p>
            <p className="text-[8px] text-white/10 uppercase tracking-[0.2em] font-bold">
              EST. 2024 • CENTRAL ASIA • ELITE PREPARATION
            </p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black hover:text-white transition-colors italic">Privacy</a>
            <a href="#" className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black hover:text-white transition-colors italic">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
