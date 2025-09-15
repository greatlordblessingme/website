"use client";

import { useState } from "react";

interface CaseData {
  title: string;
  industry: string;
  region: string;
  problem: string;
  solution: string;
  before: string;
  after: string;
  metrics: string[];
}

const CASES: CaseData[] = [
  {
    title: "薪酬不公与员工抱怨",
    industry: "制造业",
    region: "华东及长三角",
    problem: "同岗不同酬引发大量不满与投诉；虽做过市场对标，但岗位价值定义与量化不足，调薪难以获得公平性认同。",
    solution: "引入智曜魔方的岗位价值评估与薪酬对标，按岗位价值与市场水平进行结构化调薪，建立透明、可解释的规则与流程，提升满意度与凝聚力。",
    before: "薪酬不公平，员工抱怨多，团队氛围差。",
    after: "薪酬结构公平，员工满意度提升，团队凝聚力增强。",
    metrics: ["满意度↑30%"]
  },
  {
    title: "绩效考核失衡",
    industry: "能源行业",
    region: "全国",
    problem: "员工认为考核标准不清晰且不贴合职责，部分指标过于理想化，导致认同感下降、积极性受挫。",
    solution: "基于岗位价值与职责画像设置合理的绩效指标与权重，做到\"可衡量、可达成、可复盘"，提升员工对绩效的认同度与有效性。",
    before: "员工对绩效考核不认同，工作效率低、士气差。",
    after: "考核标准合理清晰，满意度与业务指标同步提升。",
    metrics: ["满意度↑20%", "业绩↑15%"]
  },
  {
    title: "组织调整与岗位体系混乱",
    industry: "互联网",
    region: "国内及东南亚",
    problem: "组织调整缺少清晰的岗位切入点，岗位定位与职责边界不明确，缺乏体系化依据，影响落地效率。",
    solution: "构建岗位体系与岗位价值地图，明确各岗位职责、价值贡献与任职标准，为组织调整提供科学依据。",
    before: "调整效率低、职责不明确、用人标准模糊，团队不满意。",
    after: "岗位体系清晰、组织调整顺畅，运营效率显著提升。",
    metrics: ["运营效率↑28%"]
  },
  {
    title: "职业生涯规划与梯队建设困难",
    industry: "高科技",
    region: "华东地区",
    problem: "缺少清晰的岗位职责定义与成长路径，员工看不到晋升通道，管理层难以推进梯队建设。",
    solution: "基于岗位价值为员工提供职业发展路径与职级指引，匹配培训与晋升标准，系统推进人才梯队建设。",
    before: "职业发展不清晰、流失率高、团队士气低落。",
    after: "职责明确、晋升通道清晰，满意度提升、流失率下降。",
    metrics: ["满意度↑33%", "流失率↓21%"]
  },
  {
    title: "招聘与岗位匹配不精确",
    industry: "互联网",
    region: "全国",
    problem: "招聘与业务沟通不畅，岗位描述模糊，招到的人与岗位要求不匹配，影响交付效率。",
    solution: "以岗位价值与职责画像定义\"硬/软"要求，精准化 JD 与甄选标准，提升招聘质量与效率。",
    before: "招聘指标难达成，业务不满意，人员流动频繁。",
    after: "招聘人员与岗位需求精准匹配，绩效指标更贴合岗位职责。",
    metrics: ["人员流动率↓至8%"]
  }
];

export default function CasesSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-4">
            客户案例精选
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            以岗位价值为核心，连接"岗位—薪酬—绩效—人才"的经营闭环。以下为 5 个真实场景的解决路径与成效展示。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASES.map((caseItem, index) => (
            <CaseCard key={index} caseData={caseItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ caseData }: { caseData: CaseData }) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* 卡片头部 */}
      <header className="p-6 pb-4 bg-gradient-to-br from-orange-50 to-white border-b border-dashed border-gray-200">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 shadow-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">案例</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{caseData.title}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100 border border-orange-200 rounded-full">
                行业：{caseData.industry}
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100 border border-orange-200 rounded-full">
                地区：{caseData.region}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 卡片内容 */}
      <div className="p-6 space-y-4">
        {/* 问题描述 */}
        <div>
          <h4 className="font-bold text-gray-900 text-sm mb-2">问题描述</h4>
          <p className="text-gray-700 text-sm leading-relaxed">{caseData.problem}</p>
        </div>

        {/* 解决方案 */}
        <div>
          <h4 className="font-bold text-gray-900 text-sm mb-2">解决方案</h4>
          <p className="text-gray-700 text-sm leading-relaxed">{caseData.solution}</p>
        </div>

        {/* 实施前后对比 */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
            {/* 实施前 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 min-h-[100px] flex flex-col">
              <span className="inline-block px-2 py-1 text-xs font-bold text-gray-600 bg-gray-200 rounded-full w-fit mb-2">
                实施前
              </span>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{caseData.before}</p>
            </div>

            {/* VS */}
            <div className="flex items-center justify-center">
              <span className="text-gray-400 font-bold text-lg">VS</span>
            </div>

            {/* 实施后 */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 min-h-[100px] flex flex-col">
              <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-orange-600 rounded-full w-fit mb-2 shadow-sm">
                实施后
              </span>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-3">{caseData.after}</p>
              {caseData.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {caseData.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-bold text-orange-700 bg-orange-100 border border-orange-300 rounded-lg"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 卡片底部 */}
      <footer className="p-6 pt-4 flex justify-between items-center gap-3 border-t border-gray-100">
        <button className="px-4 py-2 text-sm font-bold text-orange-700 bg-transparent border border-dashed border-orange-300 rounded-xl hover:bg-orange-50 transition">
          了解方法论
        </button>
        <a
          href="/contact"
          className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          预约演示
        </a>
      </footer>
    </article>
  );
}