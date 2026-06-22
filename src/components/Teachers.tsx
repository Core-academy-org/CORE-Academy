import { useLanguage } from "../contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

const getTeachers = (t: (key: string) => string) => [
  {
    name: "Umidjon Davlatov",
    role: t("teacher_umidjon_role"),
    bio: t("teacher_umidjon_bio"),
    img: "/umid.jpg",
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
  const isTouching = useRef(false);
  const lastX = useRef(0);
  const dragDistanceRef = useRef(0);
  const blockClickRef = useRef(false);
  const animationFrameId = useRef<number | null>(null);
  const scrollLeftPos = useRef(0);
  const isHovered = useRef(false);
  const lastInteractionTime = useRef(0);

  // Drag Handlers for Desktop Mouse
  const handleDragStart = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    lastX.current = clientX;
    dragDistanceRef.current = 0;
    lastInteractionTime.current = performance.now();
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const container = containerRef.current;
    if (!container) return;

    const dx = clientX - lastX.current;
    container.scrollLeft -= dx;
    
    lastX.current = clientX;
    dragDistanceRef.current += Math.abs(dx);
    lastInteractionTime.current = performance.now();
  };

  const handleDragEnd = () => {
    if (dragDistanceRef.current > 6) {
      blockClickRef.current = true;
    }
    isDragging.current = false;
    lastInteractionTime.current = performance.now();
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

      // Handle delayed layout measurement. Start from singleW (centered copy)
      if (scrollW > 0 && !hasInitialized) {
        container.scrollLeft = singleW;
        scrollLeftPos.current = singleW;
        hasInitialized = true;
      }

      const now = performance.now();
      const timeSinceInteraction = now - lastInteractionTime.current;

      // Auto-scrolling is paused immediately upon mouse hover, mouse dragging, or finger touches, letting users interact, drag, and shake it freely.
      const allowAutoScroll = 
        !isDragging.current && 
        !isTouching.current && 
        !isHovered.current;

      if (allowAutoScroll && singleW > 0) {
        // Continuous right-to-left infinite motion: 0.06px/ms (super smooth, premium & legible)
        scrollLeftPos.current += 0.06 * delta;

        // Perfect wrap loop when auto-scrolling
        if (scrollLeftPos.current >= singleW * 2) {
          scrollLeftPos.current -= singleW;
        } else if (scrollLeftPos.current < singleW) {
          scrollLeftPos.current += singleW;
        }

        container.scrollLeft = Math.round(scrollLeftPos.current);
      } else {
        // Keep coordinate tracker perfectly synchronized with actual scrolling position when dragging
        scrollLeftPos.current = container.scrollLeft;

        // Perform instant wrapper loop during active manual dragging at extreme boundaries
        if (singleW > 0) {
          const currentScroll = container.scrollLeft;
          if (currentScroll >= singleW * 2) {
            container.scrollLeft = currentScroll - singleW;
            scrollLeftPos.current = container.scrollLeft;
          } else if (currentScroll < singleW) {
            container.scrollLeft = currentScroll + singleW;
            scrollLeftPos.current = container.scrollLeft;
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(updateScroll);
    };

    animationFrameId.current = requestAnimationFrame(updateScroll);

    // Simple scroll listener to register user activity
    const handleScroll = () => {
      lastInteractionTime.current = performance.now();
    };

    // Active touch event handlers for precise drag-to-shake movement on touchscreens (phones)
    const handleTouchStart = (e: TouchEvent) => {
      isTouching.current = true;
      lastInteractionTime.current = performance.now();
      if (e.touches && e.touches[0]) {
        handleDragStart(e.touches[0].clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      lastInteractionTime.current = performance.now();
      if (isDragging.current && e.touches && e.touches[0]) {
        // Prevent default browser movement (like back/forward gestures) to allow smooth carousel dragging/shaking
        if (e.cancelable) {
          e.preventDefault();
        }
        handleDragMove(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      isTouching.current = false;
      lastInteractionTime.current = performance.now();
      handleDragEnd();
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    container.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    // Global drag event listeners for Desktop Mouse
    const handleGlobalMove = (e: MouseEvent) => {
      if (isDragging.current) {
        handleGlobalMoveAction(e.clientX);
      }
    };

    const handleGlobalUp = () => {
      if (isDragging.current) {
        handleDragEnd();
      }
    };

    // Helper wrapper to avoid referencing variables declared after hook initialization
    const handleGlobalMoveAction = (clientX: number) => {
      handleDragMove(clientX);
    };

    window.addEventListener("mousemove", handleGlobalMove);
    window.addEventListener("mouseup", handleGlobalUp);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUp);
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
          if (window.matchMedia("(hover: hover)").matches) {
            isHovered.current = true;
          }
        }}
        onMouseLeave={() => {
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
