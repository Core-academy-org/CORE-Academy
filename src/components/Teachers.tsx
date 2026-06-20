import { useLanguage } from "../contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

const getTeachers = (t: (key: string) => string) => [
  {
    name: "Umidjon Davlatov",
    role: t("teacher_umidjon_role"),
    bio: t("teacher_umidjon_bio"),
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Umidjon+Davlatov&backgroundColor=020617,1e293b,0d1527&textColor=06b6d4&fontSize=38&fontWeight=750",
    tags: ["Founder", "Strategist"]
  },
  {
    name: "Asilbek To'xtaboyev",
    role: t("teacher_dustyor_role"),
    bio: t("teacher_dustyor_bio"),
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Asilbek+To'xtaboyev&backgroundColor=020617,1e293b,0d1527&textColor=f59e0b&fontSize=38&fontWeight=750",
    tags: ["Manager", "Success Lead"]
  },
  {
    name: "Elena Petrova",
    role: t("teacher_elena_role"),
    bio: t("teacher_elena_bio"),
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Elena+Petrova&backgroundColor=020617,1e293b,0d1527&textColor=3b82f6,06b6d4&fontSize=38&fontWeight=750",
    tags: ["Celta Certified", "IELTS 7"]
  },
  {
    name: "Alisher Sodikov",
    role: t("teacher_alisher_role"),
    bio: t("teacher_alisher_bio"),
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Alisher+Sodikov&backgroundColor=020617,1e293b,0d1527&textColor=f59e0b&fontSize=38&fontWeight=750",
    tags: ["SAT 1320", "Math Guru"]
  },
  {
    name: "Zebo Ganieva",
    role: t("teacher_zebo_role"),
    bio: t("teacher_zebo_bio"),
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Zebo+Ganieva&backgroundColor=020617,1e293b,0d1527&textColor=3b82f6,06b6d4&fontSize=38&fontWeight=750",
    tags: ["TOEFL 110", "Academic English"]
  },
  {
    name: "Malika Karimova",
    role: t("teacher_malika_role"),
    bio: t("teacher_malika_bio"),
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Malika+Karimova&backgroundColor=020617,1e293b,0d1527&textColor=06b6d4&fontSize=38&fontWeight=750",
    tags: ["DET Expert", "Linguistics"]
  },
  {
    name: "James Wilson",
    role: t("teacher_james_role"),
    bio: t("teacher_james_bio"),
    img: "https://api.dicebear.com/7.x/initials/svg?seed=James+Wilson&backgroundColor=020617,1e293b,0d1527&textColor=3b82f6&fontSize=38&fontWeight=750",
    tags: ["Academic Writing", "Harvard Extension"]
  },
  {
    name: "Sara Kim",
    role: t("teacher_sara_role"),
    bio: t("teacher_sara_bio"),
    img: "https://api.dicebear.com/7.x/initials/svg?seed=Sara+Kim&backgroundColor=020617,1e293b,0d1527&textColor=fafafa&fontSize=38&fontWeight=750",
    tags: ["TOPIK 5", "Native"]
  }
];

