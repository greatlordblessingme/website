import Link from "next/link";
import { Phone, Mail, MapPin, QrCode } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">AI才神 | 爱才神</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              智曜魔方（杭州）科技有限公司，融合全球领先的 AI 技术与多年人力资源管理经验，
              为企业提供可落地的人力资源智能化方案。
            </p>
            <p className="text-sm text-gray-500">用 AI 重新定义 HR 价值</p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><Link href="/product" className="hover:text-orange-400 transition">产品功能</Link></li>
              <li><Link href="/solutions" className="hover:text-orange-400 transition">解决方案</Link></li>
              <li><Link href="/cases" className="hover:text-orange-400 transition">客户案例</Link></li>
              <li><Link href="/about" className="hover:text-orange-400 transition">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition">联系我们</Link></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">联系我们</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>400-6761-5288</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>dan.li@corecapitalchina.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-1" />
                <span className="text-sm">杭州市西湖区</span>
              </div>
            </div>
            
            {/* 二维码占位 */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <QrCode className="w-4 h-4 text-orange-400" />
                <span className="text-sm">扫码体验</span>
              </div>
              <div className="w-20 h-20 bg-gray-800 border-2 border-orange-400 rounded-lg flex items-center justify-center">
                <QrCode className="w-8 h-8 text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        {/* 底部分割线和版权信息 */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2025 智曜魔方（杭州）科技有限公司. 保留所有权利.
            </div>
            <div className="text-sm text-gray-500">
              备案号：浙ICP备XXXXXXXX号-1
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}