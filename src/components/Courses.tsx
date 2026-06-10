import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/LanguageContext";

const getCourses = (t: (key: string) => string) => [
  {
    id: "ielts",
    title: t("course_ielts"),
    desc: t("course_ielts_desc"),
    accent: "bg-brand-blue",
    accentColor: "from-brand-blue/20 to-brand-blue/0",
    result: "8.5 BAND",
    tags: ["British Council", "IDP"],
    outcome: "Global University Readiness"
  },
  {
    id: "sat",
    title: t("course_sat"),
    desc: t("course_sat_desc"),
    accent: "bg-brand-orange",
    accentColor: "from-brand-orange/20 to-brand-orange/0",
    result: "1580+",
    tags: ["Digital SAT", "Math", "Reading"],
    outcome: "Ivy League Standard"
  },
  {
    id: "topik",
    title: t("course_topik"),
    desc: t("course_topik_desc"),
    accent: "bg-brand-cyan",
    accentColor: "from-brand-cyan/20 to-brand-cyan/0",
    result: "Level 6",
    tags: ["Korean", "GKS Scholarship"],
    outcome: "GKS Scholarship Success"
  }
];

export default function Courses() {
  const { t, language } = useLanguage();
  const currentCourses = getCourses(t);

  const getCourseDetails = (id: string, lang: string) => {
    const data: Record<string, Record<string, { duration: string; lessons: string; format: string }>> = {
      en: {
        ielts: { duration: "12 Weeks", lessons: "3x / Week", format: "Weekly Mock" },
        sat: { duration: "16 Weeks", lessons: "4x / Week", format: "Digital Mock" },
        topik: { duration: "12 Weeks", lessons: "3x / Week", format: "Native Speaker" }
      },
      uz: {
        ielts: { duration: "12 Hafta", lessons: "Haftada 3x", format: "Haftalik Mock" },
        sat: { duration: "16 Hafta", lessons: "Haftada 4x", format: "Kompter Test" },
        topik: { duration: "12 Hafta", lessons: "Haftada 3x", format: "Koreys Ustoz" }
      },
      ru: {
        ielts: { duration: "12 Недель", lessons: "3р в неделю", format: "Каждый Mock" },
        sat: { duration: "16 Недель", lessons: "4р в неделю", format: "Компьютерный" },
        topik: { duration: "12 Недель", lessons: "3р в неделю", format: "Носитель" }
      },
      ko: {
        ielts: { duration: "12주 과정", lessons: "주 3회 수업", format: "실전 모의고사" },
        sat: { duration: "16주 과정", lessons: "주 4회 수업", format: "기출 시험풀이" },
        topik: { duration: "12주 과정", lessons: "주 3회 수업", format: "원어민 강의" }
      }
    };
    return data[lang] ? data[lang][id] : data["en"][id];
  };

  const labels: Record<string, { col1: string; col2: string; col3: string }> = {
    en: { col1: "Duration", col2: "Schedule", col3: "Assess Prep" },
    uz: { col1: "Davomiyligi", col2: "Darslar", col3: "Imtihon shakli" },
    ru: { col1: "Длительность", col2: "График", col3: "Подготовка" },
    ko: { col1: "교육 기간", col2: "수업 일정", col3: "평가 방식" }
  };

  const activeLabels = labels[language as string] || labels["en"];

  return (
    <section id="courses" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-display font-black italic tracking-tighter uppercase leading-[0.8] text-white/40">
              Academic <br />
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]">Excellence</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {currentCourses.map((course, idx) => {
            const specs = getCourseDetails(course.id, language as string);
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
                className="group relative"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="relative h-[480px] bg-[#070d1e]/80 border border-white/5 rounded-[32px] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 transform-gpu will-change-transform hover:bg-[#0c142c]/90 hover:border-white/12 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  {/* Subtle hover gradient behind card - lightweight without filters */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-bl from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                  
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6 flex items-center gap-3">
                      <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", course.accent)} />
                      {course.tags[0]}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-display font-black mb-3 italic tracking-tighter uppercase text-white/90 group-hover:text-white transition-colors duration-300">
                      {course.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-white/40 leading-relaxed font-semibold transition-colors duration-500 group-hover:text-white/60 line-clamp-4">
                      {course.desc}
                    </p>

                    {/* Integrated clean Course specifications list inside the card border */}
                    <div className="mt-6 grid grid-cols-3 gap-2 border-y border-white/5 py-4 text-left">
                      <div>
                        <span className="block text-[8px] font-black uppercase text-white/20 tracking-wider mb-1">{activeLabels.col1}</span>
                        <span className="text-[11px] font-extrabold text-white/70 whitespace-nowrap">{specs.duration}</span>
                      </div>
                      <div className="border-l border-white/5 pl-2">
                        <span className="block text-[8px] font-black uppercase text-white/20 tracking-wider mb-1">{activeLabels.col2}</span>
                        <span className="text-[11px] font-extrabold text-white/70 whitespace-nowrap">{specs.lessons}</span>
                      </div>
                      <div className="border-l border-white/5 pl-2">
                        <span className="block text-[8px] font-black uppercase text-white/20 tracking-wider mb-1">{activeLabels.col3}</span>
                        <span className="text-[11px] font-extrabold text-[#06B6D4] whitespace-nowrap">{specs.format}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Target Result</div>
                      <div className="text-4xl font-display font-black text-white italic tracking-tighter transition-all duration-500 group-hover:translate-x-1">
                        {course.result}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 italic">
                        {course.outcome}
                      </div>
                      <button 
                        onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 transition-all duration-500 hover:scale-105 active:scale-95 hover:bg-white hover:border-white group-hover:border-white"
                      >
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:text-brand-navy transition-all duration-500 group-hover:rotate-45" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
