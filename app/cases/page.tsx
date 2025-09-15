"use client";

import { useState } from "react";
import { useEffect } from "react";

// 自定义线框图标组件
const OutlineIcon = ({ type, className }: { type: string; className?: string }) => {
  const iconProps = {
    className: className || "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24"
  };

  switch (type) {
    case "salary":
      return (
        <svg {...iconProps}>
          {/* 钱袋轮廓 */}
          <path d="M12 2L8 6v4c0 4 4 8 4 8s4-4 4-8V6l-4-4z" strokeLinecap="round" strokeLinejoin="round"/>
          {/* 中心橘红点 */}
          <circle cx="12" cy="10" r="1.5" fill="#FF5A1F"/>
          {/* ¥ 符号 */}
          <path d="M10 8l4 4M14 8l-4 4M12 6v8" strokeLinecap="round"/>
        </svg>
      );
    case "performance":
      return (
        <svg {...iconProps}>
          {/* 仪表盘轮廓 */}
          <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" strokeLinecap="round"/>
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          {/* 指针头部蓝点 */}
          <circle cx="15" cy="10" r="1" fill="#FF5A1F"/>
        </svg>
      );
    case "organization":
      return (
        <svg {...iconProps}>
          {/* 组织结构图 */}
          <rect x="9" y="3" width="6" height="4" rx="1" strokeLinecap="round"/>
          <rect x="3" y="12" width="6" height="4" rx="1" strokeLinecap="round"/>
          <rect x="15" y="12" width="6" height="4" rx="1" strokeLinecap="round"/>
          <path d="M12 7v3M12 10h-6M12 10h6M6 12v-2M18 12v-2" strokeLinecap="round"/>
          {/* 顶层节点绿点 */}
          <circle cx="12" cy="5" r="1" fill="#FF5A1F"/>
        </svg>
      );
    case "recruitment":
      return (
        <svg {...iconProps}>
          {/* 放大镜轮廓 */}
          <circle cx="11" cy="11" r="8" strokeLinecap="round"/>
          <path d="m21 21-4.35-4.35" strokeLinecap="round"/>
          {/* 人头轮廓 */}
          <circle cx="11" cy="9" r="2" strokeLinecap="round"/>
          <path d="M7 15c0-2 2-3 4-3s4 1 4 3" strokeLinecap="round"/>
          {/* 镜片中心点 */}
          <circle cx="11" cy="11" r="1" fill="#FF5A1F"/>
        </svg>
      );
    default:
      return null;
  }
};

const cases = [
  {
    id: 1,
    icon: "salary",
    title: "薪酬不公与员工抱怨",
    industry: "制造业",
    region: "华东及长三角",
    problem: "同岗不同酬引发大量不满与投诉；虽做过市场对标，但岗位价值定义与量化不足，调薪难以获得公平性认同。",
    solution: "引入智曜魔方的岗位价值评估与薪酬对标，按岗位价值与市场水平进行结构化调薪，建立透明、可解释的规则与流程。",
    beforeDesc: "薪酬不公平，员工抱怨多，团队氛围差",
    afterDesc: "薪酬结构公平，员工满意度提升，团队凝聚力增强",
    metrics: "满意度提升30%"
  },
  {
    id: 2,
    icon: "performance",
    title: "绩效考核失衡",
    industry: "能源行业",
    region: "全国",
    problem: "员工认为考核标准不清晰且不贴合职责，部分指标过于理想化，导致认同感下降、积极性受挫。",
    solution: "基于岗位价值与职责画像设置合理的绩效指标与权重，做到可衡量、可达成、可复盘，提升员工对绩效的认同度与有效性。",
    beforeDesc: "员工对绩效考核不认同，工作效率低、士气差",
    afterDesc: "考核标准合理清晰，满意度与业务指标同步提升",
    metrics: "满意度提升20%，业绩提升15%"
  },
  {
    id: 3,
    icon: "organization",
    title: "组织调整与岗位体系混乱",
    industry: "互联网",
    region: "国内及东南亚",
    problem: "组织调整缺少清晰的岗位切入点，岗位定位与职责边界不明确，缺乏体系化依据，影响落地效率。",
    solution: "构建岗位体系与岗位价值地图，明确各岗位职责、价值贡献与任职标准，为组织调整提供科学依据。",
    beforeDesc: "调整效率低、职责不明确、用人标准模糊，团队不满意",
    afterDesc: "岗位体系清晰、组织调整顺畅，运营效率显著提升",
    metrics: "运营效率提升28%"
  },
  {
    id: 4,
    icon: "recruitment",
    title: "招聘与岗位匹配不精确",
    industry: "互联网",
    region: "全国",
    problem: "招聘与业务沟通不畅，岗位描述模糊，招到的人与岗位要求不匹配，影响交付效率。",
    solution: "以岗位价值与职责画像定义硬性和软性要求，精准化JD与甄选标准，提升招聘质量与效率。",
    beforeDesc: "招聘指标难达成，业务不满意，人员流动频繁",
    afterDesc: "招聘人员与岗位需求精准匹配，绩效指标更贴合岗位职责",
    metrics: "人员流动率降至8%"
  }
];

