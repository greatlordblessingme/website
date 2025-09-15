"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 h-16" aria-label="返回首页">
            <img src="/brand/cube.png" alt="" className="h-10 w-auto object-contain"/>
            <img src="/brand/wordmark.png" alt="爱才神" className="h-10 w-auto object-contain"/>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                pathname === "/" 
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" 
                  : "text-white hover:text-orange-500"
              }`}
            >
              首页
            </Link>
            <Link 
              href="/solutions" 
              className={`font-medium transition-colors ${
                pathname === "/solutions" 
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" 
                  : "text-white hover:text-orange-500"
              }`}
            >
              解决方案
            </Link>
            <Link 
              href="/cases" 
              className={`font-medium transition-colors ${
                pathname === "/cases" 
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" 
                  : "text-white hover:text-orange-500"
              }`}
            >
              案例
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors ${
                pathname === "/about" 
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" 
                  : "text-white hover:text-orange-500"
              }`}
            >
              关于我们
            </Link>
            <Link 
              href="/partners" 
              className={`font-medium transition-colors ${
                pathname === "/partners" 
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" 
                  : "text-white hover:text-orange-500"
              }`}
            >
              渠道合作
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors ${
                pathname === "/contact" 
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" 
                  : "text-white hover:text-orange-500"
              }`}
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}