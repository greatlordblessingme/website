"use client";

import { useState } from "react";
import ServiceFlow from "@/components/ServiceFlow";

type Scenario = { title: string; desc: string };

const GROUPS: Record<string, Scenario[]> = {
  "大型集团": [
    { title: "组织升级", desc: "以岗位为核心，统一职级/任职标准，解决多法人多业务的人才体系不一致问题。" },
    { title: "并购整合", desc: "快速梳理岗位与薪酬，消除并购后的制度与激励割裂，统一评价口径。" },
    { title: "成本与效率", desc: "建立人力成本看板与异常预警，支撑预算、编制与效率优化。" },
    { title: "合规与风控", desc: "用工合规规则库 + 实时校验，降低合规风险与审计压力。" },
  ],
  "快速成长企业": [
    { title: "快速扩张", desc: "以数据驱动的选才标准与薪酬策略，保证扩张期人效稳定与公平性。" },
    { title: "绩效驱动增长", desc: "目标自上而下分解与过程复盘，提高团队达成率与聚焦度。" },
    { title: "人才画像与留存", desc: "能力标签与匹配度模型，识别关键人才与接班人，降低流失率。" },
    { title: "岗位价值基线", desc: "量化岗位价值，形成可解释的薪酬/晋升基线，避免\"拍脑袋\"定薪。" },
  ],
  "央国企": [
    { title: "标准化与透明度", desc: "统一岗位体系与评价标准，提升评价过程与结果透明度（10%+）。" },
    { title: "绩效与激励兼容", desc: "兼顾组织目标与合规要求，建立可追溯的绩效激励逻辑。" },
    { title: "多组织协同", desc: "支持多层级、多区域、多实体统一管理与授权审计。" },
    { title: "国产化与私有化", desc: "按需支持信创/国产化生态与本地化部署，满足安全合规。" },
  ],
};

export default function SolutionsPage() {
  const tabs = Object.keys(GROUPS);
  const [active, setActive] = useState<string>(tabs[0]);

  return (
    <>
      {/* 全屏震撼视觉区块 */}
      <section className="w-screen h-screen flex items-center bg-white ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
        {/* 左侧大图 */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <img 
            src="/assets/pexels/solutions-hero.jpg" 
            alt="AI驱动的未来科技"
            className="object-cover w-full h-full"
          />
          {/* 渐变遮罩，让右侧文字更突出 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20"></div>
        </div>
        
        {/* 右侧文字内容 */}
        <div className="w-1/2 h-full flex flex-col justify-center px-16 bg-white">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
              AI 驱动的人力资源
              <span className="block text-[#FF5A1F]">解决方案</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              按客户类型与业务场景提供可落地的 AI+HR 方案：
              <span className="font-semibold">岗位—选才—薪酬—绩效—合规—发展</span>，全链路联动。
            </p>
            
            {/* 三大核心价值 */}
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="w-3 h-3 mt-2 mr-4 bg-[#FF5A1F] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">以岗位为核心</h3>
                  <p className="text-gray-600">用数据与规则统一岗位、职级与薪酬基线</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-3 h-3 mt-2 mr-4 bg-[#FF5A1F] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">AI 智能决策</h3>
                  <p className="text-gray-600">机器学习算法优化人才匹配与薪酬建议</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-3 h-3 mt-2 mr-4 bg-[#FF5A1F] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">全链路协同</h3>
                  <p className="text-gray-600">从招聘到发展的完整人才管理闭环</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-4 py-2 rounded-full border transition ${
                  active === t
                    ? "bg-gradient-to-r from-orange-600 to-orange-400 text-black border-orange-300"
                    : "bg-white text-gray-800 border-gray-200 hover:border-orange-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* 场景卡片 */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GROUPS[active].map((s) => (
              <div
                key={s.title}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <ServiceFlow />

      {/* CTA */}
      <section className="bg-[#0b0b0f] text-white text-center py-12">
        <p className="text-xl mb-4">想获得一份专属的落地方案？</p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-orange-600 to-orange-400 text-black font-semibold px-6 py-3 rounded-xl"
        >
          预约顾问 / 联系我们
        </a>
      </section>
    </>
  );
}