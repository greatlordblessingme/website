"use client";

import { useEffect, useRef, useState } from "react";

/** 轮播图片（顺序固定：1→2→3） */
const IMAGES = [
  "/images/Hero 1.png",
  "/images/Hero 2.png", 
  "/images/hero 3.png",
];

/** 轮播间隔（毫秒） */
const INTERVAL = 5000;

/** 图片主体焦点（需要偏右可改成 '80% 50%'） */
const OBJECT_POSITION = "50% 90%";

/** 导航选择器（用于读取真实高度做减法） */
const NAV_SELECTOR = "#site-nav, header, nav, .site-header, .navbar, .topbar";

/** 先读 CSS 变量 --nav-h，读不到再读真实 DOM 高度 */
function readCssNavHeight(): number {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-h")
    .trim();
  if (!v) return 0;
  const m = v.match(/^([\d.]+)px$/);
  return m ? parseFloat(m[1]) : 0;
}
function readDomNavHeight(): number {
  const nav =
    (document.querySelector(NAV_SELECTOR) as HTMLElement | null) ?? null;
  return nav?.offsetHeight ?? 0;
}

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const boxRef = useRef<HTMLDivElement | null>(null);

  /* 手动切换函数 */
  const goToPrev = () => {
    setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  };
  
  const goToNext = () => {
    setIndex((i) => (i + 1) % IMAGES.length);
  };

  /* 自动轮播：每 5 秒切换 */
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  /* 计算"视口高度 - 导航高度"，写入容器高度（兼容 iOS） */
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const apply = () => {
      const viewportH =
        window.visualViewport?.height ??
        window.innerHeight ??
        document.documentElement.clientHeight ??
        800;

      const navH = readCssNavHeight() || readDomNavHeight(); // 优先 CSS 变量
      const target = Math.max(560, viewportH - navH); // 桌面兜底 560px
      el.style.height = `${target}px`;
    };

    const schedule = () => requestAnimationFrame(apply);
    schedule();
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("orientationchange", schedule, { passive: true });
    window.addEventListener("load", schedule, { passive: true });
    window.visualViewport?.addEventListener("resize", schedule, { passive: true });
    window.visualViewport?.addEventListener("scroll", schedule, { passive: true });

    return () => {
      window.removeEventListener("resize", schedule);
      window.removeEventListener("orientationchange", schedule);
      window.removeEventListener("load", schedule);
      window.visualViewport?.removeEventListener("resize", schedule as any);
      window.visualViewport?.removeEventListener("scroll", schedule as any);
    };
  }, []);

  return (
    <section
      ref={boxRef}
      aria-label="Hero carousel"
      className="
        relative w-screen overflow-hidden
        ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
        select-none
      "
    >
      {/* 三张图淡入淡出 */}
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          draggable={false}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1000
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
          style={{ objectPosition: OBJECT_POSITION }}
        />
      ))}

      {/* 左右切换箭头 */}
      <button
        onClick={goToPrev}
        className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-black/50 text-white
                   flex items-center justify-center text-xl font-bold
                   hover:bg-black/70 transition-colors duration-200"
        aria-label="Previous image"
      >
        ‹
      </button>
      
      <button
        onClick={goToNext}
        className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-black/50 text-white
                   flex items-center justify-center text-xl font-bold
                   hover:bg-black/70 transition-colors duration-200"
        aria-label="Next image"
      >
        ›
      </button>

      {/* 小圆点（可保留 / 可删除） */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {IMAGES.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}