export default function CasesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <img 
            src="/assets/pexels/cases-hero-bg.jpg"
            alt="壮美山川 - 稳健可靠的企业服务"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              客户案例精选
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              以岗位价值为核心，连接"岗位—薪酬—绩效—人才"的经营闭环。
              以下为4个真实场景的解决路径与成效展示。
            </p>
            
            {/* 数据驱动标签 */}
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-base font-semibold text-gray-900">数据驱动的人力资源案例实践</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">        
        <div className="space-y-12">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* 卡片装饰线 */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300"></div>
              
              <div className="p-10">
                {/* Header */}
                <div className="flex items-start gap-8 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 border-3 border-orange-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <OutlineIcon type={caseItem.icon} className="w-10 h-10 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                      {caseItem.title}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-5 py-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 text-base font-semibold rounded-full border-2 border-orange-200 shadow-sm">
                        {caseItem.industry}
                      </span>
                      <span className="px-5 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-base font-semibold rounded-full border-2 border-gray-200 shadow-sm">
                        {caseItem.region}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Problem & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">问题描述</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {caseItem.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">解决方案</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {caseItem.solution.split('智曜魔方').map((part, i) => 
                          i === 0 ? part : (
                            <span key={i}>
                              <span className="text-orange-600 font-semibold">智曜魔方</span>
                              {part}
                            </span>
                          )
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Before/After Comparison */}
                  <div className="space-y-4">
                    {/* Before */}
                    <div className="p-6 bg-gray-100 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full uppercase tracking-wide">
                          实施前
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {caseItem.beforeDesc}
                      </p>
                    </div>

                    {/* VS Divider */}
                    <div className="flex items-center justify-center py-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">VS</span>
                      </div>
                    </div>

                    {/* After */}
                    <div className="p-6 bg-orange-50 rounded-2xl border border-orange-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs font-bold rounded-full uppercase tracking-wide">
                          实施后
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {caseItem.afterDesc}
                      </p>
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-bold rounded-full">
                          {caseItem.metrics}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Cases Teaser */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            还有更多成功案例
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            涵盖职业生涯规划、梯队建设、人才发展等多个场景，
            每个方案都经过实际验证并取得显著成效。
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all duration-200 shadow-lg text-lg"
          >
            查看完整案例库
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* 客户感言走马灯 */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">
            希望了解更贴近你业务的落地方案？
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            我们的专家团队将为您提供个性化的解决方案演示
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all duration-200 shadow-lg text-xl"
          >
            预约演示 / 联系我们
          </a>
        </div>
      </section>
    </main>
  );
}

// 客户感言轮播组件
function TestimonialsCarousel() {
  const testimonials = [
    {
      quote: "通过岗位价值评估，我们能够更加精准地定义每个岗位的职责和价值，确保薪酬与岗位要求合理对接。这一过程不仅提升了岗位体系的公平性，也优化了公司的人才管理结构。",
      author: "荏原冷热（中国），HR 总监兼精益负责人 刘总"
    },
    {
      quote: "AI 岗位价值分析产品帮助我们实现了更精准的岗位评估和薪酬设计，提升了岗位价值的公平性和团队满意度。产品的数据支持让我们的决策更加科学。",
      author: "正海集团（股票代码: 300224, 300653），副总裁 全总"
    },
    {
      quote: "AI 产品让我们的人力资源管理更加数据驱动，特别是在组织分析与岗位价值管理上，极大提升了效率和精度。它帮助我们优化了岗位配置和员工激励，增强了团队的凝聚力。",
      author: "中宠股份（股票代码: 002891），副总裁 董总"
    },
    {
      quote: "AI 岗位价值分析精准匹配岗位价值和市场薪酬，提升了岗位评估的透明度，帮助我们识别并激励关键人才，是提升人力资源管理效率的关键工具。",
      author: "爱空间家装，副总裁 姜总"
    },
    {
      quote: "AI 岗位价值分析让我们的组织架构更科学，薪酬激励更公平透明，有效缓解了员工抱怨情绪，提升了整体满意度与团队稳定性。",
      author: "某大型制造企业，HR 负责人"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          客户感言
        </h2>
        
        {/* 轮播容器 */}
        <div className="relative">
          {/* 大引号装饰 */}
          <div className="absolute -top-4 -left-4 text-8xl text-orange-200 font-serif leading-none select-none">
            "
          </div>
          
          {/* 感言内容 */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-orange-100 min-h-[280px] flex flex-col justify-center">
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8 font-medium">
                {testimonials[currentIndex].quote}
              </blockquote>
              <cite className="text-lg text-orange-600 font-semibold not-italic">
                — {testimonials[currentIndex].author}
              </cite>
            </div>
          </div>

          {/* 左右箭头 */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-orange-600 hover:text-orange-700 transition-all duration-200 hover:scale-110"
            aria-label="上一条感言"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-orange-600 hover:text-orange-700 transition-all duration-200 hover:scale-110"
            aria-label="下一条感言"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 指示器圆点 */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange-600 scale-125"
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
              aria-label={`查看第${index + 1}条感言`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}