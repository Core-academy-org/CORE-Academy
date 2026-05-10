import { motion } from "motion/react";
import { Search, MapPin, Mail, Instagram, Send, GraduationCap, Twitter, Linkedin, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xl shadow-brand-blue/20 overflow-hidden relative">
                <img 
                  src="/src/assets/images/regenerated_image_1778328522015.jpg" 
                  alt="Core Academy" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black text-white tracking-tighter leading-none italic uppercase">CORE</span>
                <span className="text-[10px] text-brand-cyan uppercase tracking-[0.3em] font-black italic">Academy</span>
              </div>
            </a>
            <p className="text-white/40 max-w-md leading-relaxed mb-8 font-medium">
              {t("footer_about") || t("footer_tagline")}
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/core_academy_edu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { Icon: Send, href: "https://t.me/core_academy_edu" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map((item, i) => (
                <a key={i} href={item.href} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-brand-blue transition-all">
                  <item.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 text-xs uppercase tracking-[0.2em] italic">{t("footer_quick_links")}</h4>
            <ul className="space-y-4">
              {[{ name: t("nav_courses"), href: "#courses" }, { name: t("nav_teachers"), href: "#teachers" }, { name: t("nav_roadmap"), href: "#roadmap" }].map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/40 hover:text-brand-cyan transition-colors text-sm flex items-center gap-2 group font-bold">
                    <div className="w-1 group-hover:w-2 h-px bg-brand-cyan transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 text-xs uppercase tracking-[0.2em] italic">{t("footer_contact_us")}</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-brand-cyan w-5 h-5 shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed font-bold">{t("footer_address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-cyan w-5 h-5 shrink-0" />
                <a href="tel:+998915730434" className="text-white/40 hover:text-white transition-colors text-sm font-bold">+998 91 573 04 34</a>
              </li>
              <li className="flex items-center gap-3">
                <Send className="text-brand-cyan w-5 h-5 shrink-0" />
                <a href="https://t.me/core_academy_edu" className="text-white/40 hover:text-white transition-colors text-sm font-bold">@core_academy_edu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium">
            © {currentYear} CORE ACADEMY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Final CTA Floating Background */}
      <div className="absolute bottom-0 left-0 w-full px-6 py-24 z-0 pointer-events-none opacity-5 select-none">
        <h2 className="text-[20vw] font-black font-display leading-none whitespace-nowrap -mb-[5vw]">{t("dream_big")}</h2>
        <h2 className="text-[20vw] font-black font-display leading-none whitespace-nowrap text-right">CORE ACADEMY</h2>
      </div>
    </footer>
  );
}
