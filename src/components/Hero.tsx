import { motion } from "motion/react";
import { ArrowRight, Sparkles, Globe, Target, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid-premium">
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
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3 h-3" />
            {t("hero_badge") || "Leading Prep Center in Uzbekistan"}
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter mb-8 italic text-mirror opacity-85">
            {t("hero_title_1")} <br />
            <span className="text-white/80 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">{t("hero_title_2")}</span>
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
            <button 
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="premium-btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              {t("cta_assessment")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="premium-btn w-full sm:w-auto"
            >
              {t("cta_courses")}
            </button>
          </div>

          <div className="mt-12 group cursor-default">
            <div className="mirror-panel rounded-[32px] p-8 border-white/10 flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white font-display tracking-tighter italic">1.5K+</span>
                <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-black">{t("stat_students") || "Success Stories"}</span>
              </div>
              <div className="hidden sm:block h-10 w-px bg-white/5" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white font-display tracking-tighter italic">7.5+</span>
                <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-black">{t("stat_ielts_desc") || "Average IELTS Score"}</span>
              </div>
              <div className="hidden sm:block h-10 w-px bg-white/5" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white font-display tracking-tighter italic">1450+</span>
                <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-black">{t("stat_sat_desc") || "Average SAT Score"}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main Visual */}
          <div className="relative z-10 w-full aspect-square mirror-panel rounded-[40px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="Core Academy Students" 
              className="w-full h-full object-cover grayscale brightness-125 opacity-20 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
            
            {/* Floating UI elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 mirror-panel rounded-2xl flex items-center gap-3 shadow-2xl border-white/20"
            >
              <div className="w-10 h-10 rounded-full bg-brand-blue/30 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Target className="text-white w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest font-black">Target Reached</div>
                <div className="text-sm font-black text-white italic">IELTS 8.5 Band</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 p-4 mirror-panel rounded-2xl flex items-center gap-3 shadow-2xl border-white/20"
            >
              <div className="w-10 h-10 rounded-full bg-brand-cyan/30 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest font-black">Admitted To</div>
                <div className="text-sm font-black text-white italic">Harvard University</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute -inset-10 border border-white/5 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-20 border border-white/5 rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse]" />
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
