import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { cn } from "../lib/utils";

const getTeachers = (t: (key: string) => string) => [
  {
    name: "Umidjon Davlatov",
    role: t("teacher_umidjon_role"),
    bio: t("teacher_umidjon_bio"),
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    tags: ["Founder", "Strategist"]
  },
  {
    name: "Ulmasov Dustyorkhon",
    role: t("teacher_dustyor_role"),
    bio: t("teacher_dustyor_bio"),
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Manager", "Success Lead"]
  },
  {
    name: "Elena Petrova",
    role: t("teacher_elena_role"),
    bio: t("teacher_elena_bio"),
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    tags: ["Celta Certified", "IELTS 7"]
  },
  {
    name: "Alisher Sodikov",
    role: t("teacher_alisher_role"),
    bio: t("teacher_alisher_bio"),
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    tags: ["SAT 1320", "Math Guru"]
  },
  {
    name: "Zebo Ganieva",
    role: t("teacher_zebo_role"),
    bio: t("teacher_zebo_bio"),
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    tags: ["TOEFL 110", "Academic English"]
  },
  {
    name: "Malika Karimova",
    role: t("teacher_malika_role"),
    bio: t("teacher_malika_bio"),
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop",
    tags: ["DET Expert", "Linguistics"]
  },
  {
    name: "James Wilson",
    role: t("teacher_james_role"),
    bio: t("teacher_james_bio"),
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    tags: ["Academic Writing", "Harvard Extension"]
  },
  {
    name: "Sara Kim",
    role: t("teacher_sara_role"),
    bio: t("teacher_sara_bio"),
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1976&auto=format&fit=crop",
    tags: ["TOPIK 5", "Native"]
  }
];

function TeacherCard({ teacher, index }: { teacher: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="w-[200px] sm:w-[260px] md:w-[320px] shrink-0 group/item"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative aspect-[4/5] rounded-3xl md:rounded-[40px] overflow-hidden mb-4 mirror-panel hover:border-white/40 shadow-2xl transition-all duration-700 group/card">
        <img 
          src={teacher.img} 
          alt={teacher.name} 
          className="w-full h-full object-cover grayscale brightness-125 opacity-40 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-1000 group-hover/card:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-1 mb-2">
            {teacher.tags.map((tag: string) => (
              <span key={tag} className="px-1.5 py-0.5 rounded-full glass text-[7px] font-black uppercase tracking-widest whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 italic tracking-tight whitespace-normal">{teacher.name}</h3>
          <p className="text-[10px] md:text-xs text-brand-cyan font-bold uppercase tracking-widest whitespace-normal">{teacher.role}</p>
        </div>
      </div>
      
      <div className="px-2 relative">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="overflow-hidden"
            >
              <div className="mirror-panel rounded-2xl p-4 bg-white/[0.02] mt-2 shadow-xl backdrop-blur-md border-white/10">
                <p className="text-xs md:text-sm tracking-wide leading-relaxed font-medium text-white/80 whitespace-normal">
                  {teacher.bio}
                </p>
                <div className="flex items-center gap-1 mt-3 pt-3 border-t border-white/5 text-[8px] font-black uppercase tracking-[0.2em] text-brand-cyan">
                  <span>Collapse</span>
                  <ChevronUp className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isExpanded && (
          <div className="flex items-center justify-center gap-1 mt-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/20 group-hover/item:text-brand-cyan transition-colors">
            <span>Read Bio</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Teachers() {
  const { t } = useLanguage();
  const currentTeachers = getTeachers(t);
  const doubledTeachers = [...currentTeachers, ...currentTeachers];

  return (
    <section id="teachers" className="py-24 bg-brand-navy/30 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-bold tracking-[0.2em] text-[10px] uppercase mb-6"
            >
              <div className="w-1 h-1 rounded-full bg-brand-cyan animate-pulse" />
              {t("teachers_faculty")}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black italic tracking-tighter uppercase leading-[0.9] text-mirror"
            >
              {t("teachers_title")} <br />
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] lowercase font-script pr-2">{t("teachers_subtitle")}</span>
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
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex gap-4 md:gap-8 whitespace-nowrap py-4 px-4 animate-marquee pause-hover items-start">
          {doubledTeachers.map((teacher, i) => (
            <TeacherCard key={`${teacher.name}-${i}`} teacher={teacher} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
