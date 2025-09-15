"use client";
import Image from "next/image";

type Tile = {
  title: string;
  img: string;
  focus?: string; // 'top' | 'center' | 'bottom' 等
};

const TILES: Tile[] = [
  {
    title: "渠道售价≈市场价六折，竞争力强",
    img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
    focus: "center",
  },
  {
    title: "分润 40%~60%，业绩越高收益越大",
    img: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg",
    focus: "center",
  },
  {
    title: "互推流量 · 积分兑换，多赢保障",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    focus: "center",
  },
  {
    title: "全面赋能：手册 / 案例库 / ROI 工具 / 培训认证",
    img: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
    focus: "center",
  },
];

export default function ImageTiles() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TILES.map((t) => (
            <article
              key={t.title}
              className="
                group relative overflow-hidden rounded-3xl aspect-[4/3] 
                ring-1 ring-black/5 bg-neutral-100 shadow-sm hover:shadow-xl transition
              "
              aria-label={t.title}
            >
              <Image
                src={t.img}
                alt={t.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="
                  object-cover transition-transform duration-500 group-hover:scale-[1.03]
                "
                style={{ objectPosition: t.focus || "center" }}
                priority={false}
                onError={(e) => {
                  console.log(`Image failed to load: ${t.img}`);
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                }}
              />

              {/* 暗色渐变遮罩：自下而上，保证白字可读 */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t from-black/70 via-black/35 to-transparent
                  transition-opacity duration-300 group-hover:opacity-95
                "
              />

              {/* 标题层：白字 + 阴影，保证对比度 */}
              <div className="absolute inset-x-6 bottom-6 z-10">
                <h3 className="
                  text-white text-xl md:text-2xl font-extrabold leading-tight
                  [text-shadow:0_2px_8px_rgba(0,0,0,.55),0_0_2px_rgba(0,0,0,.35)]
                ">
                  {t.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}