function TeacherCard({ teacher }: { teacher: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className="relative shrink-0 w-[240px] sm:w-[280px] md:w-[320px] cursor-pointer group/card select-none"
    >
      <div className="relative aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden mb-2 mirror-panel border-white/10 hover:border-white/30 shadow-2xl transition-all duration-500">
        {/* Background Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-transparent to-brand-cyan/5 -z-10" />
        
        <img 
          src={teacher.img} 
          alt={teacher.name} 
          className={cn(
            "w-full h-full grayscale brightness-110 opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700",
            typeof teacher.img === 'string' && teacher.img.includes("dicebear.com") ? "object-contain p-6" : "object-cover"
          )}
          referrerPolicy="no-referrer"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent opacity-95" />
        
        {/* Simple Info Overlay (bottom) */}
        <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 group-hover/card:-translate-y-2">
          <div className="flex flex-wrap gap-1 mb-2">
            {teacher.tags.map((tag: string) => (
              <span key={tag} className="px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[7px] font-black uppercase tracking-widest text-[#06B6D4]/90 whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-display font-black text-white italic tracking-tight whitespace-normal leading-tight">{teacher.name}</h3>
          <p className="text-[10px] md:text-xs text-brand-cyan font-bold uppercase tracking-widest mt-1">{teacher.role}</p>
        </div>

        {/* Absolute Smooth Slide-Up Bio (Takes zero document reflow, zero-lag) */}
        <div className={cn(
          "absolute inset-0 bg-brand-navy/75 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-500 border border-white/15 rounded-[32px] md:rounded-[40px] z-30",
          isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
        )}>
          <div>
            <div className="text-[9px] font-black uppercase tracking-widest text-brand-cyan mb-3 italic">Academic Profile</div>
            <h4 className="text-lg font-display font-black text-white italic mb-2 tracking-tight">{teacher.name}</h4>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed font-semibold">
              {teacher.bio}
            </p>
          </div>
          
          <div className="text-[8px] font-black uppercase tracking-widest text-white/30 italic flex items-center gap-1.5 pt-3 border-t border-white/5">
            <span>Tap / Hover to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Teachers() {
  const { t } = useLanguage();
  const currentTeachers = getTeachers(t);
  
  // Triple the list to make dragging in either direction extremely smooth
  const tripledTeachers = [...currentTeachers, ...currentTeachers, ...currentTeachers];

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tracking drag & scrolling
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const dragDistanceRef = useRef(0);
  const blockClickRef = useRef(false);
  const animationFrameId = useRef<number | null>(null);
  const scrollLeftPos = useRef(0);
  const isHovered = useRef(false);

  // Drag Handlers
  const handleDragStart = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    isHovered.current = true;
    lastX.current = clientX;
    dragDistanceRef.current = 0;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const container = containerRef.current;
    if (!container) return;

    const dx = clientX - lastX.current;
    container.scrollLeft -= dx;
    
    // Smoothly synchronize our subpixel tracker with the physical scroll offset
    scrollLeftPos.current = container.scrollLeft;
    
    lastX.current = clientX;
    dragDistanceRef.current += Math.abs(dx);
  };

  const handleDragEnd = () => {
    if (dragDistanceRef.current > 6) {
      blockClickRef.current = true;
    }
    isDragging.current = false;
    isHovered.current = false;
    if (containerRef.current) {
      scrollLeftPos.current = containerRef.current.scrollLeft;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let localLastTime = performance.now();
    let hasInitialized = false;

    const updateScroll = (time: number) => {
      if (!container) return;

      const delta = time - localLastTime;
      localLastTime = time;

      const scrollW = container.scrollWidth;
      const singleW = scrollW / 3;

      // Handle delayed layout measurement. Start from 0 so it begins with Umidjon Davlatov
      if (scrollW > 0 && !hasInitialized) {
        container.scrollLeft = 0;
        scrollLeftPos.current = 0;
        hasInitialized = true;
      }

      // Continuous programmatic scroll (0.04px per ms is steady and elegant)
      if (!isDragging.current && !isHovered.current) {
        scrollLeftPos.current += 0.04 * delta;
      }

      // Completely seamless infinite loop wrap boundaries:
      if (scrollW > 0) {
        if (scrollLeftPos.current >= singleW) {
          scrollLeftPos.current = scrollLeftPos.current % singleW;
        } else if (scrollLeftPos.current < 0) {
          scrollLeftPos.current = (scrollLeftPos.current % singleW + singleW) % singleW;
        }

        if (!isDragging.current) {
          container.scrollLeft = Math.round(scrollLeftPos.current);
        }
      }

      animationFrameId.current = requestAnimationFrame(updateScroll);
    };

    animationFrameId.current = requestAnimationFrame(updateScroll);

    // Global drag event listeners so that releasing anywhere on the screen yields a correct scroll resumption
    const handleGlobalMove = (e: MouseEvent) => {
      if (isDragging.current) {
        handleDragMove(e.clientX);
      }
    };

    const handleGlobalUp = () => {
      if (isDragging.current) {
        handleDragEnd();
      }
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging.current && e.touches[0]) {
        handleDragMove(e.touches[0].clientX);
      }
    };

    const handleGlobalTouchEnd = () => {
      if (isDragging.current) {
        handleDragEnd();
      }
    };

    window.addEventListener("mousemove", handleGlobalMove);
    window.addEventListener("mouseup", handleGlobalUp);
    window.addEventListener("touchmove", handleGlobalTouchMove, { passive: true });
    window.addEventListener("touchend", handleGlobalTouchEnd);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, [currentTeachers.length]);

  return (
    <section id="teachers" className="py-24 bg-brand-navy/30 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-bold tracking-[0.2em] text-[10px] uppercase mb-6"
            >
              <div className="w-1 h-1 rounded-full bg-brand-cyan animate-pulse" />
              {t("teachers_faculty")}
            </div>
            <h2 
              className="text-5xl md:text-7xl font-display font-black italic tracking-tighter uppercase leading-[0.9] text-mirror"
            >
              {t("teachers_title")} <br />
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] lowercase font-script pr-2">{t("teachers_subtitle")}</span>
            </h2>
          </div>
          
          <p
            className="text-white/40 max-w-xs font-medium text-sm border-l border-white/10 pl-6 hidden md:block"
          >
            {t("teachers_description")}
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
        className="relative flex overflow-hidden w-full select-none"
        onMouseEnter={() => {
          isHovered.current = true;
        }}
        onMouseLeave={() => {
          isHovered.current = false;
        }}
        onTouchStart={() => {
          isHovered.current = true;
        }}
        onTouchEnd={() => {
          isHovered.current = false;
        }}
      >
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none py-4 px-4 items-start cursor-grab active:cursor-grabbing w-full"
          onMouseDown={(e) => {
            if (e.button === 0) {
              handleDragStart(e.clientX);
            }
          }}
          onTouchStart={(e) => {
            if (e.touches[0]) {
              handleDragStart(e.touches[0].clientX);
            }
          }}
          onClickCapture={(e) => {
            if (blockClickRef.current) {
              e.stopPropagation();
              e.preventDefault();
              blockClickRef.current = false;
            }
          }}
        >
          {tripledTeachers.map((teacher, i) => (
            <TeacherCard key={`${teacher.name}-${i}`} teacher={teacher} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
