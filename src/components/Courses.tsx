import { motion } from "motion/react";
import { BookOpen, Trophy, Globe, Zap, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/LanguageContext";

const getCourses = (t: (key: string) => string) => [
  {
    id: "ielts",
    title: t("course_ielts"),
    desc: t("course_ielts_desc"),
    accent: "bg-brand-blue",
    result: "8.5 BAND",
    tags: ["British Council", "IDP"],
    outcome: "Global University Readiness"
  },
  {
    id: "sat",
    title: t("course_sat"),
    desc: t("course_sat_desc"),
    accent: "bg-brand-orange",
    result: "1580+",
    tags: ["Digital SAT", "Math", "Reading"],
    outcome: "Ivy League Standard"
  },
  {
    id: "topik",
    title: t("course_topik"),
    desc: t("course_topik_desc"),
    accent: "bg-brand-cyan",
    result: "Level 6",
    tags: ["Korean", "GKS Scholarship"],
    outcome: "GKS Scholarship Success"
  }
];

export default function Courses() {
  const { t } = useLanguage();
  const currentCourses = getCourses(t);

  return (
    <section id="courses" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-black italic tracking-tighter uppercase leading-[0.8] text-white/50"
            >
              Academic <br />
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">Excellence</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {currentCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[480px] mirror-panel rounded-[40px] p-8 transition-all duration-700 group-hover:bg-white/[0.05] border-white/5 group-hover:border-white/20 flex flex-col justify-between overflow-hidden">
                {/* Minimal Accent Bar */}
                <div className={cn("absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity", course.accent.replace('bg-', 'bg-'))} />
                
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-8 flex items-center gap-3">
                    <span className={cn("w-2 h-2 rounded-full", course.accent)} />
                    {course.tags[0]}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-display font-black mb-4 italic tracking-tighter uppercase text-white/90 group-hover:text-white transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-white/30 leading-relaxed font-medium line-clamp-4">
                    {course.desc}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Target Result</div>
                    <div className="text-5xl font-display font-black text-white italic tracking-tighter">
                      {course.result}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 italic">
                      {course.outcome}
                    </div>
                    <button 
                      onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500"
                    >
                      <ArrowUpRight className="w-5 h-5 text-white group-hover:text-brand-navy transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
