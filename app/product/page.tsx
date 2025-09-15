import ProductIntro from "@/components/ui/ProductIntro";

export default function ProductPage() {
  const features = [
    { title: "岗位价值量化", desc: "以岗位为核心，量化价值，形成职级/薪酬基线。" },
    { title: "人才画像与匹配", desc: "多维标签与胜任力模型，智能匹配岗位需求。" },
    { title: "薪酬对标与优化", desc: "结合市场与内部数据，优化结构与公平性。" },
    { title: "绩效目标分解与对齐", desc: "自上而下拆解目标，过程跟踪与复盘闭环。" },
    { title: "成本智能管控", desc: "多维成本看板与异常预警，支撑预算管理。" },
    { title: "用工合规与风险提示", desc: "规则库+实时校验，识别潜在合规风险。" },
    { title: "报告导出与看板", desc: "一键导出高管报告、部门看板与周/月报。" },
    { title: "权限与审计", desc: "分级授权、操作留痕、审计可追溯。" },
    { title: "多组织与多实体", desc: "支持集团化、多法人/多区域统一管理。" },
    { title: "API/单点集成", desc: "与HRIS/薪酬/考勤/IM/邮箱对接，SSO 单点登录。" },
    { title: "双端服务（企/个）", desc: "企业端管控 + 个人端自助，提升协同效率。" },
    { title: "国产化与私有化", desc: "按需支持国产化组件与本地化部署。" }
  ];

  return (
    <main className="flex flex-col">
      {/* ✅ 全新产品介绍区 */}
      <ProductIntro />

      {/* 功能矩阵 */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 架构示意 + 演示视频 */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 架构卡片 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">产品架构（示意）</h2>
            <p className="mt-2 text-gray-600 text-sm">
              数据底座（人事/薪酬/考勤/绩效/简历/IM/邮箱） → 模型与规则（算法/专家规则/评估引擎）
              → 应用层（岗位价值/人才画像/薪酬/绩效/合规/报表）。
            </p>
            <img
              src="/placeholder-arch.png"
              alt="架构示意"
              className="mt-4 w-full rounded-lg border border-gray-100"
            />
          </div>

          {/* 演示视频卡片 */}
          <div className="p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">功能演示（占位）</h2>
            <video
              className="mt-4 w-full rounded-lg border border-gray-100"
              src="/demo.mp4"
              poster="/poster.jpg"
              controls
              muted
            />
            <p className="mt-2 text-gray-500 text-sm">将你的演示视频替换为 /public/demo.mp4。</p>
          </div>
        </div>
      </section>

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
  );
}
