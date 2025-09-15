import data from "@/content/image-sources.json";

type Item = {
  use: string;
  local: string;       // /public 路径或外链
  sourceType: string;  // Pexels/external/unknown
  author?: string;
  pageUrl?: string;
  license?: string;
  status?: "todo" | "done";
};

export default function CreditsPage() {
  const items = (data as Item[]).sort((a, b) => (a.status === "todo" ? -1 : 1));
  return (
    <main className="mx-auto max-w-[1000px] px-6 py-16">
      <h1 className="text-3xl font-bold">Image Credits / 图片来源</h1>
      <p className="mt-2 text-slate-600">建议对 Pexels 作品注明作者与作品链接。</p>

      <ul className="mt-8 space-y-4">
        {items.map((it, idx) => (
          <li key={idx} className="rounded-xl border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-medium">{it.use || <span className="text-slate-400">（待填写使用位置）</span>}</div>
                <div className="text-sm text-slate-600 mt-1">
                  本地/链接：<code className="rounded bg-slate-100 px-1">{it.local}</code>
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  来源：{it.sourceType}
                  {it.sourceType === "Pexels" && it.author && it.pageUrl && (
                    <>
                      {" · "}Photo by{" "}
                      <a className="text-[#FF5A1F] underline" href={it.pageUrl} target="_blank">
                        {it.author}
                      </a>{" "}
                      on Pexels
                    </>
                  )}
                  {it.license && ` · ${it.license}`}
                </div>
              </div>
              <span className={`shrink-0 rounded-full px-2 py-1 text-xs ${it.status === "done" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-700"}`}>
                {it.status === "done" ? "DONE" : "TODO"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}