"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  company: string;
  title: string;
  need: string;
  agree: boolean;
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    company: "",
    title: "",
    need: "",
    agree: false,
  });

  const set = (k: keyof FormState) => (e: any) =>
    setForm((s) => ({ ...s, [k]: k === "agree" ? e.target.checked : e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "请填写姓名";
    if (!form.phone.trim()) return "请填写手机号";
    // 简单手机号校验（可按需放宽）
    if (!/^1[3-9]\d{9}$/.test(form.phone.trim())) return "手机号格式不正确";
    if (!form.company.trim()) return "请填写公司";
    if (!form.need.trim()) return "请简要描述你的需求";
    if (!form.agree) return "请勾选同意我们联系你";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(null);
    setErr(null);
    const v = validate();
    if (v) {
      setErr(v);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("网络异常");
      const data = await res.json();
      if (data?.ok) {
        setOk("提交成功，我们会尽快与您联系！");
        setForm({ name: "", phone: "", company: "", title: "", need: "", agree: false });
      } else {
        throw new Error("提交失败，请稍后重试");
      }
    } catch (e: any) {
      setErr(e.message || "提交失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-slate-800">
      {/* Hero：简短口号 */}
      <section className="relative h-[70vh] min-h-[520px] w-full">
        <img 
          src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
          alt="Contact Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-end px-6 pb-12">
          <div className="max-w-2xl rounded-2xl bg-white/80 p-6 backdrop-blur">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#FF5A1F]">联系我们</h1>
            <p className="mt-3 text-lg leading-8">
              无论您是甲方企业、渠道伙伴，还是正在评估 AI 如何重塑人力资源管理，
              我们都愿意与您深入交流，给出可落地的方案与演示。
            </p>
          </div>
        </div>
      </section>

      {/* Block 1：给潜在甲方 */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold text-[#FF5A1F]">为正在推进 HR 数智化的企业</h2>
          <p className="mt-4 text-[18px] leading-8">
            如果您正面临招聘难、薪酬不均、绩效无感、岗位价值不清等问题，
            我们的 <strong>AI 才神（爱才神）</strong> 平台可从
            <span className="whitespace-nowrap">岗位—选才—薪酬—绩效—合规—发展</span>
            全链路入手，给出可量化、可验证的改进路径与成效。
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg" 
            alt="Enterprise"
            className="h-[420px] w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      {/* Block 2：给渠道与合作伙伴 */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 pb-16 md:grid-cols-2">
        <div className="md:pr-8">
          <img 
            src="/assets/pexels/contact-partner.jpg" 
            alt="Partner"
            className="h-[420px] w-full rounded-3xl object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#FF5A1F]">为渠道与合作伙伴</h2>
          <p className="mt-4 text-[18px] leading-8">
            如果您在 HR 咨询、外包、培训、SaaS 或行业社群拥有客户资源，
            欢迎加入我们的联合增长计划：标准化产品 + 方案共创 + 市场物料 +
            售前陪同 + 商务激励，让 AI 价值更快触达您的客户。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-6 pb-4">
        <div className="rounded-3xl bg-[#FFF4EF] p-8">
          <h3 className="text-xl font-semibold">
            告诉我们您的场景，我们会在 1 个工作日内与您取得联系并安排演示
          </h3>
          <p className="mt-2 text-slate-600">
            也可拨打热线：<strong>400-6761-5288</strong>
          </p>
        </div>
      </section>

      {/* 表单 + 二维码 */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2">
          {/* 表单 */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-slate-50 p-6 shadow-sm space-y-4"
          >
            {ok && (
              <div className="p-3 rounded-lg bg-green-50 text-green-700 border border-green-200 text-sm">
                {ok}
              </div>
            )}
            {err && (
              <div className="p-3 rounded-lg bg-red-50 text-red-700 border border-red-200 text-sm">
                {err}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">姓名*</label>
              <input
                value={form.name}
                onChange={set("name")}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="请输入姓名"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">手机号*</label>
              <input
                value={form.phone}
                onChange={set("phone")}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="请输入手机号"
                inputMode="numeric"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">公司*</label>
                <input
                  value={form.company}
                  onChange={set("company")}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="请输入公司名称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">职位</label>
                <input
                  value={form.title}
                  onChange={set("title")}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="请输入职位"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">需求*</label>
              <textarea
                value={form.need}
                onChange={set("need")}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="请描述您的业务场景、关键诉求或演示安排"
              />
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={set("agree")}
                className="w-4 h-4 rounded border-gray-300"
              />
              我同意在必要范围内接收联系，信息仅用于演示与服务
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                loading
                  ? "bg-gray-300 text-gray-600"
                  : "bg-[#FF5A1F] text-white hover:opacity-90"
              }`}
            >
              {loading ? "提交中…" : "提交并预约演示"}
            </button>

            <p className="text-xs text-slate-500 text-center">
              提交即表示同意我们与您联系。信息仅用于演示与服务对接。
            </p>
          </form>

          {/* 侧栏：扫码/公司信息 */}
          <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-[#FF5A1F]">扫码立即体验</h4>
            <div className="mt-4 h-[260px] w-[260px] rounded-2xl border-4 border-[#FF5A1F] bg-white p-2">
              <img 
                src="/qrcode.png" 
                alt="二维码" 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mt-6 text-sm leading-7 text-slate-600">
              <p>电话：<strong>400-6761-5288</strong></p>
              <p>公司：智曜魔方（杭州）科技有限公司</p>
              <p>邮箱：dan.li@corecapitalchina.com</p>
              <p>地址：杭州市西湖区</p>
            </div>
          </div>
      </section>
    </main>
  );
}