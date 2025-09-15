import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI才神 | 爱才神",
  description: "用AI重新定义HR价值",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" /></head>
      <body className="font-sans">
        {/* 导航栏 */}
        <Navbar />
        {/* 页面内容 */}
        <main>{children}</main>
        {/* 页脚 */}
        <Footer />
        
        {/* 动态Hero高度脚本 */}
        <script dangerouslySetInnerHTML={{
          __html: `
/**
 * Fullscreen Hero height = viewport - navbar
 * Paste at the end of <body>
 */
(function () {
  // 配置：导航选择器与 Hero 选择器（有哪个就用哪个）
  var NAV_SELECTOR = 'header, .site-header, .navbar, .nav, .topbar';
  var HERO_SELECTOR = '#hero, .hero-fullbleed, .hero';

  function getNavHeight() {
    var nav = document.querySelector(NAV_SELECTOR);
    return nav && nav.offsetHeight ? nav.offsetHeight : 80; // 找不到就用 80px
  }

  function getViewportHeight() {
    if (window.visualViewport && typeof window.visualViewport.height === 'number') {
      return window.visualViewport.height; // 更准确，避开 iOS 地址栏抖动
    }
    return window.innerHeight || document.documentElement.clientHeight || 800;
  }

  function applyHeroHeight() {
    var hero = document.querySelector(HERO_SELECTOR);
    if (!hero) return;

    var vh = getViewportHeight();
    var navH = getNavHeight();
    var target = Math.max(560, vh - navH); // 桌面兜底 560px，可改

    // 强制满屏宽高
    hero.style.width = '100vw';
    hero.style.marginLeft = 'calc(50% - 50vw)';
    hero.style.marginRight = 'calc(50% - 50vw)';
    hero.style.overflow = 'hidden';
    hero.style.height = target + 'px';
  }

  // 初始化 + 监听变化
  var raf;
  function schedule() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(applyHeroHeight);
  }

  // 初次执行
  schedule();

  // 监听各种可能改变视口高度的事件
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('orientationchange', schedule, { passive: true });
  window.addEventListener('load', schedule, { passive: true });
  window.addEventListener('pageshow', schedule, { passive: true });

  // iOS/Safari：visualViewport 尺寸变化
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', schedule, { passive: true });
    window.visualViewport.addEventListener('scroll', schedule, { passive: true });
  }
})();
          `
        }} />
      </body>
    </html>
  );
}
