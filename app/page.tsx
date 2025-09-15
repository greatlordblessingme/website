"use client";

import ProductIntro from "@/components/ui/ProductIntro";
import ImageCarousel from "@/components/ui/ImageCarousel";
import WhenToUse from "@/components/ui/WhenToUse";
import VideoShowcase from "@/components/ui/VideoShowcase";

export default function Home() {
  return (
    <>
      {/* Hero Section - 图片轮播 */}
      <ImageCarousel />

      <main className="flex flex-col">
      {/* ✅ 全新产品介绍区 */}
      <ProductIntro />

      {/* 四大优势区域 */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">四大优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "全球领先AI技术", img: "/images/downloaded/hero-advantage-1.jpg" },
              { title: "30年行业专家积淀", img: "/images/downloaded/hero-advantage-2.jpg" },
              { title: "海量企业级数据", img: "/images/downloaded/hero-advantage-3.jpg" },
              { title: "简洁高效的用户体验", img: "/images/downloaded/hero-advantage-4.jpg" }
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    console.log(`Image failed to load: ${item.img}`);
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 中间大图区域 */}
      <section
        aria-label="中间大图"
        className="
          hero-fullbleed
          relative w-screen overflow-hidden
          ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
        "
      >
        <img
          src="/images/中间图.png"
          alt="中间大图"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </section>

      {/* ✅ 新增：您什么时候需要我们 */}
      <WhenToUse />

      {/* 安全与合规 */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">数据安全与合规</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900">权限分级与脱敏</h4>
              <p className="mt-2 text-gray-600 text-sm">按角色/组织授权，敏感字段脱敏呈现，最小权限原则。</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900">加密与审计</h4>
              <p className="mt-2 text-gray-600 text-sm">传输/存储加密，操作留痕，审计可追溯。</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900">部署与合规</h4>
              <p className="mt-2 text-gray-600 text-sm">SaaS 或私有化部署，支持信创/国产化生态。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 功能演示视频 - 使用新的VideoShowcase组件 */}
      <VideoShowcase />

      {/* 行动按钮 */}
      <section className="bg-[#0b0b0f] text-white text-center py-12">
        <p className="text-xl mb-4">想看你的业务如何落地？</p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-orange-600 to-orange-400 text-black font-semibold px-6 py-3 rounded-xl"
        >
          预约演示 / 联系我们
        </a>
      </section>
      </main>
    </>
  );
}