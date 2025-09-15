import React from "react";

type Step = { id:number; title:string; desc:string; img:string; };

const steps: Step[] = [
  { id:1, title:"开通账号", desc:"为客户开设账号，7×24 小时访问系统。", img:"/images/downloaded/service-step-1.jpg" },
  { id:2, title:"上传材料", desc:"按系统指引上传相关多模态材料。",      img:"/images/downloaded/service-step-2.jpg" },
  { id:3, title:"自动匹配", desc:"AI 自动匹配相关数据与规则库。",        img:"/images/downloaded/service-step-3.jpg" },
  { id:4, title:"输出结果", desc:"生成并导出匹配数据结果与方案。",        img:"/images/downloaded/service-step-4.jpg" },
];

export default function ServiceFlow() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">服务流程</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.slice(0,4).map(c => (
            <article key={c.id}
              className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_8px_28px_rgba(16,24,40,0.08)] ring-1 ring-slate-200">
              {/* 顶部配图 */}
              <div className="relative h-44 w-full overflow-hidden">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="h-full w-full object-cover"
                  onError={(e) => { 
                    (e.currentTarget as HTMLImageElement).src = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"; 
                  }}
                />
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#FF5A1F] via-[#ff8759] to-[#ffd0bf]" />
                <span className="absolute left-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#FF5A1F] text-sm font-bold">
                  {c.id}
                </span>
              </div>

              {/* 文案 */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-slate-600">{c.desc}</p>
              </div>

              {/* 右下切角 + 箭头 */}
              <div className="absolute bottom-0 right-0 h-24 w-40">
                <div className="absolute -right-6 -bottom-10 h-40 w-40 rotate-[30deg] bg-slate-100" />
              </div>
              <span className="absolute bottom-4 right-5 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200">
                了解流程
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}