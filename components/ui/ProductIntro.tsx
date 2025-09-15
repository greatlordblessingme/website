"use client";

export default function ProductIntro() {
  // 自定义线条风格图标组件
  const LineIcon1 = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gray-700">
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="12" y="12" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="16" y="16" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="24" cy="24" r="1" fill="currentColor"/>
    </svg>
  );

  const LineIcon2 = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gray-700">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="24" cy="24" r="2" fill="currentColor"/>
      <circle cx="18" cy="18" r="1" fill="currentColor"/>
      <circle cx="30" cy="30" r="1" fill="currentColor"/>
    </svg>
  );

  const LineIcon3 = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gray-700">
      <rect x="6" y="12" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      {Array.from({length: 8}).map((_, i) => (
        <line key={i} x1={8 + i * 4} y1="16" x2={8 + i * 4} y2="32" stroke="currentColor" strokeWidth="1"/>
      ))}
      {Array.from({length: 5}).map((_, i) => (
        <line key={i} x1="8" y1={16 + i * 4} x2="40" y2={16 + i * 4} stroke="currentColor" strokeWidth="0.5"/>
      ))}
      <circle cx="36" cy="20" r="2" fill="currentColor"/>
    </svg>
  );

  const LineIcon4 = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gray-700">
      <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="30" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 30 C12 26, 16 24, 24 24 C32 24, 36 26, 36 30" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="18" cy="18" r="2" fill="currentColor"/>
      <circle cx="30" cy="18" r="2" fill="currentColor"/>
      <line x1="24" y1="32" x2="24" y2="40" stroke="currentColor" strokeWidth="2"/>
      <line x1="20" y1="36" x2="28" y2="36" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  const LineIcon5 = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gray-700">
      <path d="M24 8 L30 20 L42 20 L33 28 L36 40 L24 34 L12 40 L15 28 L6 20 L18 20 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <line x1="24" y1="12" x2="24" y2="16" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="20" x2="28" y2="22" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="32" y1="28" x2="28" y2="26" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );

  const LineIcon6 = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gray-700">
      <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M24 28 C24 28, 16 32, 16 38 L32 38 C32 32, 24 28, 24 28" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="24" cy="20" r="1" fill="currentColor"/>
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  );

  const coreCapabilities = [
    {
      icon: <LineIcon1 />,
      title: "岗位价值量化",
      description: "以岗位为核心，量化岗位价值，形成公平可解释的职级与薪酬基线。"
    },
    {
      icon: <LineIcon2 />,
      title: "精准人才匹配",
      description: "多维画像与能力标签，智能匹配岗位需求，缩短选才用才决策周期。"
    },
    {
      icon: <LineIcon3 />,
      title: "薪酬对标优化",
      description: "结合市场与内部数据进行对标与分布分析，优化薪酬结构与公平性。"
    },
    {
      icon: <LineIcon4 />,
      title: "绩效目标对齐",
      description: "从战略到岗位目标层层分解，过程跟踪与复盘，提升组织达成率。"
    },
    {
      icon: <LineIcon5 />,
      title: "成本智能管控",
      description: "多维成本看板与异常预警，支撑预算管理与组织效率优化。"
    },
    {
      icon: <LineIcon6 />,
      title: "合规风险管控",
      description: "合规规则库与实时校验，自动提示潜在风险点，降低合规成本。"
    }
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心能力
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            以岗位为核心，连接"岗位—选才—薪酬—绩效—合规—发展"的经营闭环，
            用 AI 重新定义 HR 价值创造。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreCapabilities.map((capability, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {capability.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}