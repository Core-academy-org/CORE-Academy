import { motion } from "motion/react";
import { BookOpen, Trophy, Globe, Zap, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/LanguageContext";

const getCourses = (t: (key: string) => string) => [
  {
    id: "ielts",
    title: t("course_ielts"),
    desc: t("course_ielts_desc"),
    color: "from-brand-blue to-brand-cyan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/IELTS_logo.svg/1024px-IELTS_logo.svg.png",
    result: "8.5 BAND",
    tags: ["British Council", "IDP"],
    features: ["Mock Exams", "Speaking Practice", "Grammar Support"]
  },
  {
    id: "sat",
    title: t("course_sat"),
    desc: t("course_sat_desc"),
    color: "from-brand-blue to-brand-cyan",
    logo: "https://www.collegeboard.org/sites/default/files/cb-acorn-logo-200.png",
    result: "1580 SCORE",
    tags: ["Digital SAT", "Math", "Reading"],
    features: ["Full-length Tests", "Digital Strategies", "Advanced Math"]
  },
  {
    id: "topik",
    title: t("course_topik"),
    desc: t("course_topik_desc"),
    color: "from-brand-blue to-brand-cyan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/TOPIK_Logo.png/800px-TOPIK_Logo.png",
    result: "LVL 6 MAX",
    tags: ["Korean", "GKS Scholarship"],
    features: ["Vocab Drills", "Listening Sets", "GKS Guidance"]
  }
];

export default function Courses() {
  const { t } = useLanguage();
  const currentCourses = getCourses(t);

  return (
    <section id="courses" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-bold tracking-[0.2em] text-[10px] uppercase mb-6"
            >
              <div className="w-1 h-1 rounded-full bg-brand-cyan animate-pulse" />
              {t("nav_courses")}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black italic tracking-tighter uppercase leading-[0.9] text-mirror"
            >
              {t("curriculum_title")} <br />
              <span className="text-white lowercase font-script pr-2">{t("curriculum_subtitle")}</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-xs font-medium text-sm border-l border-white/10 pl-6 hidden md:block"
          >
            {t("teachers_description")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {currentCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={cn(
                "absolute -inset-1 rounded-[32px] bg-gradient-to-tr opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700",
                course.color
              )} />
              
              <div className="relative h-full mirror-panel rounded-[32px] p-6 lg:p-8 transition-all duration-500 group-hover:translate-y-[-12px] group-hover:border-white/40 group-hover:shadow-[0_20px_80px_rgba(37,99,235,0.15)] flex flex-col overflow-hidden">
                {/* Background Sparkle Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 p-3 overflow-hidden",
                  )}>
                    <img src={course.logo} alt={course.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/10 font-display font-black italic text-md group-hover:text-white group-hover:border-white/30 transition-all">
                    0{idx + 1}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] font-black text-white/50 uppercase tracking-[0.1em] group-hover:border-white/40 group-hover:text-white/80 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-display font-black mb-3 italic tracking-tight text-mirror group-hover:scale-[1.02] transition-all duration-500 uppercase leading-none relative z-10">
                  {course.title}
                </h3>
                
                <p className="text-xs text-white/40 mb-6 leading-relaxed font-medium relative z-10 transition-opacity duration-300 group-hover:opacity-80">
                  {course.desc}
                </p>

                {/* Animated Reveal Section */}
                <div className="mb-6 relative z-10">
                  <motion.div 
                    className="grid gap-3"
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                  >
                    <div className="pt-4 space-y-3">
                      {course.features.map((feature, fIdx) => (
                        <motion.div 
                          key={fIdx}
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: fIdx * 0.1 }}
                          className="flex items-center gap-3 text-xs font-bold text-white/60 tracking-wide uppercase italic"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5 flex items-end justify-between relative z-10">
                  <div className="space-y-1">
                    <div className="text-3xl font-display font-black text-white italic tracking-tighter leading-none group-hover:scale-105 transition-transform duration-300 origin-left">
                      {course.result}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group/btn relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 hover:bg-brand-cyan hover:border-brand-cyan hover:scale-110 overflow-hidden"
                  >
                    <ArrowUpRight className="w-6 h-6 text-white relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-brand-navy" />
                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
