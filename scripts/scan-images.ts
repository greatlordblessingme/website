// ts-node scripts/scan-images.ts
import fs from "fs";
import path from "path";

// Define the Item interface
interface Item {
  use: string;
  local: string;
  sourceType: string;
  author: string;
  pageUrl: string;
  license: string;
  status: string;
}

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const SRC_DIRS = [path.join(ROOT, "app"), path.join(ROOT, "src"), path.join(ROOT, "pages")];
const OUT_DIR = path.join(ROOT, "content");
const OUT_FILE = path.join(OUT_DIR, "image-sources.json");

// 收集文件列表
function walk(dir: string, exts: string[], acc: string[] = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p, exts, acc);
    else if (exts.includes(path.extname(f).toLowerCase())) acc.push(p);
  }
  return acc;
}

const IMG_EXTS = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
const CODE_EXTS = [".tsx", ".ts", ".jsx", ".js", ".mdx", ".css"];

// 1) public 下的本地图片
const localImgs: Item[] = walk(PUBLIC_DIR, IMG_EXTS).map(p => ({
  use: "",
  local: p.replace(ROOT, "").replace(/\\/g, "/"),
  sourceType: "unknown",
  author: "",
  pageUrl: "",
  license: "",
  status: "todo",
}));

// 2) 代码里引用的图片与外链（含 Pexels）
const codeFiles = SRC_DIRS.flatMap(d => walk(d, CODE_EXTS));
const refs = new Set<string>();
const refRecords: { file: string; url: string }[] = [];

const SRC_REGEX = /(?:src|poster)\s*=\s*["'`]([^"'`]+?\.(?:png|jpg|jpeg|webp|svg))["'`]/gi;
const CSS_URL_REGEX = /url\(\s*["']?([^"')]+?\.(?:png|jpg|jpeg|webp|svg))["']?\s*\)/gi;

for (const file of codeFiles) {
  const content = fs.readFileSync(file, "utf8");
  let m: RegExpExecArray | null;

  // src/poster
  while ((m = SRC_REGEX.exec(content))) {
    const url = m[1];
    refs.add(url);
    refRecords.push({ file: file.replace(ROOT, "").replace(/\\/g, "/"), url });
  }
  // css url(...)
  while ((m = CSS_URL_REGEX.exec(content))) {
    const url = m[1];
    refs.add(url);
    refRecords.push({ file: file.replace(ROOT, "").replace(/\\/g, "/"), url });
  }
}

// 归一化：本地 -> /public 路径；外链保持原样
function normalizeLocal(u: string) {
  if (u.startsWith("http")) return u;
  if (u.startsWith("/")) return u; // 已是 /public 相对
  return "/" + u.replace(/^\.?\/*/, ""); // 例如 images/x.png -> /images/x.png
}

const referenced = Array.from(refs).map(u => normalizeLocal(u));

// 合并本地清单
const mapByLocal = new Map<string, Item>();
for (const it of localImgs) mapByLocal.set(it.local.replace("/public", ""), it);

// 若代码里引用到本地图片，则保留"引用路径"
const items: Item[] = [];
for (const r of referenced) {
  if (!r.startsWith("http")) {
    const key = r; // 形如 /images/xx.png
    const base: Item = mapByLocal.get(key) || {
      use: "",
      local: "/public" + key,
      sourceType: "unknown",
      author: "",
      pageUrl: "",
      license: "",
      status: "todo",
    };
    items.push(base);
  } else {
    // 外链（可能来自 Pexels CDN 或作品页）
    const entry: Item = {
      use: "",
      local: r,
      sourceType: r.includes("pexels") ? "Pexels" : "external",
      author: "",
      pageUrl: r.includes("pexels.com") ? r : "",
      license: r.includes("pexels") ? "Pexels License" : "",
      status: "todo",
    };
    items.push(entry);
  }
}

// 去重
function uniqBy<T>(arr: T[], keyFn: (x: T) => string): T[] {
  const m = new Map<string, T>();
  arr.forEach(x => m.set(keyFn(x), x));
  return Array.from(m.values());
}
let merged: Item[] = uniqBy([...localImgs, ...items], (x: Item) => x.local);

// 读入旧文件，合并人工已填字段
if (fs.existsSync(OUT_FILE)) {
  try {
    const old: Item[] = JSON.parse(fs.readFileSync(OUT_FILE, "utf8"));
    const oldMap = new Map(old.map((o: Item) => [o.local, o]));
    merged = merged.map(it => {
      const prev = oldMap.get(it.local);
      if (!prev) return it;
      return {
        ...it,
        use: prev.use || it.use,
        sourceType: prev.sourceType || it.sourceType,
        author: prev.author || it.author,
        pageUrl: prev.pageUrl || it.pageUrl,
        license: prev.license || it.license,
        status: prev.status || it.status,
      };
    });
  } catch {}
}

// 输出
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(merged, null, 2), "utf8");

// 控制台摘要
const todo = merged.filter(x => x.status !== "done");
console.log(`\n🧾 Image sources written to ${OUT_FILE}`);
console.log(`📌 Total: ${merged.length}, Pending: ${todo.length}\n`);
console.table(
  merged.map((x: Item) => ({
    local: x.local,
    source: x.sourceType,
    author: x.author || "-",
    pageUrl: x.pageUrl || "-",
    status: x.status || "todo",
  }))
);