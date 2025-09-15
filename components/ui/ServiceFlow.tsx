type Card = { 
  id: number; 
  title: string; 
  desc: string; 
  img: string; 
  href?: string; 
};

const cards: Card[] = [
  { id: 1, title: "开通账号", desc: "为客户开设账号，7×24 小时访问系统。", img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
  { id: 2, title: "上传材料", desc: "按系统指引上传相关多模态材料。", img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg" },
  { id: 3, title: "自动匹配", desc: "AI 自动匹配相关数据与规则库。", img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" },
  { id: 4, title: "输出结果", desc: "生成并导出匹配数据结果与方案。", img: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg" },
  { id: 5, title: "开通账号", desc: "为客户开设账号，7×24 小时访问系统。",
    img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg" 
  },
  { 
    id: 2, 
    title: "上传材料", 
    desc: "按系统指引上传相关多模态材料。", 
    img: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg" 
  },
  { 
    id: 3, 
    title: "自动匹配", 
    desc: "AI 自动匹配相关数据与规则库。", 
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
  },
  { 
    id: 4, 
    title: "输出结果", 
    desc: "生成并导出匹配数据结果与方案。", 
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg" 
  }
];

export default function ServiceFlow() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">服务流程</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map(c => (
            <a 
              key={c.id} 
              href={c.href || "#"} 
              className="
                group relative overflow-hidden rounded-[28px] bg-white shadow-[0_8px_28px_rgba(16,24,40,0.08)]
                ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(16,24,40,0.12)]
              "
            >
              {/* 顶部配图 */}
              <div className="relative h-44 w-full overflow-hidden">
                <img 
                  src={c.img} 
                  alt={`${c.title}示意图`} 
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                {/* 品牌渐变线 */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#FF5A1F] via-[#ff8759] to-[#ffd0bf]" />
                {/* 步骤编号 */}
                <span className="absolute left-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#FF5A1F] text-sm font-bold shadow-sm">
                  {c.id}
                </span>
              </div>

              {/* 文案区域 */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{c.desc}</p>
              </div>

              {/* 右下切角效果 */}
              <div className="absolute bottom-0 right-0 h-24 w-40 overflow-hidden">
                <div className="absolute -right-6 -bottom-10 h-40 w-40 rotate-[30deg] bg-slate-50/80" />
              </div>

              {/* 右下角箭头按钮 */}
              <span className="absolute bottom-4 right-5 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200 transition group-hover:translate-x-1 group-hover:bg-[#FF5A1F] group-hover:text-white group-hover:ring-[#FF5A1F]">
                了解流程
                <svg 
                  viewBox="0 0 24 24" 
                  className="h-4 w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}