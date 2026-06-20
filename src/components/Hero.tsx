import { motion } from "motion/react";
import { ArrowRight, Sparkles, Globe, Target, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-premium">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-transparent to-brand-navy" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 lg:mt-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan text-[10px] font-black tracking-[0.3em] uppercase mb-10 italic"
          >
            <Sparkles className="w-3 h-3" />
            {t("hero_badge") || "Leading Prep Center in Uzbekistan"}
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter mb-8 italic text-white/60 drop-shadow-sm">
            {t("hero_title_1")} <br />
            <span className="text-white/80 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">{t("hero_title_2")}</span>
          </h1>
          
          <div className="relative mb-10 group cursor-default">
            <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-2xl -z-10" />
            <div className="px-6 py-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan/40 mb-2 block">Academy Overview</span>
              <p className="text-lg text-white/70 leading-relaxed font-medium mb-3">
                {t("hero_subtitle")}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/40" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white/20 italic">Elite Education Partner</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="premium-btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              {t("cta_assessment")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="premium-btn w-full sm:w-auto"
            >
              {t("cta_courses")}
            </motion.button>
          </div>

          <div className="mt-12 group cursor-default">
            <div className="mirror-panel rounded-[32px] p-8 border-white/10 flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white font-display tracking-tighter italic">1.5K+</span>
                <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-black">{t("stat_students")}</span>
              </div>
              <div className="hidden sm:block h-10 w-px bg-white/5" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white font-display tracking-tighter italic">7.5+</span>
                <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-black">{t("stat_ielts")}</span>
              </div>
              <div className="hidden sm:block h-10 w-px bg-white/5" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white font-display tracking-tighter italic">1450+</span>
                <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-black">{t("stat_sat")}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative block lg:block md:scale-90 scale-[0.8] lg:scale-100 mt-10 lg:mt-0"
        >
          {/* Main Visual */}
          <div className="relative z-10 w-full aspect-[4/5] lg:aspect-[4/5] mirror-panel rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Core Academy Experience" 
              className="w-full h-full object-cover grayscale brightness-110 contrast-125 opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-60" />
          </div>

          {/* Glossy Overlay Cards - Outside overflow-hidden */}
          <div className="absolute top-12 -left-8 md:-left-12 p-6 md:p-8 bg-[#070d1e]/90 backdrop-blur-md rounded-[40px] flex flex-col gap-4 shadow-2xl border border-white/5 z-20 transition-all duration-300 transform-gpu">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center border border-white/10">
              <Target className="text-brand-cyan/60 w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">TOPIK Success</div>
              <div className="text-3xl font-display font-black text-white/80 italic tracking-tighter leading-none">TOPIK 5</div>
              <div className="text-[9px] text-brand-cyan/40 font-bold uppercase tracking-widest">Achieved in 4 Months</div>
            </div>
          </div>

          <div className="absolute bottom-12 -right-8 md:-right-12 p-6 md:p-8 bg-[#070d1e]/90 backdrop-blur-md rounded-[40px] flex flex-col gap-4 shadow-2xl border border-white/5 z-20 transition-all duration-300 transform-gpu">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center border border-white/10">
              <Rocket className="text-brand-orange/60 w-6 h-6" />
            </div>
            <div className="space-y-1 text-right">
              <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">Admissions</div>
              <div className="text-3xl font-display font-black text-white/80 italic tracking-tighter leading-none">SAT 1580</div>
              <div className="text-[9px] text-brand-orange/40 font-bold uppercase tracking-widest">Top 1% Worldwide</div>
            </div>
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute -inset-20 bg-brand-blue/20 rounded-full blur-[150px] -z-10 mix-blend-screen opacity-50 transition-opacity" />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-white"
        />
      </div>
    </section>
  );
}
