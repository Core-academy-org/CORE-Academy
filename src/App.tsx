import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Teachers from "./components/Teachers";
import FAQ from "./components/FAQ";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import { Send, CheckCircle2, Star, Clock, MapPin, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "./contexts/LanguageContext";

export default function App() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-brand-navy selection:bg-brand-cyan/30">
      <Navbar />
      
      <Hero />

      {/* Social Proof / Logo Cloud - High Contrast Ribbon Lane */}
      <section className="py-24 bg-brand-navy relative z-10 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
        
        <div className="container max-w-7xl mx-auto px-6 mb-12 flex justify-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Trusted by</span>
        </div>

        <div className="flex overflow-hidden py-10 relative group bg-white/[0.01] border-y border-white/5">
          <motion.div 
            className="flex items-center gap-24 whitespace-nowrap px-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[...Array(2)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex items-center gap-24">
                {[
                  "British Council", "IDP IELTS", "Cambridge Assessment English", "Youth Affairs Agency", "Ministry of Education", "American Councils", "ETS TOEFL", "National University"
                ].map((name, i) => (
                  <div key={i} className="flex items-center gap-8 text-3xl md:text-5xl font-display font-black tracking-tighter uppercase text-white/10 hover:text-white transition-all duration-500 italic grayscale hover:grayscale-0 cursor-default">
                    <div className="w-3 h-3 rounded-full bg-brand-cyan/20 group-hover:bg-brand-cyan transition-colors" />
                    {name}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Courses />

      {/* Roadmap Section */}
      <section id="roadmap" className="py-32 relative overflow-hidden bg-white/[0.02]">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-bold italic mb-6 uppercase tracking-tighter">
              {t("roadmap_title")} <span className="text-gradient">{t("roadmap_subtitle")}</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto font-medium">{t("roadmap_desc")}</p>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: t("assessment"), desc: t("assessment_desc"), icon: Globe },
                { step: "02", title: t("strategy"), desc: t("strategy_desc"), icon: MapPin },
                { step: "03", title: t("execution"), desc: t("execution_desc"), icon: Clock },
                { step: "04", title: t("admissions"), desc: t("admissions_desc"), icon: Star },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group p-8 glass rounded-[32px] border-white/5 hover:border-brand-cyan/30 transition-all hover:bg-brand-blue/5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-8 border border-white/10 group-hover:border-brand-cyan/50 transition-colors">
                    <item.icon className="text-brand-cyan w-6 h-6" />
                  </div>
                  <div className="text-xs font-black text-brand-cyan mb-2 uppercase tracking-widest italic">{item.step} {t("roadmap_phase")}</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 italic tracking-tight">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Teachers />

      <FAQ />

      <ApplicationForm />

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/10 animate-pulse" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass rounded-[60px] p-12 md:p-24 border-white/20 bg-brand-blue/10 shadow-[0_0_100px_rgba(37,99,235,0.1)]"
          >
            <h2 className="text-4xl md:text-7xl font-display font-black italic mb-8 uppercase tracking-tighter leading-none italic">
              {t("cta_dream")} <br />
              <span className="text-gradient border-b-4 border-brand-cyan/20">{t("cta_achieve")}</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("cta_spots")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-12 py-6 bg-brand-orange text-white rounded-full text-lg font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-orange/30"
              >
                {t("join_now_hero") || t("enroll_now")}
              </button>
              <a href="https://t.me/core_academy_edu" className="w-full sm:w-auto px-12 py-6 glass text-white rounded-full text-lg font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <Send className="w-6 h-6 text-brand-cyan" />
                {t("contact_telegram")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Floating Telegram Button */}
      <a 
        href="https://t.me/core_academy_edu" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#0088cc] shadow-2xl shadow-[#0088cc]/30 flex items-center justify-center text-white z-[9999] hover:scale-110 active:scale-95 transition-all group"
        title="Chat on Telegram"
      >
        <Send className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </main>
  );
}
