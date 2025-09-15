export default function AboutPage() {
  const values = [
    { k: "以岗位为核心", v: "用数据与规则统一岗位、职级与薪酬基线" },
    { k: "AI 驱动决策", v: "画像、对标、匹配与看板闭环，减少拍脑袋" },
    { k: "可落地可复用", v: "方法论 + 工具化，10 天内见效（示意）" },
  ];

  const team = [
    { name: "产品与算法团队", desc: "HR 领域知识图谱、岗位价值模型、匹配与对标算法" },
    { name: "行业顾问团队", desc: "制造/金融/互联网/央国企的人力资源专家与实施顾问" },
    { name: "工程与交付团队", desc: "SaaS/私有化/国产化适配，数据安全与合规实施" },
  ];

  const timeline = [
    { y: "2013", t: "团队起步", d: "深耕共享服务中心与集团化 HR 咨询与实施" },
    { y: "2020", t: "AI 验证", d: "岗位价值模型与人才画像算法落地验证" },
    { y: "2024", t: "产品化", d: "AI 才神（爱才神）形成：岗位—选才—薪酬—绩效—合规—发展全链路" },
    { y: "2025", t: "行业化", d: "面向制造、金融、互联网、央国企与成长型企业的行业方案" },
  ];

  const compliance = [
    "分级权限与脱敏展示，最小权限原则",
    "传输/存储加密、操作留痕与审计可追溯",
    "SaaS 与本地化部署并行；信创/国产化生态（按需适配）",
  ];

  return (
    <main className="bg-white">
      {/* 首屏：左文右图 */}
      <section className="relative w-full">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 lg:py-24">
          {/* 左侧：标题 + 正文 */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.15] font-extrabold tracking-tight text-[#FF5A1F]">
              关于我们
            </h1>
            <div className="mt-6 text-slate-800 text-[18px] leading-8 lg:text-[20px] lg:leading-9">
              <p className="font-semibold">智曜魔方（杭州）科技有限公司</p>
              <p className="mt-2">
                汇聚全球顶尖AI专家与组织人才专家，结合集团公司30年企业级数据，专注于人工智能在人力资源管理的创新应用，
                致力于为企业提供智能、精准、可信赖的人才管理解决方案。打造面向
                <span className="whitespace-nowrap">岗位—选才—薪酬—绩效—合规—发展</span>
                的 <strong>AI 才神（爱才神）</strong> 平台，帮助企业用 AI 重新定义 HR 价值。
              </p>
            </div>

            {/* 细分隔线，呼应品牌色 */}
            <div className="mt-8 h-[6px] w-full max-w-md bg-gradient-to-r from-transparent via-[#FF5A1F]/70 to-transparent" />
          </div>

          {/* 右侧：大图 */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl md:aspect-[4/5] md:h-[560px]">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="智曜魔方 · 关于我们"
                className="h-full w-full object-cover"
              />
              {/* 可选：轻微内边框/描边 */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 愿景屏 - 左上角文字，右下角大图 */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg"
          alt="愿景背景 - AI科技未来"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute left-6 top-16 md:left-12 md:top-24 max-w-md md:max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF5A1F] mb-4">愿景</h2>
            <p className="text-base md:text-lg text-slate-800 leading-relaxed">
              成为全球领先的 AI 驱动 HR 管理方案提供商，
              引领人力资源管理的智能化未来。
            </p>
          </div>
        </div>
      </section>

      {/* 使命屏 - 右下角文字，左上角大图 */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/assets/pexels/about-mission.jpg"
          alt="使命背景 - 团队合作"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute right-6 bottom-16 md:right-12 md:bottom-24 max-w-md md:max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF5A1F] mb-4">使命</h2>
            <p className="text-base md:text-lg text-slate-800 leading-relaxed">
              以创新的 AI 技术，帮助企业实现精准的人才配置与高效的组织运作，
              全面提升核心竞争力。
            </p>
          </div>
        </div>
      </section>

      {/* 团队与专家顾问 */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">团队与专家顾问</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            * 核心成员具咨询/实操背景，可按行业与阶段提供方法论与共创。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b0b0f] text-white text-center py-12">
        <p className="text-lg md:text-xl mb-4">希望了解更贴近你业务的落地方案？</p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-orange-600 to-orange-400 text-black font-semibold px-6 py-3 rounded-xl"
        >
          预约演示 / 联系我们
        </a>
      </section>
    </main>
  );
}