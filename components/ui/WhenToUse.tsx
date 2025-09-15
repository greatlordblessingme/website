// components/ui/WhenToUse.tsx
"use client";
import Image from "next/image";

const items = [
  {
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    title: "新业务新区搭建体系",
    desc: "快速搭建科学人力体系，支撑业务高速发展。",
  },
  {
    img: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
    title: "优化集团人力管控",
    desc: "优化薪酬与绩效结构，提升组织公平性与激励性。",
  },
  {
    img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
    title: "拓展海外业务同步时",
    desc: "全球团队统一管理，跨时区高效协作。",
  },
  {
    img: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg",
    title: "高技术人才成长激励",
    desc: "数据驱动的人才决策与激励机制，支持创新与增长。",
  },
];

export default function WhenToUse() {
  return (
    <section className="w-full bg-[#F5F5F3] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          您什么时候需要我们
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-3xl bg-white shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={false}
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {it.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}