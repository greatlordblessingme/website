"use client";

import React from "react";

type VideoItem = {
  title: string;
  src: string;        // mp4 路径
  poster: string;     // 封面图
};

const videos: VideoItem[] = [
  { title: "战略效能演示", src: "/demo.mp4", poster: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" },
  { title: "选才标准生成", src: "/demo.mp4", poster: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" },
  { title: "行业薪酬对标", src: "/demo.mp4", poster: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg" },
  { title: "绩效目标分解", src: "/demo.mp4", poster: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" },
];

export default function VideoShowcase() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">功能演示</h2>
        <VideoGallery items={videos} />
        <p className="mt-3 text-sm text-gray-500">
          将你的演示视频替换为 /public/demo.mp4。
        </p>
      </div>
    </section>
  );
}

function VideoGallery({ items }: { items: VideoItem[] }) {
  const [active, setActive] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // 切换时自动加载与播放
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.load();
    // 自动播放可能被浏览器静音策略限制
    const play = async () => {
      try { await v.play(); } catch { /* 用户交互后可播放 */ }
    };
    play();
  }, [active]);

  return (
    <div className="mt-6">
      {/* 主视频 */}
      <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100">
        <video
          key={active} // 强制刷新 source
          ref={videoRef}
          controls
          muted
          className="w-full aspect-video bg-black"
          poster={items[active]?.poster}
        >
          <source src={items[active]?.src} type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
      </div>

      {/* 缩略图条 */}
      <div
        className="mt-4 flex gap-4 overflow-x-auto pb-2"
        role="tablist" 
        aria-label="视频缩略图列表"
      >
        {items.map((it, i) => {
          const isActive = i === active;
          return (
            <button
              key={it.src}
              role="tab"
              aria-selected={isActive}
              title={it.title}
              onClick={() => setActive(i)}
              className={`relative h-24 w-40 min-w-40 flex-shrink-0 overflow-hidden rounded-xl ring-2 transition
                ${isActive ? "ring-[#FF5A1F]" : "ring-transparent hover:ring-slate-300"}`}
            >
              <img
                src={it.poster}
                alt={it.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 grid place-items-center">
                {/* 半透明播放图标 */}
                <svg width="42" height="42" viewBox="0 0 24 24"
                  className={`drop-shadow ${isActive ? "opacity-100" : "opacity-90"}`}>
                  <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.85"/>
                  <path d="M9.5 7.5 17 12l-7.5 4.5V7.5Z" fill="#FF5A1F"/>
                </svg>
              </span>
              {/* 标题条 */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/45 px-2 py-1 text-[12px] text-white line-clamp-1">
                {it.title}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}