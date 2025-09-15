"use client";

import ImageTiles from "@/components/ui/ImageTiles";
import { BadgePercent, Coins, ArrowLeftRight, BadgeCheck } from "lucide-react";

const HIGHLIGHTS_RICH = [
  {
    icon: BadgePercent,
    title: "渠道售价≈市场价六折，竞争力强",
    accent: "from-orange-50 to-white",
  },
  {
    icon: Coins,
    title: "分润 40%~60%，业绩越高收益越大",
    accent: "from-amber-50 to-white",
  },
  {
    icon: ArrowLeftRight,
    title: "互推流量 · 积分兑换，多赢保障",
    accent: "from-indigo-50 to-white",
  },
  {
    icon: BadgeCheck,
    title: "全面赋能：手册 / 案例库 / ROI 工具 / 培训认证",
    accent: "from-emerald-50 to-white",
  },
];

const ORG_POINTS = [
  "四流合一 · 合规避税",
  "增收&降本双获益",
  "超额分享 & 股权分红",
];

const INDY_POINTS = [
  "免费体验 · 副业创收",
  "持续赋能 · 成长路径清晰",
];

const TIERS = [
  {
    name: "普通会员",
    rights: ["操作账号", "岗位分析", "基础功能优先体验"],
  },
  {
    name: "银卡会员",
    rights: ["评估账号", "薪酬对标", "岗位评估", "功能优先体验"],
  },
  {
    name: "金卡会员",
    rights: ["绩效分析", "AI 人才画像", "AI 选人标准", "功能优先体验"],
  },
  {
    name: "铂金会员",
    rights: ["组织盘点", "数据导出", "专属培训支持"],
  },
  {
    name: "钻石会员",
    rights: ["全功能权益", "联合市场活动", "专属顾问支持"],
  },
];

export default function PartnersPage() {
  return (
    <main className="flex flex-col">

      {/* A. HERO */}
      <section
        className="
          relative w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
          h-[72vh] min-h-[520px] overflow-hidden
        "
        aria-label="渠道合作伙伴计划"
      >
        {/* 背景图：商务合作/握手/团队会议，带科技感冷色调 */}
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="商务合作"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">
            渠道合作伙伴计划
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-3xl">
            多种合作模式 · 全链路赋能 · 共赢长效收益
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl font-semibold bg-white text-black hover:opacity-90 transition"
            >
              申请合作
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl font-semibold border border-white/70 text-white hover:bg-white/10 transition"
            >
              联系咨询
            </a>
          </div>
        </div>
      </section>

      {/* B. 四大亮点 - Cohere风格大图卡片 */}
      <ImageTiles />

      {/* C. 合作模式 */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 机构 */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-white">
            {/* 背景图：商务楼宇/团队规划 */}
            <img
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
              alt="机构合作"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative p-8">
              <h2 className="text-2xl font-bold text-gray-900">机构合作</h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                {ORG_POINTS.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-orange-600">●</span><span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 个人 */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-white">
            {/* 背景图：自由职业/学习培训/认证 */}
            <img
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
              alt="个人合作"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative p-8">
              <h2 className="text-2xl font-bold text-gray-900">个人合作</h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                {INDY_POINTS.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-600">●</span><span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* D. 会员分层（无价格） */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">会员制分层与权益</h2>
          <p className="text-center text-gray-600 mt-2">
            采取会员制，不同等级享受不同功能与赋能服务。页面不展示价格，详情请联系顾问。
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-gray-100 p-6 bg-gradient-to-b from-white to-gray-50 hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {t.rights.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <span className="mt-1 text-green-600">✓</span><span>{r}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs text-gray-500">更多权益请联系商务顾问</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. 招募大图 Callout */}
      <section className="relative w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] overflow-hidden">
        <div className="relative">
          {/* 背景图：AI + HR 主题、科技手臂/都市光影 */}
          <img
            src="/assets/pexels/partners-recruitment.jpg"
            alt="AI + HR 合作机遇"
            className="w-full h-[420px] md:h-[560px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 max-w-6xl mx-auto px-6 py-12 flex flex-col justify-end">
            <div className="max-w-2xl text-white">
              <h2 className="text-3xl font-extrabold">一起把握 AI + HR 的黄金机遇</h2>
              <p className="mt-2 text-white/90">
                面向人力专家、服务机构、创业者。总部提供培训 / 物料 / 交付全覆盖支持，携手拿下客户成功。
              </p>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-xl font-semibold bg-white text-black hover:opacity-90 transition"
                >
                  立即咨询 / 申请合作
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}